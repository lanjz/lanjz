(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{727:function(t,s,a){"use strict";a.r(s);var v=a(53),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"登录系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录系统"}},[t._v("#")]),t._v(" 登录系统")]),t._v(" "),a("p",[t._v("设计一个安全的登录系统要注意的地方：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用 "),a("code",[t._v("Https")]),t._v(" 协议进行传输，虽然相比 "),a("code",[t._v("http")]),t._v(" 多了几次会话，但是在安全方面得到了显著提升")])]),t._v(" "),a("li",[a("p",[t._v("强制用户使用有一定强度且复杂的密码")])]),t._v(" "),a("li",[a("p",[t._v("密码不要明文保存到数据库，可对密码进行 "),a("code",[t._v("MD5")]),t._v(" 之后再进入存储，加密之前一般将密码加上一个不固定的 "),a("code",[t._v("salt")]),t._v(" 值一起拼接加密，一般 "),a("code",[t._v("md5(md5(password) + salt)")]),t._v(" 就可以了，这个 "),a("code",[t._v("salt")]),t._v(" 是盐，一起加密增加密码的长度也增加了破解的难度，盐一般设计为 "),a("code",[t._v("64位")]),t._v(" 随机生成的字符串，最好分开存放，假如用户信息库被攻击了黑客也拿不到盐的库。不能使用可逆的算法，如果可逆，那如何保存密钥是个非常棘手的问题，一般使用明文加密与数据库中的密文对比就能确定密码正确与否，我们不需要知道用户的明文是什么，如果用户忘了可以通过重置或者密码保护问题修改密码，这也比总明文存储要好一万倍。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("MD5")]),t._v(" 现在已经不是十分安全了，最好使 "),a("code",[t._v("sha256")]),t._v("，"),a("code",[t._v("sha512")]),t._v(" 之类安全强度更高的散列加密算法")])])]),t._v(" "),a("li",[a("p",[t._v('用户名密码错误不要单方面提示，如果密码错误提示用户说密码错误这样攻击者就知道用户名是对的，下次攻击密码，所以不管是用户名还是密码错误都给出同样的提示："用户名或密码错误"，或者别的不具体的提示的错误都可以')])]),t._v(" "),a("li",[a("p",[t._v("前端禁止用户输入导致 "),a("code",[t._v("sql")]),t._v(" 注入的字符，后台也要做 "),a("code",[t._v("sql")]),t._v(" 注入的防护")])]),t._v(" "),a("li",[a("p",[t._v("保存历史密码，一段时间没登录的用户再次登录时提示要修改密码才能登录，这时新密码不能和历史密码一样，苹果就是这么做的")])]),t._v(" "),a("li",[a("p",[t._v("保存每次的登录信息日志，如果登录的 "),a("code",[t._v("IP")]),t._v(" 与以往有很大差别（必要时可使用异地登录告警），要引导用户重置密码方可登录")])]),t._v(" "),a("li",[a("p",[t._v("不要在 "),a("code",[t._v("cookie")]),t._v(" 中保留用户密码，如果一定要使用 "),a("code",[t._v("cookie")]),t._v(" 实现自动登录，切记不要使用简单的 "),a("code",[t._v("用户名＋密码MD5")]),t._v(" 保存到"),a("code",[t._v("cookie")]),t._v("，要把用户ID、用户名、过期时间、IP、不固定的 "),a("code",[t._v("salt")]),t._v(" 等一起考虑进去，这个当然要可逆，服务端要进行解密才能验证用户自动登录有效。另外，"),a("code",[t._v("cookie")]),t._v(" 要设置为 "),a("code",[t._v("httpOnly")]),t._v(" "),a("code",[t._v("这样就不能通过脚本访问")]),t._v("cookie"),a("code",[t._v("，保证")]),t._v("cookie` 的安全性")])]),t._v(" "),a("li",[a("p",[t._v("不要让浏览器记住密码，虽然记住密码很方便，但也不安全，所以前端最好做控制")])]),t._v(" "),a("li",[a("p",[t._v("一段时间类的尝试登录失败次数达到某个值，要锁定用户登录")])]),t._v(" "),a("li",[a("p",[t._v("设置会话有效期，比如登录后 "),a("code",[t._v("10")]),t._v(" 分钟不操作就失效，要重新登录")])]),t._v(" "),a("li",[a("p",[t._v("验证码使用，加上干扰线，防止计算机能够轻易识别，这样也可以防止黑客以程序的方式来尝试登录。")])]),t._v(" "),a("li",[a("p",[t._v("手机登录的一般使用短信验证码的，控制验证码的时效性，即验证码一次有效，一分钟内只能发送一次")])]),t._v(" "),a("li",[a("p",[t._v("有必要的要采用单点登陆，如果允许用户多处登录的要给用户安全提醒")])]),t._v(" "),a("li",[a("p",[t._v("重置密码最好通过邮箱发送一定时间内生效的重置链接，或者手机短信验证码，或者两者相结合的方法，像一般的大公司都有设计一个动态密码的东西，手机即一切，所以也要妥善保管自己的动态加密的APP，最好加上指纹或手势")])]),t._v(" "),a("li",[a("p",[t._v("设置用户可以登录的 IP，即 IP 白名单。像比如财务系统，限制财务人员只能在办公室登录系统")])]),t._v(" "),a("li",[a("p",[t._v("可以考虑使用第三方授权登录接口，如 "),a("code",[t._v("qq")]),t._v(" 登录，微信登录，微博登录，"),a("code",[t._v("github")]),t._v(" 登录等等，优化用户登录体验")])])]),t._v(" "),a("h2",{attrs:{id:"常见登录问题分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见登录问题分析"}},[t._v("#")]),t._v(" 常见登录问题分析")]),t._v(" "),a("h3",{attrs:{id:"登录框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录框"}},[t._v("#")]),t._v(" 登录框")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("登录框账号密码服务端持久化：当你打开登录页面发现账号密码已经填好了，点击登录直接进后台")]),t._v(" "),a("p",[t._v("修复方案：保存账号密码处理的逻辑针对本地，session及时销毁")])]),t._v(" "),a("li",[a("p",[t._v("登录框账号密码前端持久化：当你打开登录页面发现账号密码已经填好了，点击登录直接进后台")]),t._v(" "),a("p",[t._v("修复方案一：")]),t._v(" "),a("p",[t._v("浏览器遇到"),a("code",[t._v('type="text"')]),t._v("与"),a("code",[t._v('type="password"')]),t._v("的 "),a("code",[t._v("input")]),t._v(" 标签紧邻时触发自动填充行为，则将两个"),a("code",[t._v("input")]),t._v("隔开，使用隐藏的方式“欺骗”浏览器，将密码信息填写在隐藏区域")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("// 在原来登录密码框之间添加两个input, 注意不是直接display: none，如果直接display: none，有些浏览器则不生效，\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("is-hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("is-hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("修复方案二：通过"),a("code",[t._v("readonly")]),t._v("属性")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("readonly")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onfocus")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("this.removeAttribute("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("readonly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(");"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("修复方案三： 使用HTML5新属性"),a("code",[t._v('autocomplete="off"')]),t._v(" 但禁用自动填充。这个属性好像是 firefox 发起的，并不是标准属性，\n所以这块主要是针对ie和 firefox 浏览器生效。谷歌不承认这个属性。所以在谷歌浏览器上并没有产生任何效果")])]),t._v(" "),a("li",[a("p",[t._v("信息泄露：登录框账号密码前端持久化：当你填写好账号密码，点击登录浏览会自己弹出自己密码功能")]),t._v(" "),a("p",[t._v("网上有一个方法是将密码的 "),a("code",[t._v("type")]),t._v(" 设为 "),a("code",[t._v("text")]),t._v(", 在 "),a("code",[t._v("onfocus")]),t._v(" 的时候再动态改为"),a("code",[t._v("password")]),t._v(" ，但是实测都不用，但是本质是因为存在 "),a("code",[t._v("type=passwor")]),t._v(" 的输入框才会出现这个提示，所以往这方面想～")])]),t._v(" "),a("li",[a("p",[t._v("登录框提供个示例用户名，比如示例邮箱、手机、用户名规则导致黑客掌握规律生成字典")]),t._v(" "),a("p",[t._v("不显示示例用户名")])]),t._v(" "),a("li",[a("p",[t._v("sql注入：用户名字段或者密码字段存在"),a("code",[t._v("sql注入")]),t._v("，比较典型的是万能密码登录")]),t._v(" "),a("p",[a("strong",[t._v("万能密码登录")])]),t._v(" "),a("p",[t._v("当用户登录时，后台执行的数据库查询操作SQL语句：")]),t._v(" "),a("p",[a("code",[t._v("Select user_id,user_type,email From users Where user_id='用户名' And password='密码'")])]),t._v(" "),a("p",[t._v("如果后台没有对用户输入密码，帐号做过滤，则可能会有 "),a("code",[t._v("SQL注入")]),t._v("， 如果密码输入为`2'or'1, 则后台的 SQL 为：")]),t._v(" "),a("p",[a("code",[t._v("Select user_id,user_type,email From users Where user_id='admin' And password='2'or'1'")])]),t._v(" "),a("p",[t._v("这是由于 SQL 语句中逻辑运算符具有优先级，"),a("code",[t._v("=")]),t._v("优先于"),a("code",[t._v("and")]),t._v("，"),a("code",[t._v("and")]),t._v(" 优先于"),a("code",[t._v("or")]),t._v("，且适用传递性。\n因此，此SQL语句在后台解析时，分成两句 "),a("code",[t._v("Select user_id,user_type,email From users Where user_id='admin' And password='2'")]),t._v("和"),a("code",[t._v("'1'")]),t._v("，\n两句"),a("code",[t._v("bool")]),t._v("值进行逻辑or运算，恒为"),a("code",[t._v("TRUE")]),t._v("。SQL语句的查询结果为"),a("code",[t._v("TRUE")]),t._v("，就意味着认证成功，也可以登录到系统中。")]),t._v(" "),a("p",[t._v("使用参数绑定方式查询和预编译语句，如果使用各种框架按照框架安全开发的要求编程")])]),t._v(" "),a("li",[a("p",[t._v("账号密码暴力破解：黑客通过工具或者脚本加载账号密码字典不断尝试登录")]),t._v(" "),a("p",[t._v("添加验证码（添加验证码不对可能导致绕过等，不一定能防止，下文详说）")])]),t._v(" "),a("li",[a("p",[t._v("用户枚举：输入不对的用户名提示密码不存在，输入对的用户名提示密码错误，从而枚举用户名")]),t._v(" "),a("p",[t._v("使用模糊的错误提示，如用户名或密码不正确")])]),t._v(" "),a("li",[a("p",[t._v("账号锁定：用户爆破的时候错误次数过多锁定账号，然后黑客批量尝试用户名导致大部分用户名被锁")]),t._v(" "),a("p",[t._v("修复方案：使用验证码方式防爆破，尽量不要使用登录次数太多锁定的方式，或者设置短时锁定")])]),t._v(" "),a("li",[a("p",[t._v("低频撞库爆破：利用脚本以慢频率持久爆破，针对限制频率数字比较大的防御策略")]),t._v(" "),a("p",[t._v("使用验证码机制")])])]),t._v(" "),a("h3",{attrs:{id:"图片验证码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片验证码"}},[t._v("#")]),t._v(" 图片验证码")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("易识别：验证码杂点太少或者没有杂点导致可以用程序识别出验证码的内容")]),t._v(" "),a("p",[t._v("验证码前端生成：验证码是用js做的，用js生成点随机字符填充到前端dom")])])]),t._v(" "),a("h3",{attrs:{id:"手机和邮箱验证码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机和邮箱验证码"}},[t._v("#")]),t._v(" 手机和邮箱验证码")]),t._v(" "),a("h3",{attrs:{id:"一个安全的认证机制的设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个安全的认证机制的设计"}},[t._v("#")]),t._v(" 一个安全的认证机制的设计")]),t._v(" "),a("p",[a("strong",[t._v("登录功能：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("把用户名密码和其他需要的字段（如验证码，验证码只有一次，并足够杂点和复杂度）放前端让客户一起填写，然后放到同一个http请求提交给后端，")])]),t._v(" "),a("li",[a("p",[t._v("后端判断是否有验证码参数，然后判断验证码是否正确，再然后正则判断部分字段，不能正则的对参数进行过滤转码")])]),t._v(" "),a("li",[a("p",[t._v("然后使用参数绑定和预编译查询数据库")])]),t._v(" "),a("li",[a("p",[t._v("出错或者不存在的提示前端用户名或者密码错误，这样就防止了自动化攻击和SQL注入信息泄露等等")])])]),t._v(" "),a("p",[a("strong",[t._v("密码重置功能")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("把验证码、用户名、认证因子（邮箱、手机等）放到同一个http请求中，优先验证验证码的存在性、正确性、一次性")])]),t._v(" "),a("li",[a("p",[t._v("其次对参数进行正则格式验证、之后对不能验证参数进行过滤编码、验证用户名和认证因子的匹配性、最后再触发相关功能")])])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.freebuf.com/articles/web/217052.html",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=_.exports}}]);