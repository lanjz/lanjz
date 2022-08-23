import{_ as p,o,c as l,b as a,a as e,d as t,e as n,r as c}from"./app.8ae844c0.js";var r="/lanjz/assets/defer_sync.310eb80b.png";const i={},d=t('<h1 id="\u524D\u7AEF\u4F18\u5316\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u4F18\u5316\u603B\u7ED3" aria-hidden="true">#</a> \u524D\u7AEF\u4F18\u5316\u603B\u7ED3</h1><p>\u5207\u5165\u6B63\u9898\u4E4B\u524D\uFF0C\u5148\u770B\u4E0B\u5E73\u65F6\u5982\u4F55\u67E5\u770B\u9875\u9762\u6027\u80FD</p><h3 id="window-performance" tabindex="-1"><a class="header-anchor" href="#window-performance" aria-hidden="true">#</a> window.performance</h3><p><code>window.performance</code> \u662F\u7528\u6765\u6D4B\u91CF\u7F51\u9875\u548CWeb\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FDapi\uFF0C<code>window.performance</code> \u91CC\u9762\u5305\u542B\u4E86\u5F88\u591A\u5C5E\u6027\uFF0C\u5176\u4E2D\u4E00\u4E2A <code>timing</code> \u5C5E\u6027\u5305\u542B\u4E86\u7F51\u7EDC\u3001\u89E3\u6790\u7B49\u4E00\u7CFB\u5217\u7684\u65F6\u95F4\u6570\u636E</p><p>\u501F\u52A9\u8FD9\u4E2A <code>performance</code>\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6211\u4EEC\u9700\u8981\u7684\u767D\u5C4F\u548C\u9996\u5C4F\u65F6\u95F4</p><ul><li><p>DNS\u67E5\u8BE2\u8017\u65F6 = domainLookupEnd - domainLookupStart</p></li><li><p>TCP\u94FE\u63A5\u8017\u65F6 = connectEnd - connectStart</p></li><li><p>request\u8BF7\u6C42\u8017\u65F6 = responseEnd - responseStart</p></li><li><p>\u89E3\u6790dom\u6811\u8017\u65F6 = domComplete - domInteractive</p></li><li><p>\u767D\u5C4F\u65F6\u95F4 = domloading - fetchStart</p></li><li><p>domready\u53EF\u64CD\u4F5C\u65F6\u95F4 = domContentLoadedEventEnd - fetchStart</p></li><li><p>onload\u603B\u4E0B\u8F7D\u65F6\u95F4 = loadEventEnd - fetchStart</p></li></ul><p>\u56DE\u987E\u4E00\u4E2A\u8DDF\u672C\u6587\u65E0\u5173\u7684\u95EE\u9898 DOMContentLoaded vs load</p><ul><li><p>\u5F53\u521D\u59CB\u7684 HTML \u6587\u6863\u88AB\u5B8C\u5168\u52A0\u8F7D\u548C\u89E3\u6790\u5B8C\u6210\u4E4B\u540E\uFF0CDOMContentLoaded \u4E8B\u4EF6\u88AB\u89E6\u53D1\uFF0C\u6B64\u65F6\u4E0D\u5305\u542B\u6837\u5F0F\u8868\u3001\u56FE\u50CF\u7B49\u52A0\u8F7D\u5B8C\u6210</p></li><li><p>load \u662F\u6307\u9875\u9762\u4E0A\u6240\u6709\u7684\u8D44\u6E90\uFF08\u56FE\u7247\uFF0C\u97F3\u9891\uFF0C\u89C6\u9891\u7B49\uFF09\u52A0\u8F7D\u5B8C\u6210</p></li></ul><h2 id="\u56FE\u7247\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u76F8\u5173" aria-hidden="true">#</a> \u56FE\u7247\u76F8\u5173</h2><h3 id="\u56FE\u7247\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u56FE\u7247\u61D2\u52A0\u8F7D</h3><ol><li><p>\u9996\u5148\uFF0C\u5C06\u56FE\u7247\u7684\u5730\u5740\u653E\u5728\u5176\u5B83\u5C5E\u6027(data-url)\u4E2D\uFF0C\u800C\u4E0D\u662F src\u3002</p></li><li><p>\u9875\u9762\u52A0\u8F7D\u65F6\u6839\u636E scrollTop \u7684\u503C\u5224\u65AD\u56FE\u7247\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF,\u5982\u679C\u5728\u53EF\u89C6\u533A\u57DF\uFF0C\u5219\u5C06 data-url \u5C5E\u6027\u4E2D\u7684\u503C\u53D6\u51FA\u5B58\u653E\u5230src\u5C5E\u6027\u4E2D\uFF08\u9996\u5C4F\u7684\u56FE\u7247\u53EF\u4EE5\u76F4\u63A5\u52A0\u8F7D\uFF09\u3002</p></li><li><p>\u5728\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u5224\u65AD\u56FE\u7247\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF\uFF0C\u5982\u679C\u5728\uFF0C\u5219\u5C06 data-url \u5C5E\u6027\u4E2D\u7684\u503C\u653E\u5230 src \u5C5E\u6027\u4E2D</p></li></ol><p>\u5982\u4F55\u5224\u65AD\u56FE\u7247\u5728\u53EF\u89C6\u533A\u57DF\uFF1F</p><ol><li><p>\u6839\u636E\u6EDA\u52A8\u6761\u9AD8\u5EA6\u548C\u56FE\u7247\u4F4D\u7F6E\u4FE1\u606F\u8FDB\u884C\u5224\u65AD</p></li><li><p>\u4F7F\u7528 <code>Intersection Observer API</code> (\u63A8\u8350)</p></li></ol><h3 id="css-sprite" tabindex="-1"><a class="header-anchor" href="#css-sprite" aria-hidden="true">#</a> css sprite</h3><p>css sprite\uFF08CSS\u7CBE\u7075\u6216\u8005\u96EA\u78A7\u56FE\uFF09\uFF0C\u5373\u5C06\u51E0\u4E2A\u5C0F\u7684\u56FE\u7247\u5408\u5E76\u5728\u4E00\u5F20\u56FE\u7247\u4E2D\uFF0C\u5229\u7528 <code>background-position</code> \u6765\u663E\u793A\u5BF9\u5E94\u7684\u56FE\u7247</p><p>\u8FD9\u79CD\u65B9\u5F0F\u7684\u4F18\u70B9\u8868\u73B0\u5728\uFF1A</p><ul><li><p>\u51CF\u5C11\u4E86\u8BF7\u6C42\u8D44\u6E90\u7684\u8BF7\u6C42</p></li><li><p>\u53EF\u4EE5\u5229\u7528\u5230\u7F13\u5B58</p></li></ul><p>\u8FD9\u79CD\u65B9\u5F0F\u8981\u6CE8\u610F\u5408\u5E76\u56FE\u7247\u7684\u5927\u5C0F\uFF0C\u8FC7\u5927\u7684\u8BDD\u53CD\u800C\u9002\u5F97\u5176\u53CD</p><h3 id="base64" tabindex="-1"><a class="header-anchor" href="#base64" aria-hidden="true">#</a> base64</h3><p>\u4F18\u70B9\uFF1A\u65E0\u9700\u989D\u5916\u7684\u8BF7\u6C42</p><p>\u7F3A\u70B9\uFF1A\u989D\u5916\u589E\u52A0\u4E86 HTML/CSS \u6587\u4EF6\u7684\u5927\u5C0F</p><h3 id="\u5B57\u4F53\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53\u56FE\u6807" aria-hidden="true">#</a> \u5B57\u4F53\u56FE\u6807</h3><p>\u4F18\u70B9\uFF1A\u65E0\u9700\u989D\u5916\u7684\u8BF7\u6C42\uFF0C\u4F7F\u7528\u7075\u6D3B\uFF08\u53EF\u4EE5\u65B9\u4FBF\u5F97\u63A7\u5236\u5927\u5C0F\u3001\u989C\u8272\u7B49\uFF09</p><h2 id="\u9996\u5C4F\u6E32\u67D3\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u9996\u5C4F\u6E32\u67D3\u76F8\u5173" aria-hidden="true">#</a> \u9996\u5C4F\u6E32\u67D3\u76F8\u5173</h2><h3 id="\u5EF6\u8FDF\u52A0\u8F7D-js-\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u52A0\u8F7D-js-\u8D44\u6E90" aria-hidden="true">#</a> \u5EF6\u8FDF\u52A0\u8F7D JS \u8D44\u6E90</h3><p>DOM \u6E32\u67D3\u548C JS \u6267\u884C\u662F\u4E92\u65A5\u7684\uFF0C\u6240\u4EE5\u6B63\u5E38\u60C5\u51B5\u4E0B\u6211\u4EEC\u5E94\u8BE5\u4F18\u5148\u8FDB\u884C DOM \u7684\u6E32\u67D3\uFF0C\u4F18\u5316\u65B9\u5F0F\uFF1A</p><ul><li><p>JS\u811A\u672C\u7684\u52A0\u8F7D\u548C\u6267\u884C\u5C3D\u91CF\u540E\u5728\u6587\u6863\u540E\u9762</p></li><li><p>\u52A0\u8F7D\u5916\u90E8 JS \u8D44\u6E90\u65F6\u6DFB\u52A0 <code>defer</code> \u6216 <code>async</code> \u5C5E\u6027</p></li></ul><p><strong>defer \u548C async \u5728\u7F51\u7EDC\u8BFB\u53D6\u8FD9\u5757\u662F\u4E00\u6837\u90FD\u662F\u5F02\u6B65\u7684</strong>\u3002\u533A\u522B\u5728\u4E8E\uFF1A</p><p><img src="'+r+`" alt=""></p><ul><li><p><code>defer</code> \u5C5E\u6027\u811A\u672C\u7684\u6267\u884C\u662F\u5728\u6240\u6709\u5143\u7D20\u89E3\u6790\u5B8C\u6210\u4E4B\u540E\uFF0C<code>DOMContentLoaded</code> \u4E8B\u4EF6\u89E6\u53D1\u4E4B\u524D\u5B8C\u6210\uFF0C\u5E76\u4E14\u5F53\u5305\u542B\u591A\u4E2A <code>defer</code> \u6807\u7B7E\u7684\u4F20\u672C\u65F6\uFF0C\u5B83\u662F\u6309\u7167\u52A0\u8F7D\u987A\u5E8F\u6267\u884C\u811A\u672C\u7684</p></li><li><p><code>async</code> \u7684\u811A\u672C\u5E76\u4E0D\u4FDD\u8BC1\u6309\u7167\u6307\u5B9A\u5B83\u4EEC\u7684\u5148\u540E\u987A\u5E8F\u6267\u884C\u3002\u5BF9\u5B83\u6765\u8BF4\u811A\u672C\u7684\u52A0\u8F7D\u548C\u6267\u884C\u662F\u7D27\u7D27\u6328\u7740\u7684\uFF0C\u6240\u4EE5\u4E0D\u7BA1\u4F60\u58F0\u660E\u7684\u987A\u5E8F\u5982\u4F55\uFF0C\u53EA\u8981\u5B83\u52A0\u8F7D\u5B8C\u4E86\u5C31\u4F1A\u7ACB\u523B\u6267\u884C</p></li></ul><h3 id="\u4EE3\u7801\u62C6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u62C6\u89E3" aria-hidden="true">#</a> \u4EE3\u7801\u62C6\u89E3</h3><p>\u4E3B\u8981\u662F\u4E3A\u4E86\u51CF\u5C11\u4EE3\u7801\u4F53\u79EF</p><ul><li><p>\u4EE3\u7801\u6A21\u5757\u4EE3\uFF0C\u5F00\u542F webpack tree shiking\u3001\u5F00\u542F\u538B\u7F29</p></li><li><p>\u6309\u9700\u52A0\u8F7D\u7EC4\u4EF6</p></li></ul><h2 id="\u9884\u52A0\u8F7D-\u9884\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u9884\u52A0\u8F7D-\u9884\u89E3\u6790" aria-hidden="true">#</a> \u9884\u52A0\u8F7D&amp;\u9884\u89E3\u6790</h2><p>\u901A\u8FC7 <code>link</code> \u6807\u7B7E\u7684 <code>rel</code> \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u8D44\u6E90\u7684\u9884\u52A0\u8F7D\u4E0E\u9884\u89E3\u6790</p><h3 id="reload" tabindex="-1"><a class="header-anchor" href="#reload" aria-hidden="true">#</a> reload</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>reload</code> \u4E00\u822C\u7528\u4E8E\u5F53\u524D\u9875\u9762\u8981\u4F7F\u7528\u811A\u672C</p><h3 id="prefetch" tabindex="-1"><a class="header-anchor" href="#prefetch" aria-hidden="true">#</a> prefetch</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0E <code>prefetch</code> \u7C7B\u4F3C\uFF0C\u4F46\u5B83\u662F\u610F\u56FE\u9884\u83B7\u53D6\u4E00\u4E9B\u8D44\u6E90\uFF0C\u4EE5\u5907\u4E0B\u4E00\u4E2A\u5BFC\u822A/\u9875\u9762\u4F7F\u7528\uFF08\u6BD4\u5982\uFF0C\u5F53\u4F60\u53BB\u5230\u4E0B\u4E00\u4E2A\u9875\u9762\u65F6\uFF09\u3002</p><p><strong>webpack code split\u65F6\u914D\u7F6Ereload&amp;prefetch</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPrefetch: true */</span> <span class="token string">&#39;./path/to/LoginModal.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPreload: true */</span> <span class="token string">&#39;ChartingLibrary&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dns-\u9884\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#dns-\u9884\u89E3\u6790" aria-hidden="true">#</a> DNS \u9884\u89E3\u6790</h3><p>dns-prefetch (DNS \u9884\u83B7\u53D6) \u662F\u5C1D\u8BD5\u5728\u8BF7\u6C42\u8D44\u6E90\u4E4B\u524D\u89E3\u6790\u57DF\u540D\u3002\u8FD9\u53EF\u80FD\u662F\u540E\u9762\u8981\u52A0\u8F7D\u7684\u6587\u4EF6\uFF0C\u4E5F\u53EF\u80FD\u662F\u7528\u6237\u5C1D\u8BD5\u6253\u5F00\u7684\u94FE\u63A5\u76EE\u6807</p><p><strong>\u9875\u9762\u4F7F\u7528\u9884\u89E3\u6790</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x-dns-prefetch-control<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!--\u544A\u8BC9\u6D4F\u89C8\u5668\uFF0C\u5F53\u524D\u9875\u9762\u8981\u505ADNS\u9884\u89E3\u6790--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dns-prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//bdimg.share.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!--\u4F7F\u7528link\u6807\u7B7E\u6765\u5F3A\u5236\u67E5\u8BE2\u7279\u5B9A\u4E3B\u673A\u540D--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>HTTP\u4E2D\u4F7F\u7528\u9884\u89E3\u6790</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Link: &lt;https://fonts.gstatic.com/&gt;; rel=dns-prefetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>dns-prefetch \u4EC5\u5BF9\u8DE8\u57DF\u57DF\u4E0A\u7684 DNS\u67E5\u627E\u6709\u6548\uFF0C\u56E0\u6B64\u8BF7\u907F\u514D\u4F7F\u7528\u5B83\u6765\u6307\u5411\u60A8\u7684\u7AD9\u70B9\u6216\u57DF\u3002\u8FD9\u662F\u56E0\u4E3A\uFF0C\u5230\u6D4F\u89C8\u5668\u770B\u5230\u63D0\u793A\u65F6\uFF0C\u60A8\u7AD9\u70B9\u57DF\u80CC\u540E\u7684IP\u5DF2\u7ECF\u88AB\u89E3\u6790</p></div><h3 id="prerender" tabindex="-1"><a class="header-anchor" href="#prerender" aria-hidden="true">#</a> prerender</h3><p>dns-prefetch \u53EA\u662F\u9884\u89E3\u6790 DNS\uFF0C<code>prerender</code> \u9664\u4E86\u53EF\u4EE5\u5B8C\u6210 DNS \u7684\u9884\u89E3\u6790\u5916\uFF0C\u8FD8\u53EF\u4EE5\u9884\u5EFA\u7ACB TCP \u8FDE\u63A5</p><p>\u7C9F\u5B50\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.domain.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preconnect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="prerender-1" tabindex="-1"><a class="header-anchor" href="#prerender-1" aria-hidden="true">#</a> prerender</h3><p>prerender \u548C prefetch \u975E\u5E38\u76F8\u4F3C\uFF0C\u5B83\u4EEC\u90FD\u4F18\u5316\u4E86\u53EF\u80FD\u5BFC\u822A\u5230\u7684\u4E0B\u4E00\u9875\u4E0A\u7684\u8D44\u6E90\u7684\u52A0\u8F7D\uFF0C\u533A\u522B\u662F prerender \u5728\u540E\u53F0\u6E32\u67D3\u4E86\u6574\u4E2A\u9875\u9762\u53CA\u6574\u4E2A\u9875\u9762\u6240\u6709\u7684\u8D44\u6E90\u3002</p><p>\u7C9F\u5B50\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prerender<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.keycdn.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9875\u9762\u6E32\u67D3\u76F8\u5173\u4F18\u5148" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6E32\u67D3\u76F8\u5173\u4F18\u5148" aria-hidden="true">#</a> \u9875\u9762\u6E32\u67D3\u76F8\u5173\u4F18\u5148</h2><p>\u9875\u9762\u6E32\u67D3\u7684\u4F18\u5316\u5927\u81F4\u65B9\u5411\u4E3A</p><ul><li><p>\u5C3D\u91CF\u907F\u514D\u8FC7\u591A\u5F97\u89E6\u53D1\u91CD\u6392\u91CD\u7ED8</p></li><li><p>\u5C3D\u91CF\u63A7\u5236 DOM \u5143\u7D20\u6570\u91CF</p></li></ul><p><strong>\u907F\u514D\u8FC7\u591A\u5F97\u89E6\u53D1\u91CD\u6392\u91CD\u7ED8\uFF0C\u4F18\u5316\u65B9\u5F0F\u6709\uFF1A</strong></p><ul><li><p>\u5229\u7528\u8282\u6D41\u3001\u9632\u6296\u51CF\u5C11\u6E32\u67D3\u9891\u7387</p></li><li><p>\u5229\u7528 <code>documentFragment</code> \u5904\u7406\u5927\u91CF\u7684 DOM \u64CD\u4F5C</p></li><li><p>\u5229\u7528 <code>display:none</code> =&gt; <code>\u5927\u91CF\u7684 DOM \u64CD\u4F5C</code> =&gt; <code>display:block</code> \u65B9\u5F0F\u5904\u7406\u5927\u91CF\u7684 DOM \u64CD\u4F5C</p></li><li><p>\u4F7F\u7528CSS\u52A8\u753B\u4EE3\u66FFJS\u52A8\u753B</p><p>JS \u52A8\u753B\u4F1A\u89E6\u53D1\u9AD8\u9891\u7387\u7684\u91CD\u6392\u91CD\u7ED8(\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528 <code>requestAnimationFrame</code> \u4F18\u5316)</p><p>CSS3\u52A8\u753B\u53EF\u4EE5\u5F00\u59CBCPU\u786C\u4EF6\u52A0\u901F\uFF0C\u7B80\u5355\u52A8\u753B\u4F7F\u7528 CSS3 \u5B9E\u73B0\u4EE3\u7801\u6BD4\u8F83\u7B80\u6D01\uFF0C\u4F46\u662F\u5F3A\u5236\u4F7F\u7528\u4E86 GPU \u7684\u786C\u4EF6\u52A0\u901F\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u6D4F\u89C8\u5668\u4E00\u76F4\u5904\u4E8E\u9AD8\u8D1F\u8377\u8FD0\u8F6C\u7684\u72B6\u6001\uFF0C\u8FD9\u53CD\u800C\u4F1A\u8BA9\u52A8\u753B\u53D8\u7684\u5361\u987F</p></li></ul><p><strong>\u5C3D\u91CF\u63A7\u5236 DOM \u5143\u7D20\u6570\u91CF</strong></p><p>\u5982\u679C\u65E0\u6CD5\u907F\u514D\u8981\u51FA\u73B0\u7684\u5927\u91CF\u7684 DOM \u5143\u7D20\uFF0C\u5219\u53EF\u4F7F\u7528 <code>\u865A\u62DF\u6EDA\u52A8</code>\uFF08eg\uFF1A<code>demo/vite-vue-app/</code>\uFF09\u3001<code>\u5206\u9875</code> \u7B49\u65B9\u5F0F\u8FDB\u884C\u4F18\u5316</p><h2 id="spa\u9879\u76EE\u7684\u9996\u5C4F\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#spa\u9879\u76EE\u7684\u9996\u5C4F\u4F18\u5316" aria-hidden="true">#</a> SPA\u9879\u76EE\u7684\u9996\u5C4F\u4F18\u5316</h2><p>SPA \u9996\u5C4F\u4F18\u5316\u7684\u65B9\u6CD5\uFF1A</p>`,67),u=a("li",null,[a("p",null,"\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u4E0D\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u9879\u76EE\u7684\u590D\u6742\u5EA6\u5C31\u589E\u5927\u4E86\u5F88\u591A")],-1),h=a("p",null,"\u9884\u6E32\u67D3\uFF0C\u6253\u5305\u540E\u7ED9\u9996\u9875\u7684\u6302\u8F7D\u5143\u7D20\u6DFB\u52A0\u5185\u5BB9\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u5728\u52A0\u8F7D\u9875\u9762\u540E\u53CA\u5728\u6846\u67B6\u6302\u8F7D\u5185\u5BB9\u4E4B\u524D\u5C31\u4F1A\u5148\u663E\u793A\u4E8B\u5148\u6DFB\u52A0\u7684\u5185\u5BB9\u3002",-1),k=n("\u4EE5 Vue \u9879\u76EE\u4E3A\u4FBF\uFF0C\u9664\u4E86\u81EA\u5B9A\u4E49\u5185\u5BB9\u5916\uFF0CVue \u5B98\u65B9\u63D0\u4F9B\u4E86 "),m={href:"https://github.com/chrisvfritz/prerender-spa-plugin",target:"_blank",rel:"noopener noreferrer"},g=n("PrerenderSPAPlugin"),v=n(" \u63D2\u4EF6\u6765\u5B9E\u73B0\u9884\u6E32\u67D3 ,\u5177\u4F53\u914D\u7F6E\u65B9\u5F0F\u53EF\u4EE5\u53C2\u6570 "),b={href:"https://codebeat.gitee.io/lanjz/Vue3/%E9%A2%84%E6%B8%B2%E6%9F%93.html",target:"_blank",rel:"noopener noreferrer"},f=n("Vue\u9884\u6E32\u67D3"),q=t('<h2 id="http-\u8FDE\u63A5\u901F\u5EA6\u76F8\u5173\u7684\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#http-\u8FDE\u63A5\u901F\u5EA6\u76F8\u5173\u7684\u4F18\u5316" aria-hidden="true">#</a> HTTP \u8FDE\u63A5\u901F\u5EA6\u76F8\u5173\u7684\u4F18\u5316</h2><h3 id="\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a> \u7F13\u5B58</h3><p>\u7F13\u5B58\u662F\u6700\u6700\u6700\u6700\u5E38\u89C1\u7684\u4F18\u5316\u624B\u6BB5\u4E86</p><h3 id="http\u6B63\u6587\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#http\u6B63\u6587\u538B\u7F29" aria-hidden="true">#</a> HTTP\u6B63\u6587\u538B\u7F29</h3><p><code>Content-Encoding: gzip</code></p><p>\u5185\u5BB9\u7F16\u7801\u7684\u76EE\u7684\u662F\u4F18\u5316\u4F20\u8F93\u5185\u5BB9\u7684\u5927\u5C0F\uFF0C\u63D0\u9AD8\u901A\u4FE1\u4F20\u8F93\u901F\u5EA6</p><p>\u9664\u4E86 gzip \u8FD8\u6709\u5176\u5B83\u7684\u538B\u7F29\u65B9\u5F0F\uFF0C\u5982 Brotil \u3002\u76F8\u6BD4 gzip Brotli \u538B\u7F29\u7B97\u6CD5\u5177\u6709\u51E0\u4E2A\u7279\u70B9</p><ul><li><p>\u9488\u5BF9\u5E38\u89C1\u7684 Web \u8D44\u6E90\u5185\u5BB9\uFF0CBrotli \u7684\u6027\u80FD\u76F8\u6BD4 Gzip \u63D0\u9AD8\u4E86 17-25%\uFF1B</p></li><li><p>\u5F53 Brotli \u538B\u7F29\u7EA7\u522B\u4E3A 1 \u65F6\uFF0C\u538B\u7F29\u7387\u6BD4 Gzip \u538B\u7F29\u7B49\u7EA7\u4E3A 9\uFF08\u6700\u9AD8\uFF09\u65F6\u8FD8\u8981\u9AD8\uFF1B</p></li><li><p>\u5728\u5904\u7406\u4E0D\u540C HTML \u6587\u6863\u65F6\uFF0CBrotli \u4F9D\u7136\u80FD\u591F\u63D0\u4F9B\u975E\u5E38\u9AD8\u7684\u538B\u7F29\u7387\u3002</p></li></ul><p><strong>\u517C\u5BB9\u6027\uFF1A\u9664\u4E86 IE \u548C Opera Mini \u4E4B\u5916\uFF0C\u51E0\u4E4E\u6240\u6709\u7684\u4E3B\u6D41\u6D4F\u89C8\u5668\u90FD\u5DF2\u652F\u6301 Brotli \u7B97\u6CD5</strong></p><h3 id="\u4F7F\u7528-cdn-\u52A0\u8F7D\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-cdn-\u52A0\u8F7D\u8D44\u6E90" aria-hidden="true">#</a> \u4F7F\u7528 CDN \u52A0\u8F7D\u8D44\u6E90</h3><p>CDN \u7684\u4F7F\u7528\u4E3B\u8981\u662F\u4E3A\u4E86\u89E3\u51B3\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ol><li><p>\u7A81\u7834\u6D4F\u89C8\u5668\u540C\u4E00\u65F6\u95F4\u5BF9\u76F8\u540C\u57DF\u540D\u7684\u8FDE\u63A5\u6570\u91CF\u9650\u5236</p></li><li><p>\u6700\u8FD1\u53D6\u6750\u51CF\u5C11\u7F51\u7EDC\u5EF6\u8FDF</p></li></ol><h3 id="\u4F7F\u7528http2-0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528http2-0" aria-hidden="true">#</a> \u4F7F\u7528HTTP2.0</h3><p>HTTP2 \u7279\u70B9\uFF1A</p><ul><li><p>\u591A\u8DEF\u590D\u7528</p></li><li><p>\u538B\u7F29Headers</p></li><li><p>Sever Push</p></li></ul><h2 id="\u51CF\u5C11\u963B\u585E" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u963B\u585E" aria-hidden="true">#</a> \u51CF\u5C11\u963B\u585E</h2><p>\u8FD9\u4E00\u5757\u7684\u4F18\u5316\u4E3B\u8981\u9488\u5BF9\u8017\u65F6\u8BA1\u7B97\u4EFB\u52A1\uFF0C\u53EF\u4F7F\u7528 <code>Web Workers </code></p>',17);function _(x,S){const s=c("ExternalLinkIcon");return o(),l("div",null,[d,a("ul",null,[u,a("li",null,[h,a("p",null,[k,a("a",m,[g,e(s)]),v,a("a",b,[f,e(s)])])])]),q])}var P=p(i,[["render",_],["__file","\u524D\u7AEF\u4F18\u5316\u603B\u7ED3.html.vue"]]);export{P as default};
