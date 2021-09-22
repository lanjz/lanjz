(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{595:function(t,s,n){t.exports=n.p+"assets/img/diff_1.64a5efb9.png"},596:function(t,s,n){t.exports=n.p+"assets/img/diff_2.eb8d8ccb.png"},818:function(t,s,n){"use strict";n.r(s);var a=n(58),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react16-diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react16-diff算法"}},[t._v("#")]),t._v(" React16 Diff算法")]),t._v(" "),a("p",[t._v("React diff算法策略：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("针对树结构(tree diff)：对UI层的DOM节点跨层级的操作进行忽略。（数量少）")])]),t._v(" "),a("li",[a("p",[t._v("针对组件结构(component diff)：拥有相同类的两个组件生成相似的树形结构，拥有不同类的两个组件会生成不同的属性结构")])]),t._v(" "),a("li",[a("p",[t._v("针对元素结构(element-diff): 对于同一层级的一组节点，使用具有唯一性的id区分 (key属性)")])])]),t._v(" "),a("p",[a("strong",[t._v("tree diff 的特点")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("React 通过使用 updateDepth 对 虚拟DOM树进行层次遍历")])]),t._v(" "),a("li",[a("p",[t._v("两棵树只对同一层级节点进行比较，只要该节点不存在了，那么该节点与其所有子节点会被完全删除,不在进行进一步比较")])]),t._v(" "),a("li",[a("p",[t._v("只需要遍历一次，便完成对整个DOM树的比较")])])]),t._v(" "),a("h2",{attrs:{id:"component-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component-diff"}},[t._v("#")]),t._v(" component diff")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一类型的组件，按照原策略(tree diff)比较 virtual DOM tree")])]),t._v(" "),a("li",[a("p",[t._v("同类型组件，组件A转化为了组件B，如果virtual DOM 无变化，可以通过shouldComponentUpdate()方法来判断是否")])]),t._v(" "),a("li",[a("p",[t._v("不同类型的组件，那么diff算法会把要改变的组件判断为dirty component,从而替换整个组件的所有节点")]),t._v(" "),a("p",[t._v("就算结构再相似的组件，只要 React 判断是不同的组件，就不会判断是否为不同类型的组件，就不会比较其结构，而是删除组件以及其子组件，并创建新的组件以及其子节点")])])]),t._v(" "),a("h2",{attrs:{id:"element-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-diff"}},[t._v("#")]),t._v(" element diff")]),t._v(" "),a("p",[t._v("对于处于同一层级的节点，React diff 提供了三种节点操作: 插入，移动，删除")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("插入： 新的组件不在原来的集合中，而是全新的节点，则对集合进行插入操作")])]),t._v(" "),a("li",[a("p",[t._v("删除：组件已经在集合中，但集合已经更新，此时节点就需要删除")])]),t._v(" "),a("li",[a("p",[t._v("移动：组件已经存在于集合中，并且集合更新时，组件并没有发生更新，只是位置发生改变")])])]),t._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("p",[t._v("节点相同，位置不同")]),t._v(" "),a("p",[a("img",{attrs:{src:n(595),alt:""}})]),t._v(" "),a("p",[t._v("按新集合中顺序开始遍历")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("B在新集合中 "),a("code",[t._v("lastIndex(类似浮标) = 0")]),t._v(", 在旧集合中 "),a("code",[t._v("index = 1，index > lastIndex")]),t._v(" 就认为 B 对于集合中其他元素位置无影响，不进行移动，之后 "),a("code",[t._v("lastIndex = max(index, lastIndex) = 1")])])]),t._v(" "),a("li",[a("p",[t._v("A在旧集合中 "),a("code",[t._v("index = 0")]),t._v("， 此时 "),a("code",[t._v("lastIndex = 1")]),t._v(", 满足 "),a("code",[t._v("index < lastIndex")]),t._v(", 则对A进行移动操作，此时 "),a("code",[t._v("lastIndex = max(Index, lastIndex) = 1")])])]),t._v(" "),a("li",[a("p",[t._v("D和B操作相同，同(1)，不进行移动，此时 "),a("code",[t._v("lastIndex=max(index, lastIndex) = 3")])])]),t._v(" "),a("li",[a("p",[t._v("C和A操作相同，同(2)，进行移动，此时 "),a("code",[t._v("lastIndex = max(index, lastIndex) = 3")])])])]),t._v(" "),a("p",[t._v("节点位置均有变化")]),t._v(" "),a("p",[a("img",{attrs:{src:n(596),alt:""}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("同上面那种情形，B不进行移动，"),a("code",[t._v("lastIndex=1")])])]),t._v(" "),a("li",[a("p",[t._v("新集合中取得E,发现旧中不存在E，在 "),a("code",[t._v("lastIndex")]),t._v(" 处创建E，"),a("code",[t._v("lastIndex++")])])]),t._v(" "),a("li",[a("p",[t._v("在旧集合中取到C，C不移动，"),a("code",[t._v("lastIndex=2")])])]),t._v(" "),a("li",[a("p",[t._v("在旧集合中取到A，A移动到新集合中的位置，"),a("code",[t._v("lastIndex=2")])])]),t._v(" "),a("li",[a("p",[t._v("完成新集合中所有节点diff后，对旧集合进行循环遍历，寻找新集合中不存在但就集合中的节点(此例中为D)，删除D节点。")])])]),t._v(" "),a("h1",{attrs:{id:"react16-diff算法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react16-diff算法-2"}},[t._v("#")]),t._v(" React16 Diff算法")]),t._v(" "),a("p",[t._v("React 以前的 Diff 算法就是基于树的，现在则整体的数据结构从树改为了链表结构，链表的每一个节点是 Fiber")]),t._v(" "),a("p",[t._v("React16 的 diff 策略采用从链表头部开始比较的算法，是层次遍历，算法是建立在一个节点的插入、删除、移动等操作都是在节点树的同一层级中进行的")]),t._v(" "),a("p",[t._v("对于 Diff， 新老节点的对比，我们以新节点为标准，然后来构建整个 currentInWorkProgress，对于新的 children 会有四种情况")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("TextNode(包含字符串和数字)")])]),t._v(" "),a("li",[a("p",[t._v("单个 React Element(通过该节点是否有 $$typeof 区分)")])]),t._v(" "),a("li",[a("p",[t._v("数组")])]),t._v(" "),a("li",[a("p",[t._v("可迭代的 children，跟数组的处理方式差不多")])])]),t._v(" "),a("h2",{attrs:{id:"children-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#children-diff"}},[t._v("#")]),t._v(" children diff")]),t._v(" "),a("p",[t._v("子节点的 diff 逻辑主要在 "),a("code",[t._v("reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime)")]),t._v(" 方法，参数表示：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("returnFiber：当前子节点对象的父节点")])]),t._v(" "),a("li",[a("p",[t._v("currentFirstChild：旧节点")])]),t._v(" "),a("li",[a("p",[t._v("newChildren：新节点")])]),t._v(" "),a("li",[a("p",[t._v("expirationTime：过期时间（这里不讨论这个）")])])]),t._v(" "),a("p",[a("code",[t._v("reconcileChildrenArray")]),t._v(" 对子节点的 diff 主要是通过四步进行处理")]),t._v(" "),a("p",[a("strong",[t._v("一、颜色对新旧相同位置(index)进行比较")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" oldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" newIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" newChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" newIdx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一次遍历是对新旧节点相关位置的比较")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// // nextOldFiber 保存下一次遍历要对比的旧节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" newIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      nextOldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      oldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      nextOldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回复用的节点，如果没有可以复用的就返回新创建的节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateSlot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 newFiber 返回为null 跳出循环")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        oldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextOldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shouldTrackSideEffects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有fiber")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除旧节点")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    lastPlacedIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("placeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastPlacedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新 lastPlacedIndex")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组成当前链")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previousNewFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      resultingFirstChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      previousNewFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    previousNewFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    oldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextOldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向下一个 旧节点")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("新节点已经遍历完毕")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" newChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的 children 长度已经够了，所以把剩下的删除掉")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteRemainingChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resultingFirstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// deleteRemainingChildren")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteRemainingChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentFirstChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shouldTrackSideEffects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Noop.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" childToDelete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentFirstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("childToDelete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" childToDelete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    childToDelete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" childToDelete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("returnFiber")]),t._v(" 表示当前节点的父节点，"),a("code",[t._v("oldFiber")]),t._v(" 表示要删除的节点，可以看到 "),a("code",[t._v("deleteRemainingChildren")]),t._v(" 内部使用 "),a("code",[t._v("while")]),t._v(" 循环删除所有的 "),a("code",[t._v("oldFiber")]),t._v(" 节点")]),t._v(" "),a("p",[a("strong",[t._v("老节点已经遍历完毕后还存在新节点")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" newIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" newChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" newIdx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _newFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_newFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      lastPlacedIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("placeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastPlacedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previousNewFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个链")]),t._v("\n        resultingFirstChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        previousNewFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 往这个链添加一个子节点")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      previousNewFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _newFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更改当前链的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resultingFirstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果旧节点遍历完，还存在新节点，则遍历剩余新节点通过 "),a("code",[t._v("createChild")]),t._v(" 创建新节点，并添加到当前链当中")]),t._v(" "),a("p",[a("strong",[t._v("移动可复用的节点")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" existingChildren "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapRemainingChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 Map{key: fiber}，通过 key与 fiber映射在一起")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" newIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" newChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" newIdx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _newFiber2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateFromMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("existingChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_newFiber2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shouldTrackSideEffects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_newFiber2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除已经复用的 map 值 ")]),t._v("\n          existingChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_newFiber2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" newIdx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _newFiber2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      lastPlacedIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("placeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_newFiber2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastPlacedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newIdx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previousNewFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        resultingFirstChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _newFiber2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        previousNewFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _newFiber2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      previousNewFiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _newFiber2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shouldTrackSideEffects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还有剩余的旧节点，则遍历他们进行移除")]),t._v("\n    existingChildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returnFiber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resultingFirstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",[a("li",[a("p",[t._v("这一步首先是通过 "),a("code",[t._v("mapRemainingChildren")]),t._v(" 遍历旧节点，觉得 "),a("code",[t._v("{key: fiber}")]),t._v(" 的 "),a("code",[t._v("map")]),t._v(" 结果")])]),t._v(" "),a("li",[a("p",[t._v("遍历剩余新节点执行 "),a("code",[t._v("updateFromMap")]),t._v("， "),a("code",[t._v("updateFromMap")]),t._v(" 的有以下几种情况")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("如果当前新节点只是数字或者字符串，则通过 "),a("code",[t._v("updateTextNode")]),t._v(" 创建新的文本节点")])]),t._v(" "),a("li",[a("p",[t._v("如果当新节点是对象且 "),a("code",[t._v("$$typeof===REACT_ELEMENT_TYPE")]),t._v(" (表示是 "),a("code",[t._v("ReactElement")]),t._v(" 创建的类型)，则尝试通过 "),a("code",[t._v("key")]),t._v(" 在 "),a("code",[t._v("mapRemainingChildren")]),t._v(" 找出复用的节点，没有重新创建")])]),t._v(" "),a("li",[a("p",[t._v("不有其它特殊情况暂时先忽略")])])])]),t._v(" "),a("li",[a("p",[t._v("如果在 "),a("code",[t._v("mapRemainingChildren")]),t._v(" 中得到了可得用的节点，则移除当前 "),a("code",[t._v("key")]),t._v(" 的映射")])]),t._v(" "),a("li",[a("p",[t._v("如果遍历完之后 "),a("code",[t._v("mapRemainingChildren")]),t._v(" 还有剩余的旧节点，则遍历他们进行移除")])])]),t._v(" "),a("p",[t._v("https://cloud.tencent.com/developer/article/1477707")])])}),[],!1,null,null,null);s.default=e.exports}}]);