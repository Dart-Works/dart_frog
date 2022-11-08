"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[179],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1},l="Routes \ud83d\ude8f",d={unversionedId:"basics/routes",id:"basics/routes",title:"Routes \ud83d\ude8f",description:"Overview \u2728",source:"@site/docs/basics/routes.md",sourceDirName:"basics",slug:"/basics/routes",permalink:"/docs/basics/routes",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/basics/routes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Basics",permalink:"/docs/category/basics"},next:{title:"Middleware \ud83c\udf54",permalink:"/docs/basics/middleware"}},p={},u=[{value:"Overview \u2728",id:"overview-",level:2},{value:"Requests \ud83d\udce5",id:"requests-",level:2},{value:"Request Context",id:"request-context",level:3},{value:"HTTP Method",id:"http-method",level:3},{value:"Headers",id:"headers",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Body",id:"body",level:3},{value:"Responses \ud83d\udce4",id:"responses-",level:2},{value:"Status Code",id:"status-code",level:3},{value:"Headers",id:"headers-1",level:3},{value:"Body",id:"body-1",level:3},{value:"Dynamic Routes \ud83c\udf13",id:"dynamic-routes-",level:2},{value:"Route Conflicts \ud83d\udca5",id:"route-conflicts-",level:2},{value:"Rogue Routes \ud83e\udd77",id:"rogue-routes-",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routes-"},"Routes \ud83d\ude8f"),(0,o.kt)("h2",{id:"overview-"},"Overview \u2728"),(0,o.kt)("p",null,"In Dart Frog, a route consists of an ",(0,o.kt)("inlineCode",{parentName:"p"},"onRequest")," function (called a route handler) exported from a ",(0,o.kt)("inlineCode",{parentName:"p"},".dart")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," directory. Each endpoint is associated with a routes file based on its file name. Files named, ",(0,o.kt)("inlineCode",{parentName:"p"},"index.dart")," will correspond to a ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," endpoint."),(0,o.kt)("p",null,"For example, if you create ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/hello.dart")," that exports an ",(0,o.kt)("inlineCode",{parentName:"p"},"onRequest")," method like below, it will be accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response(body: 'Hello World');\n}\n")),(0,o.kt)("h2",{id:"requests-"},"Requests \ud83d\udce5"),(0,o.kt)("p",null,"All route handlers have access to information regarding the inbound request. In this section, we'll take a look at various ways in which we can interact with the inbound request."),(0,o.kt)("h3",{id:"request-context"},"Request Context"),(0,o.kt)("p",null,"All route handlers have access to a ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestContext")," which can be used to access the incoming request as well as dependencies provided to the request context (",(0,o.kt)("a",{parentName:"p",href:"/docs/basics/middleware"},"see middleware"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  // Access the incoming request.\n  final request = context.request;\n\n  // Do stuff with the incoming request...\n\n  // Return a response.\n  return Response(body: 'Hello World');\n}\n")),(0,o.kt)("h3",{id:"http-method"},"HTTP Method"),(0,o.kt)("p",null,"A single route handler is responsible for handling inbound requests with any HTTP method. The HTTP method of the inbound request can be accessed via ",(0,o.kt)("inlineCode",{parentName:"p"},"context.request.method"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  // Access the incoming request.\n  final request = context.request;\n\n  // Access the HTTP method.\n  final method = request.method.value;\n\n  return Response(body: 'This is a $method request.');\n}\n")),(0,o.kt)("p",null,"We can make a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to the above handler and we should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request GET --url http://localhost:8080\n\nThis is a GET request.\n")),(0,o.kt)("p",null,"We can make a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to the above handler and we should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request POST --url http://localhost:8080\n\nThis is a POST request.\n")),(0,o.kt)("h3",{id:"headers"},"Headers"),(0,o.kt)("p",null,"We can access request headers via ",(0,o.kt)("inlineCode",{parentName:"p"},"context.request.headers"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  // Access the incoming request.\n  final request = context.request;\n\n  // Access the headers as a `Map<String, String>`.\n  final headers = request.headers;\n\n  // Do something with the headers...\n\n  return Response(body: 'Hello World');\n}\n")),(0,o.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,o.kt)("p",null,"We can access query parameters via ",(0,o.kt)("inlineCode",{parentName:"p"},"context.request.uri.queryParameters"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  // Access the incoming request.\n  final request = context.request;\n\n  // Access the query parameters as a `Map<String, String>`.\n  final params = request.uri.queryParameters;\n\n  // Get the value for the key `name`.\n  // Default to `there` if there is no query parameter.\n  final name = params['name'] ?? 'there';\n\n  return Response(body: 'Hi $name');\n}\n")),(0,o.kt)("p",null,"We can make a request to the above handler with no query parameters and we should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request GET --url http://localhost:8080\n\nHi there\n")),(0,o.kt)("p",null,"We can make a another request to the above handler with ",(0,o.kt)("inlineCode",{parentName:"p"},"?name=Dash")," and we should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request GET --url http://localhost:8080?name=Dash\n\nHi Dash\n")),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,"We can access the body of the incoming request via ",(0,o.kt)("inlineCode",{parentName:"p"},"context.request.body"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) async {\n  // Access the incoming request.\n  final request = context.request;\n\n  // Access the request body as a `String`.\n  final body = await request.body();\n\n  return Response(body: 'The body is \"$body\".');\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The request body can only be read once.")),(0,o.kt)("p",null,"We can make a request to the above handler with some data and we should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request POST \\\n  --url http://localhost:8080 \\\n  --header 'Content-Type: text/plain' \\\n  --data 'Hello!'\n\nThe body is \"Hello!\".\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"context.request.json()")," to read the contents of the request body as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, dynamic>"),".")),(0,o.kt)("h2",{id:"responses-"},"Responses \ud83d\udce4"),(0,o.kt)("p",null,"All route handlers must return an outbound response. In this section, we'll take a look at various ways in which we can create a custom response."),(0,o.kt)("h3",{id:"status-code"},"Status Code"),(0,o.kt)("p",null,"We can customize the status code of the response via the ",(0,o.kt)("inlineCode",{parentName:"p"},"statusCode")," parameter on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response(statusCode: 204);\n}\n")),(0,o.kt)("h3",{id:"headers-1"},"Headers"),(0,o.kt)("p",null,"We can customize the headers of the response via the ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," parameter on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response(headers: {'hello': 'world'});\n}\n")),(0,o.kt)("h3",{id:"body-1"},"Body"),(0,o.kt)("p",null,"We've seen examples of returning a custom body via the default ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response(body: 'Hello World');\n}\n")),(0,o.kt)("p",null,"In addition, we can return JSON via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response.json")," constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response.json(\n    body: <String, dynamic>{'hello': 'world!'},\n  );\n}\n")),(0,o.kt)("p",null,"We can also return any Dart object in the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response.json")," constructor and it will be serialized correctly as long as it has a ",(0,o.kt)("inlineCode",{parentName:"p"},"toJson")," method that returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, dynamic>"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/json_serializable"},(0,o.kt)("inlineCode",{parentName:"a"},"json_serializable"))," to automate the ",(0,o.kt)("inlineCode",{parentName:"p"},"toJson")," generation.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"json_serializable")," uses ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/build_runner"},(0,o.kt)("inlineCode",{parentName:"a"},"build_runner"))," which expects code to be within the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," directory. In order for the code generation step to work, make sure the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model below is located somewhere within the top level ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," directory."),(0,o.kt)("p",{parentName:"admonition"},"For example:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 models\n\u2502       \u2514\u2500\u2500 user.dart\n\u2514\u2500\u2500 routes\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:json_annotation/json_annotation.dart';\n\npart 'user.g.dart';\n\n@JsonSerializable()\nclass User {\n  const User({required this.name, required this.age});\n\n  final String name;\n  final int age;\n\n  Map<String, dynamic> toJson() => _$UserToJson(this);\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response.json(\n    body: User(name: 'Dash', age: 42),\n  );\n}\n")),(0,o.kt)("p",null,"Route handlers can be synchronous or asynchronous. To convert the above route handlers to async, we just need to update the return type from ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Future<Response>"),". We can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," keyword in order to ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," futures within our handler before returning a ",(0,o.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) async {\n  final result = await _someFuture();\n  return Response(body: 'Result is: $result!');\n}\n")),(0,o.kt)("h2",{id:"dynamic-routes-"},"Dynamic Routes \ud83c\udf13"),(0,o.kt)("p",null,"Dart Frog supports dynamic routes. For example, if you create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/posts/[id].dart"),", then it will be accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/2"),", etc."),(0,o.kt)("p",null,"Routing parameters are forwarded to the ",(0,o.kt)("inlineCode",{parentName:"p"},"onRequest")," method as seen below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context, String id) {\n  return Response(body: 'post id: $id');\n}\n")),(0,o.kt)("h2",{id:"route-conflicts-"},"Route Conflicts \ud83d\udca5"),(0,o.kt)("p",null,"When defining routes, it's possible to encounter route conflicts."),(0,o.kt)("p",null,"A route conflict occurs when more than one route handler resolves to the same endpoint."),(0,o.kt)("p",null,"For example, given the following file structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.dart\n\u2502\xa0\xa0 \u2514\u2500\u2500 api.dart\n")),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/api/index.dart")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/api.dart")," resolve the the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api")," endpoint."),(0,o.kt)("p",null,"When running the development server via ",(0,o.kt)("inlineCode",{parentName:"p"},"dart_frog dev"),", Dart Frog will report route conflicts while the development server is running. You can resolve the conflicts and hot reload will allow you to continue development without having to restart the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[hotreload] - Application reloaded.\n\nRoute conflict detected. `routes/api.dart` and `routes/api/index.dart` both resolve to `/api`.\n")),(0,o.kt)("p",null,"When generating a production build via ",(0,o.kt)("inlineCode",{parentName:"p"},"dart_frog build"),", Dart Frog will report all detected route conflicts and fail the build if one or more route conflicts are detected."),(0,o.kt)("h2",{id:"rogue-routes-"},"Rogue Routes \ud83e\udd77"),(0,o.kt)("p",null,"Similar to route conflicts, it's also possible to run into rogue routes when working with Dart Frog."),(0,o.kt)("p",null,"A route is considered rogue when it is defined outside of an existing subdirectory with the same name."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 api\n\u2502   \u2502   \u2514\u2500\u2500 example.dart\n\u2502   \u251c\u2500\u2500 api.dart\n")),(0,o.kt)("p",null,"In the above scenario, ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/api.dart")," is rogue because it is defined outside of the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," directory."),(0,o.kt)("p",null,"To correct this, ",(0,o.kt)("inlineCode",{parentName:"p"},"api.dart")," should be renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"index.dart")," and placed within the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," directory like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 api\n\u2502   \u2502   \u251c\u2500\u2500 example.dart\n\u2502   \u2502   \u2514\u2500\u2500 index.dart\n")),(0,o.kt)("p",null,"When running the development server via ",(0,o.kt)("inlineCode",{parentName:"p"},"dart_frog dev"),", Dart Frog will report rogue routes while the development server is running. You can resolve the issues and hot reload will allow you to continue development without having to restart the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[hotreload] - Application reloaded.\n\nRogue route detected. `routes/api.dart` should be renamed to `routes/api/index.dart`.\n")),(0,o.kt)("p",null,"When generating a production build via ",(0,o.kt)("inlineCode",{parentName:"p"},"dart_frog build"),", Dart Frog will report all detected rogue routes and fail the build if one or more rogue routes are detected."))}m.isMDXComponent=!0}}]);