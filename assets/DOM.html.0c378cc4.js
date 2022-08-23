import{_ as a,o as t,c as p,b as n,a as e,d as o,e as c,r as l}from"./app.8ae844c0.js";const i={},u=o(`<h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><h3 id="domcontentloaded" tabindex="-1"><a class="header-anchor" href="#domcontentloaded" aria-hidden="true">#</a> DOMContentLoaded</h3><p>DOMContentLoaded \u4E8B\u4EF6\u53D1\u751F\u5728 <code>document</code> \u5BF9\u8C61\u4E0A\uFF0C\u6211\u4EEC\u5FC5\u987B\u4F7F\u7528 <code>addEventListener</code> \u6765\u6355\u83B7\u5B83\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> ready<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E0D\u662F &quot;document.onDOMContentLoaded = ...&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">function</span> <span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;DOM is ready&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u56FE\u7247\u76EE\u524D\u5C1A\u672A\u52A0\u8F7D\u5B8C\u6210\uFF08\u9664\u975E\u5DF2\u7ECF\u88AB\u7F13\u5B58\uFF09\uFF0C\u6240\u4EE5\u56FE\u7247\u7684\u5927\u5C0F\u4E3A 0x0</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Image size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>img<span class="token punctuation">.</span>offsetWidth<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>img<span class="token punctuation">.</span>offsetHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> ready<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>img id<span class="token operator">=</span><span class="token string">&quot;img&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;https://en.js.cx/clipart/train.gif?speed=1&amp;cache=0&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u793A\u4F8B\u4E2D\uFF0C<code>DOMContentLoaded</code> \u5904\u7406\u7A0B\u5E8F\u5728\u6587\u6863\u52A0\u8F7D\u5B8C\u6210\u540E\u89E6\u53D1\uFF0C\u6240\u4EE5\u5B83\u53EF\u4EE5\u67E5\u770B\u6240\u6709\u5143\u7D20\uFF0C\u5305\u62EC\u5B83\u4E0B\u9762\u7684 <code>&lt;img&gt;</code> \u5143\u7D20\u3002</p><p>\u4F46\u662F\uFF0C\u5B83\u4E0D\u4F1A\u7B49\u5F85\u56FE\u7247\u52A0\u8F7D\u3002\u56E0\u6B64\uFF0C<code>alert</code> \u663E\u793A\u5176\u5927\u5C0F\u4E3A\u96F6\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>DOMContentLoaded \u7684\u89E6\u53D1\u6761\u4EF6 -- DOM \u6811\u51C6\u5907\u5C31\u7EEA</p></div><h4 id="domcontentloaded-\u548C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#domcontentloaded-\u548C\u811A\u672C" aria-hidden="true">#</a> DOMContentLoaded \u548C\u811A\u672C</h4><p>\u5F53\u6D4F\u89C8\u5668\u5904\u7406\u4E00\u4E2A HTML \u6587\u6863\uFF0C\u5E76\u5728\u6587\u6863\u4E2D\u9047\u5230 <code>&lt;script&gt;</code> \u6807\u7B7E\u65F6\uFF0C\u5C31\u4F1A\u5728\u7EE7\u7EED\u6784\u5EFA DOM \u4E4B\u524D\u8FD0\u884C\u5B83\u3002\u8FD9\u662F\u4E00\u79CD\u9632\u8303\u63AA\u65BD\uFF0C\u56E0\u4E3A\u811A\u672C\u53EF\u80FD\u60F3\u8981\u4FEE\u6539 DOM\uFF0C\u751A\u81F3\u5BF9\u5176\u6267\u884C <code>document.write</code> \u64CD\u4F5C\uFF0C\u6240\u4EE5 DOMContentLoaded \u5FC5\u987B\u7B49\u5F85\u811A\u672C\u6267\u884C\u7ED3\u675F\u3002</p><p>\u56E0\u6B64\uFF0CDOMContentLoaded \u80AF\u5B9A\u5728\u4E0B\u9762\u7684\u8FD9\u4E9B\u811A\u672C\u6267\u884C\u7ED3\u675F\u4E4B\u540E\u53D1\u751F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;DOM ready!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Library loaded, inline script executed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u9996\u5148\u4F1A\u770B\u5230 \u201CLibrary loaded\u2026\u201D\uFF0C\u7136\u540E\u624D\u4F1A\u770B\u5230 \u201CDOM ready!\u201D\uFF08\u6240\u6709\u811A\u672C\u90FD\u5DF2\u7ECF\u6267\u884C\u7ED3\u675F\uFF09</p><p><strong>\u4E0D\u4F1A\u963B\u585E DOMContentLoaded \u7684\u811A\u672C\u6709\u4E24\u79CD\u65B9\u5F0F</strong></p><ol><li><p>\u5177\u6709 <code>async</code> \u7279\u6027\u7684\u811A\u672C\u4E0D\u4F1A\u963B\u585E DOMContentLoaded</p></li><li><p>\u4F7F\u7528 <code>document.createElement(&#39;script&#39;)</code> \u52A8\u6001\u751F\u6210\u5E76\u6DFB\u52A0\u5230\u7F51\u9875\u7684\u811A\u672C\u4E5F\u4E0D\u4F1A\u963B\u585E DOMContentLoaded</p></li></ol><h4 id="domcontentloaded-\u548C\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#domcontentloaded-\u548C\u6837\u5F0F" aria-hidden="true">#</a> DOMContentLoaded \u548C\u6837\u5F0F</h4><p>\u5916\u90E8\u6837\u5F0F\u8868\u4E0D\u4F1A\u5F71\u54CD DOM\uFF0C\u56E0\u6B64 DOMContentLoaded \u4E0D\u4F1A\u7B49\u5F85\u5B83\u4EEC\u3002</p><p>\u4F46\u8FD9\u91CC\u6709\u4E00\u4E2A\u9677\u9631\u3002\u5982\u679C\u5728\u6837\u5F0F\u540E\u9762\u6709\u4E00\u4E2A\u811A\u672C\uFF0C\u90A3\u4E48\u8BE5\u811A\u672C\u5FC5\u987B\u7B49\u5F85\u6837\u5F0F\u8868\u52A0\u8F7D\u5B8C\u6210\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>link type<span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span> rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;style.css&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token comment">// \u5728\u6837\u5F0F\u8868\u52A0\u8F7D\u5B8C\u6210\u4E4B\u524D\uFF0C\u811A\u672C\u90FD\u4E0D\u4F1A\u6267\u884C</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span>marginTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u56E0\u662F\uFF0C\u811A\u672C\u53EF\u80FD\u60F3\u8981\u83B7\u53D6\u5143\u7D20\u7684\u5750\u6807\u548C\u5176\u4ED6\u4E0E\u6837\u5F0F\u76F8\u5173\u7684\u5C5E\u6027\uFF0C\u5982\u4E0A\u4F8B\u6240\u793A\u3002\u56E0\u6B64\uFF0C\u5B83\u5FC5\u987B\u7B49\u5F85\u6837\u5F0F\u52A0\u8F7D\u5B8C\u6210\u3002</p><p>\u5F53 DOMContentLoaded \u7B49\u5F85\u811A\u672C\u65F6\uFF0C\u5B83\u73B0\u5728\u4E5F\u5728\u7B49\u5F85\u811A\u672C\u524D\u9762\u7684\u6837\u5F0F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-3<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD8\u662F\u4F1A\u7B49\u6837\u5F0F\u52A0\u8F7D\u540E\u624D\u52A0\u8F7D</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;DOM fully loaded and parsed&quot;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;DOM fully loaded and parsed&quot;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap-grid.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u4E0A\u9762\u6240\u63CF\u8FF0\uFF0C <code>script</code> \u91CC\u7684\u811A\u672C\u4ECD\u7136\u9700\u8981\u7B49\u5F85\u6837\u5F0F\u52A0\u8F7D\u5B8C\u6210\uFF0C\u6240\u4EE5\u5F88\u7EF4\u663E\u73B0\u5F97\u9A8C\u8BC1 DOMContentLoaded \u89E6\u53D1\u4E0D\u53D7\u6837\u5F0F\u7684\u52A0\u8F7D\u5F71\u54CD</p>`,24),d={href:"https://zh.javascript.info/onload-ondomcontentloaded#domcontentloaded-he-jiao-ben",target:"_blank",rel:"noopener noreferrer"},r=c("\u9875\u9762\u751F\u547D\u5468\u671F\uFF1ADOMContentLoaded\uFF0Cload\uFF0Cbeforeunload\uFF0Cunload");function k(v,m){const s=l("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",d,[r,e(s)])])])}var b=a(i,[["render",k],["__file","DOM.html.vue"]]);export{b as default};
