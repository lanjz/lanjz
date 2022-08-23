import{_ as n,o as s,c as a,d as t}from"./app.8ae844c0.js";const e={},p=t(`<h1 id="\u6A21\u677F\u5230\u771F\u5B9Edom\u7ECF\u5386\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5230\u771F\u5B9Edom\u7ECF\u5386\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> \u6A21\u677F\u5230\u771F\u5B9EDOM\u7ECF\u5386\u4E86\u4EC0\u4E48\uFF1F</h1><p>\u8FD9\u91CC\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\u6765\u4ECB\u7ECD\u4E0B VUE \u4E2D\u6A21\u677F\u5230\u771F\u5B9E DOM \u9700\u8981\u54EA\u4E9B\u8FC7\u7A0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	{{name}}\u7684\u5217\u8868:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6A21\u677F\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u89E3\u6790" aria-hidden="true">#</a> \u6A21\u677F\u89E3\u6790</h2><p>\u6A21\u677F\u89E3\u6790\u5C31\u662F\u901A\u8FC7\u6B63\u5219\u624B\u6BB5\u5BF9\u6A21\u677F\u5B57\u7B26\u4E32\u8FDB\u884C\u89E3\u6790\uFF0C\u751F\u6210 AST \u62BD\u8C61\u8BED\u6CD5\u6811\uFF0C\u6211\u4EEC\u4F8B\u5B50\u89E3\u6790\u5B8C\u6210\u5F97\u5230\u4EE5\u4E0B AST\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token literal-property property">tag</span><span class="token operator">:</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">attrsList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">attrsMap</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token keyword">class</span><span class="token operator">:</span><span class="token string">&quot;page&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">rawAttrsMap</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plain</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token literal-property property">staticClass</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>page<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
			<span class="token literal-property property">expression</span><span class="token operator">:</span><span class="token string">&quot;_s(name)+&quot;</span><span class="token literal-property property">\u7684\u5217\u8868</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">tokens</span><span class="token operator">:</span><span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					@binding<span class="token operator">:</span><span class="token string">&quot;name&quot;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token string">&quot;\u7684\u5217\u8868\uFF1A&quot;</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;{{name}}\u7684\u5217\u8868:&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">attrsList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token literal-property property">attrsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">&quot;:key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
				<span class="token string-property property">&quot;v-for&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(item, index) in list&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">expression</span><span class="token operator">:</span> <span class="token string">&quot;_s(item)&quot;</span>
					<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;{{item}}&quot;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">tokens</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							@binding<span class="token operator">:</span> <span class="token string">&quot;item&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token keyword">for</span><span class="token operator">:</span> <span class="token string">&quot;list&quot;</span>
			<span class="token literal-property property">forProcessed</span><span class="token operator">:</span> <span class="token boolean">true</span>
			<span class="token literal-property property">iterator1</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span>
			<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token punctuation">(</span>\u7236\u7EA7\u7684\u5F15\u7528<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token literal-property property">plain</span><span class="token operator">:</span> <span class="token boolean">false</span>
			<span class="token literal-property property">pre</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
			<span class="token literal-property property">rawAttrsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&quot;span&quot;</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span>
		<span class="token punctuation">}</span>
	
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C06ast\u8F6C\u6362\u6210\u51FD\u6570\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5C06ast\u8F6C\u6362\u6210\u51FD\u6570\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5C06AST\u8F6C\u6362\u6210\u51FD\u6570\u5B57\u7B26\u4E32</h2><p>Vue\u4E2D\u6A21\u5757\u6700\u7EC8\u90FD\u4F1A\u8F6C\u6362\u6210 <code>render</code> \u51FD\u6570\uFF0C\u8FD9\u4E2A <code>render</code> \u51FD\u6570\u7684\u4F5C\u7528\u662F\u7528\u4E8E\u751F\u6210<code>VNode</code>\u3002<code>VNode</code> \u5C31\u662F <code>Virsual DOM</code> \uFF0C\u7B80\u5355\u7406\u89E3\u5B83\u5C31\u662F <code>DOM</code> \u7684 JS \u5BF9\u8C61\u8868\u793A</p><p>\u53EF\u80FD\u6709\u4EBA\u4F1A\u7591\u60D1\u8FD9\u8DDF\u4E0A\u6587\u7684 <code>ast</code> \u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u8FD9\u4E2A\u4E0B\u6587\u4F1A\u89E3\u91CA</p><p>\u4E0A\u6587AST\u9996\u5148\u4F1A\u8F6C\u6362\u6210\u51FD\u6570\u5B57\u7B26\u4E32</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;with(this){return _c(&#39;div&#39;,{staticClass:&quot;</span>page<span class="token string">&quot;},[_v(_s(name)+&quot;</span><span class="token literal-property property">\u7684\u5217\u8868</span><span class="token operator">:</span><span class="token string">&quot;),_l((list),function(item,index){return _c(&#39;span&#39;,{key:index},[_v(_s(item))])})],2)}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7<code>new Function</code>\u65B9\u6CD5\u5C06\u51FD\u6570\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u53EF\u6267\u884C\u51FD\u6570\uFF0C\u751F\u6210 <code>render</code> \u65B9\u6CD5</p><p>\u4E0A\u6587\u7684 <code> _c</code>\uFF0C <code>_v</code> \u90FD\u662F Vue \u5185\u7F6E\u7684\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u4F5C\u7528\u90FD\u662F\u751F\u6210 <code>VNode</code>\u3002\u6BD4\u5982\u4F8B\u5B50\u4E2D\u4E00\u5F00\u59CB\u662F\u6E32\u67D3\u4E00\u4E2A<code>&lt;div class=&quot;page&quot;&gt;&lt;/div&gt;</code> \u90A3\u4E48\u8FD9\u4E2A\u8282\u70B9\u5C06\u8F6C\u6362\u6210 <code>_c(&#39;div&#39;,{staticClass:&quot;page&quot;}\uFF0C[])</code> \u5B57\u7B26\u4E32,\u8FD9\u4E2A <code>_c</code> \u662F\u4E00\u4E2A\u5DF2\u7ECF\u5B9A\u4E49\u597D\u7684\u7684\u51FD\u6570\uFF0C\u4F5C\u7528\u5C31\u662F\u751F\u6210\u4E00\u4E2A <code>VNode</code>\uFF0C\u63A5\u6536\u7684\u4E3B\u8981\u53C2\u6570\u5C31\u662F\u6807\u7B7E\u540D\u3001\u5C5E\u6027\u3001\u53CA\u5B50\u5143\u7D20</p><p>\u518D\u6BD4\u5982 <code>v-for</code> \u5219\u4F7F\u7528 <code>_l</code> \u65B9\u6CD5\u8FDB\u884C\u6E32\u67D3, <code>_l</code> \u8868\u793A\u4F7F\u7528\u5217\u8868\u6E32\u67D3\uFF0C\u5B83\u5C06\u5FAA\u73AF\u751F\u6210 <code>VNode</code>\uFF0C\u4ECE\u4E0A\u6587\u7684\u8F6C\u6362\u7ED3\u679C\u53EF\u4EE5\u770B <code>_l</code> \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662F\u6E32\u67D3\u6E90\u6570\u636E <code>list</code>\uFF0C\u6BCF\u4E8C\u4E2A\u53C2\u6570\u5219\u662F\u4E00\u4E2A\u5177\u4F53\u6E32\u67D3\u5B50\u8282\u70B9 <code>VNode</code> \u7684\u65B9\u6CD5</p><p>\u9664\u4E86 <code>_c</code> \u3001 <code>_l</code>\uFF0C<code>Vue</code> \u4E2D\u8FD8\u5185\u7F6E\u5176\u5B83\u7684\u751F\u6210 <code>VNode</code> \u65B9\u6CD5\uFF0C\u5982 <code>_v</code> \u5BF9\u5E94 <code>createTextVNode</code> \u521B\u5EFA\u6587\u672C <code>VNode</code>\u3001<code>_s</code> \u662F\u751F\u6210\u5B57\u7B26\u4E32\u65B9\u6CD5\u7B49\u7B49\u7B49\u7B49\u7B49\u7B49\u7B49\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u4E00\u4E00\u5217\u8868\u4E86</p><h2 id="\u901A\u8FC7render\u65B9\u6CD5-\u521B\u5EFAvnode" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7render\u65B9\u6CD5-\u521B\u5EFAvnode" aria-hidden="true">#</a> \u901A\u8FC7<code>render</code>\u65B9\u6CD5\uFF0C\u521B\u5EFAVNode</h2><p>\u4E0A\u6587\u4E2D <code>render</code> \u65B9\u6CD5\u5F00\u59CB\u662F <code>with(this)</code>\uFF0C\u51FD\u6570\u4F53\u4E2D\u7528\u5230\u53D8\u91CF\u90FD\u4ECE\u8FD9\u4E2A <code>this</code> \u4E2D\u83B7\u53D6\uFF0C\u5728 Vue \u4E2D\u8FD9\u4E2A <code>this</code> \u662F\u6307\u5411Vue\u5B9E\u4F8B\u7684\uFF0C\u8FD9\u91CC\u4F5C\u4E3A\u6F14\u793A\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u7B80\u5355\u5BF9\u8C61\u8C03\u7528 <code>render</code> \u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lanjz&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token comment">//</span>
<span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F97\u5230\u5982\u4E0B <code>VNode</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>VNode<span class="token punctuation">{</span>
	<span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">staticClass</span><span class="token operator">:</span> <span class="token string">&quot;page&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
	<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		VNode<span class="token punctuation">{</span>
			<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;lanjz\u7684\u5217\u8868:&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		VNode<span class="token punctuation">{</span>
			<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;__vlist_1_0__&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				VNode<span class="token punctuation">{</span>
					<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		VNode<span class="token punctuation">{</span>
			<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;__vlist_1_1__&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
			<span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				VNode<span class="token punctuation">{</span>
					<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
	
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684 VNode \u5BF9\u8C61\u505A\u4E86\u7B80\u5316\uFF0C\u53EF\u4EE5\u770B\u5230\u5176\u5B9E\u7ED3\u6784\u8DDF\u4E4B\u524D AST \u5BF9\u8C61\u6709\u70B9\u76F8\u4F3C\uFF0C\u90FD\u662F\u4F7F\u7528JS\u5BF9\u8C61\u8868\u793A <code>DOM</code> \u5143\u7D20\u8282\u70B9\uFF0C\u4ED6\u4EEC\u5177\u4F53\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462\uFF1F</p><ul><li><p>AST\u53EA\u662F\u6A21\u677F\u7684\u5BF9\u8C61\u8868\u793A\uFF0C\u5E76\u6CA1\u7ED3\u5408\u5177\u4F53\u7684 <code>data</code> \u503C\u8FDB\u884C\u6E32\u67D3</p></li><li><p><code>VNode</code> \u662F\u7ED3\u5408\u4E86 <code>vue\u6307\u4EE4</code> \u548C <code>data</code> \u503C\u6700\u7EC8\u6E32\u67D3\u51FA\u7684 <code>DOM</code> \u7684\u5BF9\u8C61\u63CF\u8FF0</p></li></ul><h2 id="\u6E32\u67D3\u6210\u771F\u5B9Edom" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u6210\u771F\u5B9Edom" aria-hidden="true">#</a> \u6E32\u67D3\u6210\u771F\u5B9EDOM</h2><p>\u8FD9\u4E00\u6B65\u5C31\u662F\u904D\u5386 <code>VNode</code> \u8F6C\u751F\u6210\u771F\u5B9EDOM\uFF0C\u5E76\u63D2\u5165\u5230\u6D4F\u89C8\u5668\u89C6\u56FE\u4E2D</p><h1 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h1><p><code>template =&gt; AST =&gt; Render =&gt; VNode =&gt; DOM</code></p>`,26),o=[p];function l(c,r){return s(),a("div",null,o)}var u=n(e,[["render",l],["__file","\u6A21\u677F\u5230DOM.html.vue"]]);export{u as default};
