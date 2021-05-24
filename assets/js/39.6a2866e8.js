(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{518:function(e,t,s){e.exports=s.p+"assets/img/gitSubtree.0bcd8368.gif"},720:function(e,t,s){"use strict";s.r(t);var r=s(53),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"公共模块管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#公共模块管理"}},[e._v("#")]),e._v(" 公共模块管理")]),e._v(" "),r("h2",{attrs:{id:"git-subtree"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-subtree"}},[e._v("#")]),e._v(" git subtree")]),e._v(" "),r("p",[e._v("使用 Git Subtree 来维护的子项目代码，对于父项目来说是透明的，所有的开发人员看到的就是一个普通的目录，原来怎么做现在依旧那么做，只需要维护这个 Subtree 的人在合适的时候去做同步代码的操作。")]),e._v(" "),r("h3",{attrs:{id:"使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),r("ol",[r("li",[e._v("在项目中添加 subtree")])]),e._v(" "),r("p",[r("code",[e._v("git subtree add --prefix=<S项目的相对路径> <S项目git地址> <分支> --squash")])]),e._v(" "),r("p",[e._v("如：")]),e._v(" "),r("p",[r("code",[e._v("git subtree add --prefix=subtree http://*******/front_end/hll-pos-subtree.git master")])]),e._v(" "),r("p",[e._v(":::tips\n解释：--squash 意思是把 subtree 的改动合并成一次commit，这样就不用拉取子项目完整的历史记录。--prefix之后的=等号也可以用空格。\n:::")]),e._v(" "),r("p",[e._v("添加时要注意以下几点（避坑）：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("注意要保证当前仓库是没任何修改的状态，如果有的话先 "),r("code",[e._v("commit")]),e._v(" 后执行上面代码，否则将执行不成功")])]),e._v(" "),r("li",[r("p",[e._v("远程的 subtree 创建不能是个空仓库")])]),e._v(" "),r("li",[r("p",[e._v("上面的路径 "),r("code",[e._v("--prefix=subtree")]),e._v(" 不能写成 "),r("code",[e._v("--prefix=./subtree")]),e._v(" 要不然会提示 "),r("code",[e._v("error: invalid path '******'")]),e._v("，这个太操蛋了~（本人是在公司 window 电脑上会出现这个错误）")])])]),e._v(" "),r("p",[e._v("成功后将提示 `Added dir 'subtree'")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("对当前项目的影响（无感）")])]),e._v(" "),r("p",[e._v("添加相同的 subtree 的项目像往常一样工作就可以了，包括也可以更改 subtree 的内容, 此时正常的 "),r("code",[e._v("commit")]),e._v(" "),r("code",[e._v("push")]),e._v(" 等操作也是将更新的内容提交到当前仓库，并不会影响到远程到的 subtree 仓库")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("提交 subtree 修改到远程仓库")])]),e._v(" "),r("p",[e._v("假如当前有对 subtree 做了修改，并且希望提交到远程, 执行以下命令：")]),e._v(" "),r("p",[r("code",[e._v("git subtree push --prefix=S项目的路径 S项目git地址 分支")])]),e._v(" "),r("p",[r("code",[e._v("git subtree push --prefix=subtree http://*******/front_end/hll-pos-subtree.git master")])]),e._v(" "),r("p",[e._v("执行成功后本地的修改将更新到远程")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("更新 subtree 到本地项目")])]),e._v(" "),r("p",[e._v("在当前项目更新最新 subtree 代码，执行以下命令：")]),e._v(" "),r("p",[r("code",[e._v("git subtree pull --prefix=S项目的路径 S项目git地址 分支")])]),e._v(" "),r("p",[r("code",[e._v("git subtree pull --prefix=subtree http://*******/front_end/hll-pos-subtree.git master --squash")])]),e._v(" "),r("p",[e._v("如果没加 "),r("code",[e._v("--squash")]),e._v(" 可能会提示错误： "),r("code",[e._v("fatal: refusing to merge unrelated histories")]),e._v(" 则添加后缀")]),e._v(" "),r("h3",{attrs:{id:"subtree-split"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#subtree-split"}},[e._v("#")]),e._v(" subtree split")]),e._v(" "),r("p",[e._v("在使用 subtree 时会发现一些问题：")]),e._v(" "),r("ol",[r("li",[e._v("每次 "),r("code",[e._v("push")]),e._v(" 的时候很慢，而且会有一个进度显示器")])]),e._v(" "),r("p",[r("img",{attrs:{src:s(518),alt:""}})]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("一旦发生了冲突，即在当前项目解决并提交了，另个项目再 "),r("code",[e._v("pull")]),e._v(" 时仍然会冲突，一直循环")])]),e._v(" "),r("p",[r("strong",[e._v("原因")])]),e._v(" "),r("p",[e._v("每次执行 subtree 的 "),r("code",[e._v("push")]),e._v(" 命令的时候，subtree push实际上是遍历本工程每一次提交，把提交文件涉及到 subtree 目录的挑出来，同步到 subtree 工程。然而这造成了一些很麻烦的问题：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("每个提交都需要重新计算，因此每次推送都需要把主仓库所有的提交计算一遍，非常耗时")])]),e._v(" "),r("li",[r("p",[e._v("每次 push 都是重新计算的，因此本地和远端新仓库的提交总是不一样的，关键还没有共同的父级，这导致 git 无法自动为我们解决冲突")])])]),e._v(" "),r("p",[r("strong",[e._v("解决")])]),e._v(" "),r("p",[e._v("git subtree 提供了 "),r("code",[e._v("split")]),e._v(" 命令, 当使用了 "),r("code",[e._v("split")]),e._v(" 命令后，git subtree 将确保对于相同历史的分割始终是相同的提交号。意思就是当需要 "),r("code",[e._v("push")]),e._v(" 的时候，git 将只计算 "),r("code",[e._v("split")]),e._v(" 之后的新提交")]),e._v(" "),r("p",[r("code",[e._v("git subtree split --rejoin --prefix=subtree HEAD")])])])}),[],!1,null,null,null);t.default=_.exports}}]);