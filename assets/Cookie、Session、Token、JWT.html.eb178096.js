import{_ as e,o as i,c as o,d as s}from"./app.8ae844c0.js";const l={},p=s('<h1 id="cookie-session-token-jwt" tabindex="-1"><a class="header-anchor" href="#cookie-session-token-jwt" aria-hidden="true">#</a> Cookie,Session,Token,JWT</h1><blockquote><p>https://mp.weixin.qq.com/s/sF96Vgcp9FU--oeRlh4IdA</p></blockquote><h1 id="\u8BA4\u8BC1-authentication" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1-authentication" aria-hidden="true">#</a> \u8BA4\u8BC1\uFF08Authentication\uFF09</h1><p>\u901A\u4FD7\u5730\u8BB2\u5C31\u662F\u9A8C\u8BC1\u5F53\u524D\u7528\u6237\u7684\u8EAB\u4EFD</p><p>\u4E92\u8054\u4E2D\u7684\u8BA4\u8BC1\uFF1A</p><ul><li><p>\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55</p></li><li><p>\u90AE\u7BB1\u53D1\u9001\u767B\u5F55\u94FE\u63A5</p></li><li><p>\u624B\u673A\u53F7\u63A5\u6536\u9A8C\u8BC1\u7801</p><p>\u53EA\u8981\u4F60\u80FD\u6536\u5230\u90AE\u7BB1/\u9A8C\u8BC1\u7801\uFF0C\u5C31\u9ED8\u8BA4\u4F60\u662F\u8D26\u53F7\u7684\u4E3B\u4EBA</p></li></ul><h1 id="\u6388\u6743-authorization" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743-authorization" aria-hidden="true">#</a> \u6388\u6743(Authorization)</h1><ul><li><p>\u7528\u6237\u6388\u4E88\u7B2C\u4E09\u65B9\u5E94\u7528\u8BBF\u95EE\u8BE5\u7528\u6237\u67D0\u4E9B\u8D44\u6E90\u7684\u6743\u9650</p></li><li><p>\u5728\u5B89\u88C5\u624B\u673A\u5E94\u7528\u7684\u65F6\u5019\uFF0CAPP\u4F1A\u8BE2\u95EE\u662F\u5426\u5141\u8BB8\u6388\u4E88\u6743\u9650\uFF08\u8BBF\u95EE\u76F8\u518C\u3001\u5730\u7406\u4F4D\u7F6E\u7B49\u6743\u9650\uFF09</p></li><li><p>\u4F60\u5728\u8BBF\u95EE\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u65F6\uFF0C\u5F53\u767B\u5F55\u65F6\uFF0C\u5C0F\u7A0B\u5E8F\u4F1A\u8BE2\u95EE\u662F\u5426\u5141\u8BB8\u6388\u4E88\u6743\u9650\uFF08\u83B7\u53D6\u6635\u79F0\u3001\u5934\u50CF\u3001\u5730\u533A\u3001\u6027\u522B\u7B49\u4E2A\u4EBA\u4FE1\u606F\uFF09</p></li><li><p>\u5B9E\u73B0\u6388\u6743\u7684\u65B9\u5F0F\u6709\uFF1A<code>cookie</code>\u3001<code>session</code>\u3001<code>token</code>\u3001<code>OAuth</code></p></li></ul><h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h1><p>HTTP\u662F\u65E0\u72B6\u6001\u7684\u534F\u8BAE\uFF08\u5BF9\u4E8E\u4E8B\u52A1\u5904\u7406\u6CA1\u6709\u8BB0\u5FC6\u80FD\u529B\uFF0C\u6BCF\u6B21\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4F1A\u8BDD\u5B8C\u6210\u65F6\uFF0C\u670D\u52A1\u7AEF\u4E0D\u4F1A\u4FDD\u5B58\u4EFB\u4F55\u4F1A\u8BDD\u4FE1\u606F\uFF09\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u662F\u5B8C\u5168\u72EC\u7ACB\u7684\uFF0C \u670D\u52A1\u7AEF\u65E0\u6CD5\u786E\u8BA4\u5F53\u524D\u8BBF\u95EE\u8005\u7684\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u65E0\u6CD5\u5206\u8FA8\u4E0A\u4E00\u6B21\u7684\u8BF7\u6C42\u53D1\u9001\u8005\u548C\u8FD9\u4E00\u6B21\u7684\u53D1\u9001\u8005\u662F\u4E0D\u662F\u540C\u4E00\u4E2A\u4EBA\u3002\u6240\u4EE5\u670D\u52A1\u5668\u4E0E\u6D4F\u89C8\u5668\u4E3A\u4E86\u8FDB\u884C\u4F1A\u8BDD\u8DDF\u8E2A\uFF08\u77E5\u9053\u662F\u8C01\u5728\u8BBF\u95EE\u6211\uFF09\uFF0C \u5C31\u5FC5\u987B\u4E3B\u52A8\u7684\u53BB\u7EF4\u62A4\u4E00\u4E2A\u72B6\u6001\uFF0C\u8FD9\u4E2A\u72B6\u6001\u7528\u4E8E\u544A\u77E5\u670D\u52A1\u7AEF\u524D\u540E\u4E24\u4E2A\u8BF7\u6C42\u662F\u5426\u6765\u81EA\u540C\u4E00\u6D4F\u89C8\u5668\u3002\u800C\u8FD9\u4E2A\u72B6\u6001\u9700\u8981\u901A\u8FC7 cookie \u6216\u8005 session \u53BB\u5B9E\u73B0</p><ul><li><p>cookie \u5B58\u50A8\u5728\u5BA2\u6237\u7AEF</p><p>cookie \u662F\u670D\u52A1\u5668\u53D1\u9001\u5230\u7528\u6237\u6D4F\u89C8\u5668\u5E76\u4FDD\u5B58\u5728\u672C\u5730\u7684\u4E00\u5C0F\u5757\u6570\u636E\uFF0C\u5B83\u4F1A\u5728\u6D4F\u89C8\u5668\u4E0B\u6B21\u5411\u540C\u4E00\u670D\u52A1\u5668\u518D\u53D1\u8D77\u8BF7\u6C42\u65F6\u88AB\u643A\u5E26\u5E76\u53D1\u9001\u5230\u670D\u52A1\u5668\u4E0A\u3002</p></li><li><p>cookie \u662F\u4E0D\u53EF\u8DE8\u57DF\u7684</p><p>\u6BCF\u4E2A cookie \u90FD\u4F1A\u7ED1\u5B9A\u5355\u4E00\u7684\u57DF\u540D\uFF0C\u65E0\u6CD5\u5728\u522B\u7684\u57DF\u540D\u4E0B\u83B7\u53D6\u4F7F\u7528\uFF0C\u4E00\u7EA7\u57DF\u540D\u548C\u4E8C\u7EA7\u57DF\u540D\u4E4B\u95F4\u662F\u5141\u8BB8\u5171\u4EAB\u4F7F\u7528\u7684\uFF08\u9760\u7684\u662F domain\uFF09\u3002</p></li></ul><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h2><p>\u4EC0\u4E48 session \uFF1F</p><p>\u5F00\u53D1\u8005\u4E3A\u4E86\u5B9E\u73B0\u4E2D\u65AD\u548C\u7EE7\u7EED\u7B49\u64CD\u4F5C\uFF0C\u5C06 user agent \u548C server \u4E4B\u95F4\u4E00\u5BF9\u4E00\u7684\u4EA4\u4E92\uFF0C\u62BD\u8C61\u4E3A\u201C\u4F1A\u8BDD\u201D\uFF0C\u8FDB\u800C\u884D\u751F\u51FA\u201C\u4F1A\u8BDD\u72B6\u6001\u201D\uFF0C\u4E5F\u5C31\u662F session \u7684\u6982\u5FF5</p><p>\u5982\u4F55\u5B9E\u73B0 session \uFF1F</p><p>\u5B9E\u73B0 session \u9700\u8981\u501F\u52A9 cookie \u548C\u540E\u7AEF\u7684\u4E00\u79CD\u5B58\u50A8\u673A\u5236\u6765\u5B9E\u73B0</p><p>\u4E0A\u9762\u6240\u8BF4\u7684\u5B58\u50A8\u673A\u5236\u5C31\u662F\u670D\u52A1\u7AEF\u4FDD\u5B58\u7684\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u6765\u8DDF\u8E2A\u7528\u6237\u7684\u72B6\u6001\uFF0C\u8FD9\u4E2A\u6570\u636E\u53EF\u4EE5\u4FDD\u5B58\u5728\u96C6\u7FA4\u3001\u6570\u636E\u5E93\u3001\u6587\u4EF6\u4E2D</p><h3 id="session-\u8BA4\u8BC1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#session-\u8BA4\u8BC1\u6D41\u7A0B" aria-hidden="true">#</a> session \u8BA4\u8BC1\u6D41\u7A0B</h3><ul><li><p>\u7528\u6237\u7B2C\u4E00\u6B21\u8BF7\u6C42\u670D\u52A1\u5668\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u5668\u6839\u636E\u7528\u6237\u63D0\u4EA4\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u521B\u5EFA\u5BF9\u5E94\u7684 Session, \u5E76\u751F\u6210\u4E00\u4E2A<code>sessionId</code></p></li><li><p>\u5C06<code>sessionId</code> \u4FDD\u5B58 <code>cookie</code> \u4E2D\u5E76\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668</p></li><li><p>\u5F53\u7528\u6237\u7B2C\u4E8C\u6B21\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u643A\u5E26\u8BBE\u7F6E\u7684 <code>cookie</code> \u4F20\u7ED9\u670D\u52A1\u5668</p></li><li><p>\u670D\u52A1\u5668\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u4F20\u56DE\u7684 <code>cookie</code> \u83B7\u53D6\u5230\u5176\u4E2D\u7684 <code>sessionId</code>,\u518D\u6839\u636E <code>SessionID</code> \u67E5\u627E\u5BF9\u5E94\u7684 <code>Session</code> \u4FE1\u606F\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1</p></li></ul><h3 id="cookie-\u548C-session-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#cookie-\u548C-session-\u7684\u533A\u522B" aria-hidden="true">#</a> Cookie \u548C Session \u7684\u533A\u522B</h3><ul><li><p><code>session</code> \u5B58\u50A8\u5728\u670D\u52A1\u5668\u7AEF\uFF0C<code>sessionId</code> \u4F1A\u88AB\u5B58\u50A8\u5230\u5BA2\u6237\u7AEF\u7684 <code>cookie</code> \u4E2D\uFF0C\u800C <code>cookie</code> \u5B58\u50A8\u5728\u6D4F\u89C8\u5668\u7AEF</p></li><li><p>\u5B58\u53D6\u503C\u7684\u7C7B\u578B\u4E0D\u540C\uFF1ACookie \u53EA\u652F\u6301\u5B58\u5B57\u7B26\u4E32\u6570\u636E\uFF0C\u60F3\u8981\u8BBE\u7F6E\u5176\u4ED6\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u9700\u8981\u5C06\u5176\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0CSession \u53EF\u4EE5\u5B58\u4EFB\u610F\u6570\u636E\u7C7B\u578B</p></li><li><p>\u5B58\u50A8\u5927\u5C0F\u4E0D\u540C\uFF1A \u5355\u4E2A Cookie \u4FDD\u5B58\u7684\u6570\u636E\u4E0D\u80FD\u8D85\u8FC7 4K\uFF0CSession \u53EF\u5B58\u50A8\u6570\u636E\u8FDC\u9AD8\u4E8E Cookie\uFF0C\u4F46\u662F\u5F53\u8BBF\u95EE\u91CF\u8FC7\u591A\uFF0C\u4F1A\u5360\u7528\u8FC7\u591A\u7684\u670D\u52A1\u5668\u8D44\u6E90\u3002</p></li></ul><h1 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h1><p>\u4E00\u822CToken\u7531\u4EE5\u4E0B\u5143\u7D20\u7EC4\uFF1A</p><ul><li><p>uid:\u7528\u6237\u552F\u4E00\u7684\u8EAB\u4EFD\u6807\u8BC6</p></li><li><p>time\uFF1A\u5F53\u524D\u65F6\u95F4\u7684\u65F6\u95F4\u6233</p></li><li><p>sign:\u7B7E\u540D</p></li></ul><p>Token\u7684\u7279\u70B9\uFF1A</p><ul><li><p>\u670D\u52A1\u7AEF\u65E0\u72B6\u6001\u5316\uFF0C\u53EF\u6269\u5C55\u6027\u597D</p></li><li><p>\u652F\u6301\u79FB\u52A8\u7AEF\u8BBE\u5907</p></li><li><p>\u652F\u6301\u8DE8\u7A0B\u5E8F\u8C03\u7528</p></li></ul><p>token \u7684\u8EAB\u4EFD\u9A8C\u8BC1\u6D41\u7A0B\uFF1A</p><ul><li><p>\u5BA2\u6237\u7AEF\u4F7F\u7528\u7528\u6237\u540D\u8DDF\u5BC6\u7801\u8BF7\u6C42\u767B\u5F55</p></li><li><p>\u670D\u52A1\u7AEF\u6536\u5230\u8BF7\u6C42\uFF0C\u53BB\u9A8C\u8BC1\u7528\u6237\u540D\u4E0E\u5BC6\u7801</p></li><li><p>\u9A8C\u8BC1\u6210\u529F\u540E\uFF0C\u670D\u52A1\u7AEF\u4F1A\u7B7E\u53D1\u4E00\u4E2A token \u5E76\u628A\u8FD9\u4E2A token \u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF</p></li><li><p>\u5BA2\u6237\u7AEF\u6536\u5230 token \u4EE5\u540E\uFF0C\u4F1A\u628A\u5B83\u5B58\u50A8\u8D77\u6765\uFF0C\u6BD4\u5982\u653E\u5728 cookie \u91CC\u6216\u8005 localStorage \u91CC</p></li><li><p>\u5BA2\u6237\u7AEF\u6BCF\u6B21\u5411\u670D\u52A1\u7AEF\u8BF7\u6C42\u8D44\u6E90\u7684\u65F6\u5019\u9700\u8981\u5E26\u7740\u670D\u52A1\u7AEF\u7B7E\u53D1\u7684 token</p></li><li><p>\u670D\u52A1\u7AEF\u6536\u5230\u8BF7\u6C42\uFF0C\u7136\u540E\u53BB\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8BF7\u6C42\u91CC\u9762\u5E26\u7740\u7684 token \uFF0C\u5982\u679C\u9A8C\u8BC1\u6210\u529F\uFF0C\u5C31\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u8BF7\u6C42\u7684\u6570\u636E</p></li><li><p>\u670D\u52A1\u7AEF\u6536\u5230\u8BF7\u6C42\uFF0C\u7136\u540E\u53BB\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8BF7\u6C42\u91CC\u9762\u5E26\u7740\u7684 token \uFF0C\u5982\u679C\u9A8C\u8BC1\u6210\u529F\uFF0C\u5C31\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u8BF7\u6C42\u7684\u6570\u636E</p></li><li><p>\u57FA\u4E8E token \u7684\u7528\u6237\u8BA4\u8BC1\u662F\u4E00\u79CD\u670D\u52A1\u7AEF\u65E0\u72B6\u6001\u7684\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u670D\u52A1\u7AEF\u4E0D\u7528\u5B58\u653E token \u6570\u636E\u3002\u7528\u89E3\u6790 token \u7684\u8BA1\u7B97\u65F6\u95F4\u6362\u53D6 session \u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u4ECE\u800C\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u538B\u529B\uFF0C\u51CF\u5C11\u9891\u7E41\u7684\u67E5\u8BE2\u6570\u636E\u5E93</p></li><li><p>token \u5B8C\u5168\u7531\u5E94\u7528\u7BA1\u7406\uFF0C\u6240\u4EE5\u5B83\u53EF\u4EE5\u907F\u5F00\u540C\u6E90\u7B56\u7565</p></li></ul><h1 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token" aria-hidden="true">#</a> Refresh Token</h1><p>\u53E6\u5916\u4E00\u79CD token\u2014\u2014refresh token</p><p>refresh token \u662F\u4E13\u7528\u4E8E\u5237\u65B0 access token \u7684 token\u3002\u5982\u679C\u6CA1\u6709 refresh token\uFF0C\u4E5F\u53EF\u4EE5\u5237\u65B0 access token\uFF0C\u4F46\u6BCF\u6B21\u5237\u65B0\u90FD\u8981\u7528\u6237\u8F93\u5165\u767B\u5F55\u7528\u6237\u540D\u4E0E\u5BC6\u7801\uFF0C\u4F1A\u5F88\u9EBB\u70E6\u3002\u6709\u4E86 refresh token\uFF0C\u53EF\u4EE5\u51CF\u5C11\u8FD9\u4E2A\u9EBB\u70E6\uFF0C\u5BA2\u6237\u7AEF\u76F4\u63A5\u7528 refresh token \u53BB\u66F4\u65B0 access token\uFF0C\u65E0\u9700\u7528\u6237\u8FDB\u884C\u989D\u5916\u7684\u64CD\u4F5C\u3002</p><ul><li><p>Access Token \u7684\u6709\u6548\u671F\u6BD4\u8F83\u77ED\uFF0C\u5F53 Acesss Token \u7531\u4E8E\u8FC7\u671F\u800C\u5931\u6548\u65F6\uFF0C\u4F7F\u7528 Refresh Token \u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u65B0\u7684 Token\uFF0C\u5982\u679C Refresh Token \u4E5F\u5931\u6548\u4E86\uFF0C\u7528\u6237\u5C31\u53EA\u80FD\u91CD\u65B0\u767B\u5F55\u4E86\u3002</p></li><li><p>Refresh Token \u53CA\u8FC7\u671F\u65F6\u95F4\u662F\u5B58\u50A8\u5728\u670D\u52A1\u5668\u7684\u6570\u636E\u5E93\u4E2D\uFF0C\u53EA\u6709\u5728\u7533\u8BF7\u65B0\u7684 Acesss Token \u65F6\u624D\u4F1A\u9A8C\u8BC1\uFF0C\u4E0D\u4F1A\u5BF9\u4E1A\u52A1\u63A5\u53E3\u54CD\u5E94\u65F6\u95F4\u9020\u6210\u5F71\u54CD\uFF0C\u4E5F\u4E0D\u9700\u8981\u5411 Session \u4E00\u6837\u4E00\u76F4\u4FDD\u6301\u5728\u5185\u5B58\u4E2D\u4EE5\u5E94\u5BF9\u5927\u91CF\u7684\u8BF7\u6C42\u3002</p></li></ul><h1 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h1><p>JSON Web Token\uFF08\u7B80\u79F0 JWT\uFF09\u662F\u76EE\u524D\u6700\u6D41\u884C\u7684\u8DE8\u57DF\u8BA4\u8BC1\u89E3\u51B3\u65B9\u6848\u3002</p><p>JWT \u8BA4\u8BC1\u6D41\u7A0B\uFF1A</p><ul><li><p>\u7528\u6237\u8F93\u5165\u7528\u6237\u540D/\u5BC6\u7801\u767B\u5F55\uFF0C\u670D\u52A1\u7AEF\u8BA4\u8BC1\u6210\u529F\u540E\uFF0C\u4F1A\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u4E00\u4E2A JWT</p></li><li><p>\u5BA2\u6237\u7AEF\u5C06 token \u4FDD\u5B58\u5230\u672C\u5730\uFF08\u901A\u5E38\u4F7F\u7528 localstorage\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 cookie\uFF09</p></li><li><p>\u5F53\u7528\u6237\u5E0C\u671B\u8BBF\u95EE\u4E00\u4E2A\u53D7\u4FDD\u62A4\u7684\u8DEF\u7531\u6216\u8005\u8D44\u6E90\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8BF7\u6C42\u5934\u7684 Authorization \u5B57\u6BB5\u4E2D\u4F7F\u7528Bearer \u6A21\u5F0F\u6DFB\u52A0 JWT\uFF0C\u5176\u5185\u5BB9\u770B\u8D77\u6765\u662F\u4E0B\u9762\u8FD9\u6837</p><p>Authorization: Bearer\u590D\u5236\u4EE3\u7801</p></li><li><p>\u670D\u52A1\u7AEF\u7684\u4FDD\u62A4\u8DEF\u7531\u5C06\u4F1A\u68C0\u67E5\u8BF7\u6C42\u5934 Authorization \u4E2D\u7684 JWT \u4FE1\u606F\uFF0C\u5982\u679C\u5408\u6CD5\uFF0C\u5219\u5141\u8BB8\u7528\u6237\u7684\u884C\u4E3A</p></li><li><p>\u56E0\u4E3A JWT \u662F\u81EA\u5305\u542B\u7684\uFF08\u5185\u90E8\u5305\u542B\u4E86\u4E00\u4E9B\u4F1A\u8BDD\u4FE1\u606F\uFF09\uFF0C\u56E0\u6B64\u51CF\u5C11\u4E86\u9700\u8981\u67E5\u8BE2\u6570\u636E\u5E93\u9700\u8981</p></li><li><p>\u56E0\u4E3A\u7528\u6237\u7684\u72B6\u6001\u4E0D\u518D\u5B58\u50A8\u5728\u670D\u52A1\u7AEF\u7684\u5185\u5B58\u4E2D\uFF0C\u6240\u4EE5\u8FD9\u662F\u4E00\u79CD\u65E0\u72B6\u6001\u7684\u8BA4\u8BC1\u673A\u5236</p></li></ul><h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1><p>\u4F7F\u7528 cookie \u65F6\u9700\u8981\u8003\u8651\u7684\u95EE\u9898</p><ul><li><p>\u56E0\u4E3A\u5B58\u50A8\u5728\u5BA2\u6237\u7AEF\uFF0C\u5BB9\u6613\u88AB\u5BA2\u6237\u7AEF\u7BE1\u6539\uFF0C\u4F7F\u7528\u524D\u9700\u8981\u9A8C\u8BC1\u5408\u6CD5\u6027</p></li><li><p>\u4E0D\u8981\u5B58\u50A8\u654F\u611F\u6570\u636E\uFF0C\u6BD4\u5982\u7528\u6237\u5BC6\u7801\uFF0C\u8D26\u6237\u4F59\u989D</p></li><li><p>\u4F7F\u7528 httpOnly \u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u63D0\u9AD8\u5B89\u5168\u6027</p></li><li><p>\u5C3D\u91CF\u51CF\u5C11 cookie \u7684\u4F53\u79EF\uFF0C\u80FD\u5B58\u50A8\u7684\u6570\u636E\u91CF\u4E0D\u80FD\u8D85\u8FC7 4kb</p></li><li><p>\u8BBE\u7F6E\u6B63\u786E\u7684 domain \u548C path\uFF0C\u51CF\u5C11\u6570\u636E\u4F20\u8F93</p></li><li><p>cookie \u65E0\u6CD5\u8DE8\u57DF</p></li><li><p>\u4E00\u4E2A\u6D4F\u89C8\u5668\u9488\u5BF9\u4E00\u4E2A\u7F51\u7AD9\u6700\u591A\u5B58 20 \u4E2ACookie\uFF0C\u6D4F\u89C8\u5668\u4E00\u822C\u53EA\u5141\u8BB8\u5B58\u653E 300 \u4E2ACookie</p></li><li><p>\u79FB\u52A8\u7AEF\u5BF9 cookie \u7684\u652F\u6301\u4E0D\u662F\u5F88\u597D\uFF0C\u800C session \u9700\u8981\u57FA\u4E8E cookie \u5B9E\u73B0\uFF0C\u6240\u4EE5\u79FB\u52A8\u7AEF\u5E38\u7528\u7684\u662F token</p></li></ul><p>\u4F7F\u7528 session \u65F6\u9700\u8981\u8003\u8651\u7684\u95EE\u9898</p><ul><li><p>\u5C06 session \u5B58\u50A8\u5728\u670D\u52A1\u5668\u91CC\u9762\uFF0C\u5F53\u7528\u6237\u540C\u65F6\u5728\u7EBF\u91CF\u6BD4\u8F83\u591A\u65F6\uFF0C\u8FD9\u4E9B session \u4F1A\u5360\u636E\u8F83\u591A\u7684\u5185\u5B58\uFF0C\u9700\u8981\u5728\u670D\u52A1\u7AEF\u5B9A\u671F\u7684\u53BB\u6E05\u7406\u8FC7\u671F\u7684 session</p></li><li><p>\u5F53\u7F51\u7AD9\u91C7\u7528\u96C6\u7FA4\u90E8\u7F72\u7684\u65F6\u5019\uFF0C\u4F1A\u9047\u5230\u591A\u53F0 web \u670D\u52A1\u5668\u4E4B\u95F4\u5982\u4F55\u505A session \u5171\u4EAB\u7684\u95EE\u9898\u3002\u56E0\u4E3A session \u662F\u7531\u5355\u4E2A\u670D\u52A1\u5668\u521B\u5EFA\u7684\uFF0C\u4F46\u662F\u5904\u7406\u7528\u6237\u8BF7\u6C42\u7684\u670D\u52A1\u5668\u4E0D\u4E00\u5B9A\u662F\u90A3\u4E2A\u521B\u5EFA session \u7684\u670D\u52A1\u5668\uFF0C\u90A3\u4E48\u8BE5\u670D\u52A1\u5668\u5C31\u65E0\u6CD5\u62FF\u5230\u4E4B\u524D\u5DF2\u7ECF\u653E\u5165\u5230 session \u4E2D\u7684\u767B\u5F55\u51ED\u8BC1\u4E4B\u7C7B\u7684\u4FE1\u606F\u4E86\u3002</p></li><li><p>\u5F53\u591A\u4E2A\u5E94\u7528\u8981\u5171\u4EAB session \u65F6\uFF0C\u9664\u4E86\u4EE5\u4E0A\u95EE\u9898\uFF0C\u8FD8\u4F1A\u9047\u5230\u8DE8\u57DF\u95EE\u9898\uFF0C\u56E0\u4E3A\u4E0D\u540C\u7684\u5E94\u7528\u53EF\u80FD\u90E8\u7F72\u7684\u4E3B\u673A\u4E0D\u4E00\u6837\uFF0C\u9700\u8981\u5728\u5404\u4E2A\u5E94\u7528\u505A\u597D cookie \u8DE8\u57DF\u7684\u5904\u7406\u3002</p></li><li><p>sessionId \u662F\u5B58\u50A8\u5728 cookie \u4E2D\u7684\uFF0C\u5047\u5982\u6D4F\u89C8\u5668\u7981\u6B62 cookie \u6216\u4E0D\u652F\u6301 cookie \u600E\u4E48\u529E\uFF1F \u4E00\u822C\u4F1A\u628A sessionId \u8DDF\u5728 url \u53C2\u6570\u540E\u9762\u5373\u91CD\u5199 url\uFF0C\u6240\u4EE5 session \u4E0D\u4E00\u5B9A\u975E\u5F97\u9700\u8981\u9760 cookie \u5B9E\u73B0</p></li><li><p>\u79FB\u52A8\u7AEF\u5BF9 cookie \u7684\u652F\u6301\u4E0D\u662F\u5F88\u597D\uFF0C\u800C session \u9700\u8981\u57FA\u4E8E cookie \u5B9E\u73B0\uFF0C\u6240\u4EE5\u79FB\u52A8\u7AEF\u5E38\u7528\u7684\u662F token</p></li></ul><p>\u4F7F\u7528 token \u65F6\u9700\u8981\u8003\u8651\u7684\u95EE\u9898</p><ul><li><p>\u5982\u679C\u4F60\u8BA4\u4E3A\u7528\u6570\u636E\u5E93\u6765\u5B58\u50A8 token \u4F1A\u5BFC\u81F4\u67E5\u8BE2\u65F6\u95F4\u592A\u957F\uFF0C\u53EF\u4EE5\u9009\u62E9\u653E\u5728\u5185\u5B58\u5F53\u4E2D\u3002\u6BD4\u5982 redis \u5F88\u9002\u5408\u4F60\u5BF9 token \u67E5\u8BE2\u7684\u9700\u6C42\u3002</p></li><li><p>token \u5B8C\u5168\u7531\u5E94\u7528\u7BA1\u7406\uFF0C\u6240\u4EE5\u5B83\u53EF\u4EE5\u907F\u5F00\u540C\u6E90\u7B56\u7565</p></li><li><p>token \u53EF\u4EE5\u907F\u514D CSRF \u653B\u51FB(\u56E0\u4E3A\u4E0D\u9700\u8981 cookie \u4E86)</p></li><li><p>\u79FB\u52A8\u7AEF\u5BF9 cookie \u7684\u652F\u6301\u4E0D\u662F\u5F88\u597D\uFF0C\u800C session \u9700\u8981\u57FA\u4E8E cookie \u5B9E\u73B0\uFF0C\u6240\u4EE5\u79FB\u52A8\u7AEF\u5E38\u7528\u7684\u662F token</p></li></ul><p>\u4F7F\u7528 JWT \u65F6\u9700\u8981\u8003\u8651\u7684\u95EE\u9898</p><ul><li><p>\u56E0\u4E3A JWT \u5E76\u4E0D\u4F9D\u8D56 Cookie \u7684\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u57DF\u540D\u63D0\u4F9B\u4F60\u7684 API \u670D\u52A1\u800C\u4E0D\u9700\u8981\u62C5\u5FC3\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u95EE\u9898\uFF08CORS\uFF09</p></li><li><p>JWT \u9ED8\u8BA4\u662F\u4E0D\u52A0\u5BC6\uFF0C\u4F46\u4E5F\u662F\u53EF\u4EE5\u52A0\u5BC6\u7684\u3002\u751F\u6210\u539F\u59CB Token \u4EE5\u540E\uFF0C\u53EF\u4EE5\u7528\u5BC6\u94A5\u518D\u52A0\u5BC6\u4E00\u6B21\u3002</p></li><li><p>JWT \u4E0D\u52A0\u5BC6\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u80FD\u5C06\u79D8\u5BC6\u6570\u636E\u5199\u5165 JWT\u3002</p></li><li><p>JWT \u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u8BA4\u8BC1\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u4EA4\u6362\u4FE1\u606F\u3002\u6709\u6548\u4F7F\u7528 JWT\uFF0C\u53EF\u4EE5\u964D\u4F4E\u670D\u52A1\u5668\u67E5\u8BE2\u6570\u636E\u5E93\u7684\u6B21\u6570\u3002</p></li><li><p>JWT \u6700\u5927\u7684\u4F18\u52BF\u662F\u670D\u52A1\u5668\u4E0D\u518D\u9700\u8981\u5B58\u50A8 Session\uFF0C\u4F7F\u5F97\u670D\u52A1\u5668\u8BA4\u8BC1\u9274\u6743\u4E1A\u52A1\u53EF\u4EE5\u65B9\u4FBF\u6269\u5C55\u3002\u4F46\u8FD9\u4E5F\u662F JWT \u6700\u5927\u7684\u7F3A\u70B9\uFF1A\u7531\u4E8E\u670D\u52A1\u5668\u4E0D\u9700\u8981\u5B58\u50A8 Session \u72B6\u6001\uFF0C\u56E0\u6B64\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u65E0\u6CD5\u5E9F\u5F03\u67D0\u4E2A Token \u6216\u8005\u66F4\u6539 Token \u7684\u6743\u9650\u3002\u4E5F\u5C31\u662F\u8BF4\u4E00\u65E6 JWT \u7B7E\u53D1\u4E86\uFF0C\u5230\u671F\u4E4B\u524D\u5C31\u4F1A\u59CB\u7EC8\u6709\u6548\uFF0C\u9664\u975E\u670D\u52A1\u5668\u90E8\u7F72\u989D\u5916\u7684\u903B\u8F91\u3002</p></li><li><p>JWT \u672C\u8EAB\u5305\u542B\u4E86\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4E00\u65E6\u6CC4\u9732\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u83B7\u5F97\u8BE5\u4EE4\u724C\u7684\u6240\u6709\u6743\u9650\u3002\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT\u7684\u6709\u6548\u671F\u5E94\u8BE5\u8BBE\u7F6E\u5F97\u6BD4\u8F83\u77ED\u3002\u5BF9\u4E8E\u4E00\u4E9B\u6BD4\u8F83\u91CD\u8981\u7684\u6743\u9650\uFF0C\u4F7F\u7528\u65F6\u5E94\u8BE5\u518D\u6B21\u5BF9\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1\u3002</p></li><li><p>JWT \u9002\u5408\u4E00\u6B21\u6027\u7684\u547D\u4EE4\u8BA4\u8BC1\uFF0C\u9881\u53D1\u4E00\u4E2A\u6709\u6548\u671F\u6781\u77ED\u7684 JWT\uFF0C\u5373\u4F7F\u66B4\u9732\u4E86\u5371\u9669\u4E5F\u5F88\u5C0F\uFF0C\u7531\u4E8E\u6BCF\u6B21\u64CD\u4F5C\u90FD\u4F1A\u751F\u6210\u65B0\u7684 JWT\uFF0C\u56E0\u6B64\u4E5F\u6CA1\u5FC5\u8981\u4FDD\u5B58 JWT\uFF0C\u771F\u6B63\u5B9E\u73B0\u65E0\u72B6\u6001\u3002</p></li><li><p>\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u4E0D\u5E94\u8BE5\u4F7F\u7528 HTTP \u534F\u8BAE\u660E\u7801\u4F20\u8F93\uFF0C\u8981\u4F7F\u7528 HTTPS \u534F\u8BAE\u4F20\u8F93\u3002</p></li></ul>',45),n=[p];function a(c,t){return i(),o("div",null,n)}var k=e(l,[["render",a],["__file","Cookie\u3001Session\u3001Token\u3001JWT.html.vue"]]);export{k as default};
