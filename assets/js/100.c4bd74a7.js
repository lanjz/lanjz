(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{619:function(e,s,a){"use strict";a.r(s);var t=a(53),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"什么是错误优先的回调函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是错误优先的回调函数"}},[e._v("#")]),e._v(" 什么是错误优先的回调函数？")]),e._v(" "),a("p",[e._v("错误优先的回调函数用于传递错误和数据。第一个参数始终应该是一个错误对象， 用于检查程序是否发生了错误。其余的参数用于传递数据。例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("fs.readFile(filePath, function(err, data) {  \n    if (err) {\n        //handle the error\n    }\n    // use the data object\n});\n")])])]),a("h3",{attrs:{id:"如何避免回调地狱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何避免回调地狱"}},[e._v("#")]),e._v(" 如何避免回调地狱")]),e._v(" "),a("p",[e._v("你可以有如下几个方法：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("模块化：将回调函数分割为独立的函数")])]),e._v(" "),a("li",[a("p",[e._v("使用Promises")])]),e._v(" "),a("li",[a("p",[e._v("使用"),a("code",[e._v("yield")])])])]),e._v(" "),a("h2",{attrs:{id:"什么是孤儿进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是孤儿进程"}},[e._v("#")]),e._v(" 什么是孤儿进程？")]),e._v(" "),a("p",[e._v("父进程创建子进程之后，父进程退出了，但是父进程对应的一个或多个子进程还在运行，这些子进程会被系统的 init 进程收养，对应的进程 ppid 为 1，这就是孤儿进程。通过以下代码示例说明。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// master.js\nconst fork = require('child_process').fork;\nconst server = require('net').createServer();\nserver.listen(3000);\nconst worker = fork('worker.js');\n\nworker.send('server', server);\nconsole.log('worker process created, pid: %s ppid: %s', worker.pid, process.pid);\nprocess.exit(0); // 创建子进程之后，主进程退出，此时创建的 worker 进程会成为孤儿进程\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// worker.js\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n    res.end('I am worker, pid: ' + process.pid + ', ppid: ' + process.ppid); // 记录当前工作进程 pid 及父进程 ppid\n});\n\nlet worker;\nprocess.on('message', function (message, sendHandle) {\n    if (message === 'server') {\n        worker = sendHandle;\n        worker.on('connection', function(socket) {\n            server.emit('connection', socket);\n        });\n    }\n});\n\n")])])]),a("p",[e._v("控制台进行测试，输出当前工作进程 pid 和 父进程 ppid")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("worker process created, pid: 32971 ppid: 32970\n")])])]),a("p",[e._v("由于在 master.js 里退出了父进程，活动监视器所显示的也就只有工作进程")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://ask.qcloudimg.com/http-save/yehe-3057196/2o9udya025.jpeg?imageView2/2/w/1620",alt:""}})]),e._v(" "),a("p",[e._v("再次验证，打开控制台调用接口，可以看到工作进程 32971 对应的 ppid 为 1（为 init 进程），此时已经成为了孤儿进程")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl http://127.0.0.1:3000\nI am worker, pid: 32971, ppid: 1\n")])])]),a("h2",{attrs:{id:"什么是僵尸进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是僵尸进程"}},[e._v("#")]),e._v(" 什么是僵尸进程")]),e._v(" "),a("p",[e._v("一个进程使用fork创建子进程，如果子进程退出，而父进程并没有调用wait或waitpid获取子进程的状态信息，那么子进程的进程描述符仍然保存在系统中。这种进程称之为僵死进程。任何一个子进程(init除外)在exit()之后，并非马上就消失掉，而是留下一个称为僵尸进程(Zombie)的数据结构，等待父进程处理。一旦有很多只处理少量任务的子进程完成任务后就退出，然后父进程又不管子进程的退出，然后就会产生很多的僵死进程，这样会对程序产生一定的危害")]),e._v(" "),a("h2",{attrs:{id:"什么是-ipc-通信-如何建立-ipc-通信-什么场景下需要用到-ipc-通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ipc-通信-如何建立-ipc-通信-什么场景下需要用到-ipc-通信"}},[e._v("#")]),e._v(" 什么是 IPC 通信，如何建立 IPC 通信？什么场景下需要用到 IPC 通信？")]),e._v(" "),a("p",[e._v("IPC (Inter-process communication) ，即进程间通信技术，由于每个进程创建之后都有自己的独立地址空间，实现 IPC 的目的就是为了进程之间资源共享访问，实现 IPC 的方式有多种：管道、消息队列、信号量、Domain Socket，Node.js 通过 "),a("code",[e._v("pipe")]),e._v("来实现。")]),e._v(" "),a("p",[e._v("看一下 Demo，未使用 IPC 的情况")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// pipe.js\nconst spawn = require('child_process').spawn;\nconst child = spawn('node', ['worker.js'])\nconsole.log(process.pid, child.pid); // 主进程id3243 子进程3244\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// worker.js\nconsole.log('I am worker, PID: ', process.pid);\n")])])]),a("p",[e._v("控制台执行 node pipe.js，输出主进程id、子进程id，但是子进程 worker.js 的信息并没有在控制台打印，原因是新创建的子进程有自己的stdio 流")]),e._v(" "),a("p",[e._v("创建一个父进程和子进程之间传递消息的 IPC 通道实现输出信息")]),e._v(" "),a("p",[e._v("修改 pipe.js 让子进程的 stdio 和当前进程的 stdio 之间建立管道链接，还可以通过 spawn() 方法的 stdio 选项建立 IPC 机制，")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const spawn = require('child_process').spawn;\nconst child = spawn('node', ['worker.js'])\nchild.stdout.pipe(process.stdout);\nconsole.log(process.pid, child.pid);\n\n")])])]),a("p",[e._v("再次验证，控制台执行 "),a("code",[e._v("node pipe.js")]),e._v("，"),a("code",[e._v("worker.js")]),e._v(" 的信息也打印了出来")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ 42473 42474\nI am worker, PID:  42474\n\n")])])]),a("h2",{attrs:{id:"关于父进程与子进程是如何通信的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于父进程与子进程是如何通信的"}},[e._v("#")]),e._v(" 关于父进程与子进程是如何通信的")]),e._v(" "),a("p",[e._v("父进程在创建子进程之前会先去创建 IPC 通道并一直监听该通道，之后开始创建子进程并通过环境变量（NODECHANNELFD）的方式将 IPC 通道的文件描述符传递给子进程，子进程启动时根据传递的文件描述符去链接 IPC 通道，从而建立父子进程之间的通信机制")]),e._v(" "),a("p",[e._v("![](https://ask.qcloudimg.com/http-save/yehe-3057196/ooc03o3ckg.jpeg?imageView2/2/w/1620")]),e._v(" "),a("h2",{attrs:{id:"node为什么是单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node为什么是单线程"}},[e._v("#")]),e._v(" Node为什么是单线程")]),e._v(" "),a("p",[e._v("Javascript 为什么是单线程？这个问题需要从浏览器说起，在浏览器环境中对于 DOM 的操作，试想如果多个线程来对同一个 DOM 操作是不是就乱了呢，那也就意味着对于DOM的操作只能是单线程，避免 DOM 渲染冲突。在浏览器环境中 UI 渲染线程和 JS 执行引擎是互斥的，一方在执行时都会导致另一方被挂起，这是由 JS 引擎所决定的")]),e._v(" "),a("h2",{attrs:{id:"如何让一个-js-文件在-linux-下成为一个可执行命令程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让一个-js-文件在-linux-下成为一个可执行命令程序"}},[e._v("#")]),e._v(" 如何让一个 js 文件在 Linux 下成为一个可执行命令程序")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("新建 hello.js 文件，头部须加上 "),a("code",[e._v("#!/usr/bin/env node")]),e._v("，表示当前脚本使用 Node.js 进行解析")])]),e._v(" "),a("li",[a("p",[e._v("赋予文件可执行权限 "),a("code",[e._v("chmod +x chmod +x /${dir}/hello.js")]),e._v("，目录自定义")])]),e._v(" "),a("li",[a("p",[e._v("在 "),a("code",[e._v("/usr/local/bin")]),e._v(" 目录下创建一个软链文件 "),a("code",[e._v("sudo ln-s/${dir}/hello.js/usr/local/bin/hello")]),e._v("，文件名就是我们在终端使用的名字")])]),e._v(" "),a("li",[a("p",[e._v("终端执行 hello 相当于输入 node hello.js")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#!/usr/bin/env node\n\nconsole.log('hello world!')\n")])])]),a("p",[e._v("终端测试")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ hello\nhello world\n")])])]),a("h2",{attrs:{id:"进程的当前工作目录是什么-有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的当前工作目录是什么-有什么作用"}},[e._v("#")]),e._v(" 进程的当前工作目录是什么? 有什么作用?")]),e._v(" "),a("p",[e._v("进程的当前工作目录可以通过 process.cwd() 命令获取，默认为当前启动的目录，如果是创建子进程则继承于父进程的目录，可通过 process.chdir() 命令重置，例如通过 spawn 命令创建的子进程可以指定 cwd 选项设置子进程的工作目录。")]),e._v(" "),a("p",[e._v("有什么作用？例如，通过 fs 读取文件，如果设置为相对路径则相对于当前进程启动的目录进行查找，所以，启动目录设置有误的情况下将无法得到正确的结果。还有一种情况程序里引用第三方模块也是根据当前进程启动的目录来进行查找的。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("process.chdir('/Users/may/Documents/test/') // 设置当前进程目录\n\nconsole.log(process.cwd()); // 获取当前进程目录\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);