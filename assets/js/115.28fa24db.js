(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{632:function(t,s,a){"use strict";a.r(s);var n=a(53),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模块机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块机制"}},[t._v("#")]),t._v(" 模块机制")]),t._v(" "),a("p",[t._v("JavaScript 模块加载类型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("CommonJS: 显著的特点就是模块是加载是同步的，就目前来说，受限于宽带速度，并不适用于浏览器中的 JavaScript，NodeJS 用的就是这种")])]),t._v(" "),a("li",[a("p",[t._v('AMD: "异步模块定义"，它采用异步方式加载模块，模块的加载不影响它后面语句的运行。依赖这个模块的代码定义在一个回调函数中，\n等到加载完成之后，这个回调函数才会运行。RequestJS 就是 AMD规范的一种实现')])])]),t._v(" "),a("p",[t._v("Node 模块管理是使用的 CommonJS 规范")]),t._v(" "),a("h2",{attrs:{id:"模块引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块引入"}},[t._v("#")]),t._v(" 模块引入")]),t._v(" "),a("p",[t._v("在 Node 引入模块时，需要经过三个步骤：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("解析路径")])]),t._v(" "),a("li",[a("p",[t._v("文件定位")])]),t._v(" "),a("li",[a("p",[t._v("编译执行")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ol",[a("li",[t._v("node 对引入过的模块都会缓存处理，下次再引用相同模块将会从缓存中直接获取，这种缓存是基于文件路径定位的，这表示即使两个相同的文件，但它们位于不同的路径下，也会缓存维持两份")]),t._v(" "),a("li",[t._v("要注意的是 node 缓存的不是文件路径而是模块编译和执行后的结果")])])]),t._v(" "),a("h3",{attrs:{id:"解析路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析路径"}},[t._v("#")]),t._v(" 解析路径")]),t._v(" "),a("p",[t._v("node 根据模块类型的不同将使用不同的解析方法，模块类型大致分为三种：内置模块、自己定义模块、第三方模块")]),t._v(" "),a("p",[a("strong",[t._v("内置模块")])]),t._v(" "),a("p",[t._v("内置模块如 "),a("code",[t._v("http")]),t._v("、"),a("code",[t._v("path")]),t._v(" 等模块在 Node 源代码编译已经被编译成了二进制代码，所以其加载速度最后")]),t._v(" "),a("p",[a("strong",[t._v("自定义模块")])]),t._v(" "),a("p",[t._v("自定义模块就是项目中自己编写的模块，加载这类模块往往需要我们在模块名添加相对路径或绝对路径")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" utils "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./utils/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("第三方模块")])]),t._v(" "),a("p",[t._v("一般是指我们使用 "),a("code",[t._v("npm/yarn")]),t._v(" 下载到的模块，这类模块会被下载到 "),a("code",[t._v("node_modeuls")]),t._v(" 目录，项目中加载这类的模块时也不需要我们添加具体路径，因为 node 默认会从当前文件所在路径开始不断寻找 "),a("code",[t._v("node_modeuls")]),t._v(" 文件夹，再从 "),a("code",[t._v("node_modeuls")]),t._v(" 文件夹找对应的模块")]),t._v(" "),a("h3",{attrs:{id:"文件定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件定位"}},[t._v("#")]),t._v(" 文件定位")]),t._v(" "),a("p",[t._v("经过路径解析就可以找到对应的模块文件了，但是回想一下平时引入的模块的时候有两个细节：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("不需要指时具体的文件扩展名")]),t._v(" "),a("p",[t._v("这是因为 Node 会按 "),a("code",[t._v(".js")]),t._v("，"),a("code",[t._v(".json")]),t._v(", "),a("code",[t._v(".node")]),t._v(" 的次序补充扩展名，依次尝试")])]),t._v(" "),a("li",[a("p",[t._v("即使我们引用的模块名刚好只到目录名的程度， Node 也可以正确找到可执行的模块文件")]),t._v(" "),a("p",[t._v("这是因为当 Node 找到与模块名相同的目录时，会在当前目录下查找 "),a("code",[t._v("package.json")]),t._v(" 文件，然后通过 "),a("code",[t._v("JSON.parse()")]),t._v(" 解析描述对象，再从中取出 "),a("code",[t._v("main")]),t._v(" 字段，根据 "),a("code",[t._v("main")]),t._v(" 字段来定位最终的文件名")]),t._v(" "),a("p",[t._v("如果缺少 "),a("code",[t._v("main")]),t._v(" 字段，或者 "),a("code",[t._v("main")]),t._v(" 指定的文件名错误又或者没有 "),a("code",[t._v("package.json")]),t._v(" 文件，那么 Node 会将 "),a("code",[t._v("index")]),t._v(" 当做默认的文件名，也就是会尝试依次查找 "),a("code",[t._v("index.js")]),t._v("、"),a("code",[t._v("index.json")]),t._v("、"),a("code",[t._v("index.node")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("虽然 Node 会默认补充扩展名，但是 Node 在尝试加载的过程中都需要调用 "),a("code",[t._v("fs")]),t._v(" 模块同步阻塞式得判断文件是否存在，所以在加载非 "),a("code",[t._v(".js")]),t._v(" 的模块时，最好还是加上具体的扩展名，可以提高一点加载速度")])]),t._v(" "),a("h3",{attrs:{id:"模块编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块编译"}},[t._v("#")]),t._v(" 模块编译")]),t._v(" "),a("p",[t._v("看下面模块代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在编写 Node 模块时，我们可以使用 "),a("code",[t._v("requre")]),t._v("、"),a("code",[t._v("exports")]),t._v("、"),a("code",[t._v("__dirname")]),t._v("、"),a("code",[t._v("__filename")]),t._v(" 等方法和变量，这么方法和变量是从哪来的？")]),t._v(" "),a("p",[t._v("事实上在编译的过程中，Node 对模块代码进行包装，例子上面的例子将转变成以下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reuiqre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reuiqre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("通过这样方式传递了内置的方法和变量，同时实现了模块之间的相互隔离")]),t._v(" "),a("h2",{attrs:{id:"require的隐患"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require的隐患"}},[t._v("#")]),t._v(" require的隐患")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("require")]),t._v("加载一个模块时，模块内部的代码都会被调用，有时候这可能会带来隐藏的 "),a("code",[t._v("bug")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exoprts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" test\n")])])]),a("p",[t._v("当 "),a("code",[t._v("require")]),t._v(" 这个文件的时候，模块内的定时器将被运行")]),t._v(" "),a("h2",{attrs:{id:"模块化和作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化和作用域"}},[t._v("#")]),t._v(" 模块化和作用域")]),t._v(" "),a("p",[t._v("模块中的 "),a("code",[t._v("this")]),t._v(" 指向 "),a("code",[t._v("module.exports")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 10 }")]),t._v("\n")])])]),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),a("p",[a("strong",[t._v("为什么Node中，"),a("code",[t._v("request()")]),t._v("加载模块是同步而非异步？")])]),t._v(" "),a("p",[t._v("么有标准答案")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Node 会自动缓存加载过的模块，而且本地IO开销几乎可以忽略")])]),t._v(" "),a("li",[a("p",[t._v("Node 程序运行在服务端，很少频繁的重启，同步加模块也花不了多少时间")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);