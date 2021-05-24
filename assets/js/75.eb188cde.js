(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{588:function(t,a,s){"use strict";s.r(a);var v=s(53),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"svg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[t._v("#")]),t._v(" SVG")]),t._v(" "),s("p",[t._v("SVG 即可缩放矢量图形")]),t._v(" "),s("p",[t._v("SVG元素："),s("code",[t._v("圆形")]),t._v(", "),s("code",[t._v("矩形")]),t._v(", "),s("code",[t._v("曲线")])]),t._v(" "),s("p",[t._v("一个简单的SVG文档由"),s("code",[t._v("<svg>")]),t._v("根元素和基本的形状元素构成。另外还有一个"),s("code",[t._v("g元素")]),t._v("，它用来把若干个基本形状编成一个组")]),t._v(" "),s("p",[t._v("绘制SVG要注意几点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("SVG是一种"),s("code",[t._v("XML")]),t._v("语言, SVG的元素和属性必须按标准格式书写，因为XML是区分大小写的（这一点和html不同）")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("XML")]),t._v("语言里的属性值必须用引号引起来，就算是数值也必须这样做")])]),t._v(" "),s("li",[s("p",[t._v("SVG的渲染顺序是“后来居上”，越后面的元素越可见")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("g")]),t._v(" 包含的子元素如果使用 "),s("code",[t._v("transform")]),t._v(" (无论是属性还是"),s("code",[t._v("style")]),t._v("设置的)，"),s("code",[t._v("g")]),t._v(" 的大小将被受影响")])]),t._v(" "),s("li",[s("p",[t._v("SVG的使用方式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果HTML是XHTML并且声明类型为"),s("code",[t._v("application/xhtml+xml")]),t._v("，可以直接把SVG嵌入到XML源码中")])]),t._v(" "),s("li",[s("p",[t._v("如果HTML是HTML5并且浏览器支持HTML5，同样可以直接嵌入SVG。然而为了符合HTML5标准，可能需要做一些语法调整")])]),t._v(" "),s("li",[s("p",[t._v("可以通过 object 元素引用SVG文件："),s("code",[t._v('<object data="image.svg" type="image/svg+xml" />')])])]),t._v(" "),s("li",[s("p",[t._v("类似的也可以使用 "),s("code",[t._v("iframe")]),t._v(" 元素引用SVG文件："),s("code",[t._v('<iframe src="image.svg"></iframe>')])])]),t._v(" "),s("li",[s("p",[t._v("理论上同样可以使用 img 元素，但是在低于4.0版本的Firefox 中不起作用")])]),t._v(" "),s("li",[s("p",[t._v("最后SVG可以通过JavaScript动态创建并注入到HTML DOM中。 这样具有一个优点，可以对浏览器使用替代技术，在不能解析SVG的情况下，可以替换创建的内容。")])])])])]),t._v(" "),s("p",[t._v("简单例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo.svg")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("svg version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1"')]),t._v("\n     baseProfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full"')]),t._v("\n     width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300"')]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200"')]),t._v("\n     xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.w3.org/2000/svg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rect width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100%"')]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100%"')]),t._v(" fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("circle cx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"150"')]),t._v(" cy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"80"')]),t._v(" fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"green"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("text x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"150"')]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"125"')]),t._v(" font"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"60"')]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("anchor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"middle"')]),t._v(" fill"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"white"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SVG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("svg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"svg-元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg-元素"}},[t._v("#")]),t._v(" SVG 元素")]),t._v(" "),s("h3",{attrs:{id:"react-矩形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-矩形"}},[t._v("#")]),t._v(" react-矩形")]),t._v(" "),s("p",[s("code",[t._v('<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>')])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("x")]),t._v(": 矩形左上角的"),s("code",[t._v("x位置")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("y")]),t._v(": 矩形左上角的"),s("code",[t._v("y位置")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("width")]),t._v(": 矩形的宽度")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("height")]),t._v(": 矩形的高度")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("rx")]),t._v(": 圆角的"),s("code",[t._v("x方位")]),t._v("的半径")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ry")]),t._v(": 圆角的"),s("code",[t._v("i方位")]),t._v("的半径")])])]),t._v(" "),s("h3",{attrs:{id:"circle-圆形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#circle-圆形"}},[t._v("#")]),t._v(" circle-圆形")]),t._v(" "),s("p",[s("code",[t._v('<circle cx="25" cy="75" r="20"/>')])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("r")]),t._v(": 圆的半径")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("cx")]),t._v(": 圆心的x位置")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("cy")]),t._v(": 圆心的y位置")])])]),t._v(" "),s("h3",{attrs:{id:"ellipse-椭圆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ellipse-椭圆"}},[t._v("#")]),t._v(" Ellipse-椭圆")]),t._v(" "),s("p",[t._v("Ellipse 给制椭圆")]),t._v(" "),s("p",[s("code",[t._v('<ellipse cx="75" cy="75" rx="20" ry="5"/>')])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("rx")]),t._v(": 椭圆的x半径")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ry")]),t._v(": 椭圆的y半径")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("cx")]),t._v(": 椭圆中心的x位置")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("cy")]),t._v(": 椭圆中心的y位置")])])]),t._v(" "),s("h3",{attrs:{id:"line-线条"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#line-线条"}},[t._v("#")]),t._v(" line-线条")]),t._v(" "),s("p",[t._v("Line 绘制直线。它取两个点的位置作为属性，指定这条线的起点和终点位置。")]),t._v(" "),s("p",[s("code",[t._v('<line x1="10" x2="50" y1="110" y2="150"/>')])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("x1")]),t._v(": 起点的x位置")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("y1")]),t._v(": 起点的y位置")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("x2")]),t._v(": 终点的x位置")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("y2")]),t._v(": 终点的y位置")])])]),t._v(" "),s("h3",{attrs:{id:"polyline-折线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polyline-折线"}},[t._v("#")]),t._v(" polyline-折线")]),t._v(" "),s("p",[t._v("Polyline是一组连接在一起的直线。因为它可以有很多的点，折线的的所有点位置都放在一个points属性中：")]),t._v(" "),s("p",[s("code",[t._v('<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>')])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("points")]),t._v(":点集数列。每个数字用空白、逗号、终止命令符或者换行符分隔开。每个点必须包含2个数字，一个是x坐标，一个是y坐标。\n所以点列表 "),s("code",[t._v("(0,0)")]),t._v(", "),s("code",[t._v("(1,1)")]),t._v(" 和"),s("code",[t._v("(2,2)")]),t._v("可以写成这样：“0 0, 1 1, 2 2”")])]),t._v(" "),s("h3",{attrs:{id:"polygon-多边形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polygon-多边形"}},[t._v("#")]),t._v(" polygon-多边形")]),t._v(" "),s("p",[t._v("polygon和折线很像，它们都是由连接一组点集的直线构成。不同的是，polygon的路径在最后一个点处自动回到第一个点。需要注意的是，矩形也是一种多边形，如果需要更多灵活性的话，你也可以用多边形创建一个矩形")]),t._v(" "),s("p",[s("code",[t._v('<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>')])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("points")]),t._v(":")])]),t._v(" "),s("h3",{attrs:{id:"path-路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-路径"}},[t._v("#")]),t._v(" path-路径")]),t._v(" "),s("p",[t._v("你可以用path元素绘制矩形（直角矩形或者圆角矩形）、圆形、椭圆、折线形、多边形，以及一些其他的形状，例如贝塞尔曲线、2次曲线等曲线。\n因为path很强大也很复杂，所以会在下一章进行详细介绍。这里只介绍一个定义路径形状的属性")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("d")]),t._v(": 是一个"),s("code",[t._v("命令+参数")]),t._v("的序列, 描述于如何绘制路径的信息,以下是在"),s("code",[t._v("d")]),t._v("中使用的命令：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("M x y")]),t._v("：表示的是“Move to”命令，当解析器读到这个命令时，它就知道你是打算移动到某个点,跟在命令字母后面的，是你需要移动到的那个点的x和y轴坐标\n比如移动到(10,10)这个点的命令，应该写成"),s("code",[t._v("M 10 10")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("L x y")]),t._v(": L命令将会在当前位置和新位置（L前面画笔所在的点）之间画一条线段\n"),s("code",[t._v('<path d="M10 10 L90 90" stroke="black"/>')])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("H x")]),t._v(": 绘制水平线,只需一个参数")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("V y")]),t._v(": 绘制垂直线,只需一个参数")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Z")]),t._v(": 闭合路径命令,Z命令会从当前点画一条直线到路径的起点, Z命令不用区分大小写")])])]),t._v(" "),s("p",[s("code",[t._v('<path d="M 10 10 L 90 90 H 50 L 10 10" stroke="black" fill="transparent"/>')]),t._v("等同于："),s("code",[t._v('<path d="M 10 10 L 90 90 H 50 Z" stroke="black" fill="transparent"/>')])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("C")]),t._v(": 贝塞尔曲线,"),s("code",[t._v("C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)")])]),t._v(" "),s("ul",[s("li",[t._v("最后一个坐标(x,y)表示的是曲线的终点,(x1,y1)是起点的控制点，(x2,y2)是终点的控制点")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("S")]),t._v(":")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("每一个命令都有两种表示方式，一种是用大写字母，表示采用绝对定位。另一种是用小写字母，表示采用相对定位, 除了Z")])]),t._v(" "),s("ul",[s("li",[t._v("``")])]),t._v(" "),s("h2",{attrs:{id:"svg属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg属性"}},[t._v("#")]),t._v(" SVG属性")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("fill")]),t._v("：内容填充")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("stroke")]),t._v(": 线条的颜色")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("fill-opacity")]),t._v(":控制填充色的不透明度")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("stroke-opacity")]),t._v(": 控制描边的不透明度")])])]),t._v(" "),s("h2",{attrs:{id:"svg和canvas区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg和canvas区别"}},[t._v("#")]),t._v(" svg和canvas区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("从图像类别区分，Canvas是基于像素的位图，而SVG却是基于矢量图形")])]),t._v(" "),s("li",[s("p",[t._v("从结构上说，Canvas没有图层的概念，所有的修改整个画布都要重新渲染，而SVG则可以对单独的标签进行修改")])]),t._v(" "),s("li",[s("p",[t._v("从操作对象上说，Canvas是基于HTML canvas标签，通过宿主提供的Javascript API对整个画布进行操作的，而SVG则是基于XML元素的。")])]),t._v(" "),s("li",[s("p",[t._v("从渲染模式上来说，Canvas属于 即时模式，而SVG则是 保留模式 ,这两种模式的区别可以参见 cshao 的博文： "),s("code",[t._v("http://www.lifelaf.com/blog/?p=354")])])]),t._v(" "),s("li",[s("p",[t._v("从搜索引擎角度分析，由于svg是有大量标签组成，所以可以通过给标签添加属性，便于爬虫搜索")])])]),t._v(" "),s("h3",{attrs:{id:"适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),s("p",[t._v("Canvas 提供的绘图能力更底层，适合做到像素级的图形处理，能动态渲染和绘制大数据量的图形。而 SVG 抽象层次更高，声明描述式的接口功能更丰富，内置了大量的图形、滤镜和动画等，方便进行文档元素的维护，也能导出为文件脱离浏览器环境使用")]),t._v(" "),s("h3",{attrs:{id:"性能差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能差异"}},[t._v("#")]),t._v(" 性能差异")]),t._v(" "),s("p",[t._v("之前网上有不少 Canvas 和 SVG 性能对比的文章，得出的结论大体是“Canvas 性能更好，适合更大量数据的渲染”。\n其实这么说是有失偏颇的。性能对比要看场景。从底层来看，Canvas 的性能受画布尺寸影响更大，而 SVG 的性能受图形元素个数影响更大")]),t._v(" "),s("h3",{attrs:{id:"定制和交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定制和交互"}},[t._v("#")]),t._v(" 定制和交互")]),t._v(" "),s("p",[t._v("比较流行的看法是 SVG 做定制和交互更有优势，因为有类似 DOM 的结构，能快速应用浏览器底层的鼠标事件、CSS 样式、CSS3 动画等。不过基于 Canvas 做上层封装后也能实现类似的定制和交互，并且自由度更高")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("如果单就图表库的视角来看，选择 Canvas 和 SVG 各有千秋。小画布、大数据量的场景适合用 Canvas，譬如热力图、大数据量的散点图等。\n如果画布非常大，有缩放、平移等高频的交互，或者移动端对内存占用量非常敏感等场景，可以使用 SVG 的方案。")])])}),[],!1,null,null,null);a.default=_.exports}}]);