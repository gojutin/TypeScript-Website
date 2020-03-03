(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5psB":function(e){e.exports=JSON.parse('{"_generated by":"node packages/typescriptlang-org/scripts/getTypeScriptNPMVersions.js","tags":{"stableMajMin":"3.8","stable":"3.8.3","betaMajMin":"3.8","beta":"3.8.0-beta","rc":"3.8.1-rc","rcMajMin":"3.8"},"isRC":false,"isBeta":true,"releaseNotesURL":"/docs/handbook/release-notes/typescript-3-8.html","betaPostURL":"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/","rcPostURL":"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-rc/","vs":{"stable":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta"},"beta":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta"},"rc":{"vs2017_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta","vs2019_download":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-38beta"}}}')},h2Md:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("ERkP"),l=a.n(n),r=a("9Dj+"),i=a("GO2c"),o=a("5psB"),s=a("vAyy"),c=function(e){return document.getElementById("code-example").textContent=e},p=function(e){return document.getElementById("code-run").textContent=e},u=function(e){var t=Object(s.a)(e.pageContext.lang,e.data.allSitePage);return l.a.createElement(r.a,{title:"How to set up TypeScript",description:"",lang:e.pageContext.lang,allSitePage:e.data.allSitePage},l.a.createElement("div",{className:"raised main-content-block"},l.a.createElement("h1",null,"Download TypeScript"),l.a.createElement("p",null,"TypeScript can installed through three installation routes depending on how you intend to use it: an npm module, a NuGet package or a Visual Studio Extension."),l.a.createElement("p",null,"If you are using Node.js, you want the npm version. If you are using MSBuild in your project, you want the NuGet package or Visual Studio extension.")),l.a.createElement("div",{className:"raised main-content-block"},l.a.createElement("h2",null,"TypeScript in Your Project"),l.a.createElement("p",null,"Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently."),l.a.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"250px"}},l.a.createElement("h3",null,"via npm"),l.a.createElement("p",null,"TypeScript is available as a ",l.a.createElement("a",{href:"https://www.npmjs.com/package/typescript"},"package on the npm registry")," available as ",l.a.createElement("code",null,'"typescript"'),"."),l.a.createElement("p",null,"You will need a copy of ",l.a.createElement("a",{href:"https://nodejs.org/en/"},"Node.js")," as an environment to run the package. Then you use a dependency manager like ",l.a.createElement("a",{href:"https://www.npmjs.com/"},"npm"),", ",l.a.createElement("a",{href:"https://yarnpkg.com/"},"yarn")," or ",l.a.createElement("a",{href:"https://pnpm.js.org/"},"pnpm")," to download TypeScript into your project."),l.a.createElement("div",null,l.a.createElement("code",{id:"code-example"},"npm install typescript --save-dev"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return c("npm install typescript --save-dev")}},"npm")," ",l.a.createElement("button",{onClick:function(){return c("yarn add typescript --dev")}},"yarn")," ",l.a.createElement("button",{onClick:function(){return c("pnpm add typescript -D")}},"pnpm")),l.a.createElement("p",null,"All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:"),l.a.createElement("div",null,l.a.createElement("code",{id:"code-run"},"npx tsc"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return p("npx tsc")}},"npm")," ",l.a.createElement("button",{onClick:function(){return p("yarn tsc")}},"yarn")," ",l.a.createElement("button",{onClick:function(){return p("pnpx tsc")}},"pnpm"))),l.a.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"250px"}},l.a.createElement("h3",null,"with Visual Studio"),l.a.createElement("p",null,"For most project types, you can get TypeScript as a package in Nuget for your MSBuild projects, for example an ASP.NET Core app."),l.a.createElement("p",null,"When using Nuget, you can ",l.a.createElement("a",{href:"https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-aspnet-with-typescript"},"install")," TypeScript through Visual Studio using:"),l.a.createElement("ul",null,l.a.createElement("li",null,"The Manage NuGet Packages window (which you can get to by right-clicking on a project node)"),l.a.createElement("li",{style:{marginTop:"20px"}},"The Nuget Package Manager Console (found in Tools > NuGet Package Manager > Package Manager Console) and then running:",l.a.createElement("br",null),l.a.createElement("code",{style:{fontSize:"14px"}},"Install-Package Microsoft.TypeScript.MSBuild"))),l.a.createElement("p",null,"For project types which don't support Nuget. You can use the ",l.a.createElement("a",{href:o.vs.stable.vs2019_download}," TypeScript Visual Studio extension"),". You can ",l.a.createElement("a",{href:"https://docs.microsoft.com/en-us/visualstudio/ide/finding-and-using-visual-studio-extensions?view=vs-2019"},"install")," the extension using ",l.a.createElement("code",null,"Extensions > Manage Extensions")," in Visual Studio.")))),l.a.createElement("div",{className:"main-content-block",style:{textAlign:"center"}},l.a.createElement("p",null,"The examples below are for more advanced use cases.")),l.a.createElement("div",{className:"raised main-content-block"},l.a.createElement("h2",null,"Globally Installing TypeScript"),l.a.createElement("p",null,"It can be handy to have TypeScript available across all projects, for example to test one-off ideas. Installing globally has the drawback of their only being a single version of TypeScript available."),l.a.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"250px"}},l.a.createElement("h3",null,"via npm"),l.a.createElement("p",null,"You can use npm to install TypeScript globally, this means you can use the ",l.a.createElement("code",null,"tsc")," command anywhere in your terminal."),l.a.createElement("p",null,"To do this, run ",l.a.createElement("code",null,"npm install -g typescript"),". This will install the latest version (currently ",o.tags.stableMajMin,")."),l.a.createElement("p",null,"An alternative is to use ",l.a.createElement("a",{href:"https://www.npmjs.com/package/npx"},"npx")," when you have to run ",l.a.createElement("code",null,"tsc")," for one-off occasions.")),l.a.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"250px"}},l.a.createElement("h3",null,"via Visual Studio Marketplace"),l.a.createElement("p",null,"You can install TypeScript as a Visual Studio extension, which will allow you to use TypeScript across many MSBuild projects in Visual Studio."),l.a.createElement("p",null,"The latest version is available ",l.a.createElement("a",{href:o.vs.stable.vs2019_download},"here"),".")))),l.a.createElement("div",{className:"raised main-content-block"},l.a.createElement("h2",null,"Working with TypeScript-compatible transpilers"),l.a.createElement("p",null,"There are other tools which convert TypeScript files to JavaScript files. You might use these tools for speed or consistency with your existing build tooling."),l.a.createElement("p",null,"Each of these projects handle the file conversion, but do not handle the type-checking aspects of the TypeScript compiler. So, it's likely you'll still need to keep the TypeScript dependency from above around, and you'll want to enable ",l.a.createElement(t,{to:"/tsconfig#isolatedModules"},l.a.createElement("code",null,"isolatedModules")),"."),l.a.createElement("section",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"20px"}},l.a.createElement("h3",null,"Babel"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://babeljs.io/"},"Babel")," is a very popular JavaScript transpiler which supports TypeScript files via the plugin ",l.a.createElement("a",{href:"https://babeljs.io/docs/en/babel-preset-typescript#docsNav"},"@babel/plugin-transform-typescript"),".")),l.a.createElement("div",{style:{borderRight:"1px lightgrey solid",padding:"1rem",flex:1,minWidth:"250px"}},l.a.createElement("h3",null,"swc"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://swc-project.github.io/docs/installation/"},"swc")," is a fast, transpiler created in Rust which supports many of Babel's features including TypeScript.")),l.a.createElement("div",{style:{padding:"1rem",flex:1,minWidth:"200px"}},l.a.createElement("h3",null,"Sucrase"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/alangpierce/sucrase#sucrase/"},"Sucrase")," is a Babel fork focused on speed for using in development mode. Sucrose supports TypeScript natively.")))))};t.default=function(e){return l.a.createElement(i.a,null,l.a.createElement(u,e))};var m="1062920899"}}]);
//# sourceMappingURL=component---src-templates-pages-download-tsx-fe92a8de1129baaee28b.js.map