(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{678:function(e,t,s){"use strict";s.r(t);var a=s(55),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"esbuild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esbuild"}},[e._v("#")]),e._v(" esbuild")]),e._v(" "),s("p",[e._v("先简单了解一下 esbuild 是个啥")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.breword.com/evanw-esbuild/",target:"_blank",rel:"noopener noreferrer"}},[e._v("esbuild"),s("OutboundLink")],1),e._v("官方描述的作用就是：一个JavaScript的打包和和压缩工具")]),e._v(" "),s("p",[e._v("esbuild使用golang开发，在打包的速度上非常快，vite在dev模式下就是使用 esbuild 进行打包")]),e._v(" "),s("p",[s("strong",[e._v("esbuild的主要特征")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("在没有缓存的情况也能有极致的性能")])]),e._v(" "),s("li",[s("p",[e._v("支持ES6的Tree shaking")])]),e._v(" "),s("li",[s("p",[e._v("原生支持typescript和jsx打包")])]),e._v(" "),s("li",[s("p",[e._v("支持Source Map")])]),e._v(" "),s("li",[s("p",[e._v("代码压缩")])]),e._v(" "),s("li",[s("p",[e._v("支持定义插件")])]),e._v(" "),s("li",[s("p",[e._v("其它等等")])])]),e._v(" "),s("h2",{attrs:{id:"集成webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成webpack"}},[e._v("#")]),e._v(" 集成webpack")]),e._v(" "),s("p",[e._v("有一个相对较新的项目叫"),s("a",{attrs:{href:"https://github.com/privatenumber/esbuild-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("esbuild-loader"),s("OutboundLink")],1),e._v("。由hiroki osame开发，"),s("code",[e._v("esbuild-loader")]),e._v(" 是一个建立在 esbuild 之上的webpack加载器。它允许用户用自己来替换 "),s("code",[e._v("ts-loader")]),e._v(" 或 "),s("code",[e._v("babel-loader")]),e._v(" ，这极大地提高了构建速度")]),e._v(" "),s("h3",{attrs:{id:"将一个现有的项目迁移到esbuild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将一个现有的项目迁移到esbuild"}},[e._v("#")]),e._v(" 将一个现有的项目迁移到esbuild")]),e._v(" "),s("p",[e._v("安装 esbuild-loader： "),s("code",[e._v("npm i -D esbuild-loader")])]),e._v(" "),s("p",[s("code",[e._v("webpack.config.js")]),e._v(" 修改 "),s("code",[e._v("babel-loader")]),e._v(" 的使用")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  module.exports = {\n    module: {\n      rules: [\n-       {\n-         test: /\\.js$/,\n-         use: 'babel-loader',\n-       },\n+       {\n+         test: /\\.js$/,\n+         loader: 'esbuild-loader',\n+         options: {\n+           loader: 'jsx',  // Remove this if you're not using JSX\n+           target: 'es2015'  // Syntax to compile to (see options below for possible values)\n+         }\n+       },\n\n        ...\n      ],\n    },\n  }\n\n")])])]),s("p",[e._v("如果有使用 "),s("code",[e._v("ts-loader")]),e._v(" ，做如下修改")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  module.exports = {\n    module: {\n      rules: [\n-       {\n-         test: /\\.tsx?$/,\n-         use: 'ts-loader'\n-       },\n+       {\n+         test: /\\.tsx?$/,\n+         loader: 'esbuild-loader',\n+         options: {\n+           loader: 'tsx',  // Or 'ts' if you don't need tsx\n+           target: 'es2015'\n+         }\n+       },\n\n        ...\n      ]\n    },\n  }\n\n")])])]),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6977183266986000414",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack或esbuild。为什么不同时进行呢"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);