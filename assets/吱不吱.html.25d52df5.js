import{_ as e,o as a,c as o,d as t}from"./app.8ae844c0.js";const c={},d=t(`<h1 id="\u5431\u4E0D\u5431" tabindex="-1"><a class="header-anchor" href="#\u5431\u4E0D\u5431" aria-hidden="true">#</a> \u5431\u4E0D\u5431</h1><h2 id="react-\u4E8B\u4EF6\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#react-\u4E8B\u4EF6\u673A\u5236" aria-hidden="true">#</a> React \u4E8B\u4EF6\u673A\u5236</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\u70B9\u6211<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JSX \u4E0A\u5199\u7684\u4E8B\u4EF6\u5E76\u6CA1\u6709\u7ED1\u5B9A\u5728\u5BF9\u5E94\u7684\u771F\u5B9E DOM \u4E0A\uFF0C\u800C\u662F\u901A\u8FC7\u4E8B\u4EF6\u4EE3\u7406\u7684\u65B9\u5F0F\uFF0C\u5C06\u6240\u6709\u7684\u4E8B\u4EF6\u90FD\u7EDF\u4E00\u7ED1\u5B9A\u5728\u4E86 <code>document</code> \u4E0A\u3002\u8FD9\u6837\u7684\u65B9\u5F0F\u4E0D\u4EC5\u51CF\u5C11\u4E86\u5185\u5B58\u6D88\u8017\uFF0C\u8FD8\u80FD\u5728\u7EC4\u4EF6\u6302\u8F7D\u9500\u6BC1\u65F6\u7EDF\u4E00\u8BA2\u9605\u548C\u79FB\u9664\u4E8B\u4EF6\u3002 \u53E6\u5916\u5192\u6CE1\u5230 <code>document</code> \u4E0A\u7684\u4E8B\u4EF6\u4E5F\u4E0D\u662F\u539F\u751F\u6D4F\u89C8\u5668\u4E8B\u4EF6\uFF0C\u800C\u662F React \u81EA\u5DF1\u5B9E\u73B0\u7684\u5408\u6210\u4E8B\u4EF6\uFF08SyntheticEvent\uFF09\u3002\u56E0\u6B64\u6211\u4EEC\u5982\u679C\u4E0D\u60F3\u8981\u4E8B\u4EF6\u5192\u6CE1\u7684\u8BDD\uFF0C\u8C03\u7528 <code>event.stopPropagation</code> \u662F\u65E0\u6548\u7684\uFF0C\u800C\u5E94\u8BE5\u8C03\u7528 <code>event.preventDefault</code></p><p>\u5B9E\u73B0\u5408\u6210\u4E8B\u4EF6\u7684\u76EE\u7684\u5982\u4E0B\uFF1A</p><ul><li><p>\u5408\u6210\u4E8B\u4EF6\u9996\u5148\u62B9\u5E73\u4E86\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u517C\u5BB9\u95EE\u9898\uFF0C\u53E6\u5916\u8FD9\u662F\u4E00\u4E2A\u8DE8\u6D4F\u89C8\u5668\u539F\u751F\u4E8B\u4EF6\u5305\u88C5\u5668\uFF0C\u8D4B\u4E88\u4E86\u8DE8\u6D4F\u89C8\u5668\u5F00\u53D1\u7684\u80FD\u529B</p></li><li><p>\u5BF9\u4E8E\u539F\u751F\u6D4F\u89C8\u5668\u4E8B\u4EF6\u6765\u8BF4\uFF0C\u6D4F\u89C8\u5668\u4F1A\u7ED9\u76D1\u542C\u5668\u521B\u5EFA\u4E00\u4E2A\u4E8B\u4EF6\u5BF9\u8C61\u3002\u5982\u679C\u4F60\u6709\u5F88\u591A\u7684\u4E8B\u4EF6\u76D1\u542C\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5206\u914D\u5F88\u591A\u7684\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u9020\u6210\u9AD8\u989D\u7684\u5185\u5B58\u5206\u914D\u95EE\u9898\u3002\u4F46\u662F\u5BF9\u4E8E\u5408\u6210\u4E8B\u4EF6\u6765\u8BF4\uFF0C\u6709\u4E00\u4E2A\u4E8B\u4EF6\u6C60\u4E13\u95E8\u6765\u7BA1\u7406\u5B83\u4EEC\u7684\u521B\u5EFA\u548C\u9500\u6BC1\uFF0C\u5F53\u4E8B\u4EF6\u9700\u8981\u88AB\u4F7F\u7528\u65F6\uFF0C\u5C31\u4F1A\u4ECE\u6C60\u5B50\u4E2D\u590D\u7528\u5BF9\u8C61\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u7ED3\u675F\u540E\uFF0C\u5C31\u4F1A\u9500\u6BC1\u4E8B\u4EF6\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\uFF0C\u4ECE\u800C\u4FBF\u4E8E\u4E0B\u6B21\u590D\u7528\u4E8B\u4EF6\u5BF9\u8C61</p></li></ul><p>\u5728React\u5E95\u5C42\uFF0C\u4E3B\u8981\u5BF9\u5408\u6210\u4E8B\u4EF6\u505A\u4E86\u4E24\u4EF6\u4E8B\uFF1A</p><ul><li><p>\u4E8B\u4EF6\u59D4\u6D3E\uFF1A React\u4F1A\u628A\u6240\u6709\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u5230\u7ED3\u6784\u7684\u6700\u5916\u5C42\uFF0C\u4F7F\u7528\u7EDF\u4E00\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\u4E0A\u7EF4\u6301\u4E86\u4E00\u4E2A\u6620\u5C04\u6765\u4FDD\u5B58\u6240\u6709\u7EC4\u4EF6\u5185\u90E8\u4E8B\u4EF6\u76D1\u542C\u548C\u5904\u7406\u51FD\u6570\u3002</p></li><li><p>\u81EA\u52A8\u7ED1\u5B9A\uFF1A React\u7EC4\u4EF6\u4E2D\uFF0C\u6BCF\u4E2A\u65B9\u6CD5\u7684\u4E0A\u4E0B\u6587\u90FD\u4F1A\u6307\u5411\u8BE5\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u5373\u81EA\u52A8\u7ED1\u5B9Athis\u4E3A\u5F53\u524D\u7EC4\u4EF6</p></li></ul><p><img src="https://juejin.cn/post/6909271104440205326" alt="React \u4E8B\u4EF6\u7CFB\u7EDF\u5DE5\u4F5C\u539F\u7406"></p><h2 id="react-\u4E2D-key-\u7684\u4F5C\u7528\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#react-\u4E2D-key-\u7684\u4F5C\u7528\u662F\u4EC0\u4E48" aria-hidden="true">#</a> React \u4E2D key \u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F</h2><p><code>key</code>\u7684\u4F5C\u7528\u66F4\u51C6\u786E\u7684\u8FDB\u884C <code>diff</code>\u7B97\u6CD5\uFF0CReact \u8FD8\u9700\u8981\u501F\u52A9 <code>Key</code> \u503C\u6765\u5224\u65AD\u5143\u7D20\u4E0E\u672C\u5730\u72B6\u6001\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u56E0\u6B64\u6211\u4EEC\u7EDD\u4E0D\u53EF\u5FFD\u89C6\u8F6C\u6362\u51FD\u6570\u4E2D <code>Key</code> \u7684\u91CD\u8981\u6027</p><p>\u6CA1\u6709<code>key</code>\u65F6\uFF0C\u5728\u5224\u65AD\u65B0\u65E7\u5730\u70B9\u53D8\u5316\u65F6\u5BB9\u6613\u4EA7\u573A\u5C31\u5730\u590D\u7528\u7684\u60C5\u51B5</p><h2 id="\u8C03\u7528-setstate-\u4E4B\u540E\u53D1\u751F\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528-setstate-\u4E4B\u540E\u53D1\u751F\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> \u8C03\u7528 setState \u4E4B\u540E\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F</h2><ol><li><p>\u5C06\u4F20\u5165\u7684\u53C2\u6570\u4E0E\u5F53\u524D\u7684\u72B6\u6001\u5408\u5E76\uFF0C\u7136\u540E\u89E6\u53D1\u6240\u8C13\u7684\u8C03\u548C\u8FC7\u7A0B\uFF08Reconciliation\uFF09</p></li><li><p>\u6839\u636E\u5F53\u524D\u7684\u72B6\u6001\u6784\u5EFAReact\u5143\u7D20\u6811</p></li><li><p>\u5728\u5F97\u5230\u5143\u7D20\u6811\uFF0C\u4E0E\u65E7\u7684\u5143\u7D20\u6811\u505A\u8282\u70B9\u5BF9\u6BD4\uFF0C\u7136\u540E\u6839\u636E\u5DEE\u5F02\u5BF9\u754C\u9762\u8FDB\u884C\u6700\u5C0F\u5316\u91CD\u6E32\u67D3</p></li><li><p>\u5728\u5DEE\u5F02\u8BA1\u7B97\u7B97\u6CD5\u4E2D\uFF0CReact \u80FD\u591F\u76F8\u5BF9\u7CBE\u786E\u5730\u77E5\u9053\u54EA\u4E9B\u4F4D\u7F6E\u53D1\u751F\u4E86\u6539\u53D8\u4EE5\u53CA\u5E94\u8BE5\u5982\u4F55\u6539\u53D8\uFF0C\u8FD9\u5C31\u4FDD\u8BC1\u4E86\u6309\u9700\u66F4\u65B0\uFF0C\u800C\u4E0D\u662F\u5168\u90E8\u91CD\u65B0\u6E32\u67D3\u3002</p></li></ol><h2 id="react-\u751F\u547D\u5468\u671F\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#react-\u751F\u547D\u5468\u671F\u51FD\u6570" aria-hidden="true">#</a> react \u751F\u547D\u5468\u671F\u51FD\u6570</h2><p><strong>\u6302\u8F7D</strong></p><ul><li><p><code>constructor()</code></p><ul><li><p>\u901A\u8FC7\u7ED9 <code>this.state</code> \u8D4B\u503C\u5BF9\u8C61\u6765\u521D\u59CB\u5316\u5185\u90E8 <code>state</code></p></li><li><p>\u4E3A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7ED1\u5B9A\u5B9E\u4F8B</p></li></ul></li><li><p><code>static getDerivedStateFromProps()</code></p></li><li><p><code>render()</code></p></li><li><p><code>componentDidMount</code></p></li></ul><p><strong>\u66F4\u65B0</strong></p><ul><li><p><code>static getDerivedStateFromProps()</code></p></li><li><p><code>shouldComponentUpdate(nextProps, nextState)</code></p><p>\u6839\u636E <code>shouldComponentUpdate()</code> \u7684\u8FD4\u56DE\u503C\uFF0C\u5224\u65AD React \u7EC4\u4EF6\u7684\u8F93\u51FA\u662F\u5426\u53D7\u5F53\u524D <code>state</code> \u6216 <code>props</code> \u66F4\u6539\u7684\u5F71\u54CD</p></li><li><p><code>render()</code></p></li><li><p><code>getSnapshotBeforeUpdate()</code></p></li><li><p><code>componetDidUpdate(prevProps, prevState, snapshot)</code>: \u4F1A\u5728\u66F4\u65B0\u540E\u4F1A\u88AB\u7ACB\u5373\u8C03\u7528\u3002\u9996\u6B21\u6E32\u67D3\u4E0D\u4F1A\u6267\u884C\u6B64\u65B9\u6CD5\u3002</p></li></ul><p><strong>\u5378\u8F7D</strong></p><ul><li><code>componentWillUnMount()</code>\uFF1A\u4F1A\u5728\u7EC4\u4EF6\u5378\u8F7D\u53CA\u9500\u6BC1\u4E4B\u524D\u76F4\u63A5\u8C03\u7528</li></ul><h2 id="shouldcomponentupdate-\u662F\u505A\u4EC0\u4E48\u7684" tabindex="-1"><a class="header-anchor" href="#shouldcomponentupdate-\u662F\u505A\u4EC0\u4E48\u7684" aria-hidden="true">#</a> shouldComponentUpdate \u662F\u505A\u4EC0\u4E48\u7684</h2><p>\u5F53 <code>props</code> \u6216 <code>state</code> \u53D1\u751F\u53D8\u5316\u65F6\uFF0C<code>shouldComponentUpdate()</code> \u4F1A\u5728\u6E32\u67D3\u6267\u884C\u4E4B\u524D\u88AB\u8C03\u7528\u3002\u8FD4\u56DE\u503C\u9ED8\u8BA4\u4E3A true\u3002 \u5982\u679C\u8FD4\u56DE<code>false</code>\uFF0C\u5219\u4E0D\u4F1A\u6267\u884C <code>render</code>\u65B9\u6CD5\u8FDB\u884C DOM \u66F4\u65B0 \u9996\u6B21\u6E32\u67D3\u6216\u4F7F\u7528 <code>forceUpdate()</code> \u65F6\u4E0D\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5\u3002</p><p>\u4E3A\u4EC0\u4E48\u865A\u62DF dom \u4F1A\u63D0\u9AD8\u6027\u80FD</p><h2 id="react-\u6027\u80FD\u4F18\u5316\u662F\u54EA\u4E2A\u5468\u671F\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#react-\u6027\u80FD\u4F18\u5316\u662F\u54EA\u4E2A\u5468\u671F\u51FD\u6570" aria-hidden="true">#</a> react \u6027\u80FD\u4F18\u5316\u662F\u54EA\u4E2A\u5468\u671F\u51FD\u6570</h2><p><code>shouldComponentUpdate()</code></p><h2 id="react-diff-\u4F18\u5316\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#react-diff-\u4F18\u5316\u539F\u7406" aria-hidden="true">#</a> react diff \u4F18\u5316\u539F\u7406</h2><ul><li><p>\u628A\u6811\u5F62\u7ED3\u6784\u6309\u7167\u5C42\u7EA7\u5206\u89E3\uFF0C\u53EA\u6BD4\u8F83\u540C\u7EA7\u5143\u7D20</p></li><li><p>\u7ED9\u5217\u8868\u7ED3\u6784\u7684\u6BCF\u4E2A\u5355\u5143\u6DFB\u52A0\u552F\u4E00\u7684 key \u5C5E\u6027\uFF0C\u65B9\u4FBF\u6BD4\u8F83</p></li><li><p>React \u53EA\u4F1A\u5339\u914D\u76F8\u540C class \u7684 component\uFF08\u8FD9\u91CC\u9762\u7684 class \u6307\u7684\u662F\u7EC4\u4EF6\u7684\u540D\u5B57\uFF09</p></li><li><p>\u5408\u5E76\u64CD\u4F5C\uFF0C\u8C03\u7528 component \u7684 setState \u65B9\u6CD5\u7684\u65F6\u5019, React \u5C06\u5176\u6807\u8BB0\u4E3A dirty.\u5230\u6BCF\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F, React \u68C0\u67E5\u6240\u6709\u6807\u8BB0 dirty \u7684 component \u91CD\u65B0\u7ED8\u5236.</p></li><li><p>\u9009\u62E9\u6027\u5B50\u6811\u6E32\u67D3\u3002\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u91CD\u5199 shouldComponentUpdate \u63D0\u9AD8 diff \u7684\u6027\u80FD</p></li></ul><h2 id="\u5728\u6784\u9020\u51FD\u6570\u4E2D-\u8C03\u7528-super-props-\u7684\u76EE\u7684\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u5728\u6784\u9020\u51FD\u6570\u4E2D-\u8C03\u7528-super-props-\u7684\u76EE\u7684\u662F\u4EC0\u4E48" aria-hidden="true">#</a> (\u5728\u6784\u9020\u51FD\u6570\u4E2D)\u8C03\u7528 super(props) \u7684\u76EE\u7684\u662F\u4EC0\u4E48</h2><p>\u5728 <code>super() </code>\u88AB\u8C03\u7528\u4E4B\u524D\uFF0C\u5B50\u7C7B\u662F\u4E0D\u80FD\u4F7F\u7528 \u6784\u9020\u51FD\u6570\u4E2D\u4F7F\u7528 <code>this</code> \u7684</p><p>\u4F20\u9012 <code>props</code> \u7ED9 <code>super()</code> \u7684\u539F\u56E0\u5219\u662F\u4FBF\u4E8E(\u5728\u5B50\u7C7B\u4E2D)\u80FD\u5728 <code>constructor</code> \u8BBF\u95EE <code>this.props</code></p><h2 id="\u4F55\u4E3A-jsx" tabindex="-1"><a class="header-anchor" href="#\u4F55\u4E3A-jsx" aria-hidden="true">#</a> \u4F55\u4E3A JSX</h2><p>JSX\u662FJS\u7684\u6269\u5C55\uFF0C\u5E76\u62E5\u6709 JavaScript \u7684\u5168\u90E8\u529F\u80FD</p><p>JSX \u751F\u4EA7 React &quot;\u5143\u7D20&quot;\uFF0C\u4F60\u53EF\u4EE5\u5C06\u4EFB\u4F55\u7684 JavaScript \u8868\u8FBE\u5F0F\u5C01\u88C5\u5728\u82B1\u62EC\u53F7\u91CC\uFF0C\u7136\u540E\u5C06\u5176\u5D4C\u5165\u5230 JSX \u4E2D\u3002</p><h2 id="\u4F55\u4E3A\u7EAF\u51FD\u6570-pure-function" tabindex="-1"><a class="header-anchor" href="#\u4F55\u4E3A\u7EAF\u51FD\u6570-pure-function" aria-hidden="true">#</a> \u4F55\u4E3A\u7EAF\u51FD\u6570(pure function)</h2><p>\u4E00\u4E2A\u7EAF\u51FD\u6570\u662F\u4E00\u4E2A\u4E0D\u4F9D\u8D56\u4E8E\u4E14\u4E0D\u6539\u53D8\u5176\u4F5C\u7528\u57DF\u4E4B\u5916\u7684\u53D8\u91CF\u72B6\u6001\u7684\u51FD\u6570\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u4E00\u4E2A\u7EAF\u51FD\u6570\u5BF9\u4E8E\u540C\u6837\u7684\u53C2\u6570\u603B\u662F\u8FD4\u56DE\u540C\u6837\u7684\u7ED3\u679C\u3002</p><h2 id="react\u4E2D\u7684\u5408\u6210\u4E8B\u4EF6\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#react\u4E2D\u7684\u5408\u6210\u4E8B\u4EF6\u662F\u4EC0\u4E48" aria-hidden="true">#</a> React\u4E2D\u7684\u5408\u6210\u4E8B\u4EF6\u662F\u4EC0\u4E48\uFF1F</h2><p>\u5408\u6210\u4E8B\u4EF6\u662F\u56F4\u7ED5\u6D4F\u89C8\u5668\u539F\u751F\u4E8B\u4EF6\u5145\u5F53\u8DE8\u6D4F\u89C8\u5668\u5305\u88C5\u5668\u7684\u5BF9\u8C61\u3002\u5B83\u4EEC\u5C06\u4E0D\u540C\u6D4F\u89C8\u5668\u7684\u884C\u4E3A\u5408\u5E76\u4E3A\u4E00\u4E2A API\u3002\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u786E\u4FDD\u4E8B\u4EF6\u5728\u4E0D\u540C\u6D4F\u89C8\u5668\u4E2D\u663E\u793A\u4E00\u81F4\u7684\u5C5E\u6027</p><h2 id="react-\u4E2D-refs-\u7684\u4F5C\u7528\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#react-\u4E2D-refs-\u7684\u4F5C\u7528\u662F\u4EC0\u4E48" aria-hidden="true">#</a> React \u4E2D refs \u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F</h2><p><code>Refs</code> \u662F React \u63D0\u4F9B\u7ED9\u6211\u4EEC\u7684\u5B89\u5168\u8BBF\u95EE DOM \u5143\u7D20\u6216\u8005\u67D0\u4E2AReact\u5143\u7D20\u7684\u53E5\u67C4</p><h2 id="\u7C7B\u7EC4\u4EF6-class-component-\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6-functional-component-\u4E4B\u95F4\u6709\u4F55\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EC4\u4EF6-class-component-\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6-functional-component-\u4E4B\u95F4\u6709\u4F55\u4E0D\u540C" aria-hidden="true">#</a> \u7C7B\u7EC4\u4EF6(Class component)\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6(Functional component)\u4E4B\u95F4\u6709\u4F55\u4E0D\u540C</h2><p><strong>\u7C7B\u7EC4\u4EF6</strong></p><ul><li><p>\u6709\u81EA\u8EAB\u7684\u72B6\u6001,\u76F4\u63A5\u8BBF\u95EE store \u5E76\u7EF4\u6301\u72B6\u6001</p></li><li><p>\u6709\u751F\u547D\u5468\u671F\u51FD\u6570</p></li></ul><p><strong>\u51FD\u6570\u7EC4\u4EF6</strong></p><ul><li><p>\u4EC5\u662F\u63A5\u6536 <code>props</code>\uFF0C\u5E76\u5C06\u7EC4\u4EF6\u81EA\u8EAB\u6E32\u67D3\u5230\u9875\u9762\u65F6</p></li><li><p>\u8BE5\u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A <code>\u65E0\u72B6\u6001\u7EC4\u4EF6</code></p></li></ul><h2 id="\u7EC4\u4EF6\u7684-\u72B6\u6001-state-\u548C\u5C5E\u6027-props-\u4E4B\u95F4\u6709\u4F55\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684-\u72B6\u6001-state-\u548C\u5C5E\u6027-props-\u4E4B\u95F4\u6709\u4F55\u4E0D\u540C" aria-hidden="true">#</a> (\u7EC4\u4EF6\u7684)\u72B6\u6001(state)\u548C\u5C5E\u6027(props)\u4E4B\u95F4\u6709\u4F55\u4E0D\u540C</h2><ul><li><p><code>State</code> \u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u4E8E\u7EC4\u4EF6\u6302\u8F7D\u65F6\u6240\u9700\u6570\u636E\u7684\u9ED8\u8BA4\u503C\u3002<code>State</code> \u7531\u5F53\u524D\u7EC4\u8FDB\u884C\u7BA1\u7406\u4E0E\u7EF4\u62A4</p></li><li><p><code>props</code> \u7531\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\uFF0C\u5E76\u4E14\u5C31\u5B50\u7EC4\u4EF6\u800C\u8A00\uFF0C<code>props</code> \u662F\u4E0D\u53EF\u53D8\u7684(immutable)\u3002\u7EC4\u4EF6\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8 <code>props</code></p></li><li><p><code>Props</code> \u4E5F\u4E0D\u4EC5\u4EC5\u662F\u6570\u636E--\u56DE\u8C03\u51FD\u6570\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>props</code> \u4F20\u9012</p></li></ul><h2 id="\u4F55\u4E3A\u9AD8\u9636\u7EC4\u4EF6-higher-order-component" tabindex="-1"><a class="header-anchor" href="#\u4F55\u4E3A\u9AD8\u9636\u7EC4\u4EF6-higher-order-component" aria-hidden="true">#</a> \u4F55\u4E3A\u9AD8\u9636\u7EC4\u4EF6(higher order component)</h2><p>\u9AD8\u9636\u7EC4\u4EF6\u662F\u4E00\u4E2A\u4EE5\u7EC4\u4EF6\u4E3A\u53C2\u6570\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7EC4\u4EF6\u7684\u51FD\u6570</p><p>\u5982\u679C\u4F60\u53D1\u73B0\u4F60\u5728\u4E0D\u540C\u7684\u5730\u65B9\u5199\u4E86\u5927\u91CF\u4EE3\u7801\u6765\u505A\u540C\u4E00\u4EF6\u4E8B\u65F6\uFF0C\u5C31\u5E94\u8BE5\u8003\u8651\u5C06\u4EE3\u7801\u91CD\u6784\u4E3A\u53EF\u91CD\u7528\u7684 HOC</p><h2 id="react-\u7EC4\u4EF6\u7684\u5212\u5206\u4E1A\u52A1\u7EC4\u4EF6\u6280\u672F\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#react-\u7EC4\u4EF6\u7684\u5212\u5206\u4E1A\u52A1\u7EC4\u4EF6\u6280\u672F\u7EC4\u4EF6" aria-hidden="true">#</a> react \u7EC4\u4EF6\u7684\u5212\u5206\u4E1A\u52A1\u7EC4\u4EF6\u6280\u672F\u7EC4\u4EF6\uFF1F</h2><ul><li><p>\u6839\u636E\u7EC4\u4EF6\u7684\u804C\u8D23\u901A\u5E38\u628A\u7EC4\u4EF6\u5206\u4E3A UI \u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6\u3002</p></li><li><p>UI \u7EC4\u4EF6\u8D1F\u8D23 UI \u7684\u5448\u73B0\uFF0C\u5BB9\u5668\u7EC4\u4EF6\u8D1F\u8D23\u7BA1\u7406\u6570\u636E\u548C\u903B\u8F91\u3002</p></li><li><p>\u4E24\u8005\u901A\u8FC7 React-Redux \u63D0\u4F9B connect \u65B9\u6CD5\u8054\u7CFB\u8D77\u6765\u3002</p></li></ul><h2 id="\u4E3A\u4EC0\u4E48\u5EFA\u8BAE\u4F20\u9012\u7ED9-setstate-\u7684\u53C2\u6570\u662F\u4E00\u4E2A-callback-\u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u5EFA\u8BAE\u4F20\u9012\u7ED9-setstate-\u7684\u53C2\u6570\u662F\u4E00\u4E2A-callback-\u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u5EFA\u8BAE\u4F20\u9012\u7ED9 setState \u7684\u53C2\u6570\u662F\u4E00\u4E2A callback \u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61</h2><p>\u56E0\u4E3A this.props \u548C this.state \u7684\u66F4\u65B0\u53EF\u80FD\u662F\u5F02\u6B65\u7684\uFF0C\u4E0D\u80FD\u4F9D\u8D56\u5B83\u4EEC\u7684\u503C\u53BB\u8BA1\u7B97\u4E0B\u4E00\u4E2A state</p><h2 id="\u5E94\u8BE5\u5728-react-\u7EC4\u4EF6\u7684\u4F55\u5904\u53D1\u8D77-ajax-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5E94\u8BE5\u5728-react-\u7EC4\u4EF6\u7684\u4F55\u5904\u53D1\u8D77-ajax-\u8BF7\u6C42" aria-hidden="true">#</a> \u5E94\u8BE5\u5728 React \u7EC4\u4EF6\u7684\u4F55\u5904\u53D1\u8D77 Ajax \u8BF7\u6C42</h2><p>\u5728 React \u7EC4\u4EF6\u4E2D\uFF0C\u5E94\u8BE5\u5728 <code>componentDidMount</code> \u4E2D\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42</p><ul><li><p>\u5728\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u4E2D\u4EC5\u4F1A\u6267\u884C\u4E00\u6B21</p></li><li><p>\u4F60\u4E0D\u80FD\u4FDD\u8BC1\u5728\u7EC4\u4EF6\u6302\u8F7D\u4E4B\u524D Ajax \u8BF7\u6C42\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u5982\u679C\u662F\u8FD9\u6837\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u4F60\u5C06\u5C1D\u8BD5\u5728\u4E00\u4E2A\u672A\u6302\u8F7D\u7684\u7EC4\u4EF6\u4E0A\u8C03\u7528 setState\uFF0C\u8FD9\u5C06\u4E0D\u8D77\u4F5C\u7528</p></li></ul><h2 id="\u7B80\u8FF0-flux-\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#\u7B80\u8FF0-flux-\u601D\u60F3" aria-hidden="true">#</a> \u7B80\u8FF0 flux \u601D\u60F3</h2><p>Flux \u7684\u6700\u5927\u7279\u70B9\uFF0C\u5C31\u662F\u6570\u636E\u7684&quot;\u5355\u5411\u6D41\u52A8&quot;</p><ul><li><p>View \u5C42\u901A\u8FC7\u7528\u6237\u4EA4\u4E92\uFF08\u6BD4\u5982 onClick\uFF09\u4F1A\u89E6\u53D1 Action</p></li><li><p>Dispatcher \u4F1A\u5206\u53D1\u89E6\u53D1\u7684 Action \u7ED9\u6240\u6709\u6CE8\u518C\u7684 Store \u7684\u56DE\u8C03\u51FD\u6570</p></li><li><p>Store \u56DE\u8C03\u51FD\u6570\u6839\u636E\u63A5\u6536\u7684 Action \u66F4\u65B0\u81EA\u8EAB\u6570\u636E\u4E4B\u540E\u4F1A\u89E6\u53D1\u4E00\u4E2A change \u4E8B\u4EF6\u901A\u77E5 View \u6570\u636E\u66F4\u6539\u4E86</p></li><li><p>View \u4F1A\u76D1\u542C\u8FD9\u4E2A change \u4E8B\u4EF6\uFF0C\u62FF\u5230\u5BF9\u5E94\u7684\u65B0\u6570\u636E\u5E76\u8C03\u7528 setState \u66F4\u65B0\u7EC4\u4EF6 UI</p></li></ul><h2 id="\u4E86\u89E3-redux-\u4E48-\u8BF4\u4E00\u4E0B-redux-\u628A" tabindex="-1"><a class="header-anchor" href="#\u4E86\u89E3-redux-\u4E48-\u8BF4\u4E00\u4E0B-redux-\u628A" aria-hidden="true">#</a> \u4E86\u89E3 redux \u4E48\uFF0C\u8BF4\u4E00\u4E0B redux \u628A</h2><ul><li><p>redux \u662F\u4E00\u4E2A\u5E94\u7528\u6570\u636E\u6D41\u6846\u67B6\uFF0C\u4E3B\u8981\u662F\u89E3\u51B3\u4E86\u7EC4\u4EF6\u95F4\u72B6\u6001\u5171\u4EAB\u7684\u95EE\u9898\uFF0C\u539F\u7406\u662F\u96C6\u4E2D\u5F0F\u7BA1\u7406</p></li><li><p>\u4E3B\u8981\u6709\u4E09\u4E2A\u6838\u5FC3\u65B9\u6CD5\uFF0C<code>action</code>\uFF0C<code>store</code>\uFF0C<code>reducer</code></p></li><li><p>\u5DE5\u4F5C\u6D41\u7A0B\u662F <code>view</code> \u8C03\u7528 <code>store</code> \u7684 <code>dispatch</code> \u63A5\u6536 <code>action</code> \u4F20\u5165 <code>store</code>\uFF0C<code>reducer</code> \u8FDB\u884C <code>state</code> \u64CD\u4F5C\uFF0C <code>view</code> \u901A\u8FC7 <code>store</code> \u63D0\u4F9B\u7684 <code>getState</code> \u83B7\u53D6\u6700\u65B0\u7684\u6570\u636E</p></li></ul><h2 id="redux-\u6709\u4EC0\u4E48\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#redux-\u6709\u4EC0\u4E48\u7F3A\u70B9" aria-hidden="true">#</a> redux \u6709\u4EC0\u4E48\u7F3A\u70B9</h2><ul><li><p>\u4E00\u4E2A\u4E1A\u52A1\u53D8\u5316\u5C31\u8981\u5BF9\u5E94\u7F16\u5199 <code>action</code>\uFF0C<code>reducer</code> \u7B49\u7B49</p></li><li><p>\u5F53\u4E00\u4E2A\u7EC4\u4EF6\u76F8\u5173\u6570\u636E\u66F4\u65B0\u65F6\uFF0C\u5373\u4F7F\u7236\u7EC4\u4EF6\u4E0D\u9700\u8981\u7528\u5230\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u7236\u7EC4\u4EF6\u8FD8\u662F\u4F1A\u91CD\u65B0 render\uFF0C\u53EF\u80FD\u4F1A\u6709\u6548\u7387\u5F71\u54CD\uFF0C\u6216\u8005\u9700\u8981\u5199\u590D\u6742\u7684 shouldComponentUpdate \u8FDB\u884C\u5224\u65AD</p></li></ul>`,64),p=[d];function r(i,n){return a(),o("div",null,p)}var l=e(c,[["render",r],["__file","\u5431\u4E0D\u5431.html.vue"]]);export{l as default};
