import 'dart:async';
import 'dart:io' as io;

import 'package:dart_frog_cli/src/command.dart';
import 'package:dart_frog_cli/src/commands/commands.dart';
import 'package:dart_frog_cli/src/commands/dev/templates/dart_frog_dev_server_bundle.dart';
import 'package:dart_frog_cli/src/dev_server_runner/dev_server_runner.dart';
import 'package:dart_frog_cli/src/runtime_compatibility.dart'
    as runtime_compatibility;
import 'package:mason/mason.dart';

/// {@template dev_command}
/// `dart_frog dev` command which starts the dev server`.
/// {@endtemplate}
class DevCommand extends DartFrogCommand {
  /// {@macro dev_command}
  DevCommand({
    super.logger,
    GeneratorBuilder? generator,
    DevServerRunnerBuilder? devServerRunnerBuilder,
    runtime_compatibility.RuntimeCompatibilityCallback?
        ensureRuntimeCompatibility,
  })  : _ensureRuntimeCompatibility = ensureRuntimeCompatibility ??
            runtime_compatibility.ensureRuntimeCompatibility,
        _generator = generator ?? MasonGenerator.fromBundle,
        _devServerRunnerBuilder =
            devServerRunnerBuilder ?? DevServerRunner.new {
    argParser
      ..addOption(
        'port',
        abbr: 'p',
        defaultsTo: '8080',
        help: 'Which port number the server should start on.',
      )
      ..addOption(
        'dart-vm-service-port',
        abbr: 'd',
        defaultsTo: _defaultDartVmServicePort,
        help: 'Which port number the dart vm service should listen on.',
      );
  }

  static const _defaultDartVmServicePort = '8181';

  final GeneratorBuilder _generator;
  final DevServerRunnerBuilder _devServerRunnerBuilder;
  final runtime_compatibility.RuntimeCompatibilityCallback
      _ensureRuntimeCompatibility;

  @override
  final String description = 'Run a local development server.';

  @override
  final String name = 'dev';

  StreamSubscription<List<int>>? _stdinSubscription;

  late final DevServerRunner _devServerRunner;

  void _startListeningForHelpers() {
    if (_stdinSubscription != null) return;
    if (!stdin.hasTerminal) return;

    // listen for the R key
    stdin
      ..echoMode = false
      ..lineMode = false;

    _stdinSubscription = stdin.listen(
      (event) {
        if (event.length == 1 &&
            (event.first == 'R'.codeUnitAt(0) ||
                event.first == 'r'.codeUnitAt(0))) {
          _devServerRunner.reload();
        }
      },
      onError: (dynamic error) {
        logger.err(error.toString());
        _stopListeningForHelpers();
      },
      cancelOnError: true,
      onDone: _stopListeningForHelpers,
    );

    logger.info('Press either R or r to reload');
  }

  void _stopListeningForHelpers() {
    _stdinSubscription?.cancel();
    _stdinSubscription = null;

    // The command may lose terminal after sigint, even though
    // the stdin subscription may have been created when the
    // devserver started.
    // That is why this check is made after the subscription
    // is canceled, if existent.
    if (!stdin.hasTerminal) return;

    stdin
      ..lineMode = true
      ..echoMode = true;
  }

  @override
  Future<int> run() async {
    _ensureRuntimeCompatibility(cwd);

    final port = io.Platform.environment['PORT'] ?? results['port'] as String;
    final dartVmServicePort = (results['dart-vm-service-port'] as String?) ??
        _defaultDartVmServicePort;
    final generator = await _generator(dartFrogDevServerBundle);

    _devServerRunner = _devServerRunnerBuilder(
      devServerBundleGenerator: generator,
      logger: logger,
      workingDirectory: cwd,
      port: port,
      dartVmServicePort: dartVmServicePort,
      onHotReloadEnabled: _startListeningForHelpers,
    );

    try {
      await _devServerRunner.start();
      return (await _devServerRunner.exitCode).code;
    } catch (e) {
      logger.err(e.toString());
      return ExitCode.software.code;
    } finally {
      _stopListeningForHelpers();
    }
  }
}
