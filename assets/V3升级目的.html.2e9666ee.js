import{_ as p,o,c as t,b as e,a as i,d as n,e as r,r as s}from"./app.8ae844c0.js";const d={},c=n('<h1 id="v3\u5347\u7EA7\u76EE\u7684" tabindex="-1"><a class="header-anchor" href="#v3\u5347\u7EA7\u76EE\u7684" aria-hidden="true">#</a> V3\u5347\u7EA7\u76EE\u7684</h1><p>\u5347\u7EA7\u80AF\u5B9A\u662F\u51FA\u4E8E\u67D0\u4E9B\u76EE\u7684\uFF0C\u4E3A\u4E86\u8BA9\u81EA\u5DF1\u201D\u5B66\u5F97\u52A8\u201C\u5F97\u5148\u53D1\u73B0\u8FD9\u4E2A\u4E1C\u897F\u662F\u6709\u8BA9\u4EBA\u5B66\u4E60\u7684\u4EF7\u503C</p><p>V3\u7684\u5347\u7EA7\u4E3B\u8981\u6709\u4E24\u70B9\u8003\u8651\uFF1A</p><ol><li><p>\u4E3B\u6D41\u6D4F\u89C8\u5668\u4E2DJavaScript\u65B0\u7279\u6027\u7684\u666E\u904D\u53EF\u7528\u6027</p></li><li><p>\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C\u5F53\u524D\u4EE3\u7801\u5E93\u7684\u8BBE\u8BA1\u548C\u7ED3\u6784\u4E0A\u7684\u7F3A\u9677\u9010\u6E10\u66B4\u9732\u4E86\u51FA\u6765</p></li></ol><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> WHY\uFF1F</h2><h3 id="\u5229\u7528\u65B0\u7684\u8BED\u8A00\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528\u65B0\u7684\u8BED\u8A00\u7279\u6027" aria-hidden="true">#</a> \u5229\u7528\u65B0\u7684\u8BED\u8A00\u7279\u6027</h3><p>\u968F\u7740ES2015\u7684\u6807\u51C6\u5316\uFF0C\u4EE5\u53CAJavaScript\uFF08\u6B63\u5F0F\u540D\u79F0\u4E3AECMAScript\uFF0C\u7F29\u5199\u4E3AES\uFF09 \u8FDB\u884C\u4E86\u91CD\u5927\u5347\u7EA7\uFF0C\u4E3B\u6D41\u6D4F\u89C8\u5668\u4E5F\u5F00\u59CB\u5BF9\u8FD9\u4E9B\u65B0\u7279\u6027\u63D0\u4F9B\u4E0D\u9519\u7684\u652F\u6301\u3002\u5176\u4E2D\u4E00\u4E9B\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u6781\u5927\u63D0\u5347Vue\u6027\u80FD\u7684\u673A\u4F1A\u3002</p><p>\u5176\u4E2D\u6700\u503C\u5F97\u6CE8\u610F\u7684\u662FProxy\uFF0C\u5B83\u5141\u8BB8\u6846\u67B6\u62E6\u622A\u5BF9\u5BF9\u8C61\u7684\u64CD\u4F5C\u3002Vue\u7684\u4E00\u4E2A\u6838\u5FC3\u7279\u8272\u5C31\u662F\u80FD\u76D1\u542C\u7528\u6237\u81EA\u5B9A\u4E49 <code>data</code> \u7684\u53D8\u5316\uFF0C\u5E76\u4E14\u54CD\u5E94\u5F0F\u5730\u66F4\u65B0DOM\u3002Vue 2\u901A\u8FC7 <code>Object.defineProperty</code> \u52AB\u6301 <code>data</code> \u5185\u7684\u5C5E\u6027\u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002\u4F7F\u7528 Proxy \u5B9E\u73B0\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u6D88\u9664\u73B0\u6709\u7684\u9650\u5236\uFF0C\u6BD4\u5982\u65E0\u6CD5\u68C0\u6D4B\u65B0\u6DFB\u52A0\u7684\u5C5E\u6027\uFF0C\u5E76\u4E14\u5B83\u8FD8\u53EF\u4EE5\u6539\u5584 Vue \u7684\u6027\u80FD\u3002</p><p>\u4E0D\u8FC7\uFF0CProxy\u662F\u4E00\u4E2A\u539F\u751F\u7684\u8BED\u8A00\u7279\u6027\uFF0C\u5728\u65E7\u6D4F\u89C8\u5668\u4E2D\u65E0\u6CD5\u88AB\u5B8C\u5168 polyfill \u3002\u4E3A\u4E86\u4F7F\u7528\u5B83\uFF0C\u6211\u4EEC\u5FC5\u987B\u8C03\u6574\u6846\u67B6\u6240\u652F\u6301\u7684\u6D4F\u89C8\u5668\u8303\u56F4\uFF0C\u8FD9\u662F\u4E00\u4E2A\u53EA\u6709\u5728\u65B0\u7684\u4E3B\u7248\u672C\u4E2D\u624D\u53EF\u4EE5\u505A\u51FA\u7684\u91CD\u5927\u6539\u53D8</p><h3 id="\u514B\u670D\u865A\u62DFdom\u7684\u74F6\u9888" tabindex="-1"><a class="header-anchor" href="#\u514B\u670D\u865A\u62DFdom\u7684\u74F6\u9888" aria-hidden="true">#</a> \u514B\u670D\u865A\u62DFDOM\u7684\u74F6\u9888</h3><p>Vue\u6709\u4E00\u4E2A\u76F8\u5F53\u72EC\u7279\u7684\u6E32\u67D3\u7B56\u7565\uFF1A\u5B83\u63D0\u4F9B\u4E00\u4E2A\u63A5\u8FD1HTML\uFF08HTML-like\uFF09\u7684\u6A21\u677F\u8BED\u6CD5\uFF0C\u5E76\u6700\u7EC8\u628A\u5B83\u7F16\u8BD1\u4E3A\u4E00\u4E2A\u53EF\u4EE5\u8FD4\u56DE\u865A\u62DFDOM\u6811\u7684\u6E32\u67D3\u51FD\u6570\u3002\u8BE5\u6846\u67B6\u901A\u8FC7\u9012\u5F52\u904D\u5386\u4E24\u4E2A\u865A\u62DFDOM\u6811\u5E76\u6BD4\u8F83\u6BCF\u4E2A\u8282\u70B9\u4E0A\u7684\u6BCF\u4E2A\u5C5E\u6027\u6765\u786E\u5B9A\u5B9E\u9645DOM\u7684\u54EA\u4E9B\u90E8\u5206\u9700\u8981\u66F4\u65B0\u3002\u611F\u8C22\u73B0\u4EE3JavaScript\u5F15\u64CE\u6240\u6267\u884C\u7684\u9AD8\u7EA7\u4F18\u5316\uFF0C\u8FD9\u4E2A\u6709\u4E9B\u7C97\u7CD9\u7684\u7B97\u6CD5\u901A\u5E38\u6267\u884C\u5F97\u5F88\u5FEB\uFF0C\u4F46\u662F\u66F4\u65B0\u8FC7\u7A0B\u4ECD\u7136\u6D89\u53CA\u5F88\u591A\u4E0D\u5FC5\u8981\u7684CPU\u64CD\u4F5C\u3002\u5F53\u4F60\u89C2\u5BDF\u4E00\u4E2A\u5305\u542B\u5927\u91CF\u9759\u6001\u5185\u5BB9\u800C\u53EA\u6709\u5C11\u91CF\u52A8\u6001\u7ED1\u5B9A\u7684\u6A21\u677F\u65F6\uFF0C\u6548\u7387\u4F4E\u4E0B\u95EE\u9898\u5C31\u4F1A\u53D8\u5F97\u5F88\u660E\u663E \u2013 \u6574\u4E2A\u865A\u62DFDOM\u6811\u4ECD\u7136\u9700\u8981\u9012\u5F52\u904D\u5386\u6765\u7B97\u51FA\u54EA\u91CC\u53D1\u751F\u4E86\u53D8\u5316\u3002</p><p>\u5E78\u8FD0\u7684\u662F\uFF0C\u6A21\u677F\u7F16\u8BD1\u6B65\u9AA4\u7ED9\u4E86\u6211\u4EEC\u5206\u6790\u9759\u6001\u6A21\u677F\u548C\u52A8\u6001\u90E8\u5206\u7684\u673A\u4F1A\u3002Vue 2\u901A\u8FC7\u8DF3\u8FC7\u9759\u6001\u5B50\u6811\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u505A\u5230\u4E86\u8FD9\u4E00\u70B9\uFF0C\u4F46\u662F\u7531\u4E8E\u7F16\u8BD1\u5668\u67B6\u6784\u8FC7\u4E8E\u7B80\u5355\uFF0C\u66F4\u8FDB\u4E00\u6B65\u7684\u4F18\u5316\u5F88\u96BE\u5B9E\u73B0\u3002\u5728Vue 3\u4E2D\uFF0C\u6211\u4EEC\u7528\u66F4\u5408\u9002\u7684AST\u8F6C\u6362\u7BA1\u9053\uFF08AST transform pipeline\uFF09\u91CD\u5199\u4E86\u7F16\u8BD1\u5668\uFF0C\u5B83\u4F7F\u5F97\u6211\u4EEC\u80FD\u4EE5\u8F6C\u6362\u63D2\u4EF6\u7684\u5F62\u5F0F\u8FDB\u884C\u7F16\u8BD1\u65F6\u4F18\u5316\u3002</p><p>\u968F\u7740\u65B0\u67B6\u6784\u7684\u5B9E\u65BD\uFF0C\u6211\u4EEC\u5E0C\u671B\u627E\u5230\u4E00\u79CD\u5F00\u9500\u5C3D\u53EF\u80FD\u4F4E\u7684\u6E32\u67D3\u7B56\u7565\u3002\u4E00\u4E2A\u9009\u62E9\u662F\u820D\u5F03\u865A\u62DFDOM\uFF0C\u76F4\u63A5\u751F\u6210\u5FC5\u8981\u7684DOM\u64CD\u4F5C\uFF0C\u4F46\u662F\u90A3\u4F1A\u4E27\u5931\u76F4\u63A5\u7F16\u5199\u865A\u62DFDOM\u6E32\u67D3\u51FD\u6570\u7684\u80FD\u529B\uFF0C\u800C\u6211\u4EEC\u53D1\u73B0\u8FD9\u4E2A\u80FD\u529B\u5BF9\u9AD8\u7EA7\u7528\u6237\u548C\u5E93\u7684\u5F00\u53D1\u8005\u975E\u5E38\u6709\u7528\u3002\u53E6\u5916\uFF0C\u8FD9\u53C8\u5C06\u662F\u4E00\u4E2A\u91CD\u5927\u66F4\u65B0\u3002</p><p>\u63A5\u4E0B\u6765\u6700\u597D\u7684\u65B9\u6CD5\u662F\u6D88\u9664\u4E0D\u5FC5\u8981\u7684\u865A\u62DFDOM\u6811\u904D\u5386\u548C\u5C5E\u6027\u6BD4\u8F83\uFF0C\u800C\u8FD9\u5728\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u7684\u6027\u80FD\u635F\u8017\u662F\u6700\u5927\u7684\u3002\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0C\u7F16\u8BD1\u5668\u548C\u8FD0\u884C\u65F6\u5FC5\u987B\u540C\u65F6\u5DE5\u4F5C\uFF1A\u7F16\u8BD1\u5668\u5206\u6790\u6A21\u677F\u548C\u751F\u6210\u5E26\u6709\u4F18\u5316\u63D0\u793A\u7684\u4EE3\u7801\uFF0C\u540C\u65F6\uFF0C\u8FD0\u884C\u65F6\u62FE\u53D6\u8FD9\u4E9B\u63D0\u793A\uFF0C\u5E76\u91C7\u53D6\u5C3D\u53EF\u80FD\u5FEB\u7684\u66F4\u65B0\u7B56\u7565\u3002\u8FD9\u91CC\u4E3B\u8981\u6709\u4E09\u4E2A\u4F18\u5316\uFF1A</p><p>\u7B2C\u4E00\uFF0C\u4ECE\u6811\u7684\u5C42\u9762\u770B\uFF0C\u6211\u4EEC\u6CE8\u610F\u5230\uFF0C\u5728\u6CA1\u6709\u4F7F\u7528\u53EF\u4EE5\u52A8\u6001\u6539\u53D8\u6811\u7ED3\u6784\u7684\u6307\u4EE4\uFF08\u4F8B\u5982v-if\u548Cv-for\uFF09\u7684\u60C5\u51B5\u4E0B\uFF0C\u8282\u70B9\u7ED3\u6784\u662F\u5B8C\u5168\u9759\u6001\u7684\u3002\u5982\u679C\u6211\u4EEC\u5C06\u6A21\u677F\u5212\u5206\u4E3A\u7531\u8FD9\u4E9B\u7ED3\u6784\u6307\u4EE4\u5206\u9694\u7684\u5D4C\u5957\u201C\u5757\u201D\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u201C\u5757\u201D\u4E2D\u7684\u8282\u70B9\u7ED3\u6784\u53C8\u4F1A\u53D8\u6210\u5B8C\u5168\u9759\u6001\u7684\u3002\u5F53\u6211\u4EEC\u5728\u4E00\u4E2A\u201C\u5757\u201D\u5185\u90E8\u66F4\u65B0\u8282\u70B9\u65F6\uFF0C\u6211\u4EEC\u4E0D\u518D\u9700\u8981\u9012\u5F52\u904D\u5386\u6574\u68F5\u6811 \u2013 \u56E0\u4E3A\u201C\u5757\u201D\u5185\u7684\u52A8\u6001\u7ED1\u5B9A\u53EF\u4EE5\u5728\u4E00\u4E2A\u6241\u5E73\u6570\u7EC4\uFF08\u8BD1\u8005\u6CE8\uFF1A\u5373\u4E00\u7EF4\u6570\u7EC4\uFF09\u4E2D\u88AB\u8FFD\u8E2A\u5230\u3002\u901A\u8FC7\u5C06\u9700\u8981\u6267\u884C\u7684\u6811\u904D\u5386\u8FD0\u7B97\u51CF\u5C11\u4E00\u4E2A\u6570\u91CF\u7EA7\uFF0C\u8FD9\u79CD\u4F18\u5316\u89C4\u907F\u4E86\u865A\u62DFDOM\u7684\u5927\u90E8\u5206\u5F00\u9500\u3002</p><p>\u7B2C\u4E8C\uFF0C\u7F16\u8BD1\u5668\u4F1A\u4E3B\u52A8\u76D1\u6D4B\u6A21\u677F\u4E2D\u7684\u9759\u6001\u8282\u70B9\u3001\u9759\u6001\u5B50\u6811\u751A\u81F3\u6570\u636E\u5BF9\u8C61\uFF0C\u5E76\u4E14\u628A\u5B83\u4EEC\u63D0\u53D6\u5230\u7ED3\u679C\u4EE3\u7801\u4E2D\u7684\u6E32\u67D3\u51FD\u6570\u4E4B\u5916\u3002\u8FD9\u907F\u514D\u4E86\u5728\u6BCF\u4E2A\u6E32\u67D3\u51FD\u6570\u4E2D\u91CD\u65B0\u521B\u5EFA\u8FD9\u4E9B\u5BF9\u8C61\uFF0C\u6781\u5927\u7684\u6539\u5584\u4E86\u5185\u5B58\u4F7F\u7528\uFF0C\u964D\u4F4E\u4E86\u5783\u573E\u56DE\u6536\u9891\u7387\u3002</p><p>\u7B2C\u4E09\uFF0C\u4ECE\u6807\u7B7E\u5143\u7D20\u7684\u89D2\u5EA6\u6765\u8BF4\uFF0C\u7F16\u8BD1\u5668\u8FD8\u4F1A\u6839\u636E\u9700\u8981\u6267\u884C\u7684\u66F4\u65B0\u7C7B\u578B\u4E3A\u6BCF\u4E2A\u5143\u7D20\u52A8\u6001\u7ED1\u5B9A\u751F\u6210\u4E00\u4E2A\u4F18\u5316\u6807\u5FD7\u3002\u4F8B\u5982\uFF0C\u4E00\u4E2A\u6709\u52A8\u6001class\u548C\u4E00\u4E9B\u9759\u6001\u5C5E\u6027\u7684\u5143\u7D20\u4F1A\u88AB\u6807\u8BB0\u4E3A\u53EA\u9700\u8981\u8FDB\u884C\u7C7B\u540D\u68C0\u67E5\u3002\u8FD0\u884C\u65F6\u4F1A\u62FE\u53D6\u8FD9\u4E9B\u63D0\u793A\u5E76\u91C7\u53D6\u4E13\u95E8\u7684\u5FEB\u901F\u66F4\u65B0\u7B56\u7565\u3002</p><p>\u7ED3\u5408\u8FD9\u4E9B\u6280\u672F\uFF0CVue 3\u5360\u7528\u7684 CPU\u65F6\u95F4 \u8FD8\u4E0D\u5230Vue 2\u7684\u5341\u5206\u4E4B\u4E00\uFF0C\u6781\u5927\u5730\u6539\u5584\u4E86\u6211\u4EEC\u7684\u6E32\u67D3\u66F4\u65B0\u57FA\u51C6\u6D4B\u8BD5\u6027\u80FD</p><h3 id="\u6700\u5C0F\u5316\u5305\u4F53\u79EF" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u5316\u5305\u4F53\u79EF" aria-hidden="true">#</a> \u6700\u5C0F\u5316\u5305\u4F53\u79EF</h3><p>\u6846\u67B6\u7684\u4F53\u79EF\u540C\u6837\u5F71\u54CD\u5B83\u7684\u6027\u80FD\u3002\u8FD9\u662Fweb\u5E94\u7528\u7A0B\u5E8F\u9047\u5230\u7684\u4E00\u4E2A\u72EC\u7279\u95EE\u9898\uFF0C\u56E0\u4E3A\u8D44\u6E90\u9700\u8981\u5728\u4F7F\u7528\u65F6\u4E0B\u8F7D\uFF0C\u5E76\u4E14\u5728\u6D4F\u89C8\u5668\u89E3\u6790\u5B8C\u5FC5\u8981\u7684JavaScript\u4EE3\u7801\u4E4B\u524D\uFF0C\u5E94\u7528\u65E0\u6CD5\u4EA7\u751F\u4EA4\u4E92\u3002\u5BF9\u4E8E\u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F\u6765\u8BF4\u5C24\u5176\u5982\u6B64\u3002\u5C3D\u7BA1Vue\u4E00\u76F4\u4EE5\u6765\u662F\u6BD4\u8F83\u8F7B\u91CF\u7684 \u2013 Vue 2xx\u7248\u672C\u7684\u8FD0\u884C\u65F6\u4F7F\u7528gzip\u538B\u7F29\u540E\u53EA\u670923KB\uFF0C\u6211\u4EEC\u8FD8\u662F\u6CE8\u610F\u5230\u4E24\u4E2A\u95EE\u9898\uFF1A</p><p>\u7B2C\u4E00\uFF0C\u4E0D\u662F\u6240\u6709\u4EBA\u90FD\u4F1A\u7528\u5230\u6846\u67B6\u7684\u6240\u6709\u529F\u80FD\u3002\u4F8B\u5982\uFF0C\u4E00\u4E2A\u4E0D\u9700\u8981\u4F7F\u7528transition\u7EC4\u4EF6\u7684\u5E94\u7528\u4ECD\u7136\u9700\u8981\u4ED8\u51FA\u4E0B\u8F7D\u548C\u89E3\u6790\u4E0Etransition\u6709\u5173\u4EE3\u7801\u7684\u4EE3\u4EF7\u3002</p><p>\u7B2C\u4E8C\uFF0C\u968F\u7740\u6211\u4EEC\u4E0D\u65AD\u589E\u52A0\u65B0\u7279\u6027\uFF0C\u6846\u67B6\u4E5F\u5728\u4E0D\u65AD\u589E\u957F\u3002\u5F53\u6211\u4EEC\u5728\u6743\u8861\u65B0\u7279\u6027\u7684\u5229\u5F0A\u65F6\uFF0C\u5305\u7684\u4F53\u79EF\u5FC5\u987B\u8003\u8651\u5728\u5185\u3002\u6700\u7EC8\uFF0C\u6211\u4EEC\u503E\u5411\u4E8E\u53EA\u6DFB\u52A0\u5927\u591A\u6570\u7528\u6237\u4F1A\u7528\u5230\u7684\u529F\u80FD\u3002</p><p>\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u5E94\u8BE5\u80FD\u591F\u5728\u6784\u5EFA\u65F6\u5220\u9664\u90A3\u4E9B\u672A\u4F7F\u7528\u7684\u6846\u67B6\u7279\u6027\u76F8\u5173\u7684\u4EE3\u7801 \u2013 \u4E5F\u53EBtree-shaking\uFF0C\u53EA\u7559\u4E0B\u4ED6\u4EEC\u7528\u5230\u7684\u4E1C\u897F\u3002\u8FD9\u4E5F\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u5728\u4E0D\u589E\u52A0\u5176\u4ED6\u7528\u6237\u6210\u672C\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E00\u90E8\u5206\u7528\u6237\u63D0\u4F9B\u6709\u7528\u7684\u7279\u6027\u3002</p><p>\u5728Vue 3\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u628A\u5927\u90E8\u5206\u5168\u5C40API\u548C\u5185\u7F6E\u5E2E\u52A9\u7A0B\u5E8F\uFF08internal helpers\uFF09\u8F6C\u79FB\u5230ES\u6A21\u5757\u4E2D\u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002\u8FD9\u5141\u8BB8\u73B0\u4EE3\u6253\u5305\u5668\u9759\u6001\u5730\u5206\u6790\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5E76\u5220\u9664\u4E0E\u672A\u4F7F\u7528\u7684\u7279\u6027\u76F8\u5173\u7684\u4EE3\u7801\u3002\u6A21\u677F\u7F16\u8BD1\u5668\u4E5F\u53EF\u4EE5\u751F\u6210tree-shaking\u53CB\u597D\u7684\u4EE3\u7801\uFF0C\u5B83\u53EA\u4F1A\u5728\u6A21\u677F\u4E2D\u5B9E\u9645\u4F7F\u7528\u4E86\u8BE5\u7279\u6027\u65F6\u624D\u5BFC\u5165\u4E0E\u8BE5\u7279\u6027\u76F8\u5173\u7684\u5E2E\u52A9\u7A0B\u5E8F\u3002</p><p>\u6846\u67B6\u4E2D\u7684\u4E00\u4E9B\u90E8\u5206\u6C38\u8FDC\u4E0D\u80FD\u88ABtree-shaken\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5BF9\u4EFB\u4F55\u4E00\u4E2A\u5E94\u7528\u90FD\u662F\u5FC5\u8981\u7684\u3002\u6211\u4EEC\u79F0\u8FD9\u4E9B\u4E0D\u53EF\u7F3A\u5C11\u7684\u90E8\u5206\u7684\u4F53\u79EF\u4E3A\u57FA\u51C6\u4F53\u79EF\u3002\u5C3D\u7BA1\u589E\u52A0\u4E86\u5927\u91CF\u7684\u65B0\u7279\u6027\uFF0C\u4F46Vue 3\u7684\u57FA\u51C6\u4F53\u79EF\u7528gzip\u538B\u7F29\u540E\u53EA\u6709\u5927\u7EA610KB - \u6BD4Vue 2\u7684\u4E00\u534A\u8FD8\u5C0F</p><h3 id="\u89E3\u51B3\u5BF9\u89C4\u6A21\u5316\u7684\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u5BF9\u89C4\u6A21\u5316\u7684\u9700\u6C42" aria-hidden="true">#</a> \u89E3\u51B3\u5BF9\u89C4\u6A21\u5316\u7684\u9700\u6C42</h3><p>\u6211\u4EEC\u8FD8\u60F3\u63D0\u5347Vue\u5E94\u5BF9\u5927\u578B\u5E94\u7528\u7684\u80FD\u529B\u3002\u6211\u4EEC\u6700\u521D\u7684Vue\u8BBE\u8BA1\u4E13\u6CE8\u4E8E\u8F83\u4F4E\u7684\u51C6\u5165\u95E8\u69DB\u548C\u5E73\u7F13\u7684\u5B66\u4E60\u66F2\u7EBF\u3002\u4F46\u662F\u968F\u7740Vue\u7684\u4F7F\u7528\u8D8A\u6765\u8D8A\u5E7F\u6CDB\uFF0C\u6211\u4EEC\u610F\u8BC6\u5230\u652F\u6301\u5305\u542B\u6570\u767E\u4E2A\u6A21\u5757\u4EE5\u53CA\u7531\u6570\u5341\u540D\u5F00\u53D1\u8005\u7EF4\u62A4\u7684\u5927\u578B\u9879\u76EE\u662F\u5FC5\u8981\u7684\u3002\u5BF9\u8FD9\u7C7B\u9879\u76EE\uFF0C\u50CFTypeScript\u8FD9\u6837\u7684\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u4EE5\u53CA\u5E72\u51C0\u5730\u7EC4\u7EC7\u53EF\u91CD\u7528\u4EE3\u7801\u7684\u80FD\u529B\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u7136\u800CVue 2\u5728\u8FD9\u65B9\u9762\u7684\u652F\u6301\u4E0D\u591F\u7406\u60F3\u3002</p><p>\u5728Vue 3\u8BBE\u8BA1\u7684\u65E9\u671F\u9636\u6BB5\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u901A\u8FC7\u652F\u6301\u4F7F\u7528\u7C7B\u7F16\u5199\u7EC4\u4EF6\u6765\u6539\u8FDBTypeScript\u96C6\u6210\u3002\u6311\u6218\u5728\u4E8E\uFF0Cclass\u6240\u4F9D\u8D56\u7684\u8BB8\u591A\u8BED\u8A00\u7279\u6027\uFF0C\u4F8B\u5982\u7C7B\u5B57\u6BB5\u548C\u4FEE\u9970\u5668\uFF0C\u4ECD\u5904\u4E8E\u5EFA\u8BAE\u9636\u6BB5\u3002\u800C\u5728\u6210\u4E3A\u6B63\u5F0F\u7684JavaScript\u6807\u51C6\u4E4B\u524D\uFF0C\u8FD9\u4E9B\u7279\u6027\u4ECD\u7136\u53EF\u80FD\u53D8\u5316\u3002\u8FD9\u4E9B\u95EE\u9898\u6240\u6D89\u53CA\u7684\u590D\u6742\u6027\u548C\u4E0D\u786E\u5B9A\u6027\u8BA9\u6211\u4EEC\u6000\u7591\u6DFB\u52A0\u7C7BAPI\u662F\u5426\u771F\u7684\u5408\u7406\uFF0C\u56E0\u4E3A\u5B83\u9664\u4E86\u63D0\u4F9B\u7A0D\u597D\u7684TypeScript\u96C6\u6210\u4E4B\u5916\uFF0C\u6CA1\u6709\u5E26\u6765\u4EFB\u4F55\u597D\u5904\u3002</p><p>\u6211\u4EEC\u51B3\u5B9A\u7814\u7A76\u89E3\u51B3\u89C4\u6A21\u5316\u95EE\u9898\u7684\u5176\u4ED6\u65B9\u6CD5\u3002\u53D7React Hooks\u7684\u542F\u53D1\uFF0C\u6211\u4EEC\u8003\u8651\u901A\u8FC7\u66B4\u9732\u66F4\u5E95\u5C42\u7684\u54CD\u5E94\u5F0F\u548C\u7EC4\u4EF6\u751F\u547D\u5468\u671FAPI\uFF0C\u6765\u542F\u7528\u4E00\u79CD\u66F4\u81EA\u7531\u7684\u65B9\u5F0F\u7F16\u5199\u7EC4\u4EF6\u903B\u8F91\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3AComposition API\u3002\u4E0E\u901A\u8FC7\u6307\u5B9A\u4E00\u957F\u4E32option\u6765\u5B9A\u4E49\u7EC4\u4EF6\u4E0D\u540C\uFF0CComposition API\u5141\u8BB8\u7528\u6237\u81EA\u7531\u5730\u50CF\u7F16\u5199\u51FD\u6570\u4E00\u6837\u8868\u8FBE\u3001\u7EC4\u5408\u548C\u91CD\u7528\u6709\u72B6\u6001\u7EC4\u4EF6\u903B\u8F91\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u90FD\u63D0\u4F9B\u4E86\u5F88\u597D\u7684TypeScript\u652F\u6301\u3002</p><p>\u6211\u4EEC\u5BF9\u8FD9\u4E2A\u60F3\u6CD5\u611F\u5230\u5174\u594B\u3002\u5C3D\u7BA1Composition API\u8BBE\u8BA1\u51FA\u6765\u662F\u4E3A\u4E86\u89E3\u51B3\u67D0\u4E9B\u7279\u5B9A\u7684\u95EE\u9898\uFF0C\u4F46\u5728\u7F16\u5199\u7EC4\u4EF6\u65F6\u53EA\u4F7F\u7528\u8FD9\u7C7BAPI\u6765\u5B9E\u73B0\uFF08\u8BD1\u8005\u6CE8\uFF1A\u6307\u5B8C\u5168\u4F7F\u7528Composition API\u6765\u7F16\u5199\u7EC4\u4EF6\uFF09\u5728\u6280\u672F\u4E0A\u4E5F\u662F\u53EF\u884C\u7684\u3002\u5728\u63D0\u6848\u7684\u7B2C\u4E00\u7A3F\u4E2D\uFF0C\u6211\u4EEC\u6709\u4E9B\u8D85\u524D\u5730\u63D0\u51FA\u53EF\u80FD\u4F1A\u5728\u540E\u7EED\u7684\u53D1\u5E03\u4E2D\u4F7F\u7528Composition API\u66FF\u6362\u5DF2\u5B58\u5728\u7684Options API\u3002\u8FD9\u906D\u5230\u793E\u533A\u6210\u5458\u7684\u5F3A\u70C8\u53CD\u5BF9\uFF0C\u540C\u65F6\u8FD9\u4E5F\u7ED9\u4E86\u6211\u4EEC\u4E00\u4E2A\u5B9D\u8D35\u7684\u6559\u8BAD\uFF0C\u5C31\u662F\u8981\u6E05\u695A\u5730\u8868\u8FBE\u957F\u671F\u8BA1\u5212\u548C\u610F\u56FE\uFF0C\u4EE5\u53CA\u7406\u89E3\u7528\u6237\u7684\u9700\u8981\u3002\u5728\u542C\u53D6\u4E86\u793E\u533A\u7684\u53CD\u9988\u540E\uFF0C\u6211\u4EEC\u5F7B\u5E95\u4FEE\u6539\u4E86\u8FD9\u4E2A\u63D0\u6848\uFF0C\u660E\u786E\u8868\u793AComposition API\u5C06\u4F1A\u662FOptions API\u7684\u4FEE\u6539\u548C\u8865\u5145\u3002\u4FEE\u8BA2\u540E\u7684\u63D0\u6848\u5F97\u5230\u7684\u53CD\u54CD\u8981\u79EF\u6781\u5F97\u591A\uFF0C\u5E76\u6536\u5230\u4E86\u8BB8\u591A\u5EFA\u8BBE\u6027\u7684\u5EFA\u8BAE</p><h3 id="\u5BFB\u6C42\u5E73\u8861" tabindex="-1"><a class="header-anchor" href="#\u5BFB\u6C42\u5E73\u8861" aria-hidden="true">#</a> \u5BFB\u6C42\u5E73\u8861</h3><p>\u5728Vue\u7684\u7528\u6237\u7FA4\u4E2D\uFF0C\u6709\u8D85\u8FC7100\u4E07\u7684\u5F00\u53D1\u4EBA\u5458\u662F\u5BF9HTML/CSS\u53EA\u6709\u57FA\u672C\u77E5\u8BC6\u7684\u521D\u5B66\u8005\uFF0C\u6216\u7531jQuery\u8F6C\u578B\u800C\u6765\u7684\u4E13\u4E1A\u4EBA\u58EB\uFF0C\u6216\u4ECE\u5176\u4ED6\u6846\u67B6\u8FC1\u79FB\u800C\u6765\uFF0C\u6216\u5BFB\u6C42\u524D\u7AEF\u89E3\u51B3\u65B9\u6848\u7684\u540E\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u4EE5\u53CA\u5904\u7406\u5927\u89C4\u6A21\u8F6F\u4EF6\u7684\u8F6F\u4EF6\u67B6\u6784\u5E08\u3002\u5F00\u53D1\u8005\u7684\u591A\u6837\u6027\u9020\u6210\u4E86\u4F7F\u7528\u573A\u666F\u7684\u591A\u6837\u6027\uFF1A\u4E00\u4E9B\u5F00\u53D1\u4EBA\u5458\u53EF\u80FD\u5E0C\u671B\u5728\u9057\u7559\u5E94\u7528\u7A0B\u5E8F\u4E0A\u589E\u52A0\u4EA4\u4E92\u6027\uFF1B\u800C\u53E6\u4E00\u4E9B\u4EBA\u5219\u53EF\u80FD\u4ECE\u4E8B\u5F00\u53D1\u5468\u671F\u5F88\u77ED\u4F46\u7EF4\u62A4\u65F6\u95F4\u6709\u9650\u7684\u4E00\u6B21\u6027\u9879\u76EE\uFF1B\u67B6\u6784\u5E08\u53EF\u80FD\u5FC5\u987B\u5904\u7406\u5927\u578B\u3001\u591A\u5E74\u7684\u9879\u76EE\uFF0C\u4EE5\u53CA\u9762\u5BF9\u5728\u9879\u76EE\u751F\u547D\u5468\u671F\u4E2D\u53D8\u5316\u4E0D\u5B9A\u7684\u5F00\u53D1\u56E2\u961F\u3002</p><p>\u5F53\u6211\u4EEC\u5728\u5404\u79CD\u6743\u8861\u4E4B\u95F4\u8FFD\u6C42\u5E73\u8861\u7684\u540C\u65F6\uFF0CVue\u7684\u8BBE\u8BA1\u4E5F\u4E0D\u65AD\u88AB\u8FD9\u4E9B\u9700\u6C42\u4E0D\u65AD\u5851\u9020\u3002Vue\u7684\u53E3\u53F7\uFF1A\u201C\u6E10\u8FDB\u5F0F\u6846\u67B6\u201D\uFF0C\u542B\u4E49\u5C31\u662F\u5C01\u88C5\u7531\u6B64\u8FC7\u7A0B\u4EA7\u751F\u7684\u5206\u5C42API\u8BBE\u8BA1\u3002\u521D\u5B66\u8005\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2ACDN\u811A\u672C\u3001\u57FA\u4E8EHTML\u7684\u6A21\u677F\u8BED\u6CD5\u548C\u76F4\u89C2\u7684Options API\u83B7\u5F97\u4E00\u4E2A\u5E73\u6ED1\u7684\u5B66\u4E60\u66F2\u7EBF\uFF0C\u800C\u9AD8\u7EA7\u7528\u6237\u53EF\u4EE5\u7528\u5168\u529F\u80FDCLI\u3001\u6E32\u67D3\u51FD\u6570\u548CComposition API\u8BBE\u8BA1\u5927\u89C4\u6A21\u7684\u5E94\u7528\u3002</p><p>\u8981\u5B9E\u73B0\u6211\u4EEC\u7684\u613F\u666F\uFF0C\u8FD8\u6709\u5F88\u591A\u5DE5\u4F5C\u8981\u505A \u2013 \u6700\u91CD\u8981\u7684\u662F\u8981\u66F4\u65B0\u652F\u6301\u5E93\u3001\u6587\u6863\u548C\u5DE5\u5177\uFF0C\u4EE5\u786E\u4FDD\u987A\u5229\u8FC1\u79FB\u3002\u5728\u63A5\u4E0B\u6765\u7684\u51E0\u4E2A\u6708\u91CC\uFF0C\u6211\u4EEC\u5C06\u4F1A\u52AA\u529B\u5DE5\u4F5C\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u8FEB\u4E0D\u53CA\u5F85\u5730\u60F3\u770B\u770BVue 3\u793E\u533A\u5C06\u4F1A\u521B\u9020\u4EC0\u4E48\u4E86</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li><p>\u5229\u7528\u65B0\u7684\u8BED\u8A00\u7279\u6027</p><ul><li>\u4F7F\u7528 <code>Proxy</code> \u4EE3\u66FF <code>Object.defineProerty</code></li></ul></li><li><p>diff \u7B97\u6CD5\u4F18\u5316</p></li><li><p>\u4F53\u79EF\u66F4\u5C0F\uFF0C\u5BF9\u4EE3\u7801\u7ED3\u6784\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u8BA9\u5176\u5BB9\u6613\u88AB Tree shaking \u4F18\u5316</p></li><li><p>\u589E\u52A0 Composition API\uFF0C\u63D0\u5347Vue \u7EC4\u7EC7\u590D\u6742\u4E1A\u52A1\u903B\u8F91\u7684\u80FD\u529B</p></li><li><p>\u66F4\u597D\u5F97\u652F\u6301 TypeScript</p></li></ul>',36),h={href:"https://increment.com/frontend/making-vue-3/",target:"_blank",rel:"noopener noreferrer"},l=r("The process: Making Vue 3"),u={href:"https://blog.csdn.net/qq_41694291/article/details/107916688",target:"_blank",rel:"noopener noreferrer"},_=r("Vue 3\u7684\u8BBE\u8BA1\u8FC7\u7A0B\uFF08\u7FFB\u8BD1\u81EA\u5C24\u96E8\u6EAA\u539F\u6587\uFF09"),V={href:"https://blog.csdn.net/weixin_45514320/article/details/110070787",target:"_blank",rel:"noopener noreferrer"},f=r("vue3\u65B0\u7279\u6027\u5206\u6790");function P(m,x){const a=s("ExternalLinkIcon");return o(),t("div",null,[c,e("p",null,[e("a",h,[l,i(a)])]),e("p",null,[e("a",u,[_,i(a)])]),e("p",null,[e("a",V,[f,i(a)])])])}var I=p(d,[["render",P],["__file","V3\u5347\u7EA7\u76EE\u7684.html.vue"]]);export{I as default};
