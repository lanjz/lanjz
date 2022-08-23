import{_ as n,o as s,c as a,d as t}from"./app.8ae844c0.js";var p="/lanjz/assets/index.9c823db7.gif";const e={},o=t(`<h1 id="intersection-observer-api" tabindex="-1"><a class="header-anchor" href="#intersection-observer-api" aria-hidden="true">#</a> Intersection Observer API</h1><p>\u770B\u4E0B\u4E0B\u9762\u7684\u9700\u6C42\u573A\u666F\uFF1A</p><ul><li><p>\u56FE\u7247\u61D2\u52A0\u8F7D\u2014\u2014\u5F53\u56FE\u7247\u6EDA\u52A8\u5230\u53EF\u89C1\u65F6\u624D\u8FDB\u884C\u52A0\u8F7D</p></li><li><p>\u5185\u5BB9\u65E0\u9650\u6EDA\u52A8\u2014\u2014\u4E5F\u5C31\u662F\u7528\u6237\u6EDA\u52A8\u5230\u63A5\u8FD1\u5185\u5BB9\u5E95\u90E8\u65F6\u76F4\u63A5\u52A0\u8F7D\u66F4\u591A\uFF0C\u800C\u65E0\u9700\u7528\u6237\u64CD\u4F5C\u7FFB\u9875\uFF0C\u7ED9\u7528\u6237\u4E00\u79CD\u7F51\u9875\u53EF\u4EE5\u65E0\u9650\u6EDA\u52A8\u7684\u9519\u89C9</p></li><li><p>\u68C0\u6D4B\u5E7F\u544A\u7684\u66DD\u5149\u60C5\u51B5\u2014\u2014\u4E3A\u4E86\u8BA1\u7B97\u5E7F\u544A\u6536\u76CA\uFF0C\u9700\u8981\u77E5\u9053\u5E7F\u544A\u5143\u7D20\u7684\u66DD\u5149\u60C5\u51B5</p></li><li><p>\u5728\u7528\u6237\u770B\u89C1\u67D0\u4E2A\u533A\u57DF\u65F6\u6267\u884C\u4EFB\u52A1\u6216\u64AD\u653E\u52A8\u753B</p></li></ul><p>\u4E4B\u524D\u4E3A\u4E86\u5B9E\u73B0\u4E0A\u8FF0\u529F\u80FD\uFF0C\u9700\u8981\u76D1\u542C <code>scroll</code> \u4E8B\u4EF6\u5E76\u4E0D\u65AD\u5F97\u8C03\u7528 <code>Element.getBoundingClientRect()</code> \u65B9\u6CD5\u4EE5\u83B7\u53D6\u76F8\u5173\u5143\u7D20\u7684\u8FB9\u754C\u4FE1\u606F\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53EF\u80FD\u4F1A\u9020\u6210\u6027\u80FD\u95EE\u9898</p><p>\u6240\u4EE5Intersection Observer API\u63D0\u4F9B\u4E86\u4E00\u79CD\u5F02\u6B65\u68C0\u6D4B\u76EE\u6807\u5143\u7D20\u4E0E\u7956\u5148\u5143\u7D20\u6216 viewport \u76F8\u4EA4\u60C5\u51B5\u53D8\u5316\u7684\u65B9\u6CD5\uFF0CIntersection Observer API \u5141\u8BB8\u4F60\u914D\u7F6E\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5F53\u4EE5\u4E0B\u60C5\u51B5\u53D1\u751F\u65F6\u4F1A\u88AB\u8C03\u7528\uFF1A</p><ul><li><p>\u6BCF\u5F53\u76EE\u6807(target)\u5143\u7D20\u4E0E\u8BBE\u5907\u89C6\u7A97\u6216\u8005\u5176\u4ED6\u6307\u5B9A\u5143\u7D20\u53D1\u751F\u4EA4\u96C6\u7684\u65F6\u5019\u6267\u884C\u3002\u8BBE\u5907\u89C6\u7A97\u6216\u8005\u5176\u4ED6\u5143\u7D20\u6211\u4EEC\u79F0\u5B83\u4E3A\u6839\u5143\u7D20\u6216\u6839(root)</p></li><li><p>Observer\u7B2C\u4E00\u6B21\u76D1\u542C\u76EE\u6807\u5143\u7D20\u7684\u65F6\u5019</p></li></ul><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p><strong>\u521B\u5EFA\u4E00\u4E2A intersection observer</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#scrollArea&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rootMargin</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Each entry describes an intersection change for one observed</span>
    <span class="token comment">// target element:</span>
    <span class="token comment">//   entry.boundingClientRect</span>
    <span class="token comment">//   entry.intersectionRatio</span>
    <span class="token comment">//   entry.intersectionRect</span>
    <span class="token comment">//   entry.isIntersecting</span>
    <span class="token comment">//   entry.rootBounds</span>
    <span class="token comment">//   entry.target</span>
    <span class="token comment">//   entry.time</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6DFB\u52A0\u89C2\u5BDF\u5143\u7D20</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#listItem&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>options</code> \u914D\u7F6E\u8BF4\u660E\uFF1A</strong></p><ul><li><p><code>root</code>: \u6307\u5B9A\u6839(root)\u5143\u7D20\uFF0C\u7528\u4E8E\u68C0\u67E5\u76EE\u6807\u7684\u53EF\u89C1\u6027\u3002\u5FC5\u987B\u662F\u76EE\u6807\u5143\u7D20\u7684\u7236\u7EA7\u5143\u7D20\u3002\u5982\u679C\u672A\u6307\u5B9A\u6216\u8005\u4E3Anull\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u6D4F\u89C8\u5668\u89C6\u7A97</p></li><li><p><code>rootMargin</code>\uFF1A\u6839(root)\u5143\u7D20\u7684\u5916\u8FB9\u8DDD\u3002\u7C7B\u4F3C\u4E8E CSS \u4E2D\u7684 <code>margin</code> \u5C5E\u6027\uFF0C\u6BD4\u5982 &quot;10px 20px 30px 40px&quot; (top, right, bottom, left)\u3002\u53EF\u4EE5\u7406\u89E3\u4E3A\u5F53\u89C2\u5BDF\u8005\u63A5\u8FD1\u5BB9\u5668\u591A\u8FDC\u65F6\u5C31\u5F53\u505A\u662F\u8FDB\u5165\u5BB9\u5668\u533A\u57DF\u4E86</p></li><li><p><code>threshold</code>\uFF1A<code>target\u5143\u7D20</code> \u548C <code>root\u5143\u7D20</code> \u76F8\u4EA4\u7A0B\u5EA6\u8FBE\u5230\u8BE5\u503C\u7684\u65F6\u5019\u89E6\u53D1\u56DE\u8C03\u3002\u7C9F\u5B50\uFF1A</p><ol><li><p>\u60F3\u8981 <code>target\u5143\u7D20</code> \u5728 <code>root\u5143\u7D20</code> \u4E2D\u7684\u53EF\u89C1\u6027\u8D85\u8FC750%\u7684\u65F6\u5019\u89E6\u53D1\u56DE\u8C03\uFF0C\u53EF\u4EE5\u6307\u5B9A\u8BE5\u5C5E\u6027\u503C\u4E3A0.5</p></li><li><p>\u5982\u679C\u60F3\u8981 <code>target\u5143\u7D20</code> \u5728 <code>root\u5143\u7D20</code> \u7684\u53EF\u89C1\u7A0B\u5EA6\u6BCF\u591A 25% \u5C31\u6267\u884C\u4E00\u6B21\u56DE\u8C03\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u6570\u7EC4<code>[0, 0.25, 0.5, 0.75, 1]</code></p></li></ol></li></ul><p><strong><code>callback</code> \u8FD4\u56DE\u53C2\u6570\u8BF4\u660E\uFF1A</strong></p><ul><li><p>entries [IntersectionObserverEntry \u5BF9\u8C61]\uFF1A\u89E6\u53D1\u56DE\u8C03\u5143\u7D20\u7684\u4FE1\u606F\uFF0C\u6BCF\u4E2A <code>IntersectionObserverEntry \u5BF9\u8C61</code> \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027</p><ul><li><p>boundingClientRect\uFF1A\u76EE\u6807\u5143\u7D20\u7684\u8FB9\u754C\u4FE1\u606F\uFF0C\u540C <code>Element.getBoundingClientRect()</code></p></li><li><p>intersectionRatio\uFF1A\u76F8\u4EA4\u7A0B\u5EA6</p></li><li><p>intersectionRect\uFF1A\u76EE\u6807\u5DF2\u8FDB\u5165\u533A\u57DF\u7684\u8FB9\u754C\u4FE1\u606F\uFF0C\u76F8\u5173\u4E8E\u76EE\u6807\u4E0E <code>root\u5143\u7D20</code> \u7684\u4EA4\u96C6\u90E8\u5206\u7684 <code>boundingClientRect</code></p></li><li><p>isIntersecting: \u76EE\u6807\u5143\u7D20\u662F\u5426\u8FDB\u5165\u533A\u57DF</p></li><li><p>rootBounds\uFF1A<code>root\u5143\u7D20</code> \u7684\u8FB9\u754C\u4FE1\u606F\uFF0C\u540C <code>root\u5143\u7D20.getBoundingClientRect()</code></p></li><li><p>target: \u5F53\u524D\u76EE\u6807\u5143\u7D20</p></li><li><p>time\uFF1A\u4EA4\u53C9\u88AB\u89E6\u53D1\u7684\u65F6\u95F4\u7684\u65F6\u95F4\u6233</p></li></ul></li><li><p>observer\uFF1A\u89C2\u5BDF\u8005\u7684\u5217\u8868</p></li></ul><h2 id="\u5B9E\u6218\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u6218\u4F8B\u5B50" aria-hidden="true">#</a> \u5B9E\u6218\u4F8B\u5B50</h2><p>\u4F7F\u7528 <code>Intersection Observer API</code> \u505A\u7684\u4E00\u4E2A\u6EDA\u52A8\u7D22\u5F15\u5217\u8868</p><p><img src="`+p+`" alt=""></p><p>\u4EE3\u7801\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index-num<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{<span class="token punctuation">&#39;</span>act<span class="token punctuation">&#39;</span>: act === i}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollBox-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollBox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollBox<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>indexItem<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          {{i}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;IndexList&quot;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;G&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;H&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;J&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;K&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;N&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;P&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;R&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">act</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">initInterSectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.$refs.scrollBox&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>scrollBox<span class="token punctuation">)</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>interSectionInstance<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">let</span> rootDom <span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>scrollBox
      <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span> rootDom<span class="token punctuation">,</span>
        <span class="token literal-property property">rootMargin</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>interSectionInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;entry&#39;</span><span class="token punctuation">,</span> entry<span class="token punctuation">)</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span><span class="token punctuation">{</span>
            _this<span class="token punctuation">.</span>act <span class="token operator">=</span> entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;alias&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// Each entry describes an intersection change for one observed</span>
          <span class="token comment">// target element:</span>
          <span class="token comment">//   entry.boundingClientRect</span>
          <span class="token comment">//   entry.intersectionRatio</span>
          <span class="token comment">//   entry.intersectionRect</span>
          <span class="token comment">//   entry.isIntersecting</span>
          <span class="token comment">//   entry.rootBounds</span>
          <span class="token comment">//   entry.target</span>
          <span class="token comment">//   entry.time</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">(</span>rootDom<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.item&#39;</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>interSectionInstance<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initInterSectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.index-num</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token selector">.item</span><span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.item.act</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.scrollBox-box</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
  <span class="token selector">.base</span><span class="token punctuation">{</span>
    //<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.scrollBox</span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #000<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token selector">.item</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 1px #666<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[o];function l(i,u){return s(),a("div",null,c)}var k=n(e,[["render",l],["__file","IntersectionObserver.html.vue"]]);export{k as default};
