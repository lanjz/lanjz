import{_ as n,o as s,c as a,d as t}from"./app.8ae844c0.js";const p={},e=t(`<h1 id="set\u548Cweakset" tabindex="-1"><a class="header-anchor" href="#set\u548Cweakset" aria-hidden="true">#</a> Set\u548CWeakSet</h1><p>Set \u5BF9\u8C61\u5141\u8BB8\u4F60\u5B58\u50A8\u4EFB\u4F55\u7C7B\u578B\u7684\u552F\u4E00\u503C\uFF0C\u65E0\u8BBA\u662F\u539F\u59CB\u503C\u6216\u8005\u662F\u5BF9\u8C61\u5F15\u7528</p><p><code>new Set([iterable])</code>: \u53C2\u6570\u662F\u4E00\u4E2A\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u6B64\u53C2\u6570\u6216\u5176\u503C\u4E3Anull\uFF0C\u5219\u65B0\u7684 Set\u4E3A\u7A7A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> set1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
set1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
set1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
set1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
set1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false \u56E0\u4E3A\u5730\u5740\u4E0D\u540C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#set\u4F5C\u7528" aria-hidden="true">#</a> Set\u4F5C\u7528</h2><p>Set \u53EF\u4EE5\u7528\u505A\u6570\u7EC4\u53BB\u91CD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [1, 3, 4, 5]</span>
<span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token string">&#39;ababbc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;abc&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set \u5224\u65AD\u5143\u7D20\u662F\u5426\u76F8\u7B49\u662F\u4F7F\u7528\u53EB\u505A \u201CSame-value-zero equality\u201D \u7684\u7B97\u6CD5\uFF0C \u5B83\u7C7B\u4F3C\u4E8E\u7CBE\u786E\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>===</code>\uFF09\uFF0C\u4E3B\u8981\u7684\u533A\u522B\u662F\u5411 Set \u52A0\u5165\u503C\u65F6\u8BA4\u4E3A <code>NaN</code> \u7B49\u4E8E\u81EA\u8EAB\uFF0C\u800C\u7CBE\u786E\u76F8\u7B49\u8FD0\u7B97\u7B26\u8BA4\u4E3A <code>NaN</code> \u4E0D\u7B49\u4E8E\u81EA\u8EAB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token comment">// Set {NaN}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u4E2A\u5BF9\u8C61\u603B\u662F\u4E0D\u76F8\u7B49\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span>size <span class="token comment">// 1</span>

set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span>size <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0C\u7531\u4E8E\u4E24\u4E2A\u7A7A\u5BF9\u8C61\u4E0D\u76F8\u7B49\uFF0C\u6240\u4EE5\u5B83\u4EEC\u88AB\u89C6\u4E3A\u4E24\u4E2A\u503C</p><h2 id="set-\u5B9E\u4F8B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#set-\u5B9E\u4F8B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> Set \u5B9E\u4F8B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</h2><p><strong>\u5C5E\u6027</strong></p><ul><li><p><code>Set.prototype.constructor</code>\uFF1A\u6784\u9020\u51FD\u6570\uFF0C\u9ED8\u8BA4\u5C31\u662F Set \u51FD\u6570</p></li><li><p><code>Set.prototype.size</code>\uFF1A\u8FD4\u56DE Set \u5B9E\u4F8B\u7684\u6210\u5458\u603B\u6570</p></li></ul><p><strong>\u65B9\u6CD5</strong></p><ul><li><p><code>Set.prototype.add(value)</code>\uFF1A\u6DFB\u52A0\u67D0\u4E2A\u503C\uFF0C\u8FD4\u56DE Set \u7ED3\u6784\u672C\u8EAB</p></li><li><p><code>Set.prototype.delete(value)</code>\uFF1A\u5220\u9664\u67D0\u4E2A\u503C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5220\u9664\u662F\u5426\u6210\u529F\u3002</p></li><li><p><code>Set.prototype.has(value)</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u8BE5\u503C\u662F\u5426\u4E3ASet\u7684\u6210\u5458\u3002</p></li><li><p><code>Set.prototype.clear()</code>\uFF1A\u6E05\u9664\u6240\u6709\u6210\u5458\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6CE8\u610F2\u88AB\u52A0\u5165\u4E86\u4E24\u6B21</span>

s<span class="token punctuation">.</span>size <span class="token comment">// 2</span>

s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

s<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
s<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u904D\u5386\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u64CD\u4F5C" aria-hidden="true">#</a> \u904D\u5386\u64CD\u4F5C</h2><p>Set \u7ED3\u6784\u7684\u5B9E\u4F8B\u6709\u56DB\u4E2A\u904D\u5386\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7528\u4E8E\u904D\u5386\u6210\u5458</p><ul><li><p><code>Set.prototype.keys()</code>\uFF1A\u8FD4\u56DE\u952E\u540D\u7684\u904D\u5386\u5668</p></li><li><p><code>Set.prototype.values()</code>\uFF1A\u8FD4\u56DE\u952E\u503C\u7684\u904D\u5386\u5668</p></li><li><p><code>Set.prototype.entries()</code>\uFF1A\u8FD4\u56DE\u952E\u503C\u5BF9\u7684\u904D\u5386\u5668</p></li><li><p><code>Set.prototype.forEach()</code>\uFF1A\u4F7F\u7528\u56DE\u8C03\u51FD\u6570\u904D\u5386\u6BCF\u4E2A\u6210\u5458</p></li></ul><p>\u7531\u4E8E Set \u7ED3\u6784\u6CA1\u6709\u952E\u540D\u6240\u4EE5 <code>Set.prototype.values()</code>\u548C<code>Set.prototype.keys()</code>\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u4E00\u6837\u7684</p><p>\u9700\u8981\u7279\u522B\u6307\u51FA\u7684\u662F\uFF0CSet\u7684\u904D\u5386\u987A\u5E8F\u5C31\u662F\u63D2\u5165\u987A\u5E8F\u3002\u8FD9\u4E2A\u7279\u6027\u6709\u65F6\u975E\u5E38\u6709\u7528\uFF0C\u6BD4\u5982\u4F7F\u7528 Set \u4FDD\u5B58\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5217\u8868\uFF0C\u8C03\u7528\u65F6\u5C31\u80FD\u4FDD\u8BC1\u6309\u7167\u6DFB\u52A0\u987A\u5E8F\u8C03\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> set<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// red</span>
<span class="token comment">// green</span>
<span class="token comment">// blue</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> set<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// red</span>
<span class="token comment">// green</span>
<span class="token comment">// blue</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> set<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// [&quot;red&quot;, &quot;red&quot;]</span>
<span class="token comment">// [&quot;green&quot;, &quot;green&quot;]</span>
<span class="token comment">// [&quot;blue&quot;, &quot;blue&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6269\u5C55\u8FD0\u7B97\u7B26\u8DDF<code>Array.from</code> \u65B9\u6CD5\u53EF\u4EE5\u5C06 Set \u7ED3\u6784\u8F6C\u4E3A\u6570\u7EC4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="weakset" tabindex="-1"><a class="header-anchor" href="#weakset" aria-hidden="true">#</a> WeakSet</h1><p>WeakSet \u7ED3\u6784\u4E0E Set \u7C7B\u4F3C\uFF0C\u4E5F\u662F\u4E0D\u91CD\u590D\u7684\u503C\u7684\u96C6\u5408\u3002\u4F46\u662F\uFF0C\u5B83\u4E0E Set \u6709\u4E24\u4E2A\u533A\u522B\u3002</p><p>\u9996\u5148\uFF0CWeakSet \u7684\u6210\u5458\u53EA\u80FD\u662F\u5BF9\u8C61\uFF0C\u800C\u4E0D\u80FD\u662F\u5176\u4ED6\u7C7B\u578B\u7684\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Invalid value used in weak set</span>
ws<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: invalid value used in weak set</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// WeakSet {[1, 2], [3, 4]}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u6CE8\u610F\u7684\u662F WeakSet \u4E2D\u7684\u5BF9\u8C61\u90FD\u662F\u5F31\u5F15\u7528\uFF0C\u5373\u5783\u573E\u56DE\u6536\u673A\u5236\u4E0D\u8003\u8651 WeakSet \u5BF9\u8BE5\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u5176\u4ED6\u5BF9\u8C61\u90FD\u4E0D\u518D\u5F15\u7528\u8BE5\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5783\u573E\u56DE\u6536\u673A\u5236\u4F1A\u81EA\u52A8\u56DE\u6536\u8BE5\u5BF9\u8C61\u6240\u5360\u7528\u7684\u5185\u5B58\uFF0C\u4E0D\u8003\u8651\u8BE5\u5BF9\u8C61\u8FD8\u5B58\u5728\u4E8E WeakSet \u4E4B\u4E2D\u3002\u56E0\u6B64\uFF0CWeakSet \u9002\u5408\u4E34\u65F6\u5B58\u653E\u4E00\u7EC4\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u5B58\u653E\u8DDF\u5BF9\u8C61\u7ED1\u5B9A\u7684\u4FE1\u606F\u3002\u53EA\u8981\u8FD9\u4E9B\u5BF9\u8C61\u5728\u5916\u90E8\u6D88\u5931\uFF0C\u5B83\u5728 WeakSet \u91CC\u9762\u7684\u5F15\u7528\u5C31\u4F1A\u81EA\u52A8\u6D88\u5931</p><h2 id="\u5C5E\u6027\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u65B9\u6CD5" aria-hidden="true">#</a> \u5C5E\u6027\u65B9\u6CD5</h2><ul><li><p><code>WeakSet.prototype.add(value)</code>\uFF1A\u5411 WeakSet \u5B9E\u4F8B\u6DFB\u52A0\u4E00\u4E2A\u65B0\u6210\u5458\u3002</p></li><li><p><code>WeakSet.prototype.delete(value)</code>\uFF1A\u6E05\u9664 WeakSet \u5B9E\u4F8B\u7684\u6307\u5B9A\u6210\u5458\u3002</p></li><li><p><code>WeakSet.prototype.has(value)</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u67D0\u4E2A\u503C\u662F\u5426\u5728</p></li></ul><p>WeakSet \u6CA1\u6709 Set \u7684 <code>size</code> \u5C5E\u6027\u548C <code>clear</code>, <code>forEach</code>,<code>keys</code>, <code>values</code> , <code>entries</code>\u65B9\u6CD5</p><p>WeakSet \u7684\u4E00\u4E2A\u7528\u5904\uFF0C\u662F\u50A8\u5B58 DOM \u8282\u70B9\uFF0C\u800C\u4E0D\u7528\u62C5\u5FC3\u8FD9\u4E9B\u8282\u70B9\u4ECE\u6587\u6863\u79FB\u9664\u65F6\uFF0C\u4F1A\u5F15\u53D1\u5185\u5B58\u6CC4\u6F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    foos<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">method</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>foos<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Foo.prototype.method \u53EA\u80FD\u5728Foo\u7684\u5B9E\u4F8B\u4E0A\u8C03\u7528\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),o=[e];function c(l,u){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","Set\u548CWeakSet.html.vue"]]);export{k as default};
