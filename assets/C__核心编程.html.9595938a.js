import{_ as n,o as s,c as a,e as t}from"./app.b74d2e03.js";const e={},p=t(`<h1 id="c-\u6838\u5FC3\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#c-\u6838\u5FC3\u7F16\u7A0B" aria-hidden="true">#</a> C++\u6838\u5FC3\u7F16\u7A0B</h1><p>\u9488\u5BF9 C++\u9762\u5411\u5BF9\u8C61</p><h2 id="\u5185\u5B58\u5206\u533A\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u5206\u533A\u6A21\u578B" aria-hidden="true">#</a> \u5185\u5B58\u5206\u533A\u6A21\u578B</h2><p>C++\u7A0B\u5E8F\u6267\u884C\u65F6\uFF0C\u5C06\u5185\u5B58\u5927\u81F4\u5212\u5206\u4E3A 4 \u4E2A\u533A\u57DF\uFF1A</p><ul><li>\u4EE3\u7801\u533A\uFF1A\u5B58\u653E\u51FD\u6570\u4F53\u7684\u4E8C\u8FDB\u5236\u4EE3\u7801\uFF0C\u7531\u64CD\u4F5C\u7CFB\u7EDF\u8FDB\u884C\u7BA1\u7406\u7684</li><li>\u5168\u5C40\u533A\uFF1A\u5B58\u653E\u5168\u5C40\u53D8\u91CF\u548C\u9759\u6001\u53D8\u91CF\u4EE5\u53CA\u5E38\u91CF</li><li>\u6808\u533A\uFF1A\u7531\u7F16\u8BD1\u5668\u81EA\u52A8\u5206\u914D\u91CA\u653E\uFF0C\u5B58\u653E\u51FD\u6570\u7684\u53C2\u6570\u503C\uFF0C\u5C40\u90E8\u53D8\u91CF\u7B49</li><li>\u5806\u533A\uFF1A\u7531\u7A0B\u5E8F\u5458\u5206\u914D\u548C\u91CA\u653E\uFF0C\u82E5\u7A0B\u5E8F\u5458\u4E0D\u91CA\u653E\uFF0C\u7A0B\u5E8F\u7ED3\u675F\u65F6\u7531\u64CD\u4F5C\u7CFB\u7EDF\u56DE\u6536</li></ul><p>\u5185\u5B58\u56DB\u533A\u610F\u4E49\uFF1A<br> \u4E0D\u540C\u533A\u57DF\u5B58\u653E\u7684\u6570\u636E\uFF0C\u8D4B\u4E88\u4E0D\u540C\u7684\u751F\u547D\u5468\u671F\uFF0C\u7ED9\u54E6\u6211\u4EEC\u6700\u5927\u7684\u7075\u6D3B\u7F16\u7A0B</p><h3 id="\u7A0B\u5E8F\u8FD0\u884C\u524D" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u8FD0\u884C\u524D" aria-hidden="true">#</a> \u7A0B\u5E8F\u8FD0\u884C\u524D</h3><p>\u7A0B\u5E8F\u7F16\u8BD1\u540E\uFF0C\u751F\u6210<strong>exe</strong>\u53EF\u6267\u884C\u7A0B\u5E8F\uFF0C\u672A\u6267\u884C\u8BE5\u7A0B\u5E8F\u524D\u5206\u4E3A\u4E24\u4E2A\u533A\u57DF<br><strong>\u4EE3\u7801\u533A\uFF1A</strong></p><ul><li><p>\u5B58\u653E CPU \u6267\u884C\u7684\u673A\u5668\u547D\u4EE4</p></li><li><p>\u4EE3\u7801\u533A\u662F<strong>\u5171\u4EAB</strong>\u7684\uFF0C\u5171\u4EAB\u7684\u76EE\u7684\u662F\u5BF9\u7E41\u7410\u88AB\u6267\u884C\u7684\u7A0B\u5E8F\uFF0C\u53EA\u9700\u8981\u5728\u5185\u5B58\u4E2D\u6709\u4E00\u4EFD\u4EE3\u7801\u5373\u53EF</p></li><li><p>\u4EE3\u7801\u533A\u662F<strong>\u53EA\u8BFB</strong>\u7684\uFF0C\u4F7F\u5176\u53EA\u8BFB\u7684\u539F\u56E0\u662F\u9632\u6B62\u7A0B\u5E8F\u610F\u5916\u7684\u4FEE\u6539\u5B83\u7684\u6307\u4EE4</p><p><strong>\u5168\u5C40\u533A\uFF1A</strong></p></li><li><p>\u5168\u5C40\u53D8\u91CF\u548C\u9759\u6001\u53D8\u91CF\u5B58\u653E\u5728\u6B64</p></li><li><p>\u5168\u5C40\u533A\u8FD8\u5305\u542B\u4E86\u5E38\u91CF\u533A\uFF0C\u5B57\u7B26\u4E32\u5E38\u91CF\u548C\u5176\u4ED6\u5E38\u91CF\u4E5F\u5B58\u653E\u5728\u6B64</p></li><li><p>\u8BE5\u533A\u57DF\u7684\u6570\u636E\u5728\u7A0B\u5E8F\u7ED3\u675F\u540E\u7531\u64CD\u4F5C\u7CFB\u7EDF\u91CA\u653E</p></li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u5168\u5C40\u53D8\u91CF</span>
<span class="token keyword">int</span> g_a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> g_b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token comment">// const \u4FEE\u9970\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u5168\u5C40\u5E38\u91CF</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> g_c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//\u5168\u5C40\u533A\uFF1A\u5168\u5C40\u53D8\u91CF\u3001\u9759\u6001\u53D8\u91CF\u3001\u5E38\u91CF</span>
	<span class="token comment">// \u521B\u5EFA\u666E\u901A\u5C40\u90E8\u53D8\u91CF</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5C40\u90E8\u53D8\u91CFa\u7684\u5730\u5740\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5C40\u90E8\u53D8\u91CFa\u7684\u5730\u5740\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5168\u5C40\u53D8\u91CFa\u7684\u5730\u5740\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>g_a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5168\u5C40\u53D8\u91CFa\u7684\u5730\u5740\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>g_b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token comment">// \u9759\u6001\u53D8\u91CF \u5728\u666E\u901A\u53D8\u91CF\u524D\u9762\u52A0 static \u5C5E\u4E8E\u9759\u6001\u53D8\u91CF</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> s_a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> s_b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u9759\u6001\u53D8\u91CFs_a\u7684\u5730\u5740\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>s_a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u9759\u6001\u53D8\u91CFs_b\u7684\u5730\u5740\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>s_b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token comment">// \u5E38\u91CF</span>
	<span class="token comment">// \u5B57\u7B26\u4E32\u5E38\u91CF</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5B57\u7B26\u4E32\u5E38\u91CF\u5730\u5740\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token string">&quot;hello world&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token comment">//cosnt \u4FEE\u9970\u7684\u53D8\u91CF</span>
	<span class="token comment">//const \u4FEE\u9970\u7684\u5168\u5C40\u53D8\u91CF\uFF0Cconst \u4FEE\u9970\u7684\u5C40\u90E8\u53D8\u91CF</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;const \u4FEE\u9970\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u5168\u5C40\u5E38\u91CF&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>g_c <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>



	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3\uFF1A</p><ul><li>C++\u4E2D\u5728\u7A0B\u5E8F\u8FD0\u884C\u524D\u5206\u4E3A\u5168\u5C40\u533A\u548C\u4EE3\u7801\u533A</li><li>\u4EE3\u7801\u533A\u7279\u70B9\u662F\u5171\u4EAB\u548C\u53EA\u8BFB</li><li>\u5168\u5C40\u533A\u4E2D\u5B58\u653E\u5168\u5C40\u53D8\u91CF\u3001\u9759\u6001\u53D8\u91CF\u3001\u5E38\u91CF</li><li>\u5E38\u91CF\u533A\u4E2D\u5B58\u653E cosnt \u4FEE\u9970\u7684\u5168\u5C40\u53D8\u91CF\u548C\u5B57\u7B26\u4E32\u5E38\u91CF</li></ul><h3 id="\u7A0B\u5E8F\u8FD0\u884C\u540E" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u8FD0\u884C\u540E" aria-hidden="true">#</a> \u7A0B\u5E8F\u8FD0\u884C\u540E</h3><p><strong>\u6808\u533A\uFF1A</strong> \u7531\u7F16\u8BD1\u5668\u81EA\u52A8\u5206\u914D\u91CA\u653E\uFF0C\u5B58\u653E\u51FD\u6570\u7684\u53C2\u6570\u503C\uFF0C\u5C40\u90E8\u53D8\u91CF\u7B49<br> \u6CE8\u610F\u4E8B\u9879\uFF1A\u4E0D\u8981\u8FD4\u56DE\u5C40\u90E8\u53D8\u91CF\u7684\u5730\u5740\uFF0C\u6808\u533A\u5F00\u8F9F\u7684\u6570\u636E\u7531\u7F16\u8BD1\u5668\u81EA\u52A8\u91CA\u653E</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u6808\u533A\u6570\u636E\u6CE8\u610F\u4E8B\u9879----\u4E0D\u8981\u8FD4\u56DE\u5C40\u90E8\u53D8\u91CF\u7684\u5730\u5740</span>
<span class="token comment">// \u6808\u533A\u6570\u636E\u7531\u7F16\u8BD1\u5668\u7BA1\u7406\u5F00\u8F9F\u548C\u91CA\u653E</span>
<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5F62\u53C2\u6570\u636E\u4E5F\u4F1A\u653E\u5728\u6808\u4E0A</span>
	b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// \u5C40\u90E8\u53D8\u91CF \u5B58\u653E\u5728\u6808\u533A\uFF0C\u6808\u533A\u7684\u6570\u636E\u5728\u51FD\u6570\u6267\u884C\u5B8C\u6210\u540E\u81EA\u52A8\u91CA\u653E</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u5C40\u90E8\u53D8\u91CF\u5730\u5740</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

	<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5806\u533A\uFF1A</strong></p><ul><li>\u7531\u7A0B\u5E8F\u5458\u5206\u914D\u548C\u91CA\u653E\uFF0C\u82E5\u7A0B\u5E8F\u5458\u4E0D\u91CA\u653E\uFF0C\u7A0B\u5E8F\u7ED3\u675F\u65F6\u7531\u64CD\u4F5C\u7CFB\u7EDF\u56DE\u6536</li><li>\u5728 C++\u4E2D\u4E3B\u8981\u5229\u7528 new \u5728\u5806\u533A\u5F00\u8F9F\u5185\u5B58</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">functio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5229\u7528new\u5173\u952E\u5B57\uFF0C\u53EF\u4EE5\u5C06\u6570\u636E\u5F00\u8F9F\u5230\u5806\u533A</span>
	<span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">functio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#new-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> new \u64CD\u4F5C\u7B26</h3><ul><li>C++\u4E2D\u5229\u7528 <code>new</code> \u64CD\u4F5C\u7B26\u5728\u5806\u533A\u5F00\u8F9F\u6570\u636E</li><li>\u5806\u533A\u5F00\u8F9F\u7684\u6570\u636E\uFF0C\u7531\u7A0B\u5E8F\u5458\u624B\u52A8\u5F00\u8F9F\uFF0C\u624B\u52A8\u91CA\u653E\uFF0C\u91CA\u653E\u5229\u7528\u64CD\u4F5C\u7B26 <code>delete</code></li><li>\u8BED\u6CD5\uFF1A<code>new \u6570\u636E\u7C7B\u578B</code></li><li>\u5229\u7528 new \u521B\u5EFA\u7684\u6570\u636E\uFF0C\u4F1A\u8FD4\u56DE\u8BE5\u6570\u636E\u5BF9\u5E94\u7684\u7C7B\u578B\u7684\u6307\u9488</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span><span class="token operator">*</span> <span class="token function">functio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// new \u8FD4\u56DE\u662F\u8BE5\u6570\u636E\u7C7B\u578B\u7684\u6307\u9488</span>
	<span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.new \u7684\u57FA\u672C\u8BED\u6CD5</span>
<span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span><span class="token operator">*</span> p <span class="token operator">=</span> <span class="token function">functio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token comment">//\u5806\u533A\u5F00\u8F9F\u7684\u6570\u636E\uFF0C\u7531\u7A0B\u5E8F\u5458\u624B\u52A8\u5F00\u8F9F\uFF0C\u624B\u52A8\u91CA\u653E\uFF0C\u91CA\u653E\u5229\u7528\u64CD\u4F5C\u7B26 \`delete\`</span>
	<span class="token keyword">delete</span> p<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token comment">// 2.\u5229\u7528new\u5173\u952E\u5B57\u5F00\u8F9F\u6570\u7EC4</span>
<span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA10\u6574\u5F62\u6570\u7EC4\uFF0C\u5728\u5806\u533A</span>
	<span class="token keyword">int</span> <span class="token operator">*</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u6253\u5370\u6570\u636E</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u91CA\u653E\u5806\u533A\u6570\u7EC4,\u91CA\u653E\u6570\u7EC4\u65F6\u9700\u8981\u6DFB\u52A0[]</span>
	<span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528" aria-hidden="true">#</a> \u5F15\u7528</h2><h3 id="\u5F15\u7528\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u5F15\u7528\u7684\u57FA\u672C\u4F7F\u7528</h3><p>\u4F5C\u7528\uFF1A\u7ED9\u53D8\u91CF\u8D77\u522B\u540D<br> \u8BED\u6CD5\uFF1A<code>\u6570\u636E\u7C7B\u578B &amp;\u522B\u540D = \u539F\u540D</code></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span><span class="token operator">&amp;</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a=&quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;b=&quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a=&quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;b=&quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F15\u7528\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u5F15\u7528\u6CE8\u610F\u4E8B\u9879</h3><ul><li>\u5F15\u7528\u5FC5\u987B\u521D\u59CB\u5316</li><li>\u5F15\u7528\u521D\u59CB\u5316\u540E\uFF0C\u4E0D\u53EF\u4EE5\u6539\u53D8</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//1.\u5F15\u7528\u5FC5\u987B\u521D\u59CB\u5316</span>

	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span><span class="token operator">&amp;</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
	<span class="token comment">//2.\u5F15\u7528\u5728\u521D\u59CB\u5316\u540E\uFF0C\u4E0D\u53EF\u4EE5\u4FEE\u6539</span>
	<span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
	b <span class="token operator">=</span> c<span class="token punctuation">;</span> <span class="token comment">// c\u7684\u503C\u5E76\u6CA1\u6709\u8D4B\u503C\u7ED9b</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a=&quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;b=&quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a=&quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;b=&quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F15\u7528\u505A\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u505A\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> \u5F15\u7528\u505A\u51FD\u6570\u53C2\u6570</h3><p>\u4F5C\u7528\uFF1A\u51FD\u6570\u4F20\u53C2\u65F6\uFF0C\u53EF\u4EE5\u5229\u7528\u5F15\u7528\u7684\u6280\u672F\u8BA9\u5F62\u53C2\u4FEE\u9970\u5B9E\u53C2<br> \u4F18\u70B9\uFF1A\u53EF\u4EE5\u7B80\u5316\u6307\u9488\u4FEE\u6539\u5B9E\u53C2</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// 1.\u503C\u4F20\u9012</span>
<span class="token keyword">void</span> <span class="token function">mySwap01</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
	a <span class="token operator">=</span> b<span class="token punctuation">;</span>
	b <span class="token operator">=</span> temp<span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;mySwap01 a= &quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;mySwap01 b= &quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.\u5730\u5740\u4F20\u9012</span>
<span class="token keyword">void</span> <span class="token function">mySwap02</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
	<span class="token operator">*</span>a <span class="token operator">=</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>
	<span class="token operator">*</span>b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3.\u5F15\u7528\u4F20\u9012</span>
<span class="token keyword">void</span> <span class="token function">mySwap03</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
	a <span class="token operator">=</span> b<span class="token punctuation">;</span>
	b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
	<span class="token comment">// \u503C\u4F20\u9012, \u5F62\u53C2\u4E0D\u4F1A\u4FEE\u9970\u5B9E\u53C2</span>
	<span class="token function">mySwap01</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a= &quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;b= &quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token comment">// \u5730\u5740\u4F20\u9012,\u5F62\u53C2\u53EF\u4EE5\u4FEE\u9970\u5B9E\u53C2</span>
	<span class="token function">mySwap02</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// \u5F15\u7528\u4F20\u9012,\u5F62\u53C2\u4E5F\u53EF\u4EE5\u4FEE\u9970\u5B9E\u53C2</span>
	<span class="token function">mySwap03</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F15\u7528\u505A\u51FD\u6570\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u505A\u51FD\u6570\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u5F15\u7528\u505A\u51FD\u6570\u8FD4\u56DE\u503C</h3><ul><li>\u4F5C\u7528\uFF1A\u5F15\u7528\u662F\u53EF\u4EE5\u4F5C\u4E3A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5B58\u5728\u7684</li><li>\u6CE8\u610F\uFF1A\u4E0D\u8981\u8FD4\u56DE\u5C40\u90E8\u53D8\u91CF\u5F15\u7528</li><li>\u7528\u6CD5\uFF1A\u51FD\u6570\u8C03\u7528\u4F5C\u4E3A\u5DE6\u503C</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// 1.\u4E0D\u7528\u8FD4\u56DE\u5C40\u90E8\u53D8\u91CF\u7684\u5E94\u7528</span>
<span class="token keyword">int</span><span class="token operator">&amp;</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// \u5C40\u90E8\u53D8\u91CF\u5B58\u653E\u5728\u56DB\u533A\u4E2D\u7684\u6808\u533A</span>
	<span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.\u51FD\u6570\u7684\u8C03\u7528\u53EF\u4EE5\u4F5C\u4E3A\u5DE6\u503C</span>
<span class="token keyword">int</span><span class="token operator">&amp;</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// \u9759\u6001\u53D8\u91CF\uFF0C\u5B58\u653E\u5728\u5168\u5C40\u533A\uFF0C\u5168\u5C40\u533A\u5728\u7A0B\u5E8F\u7ED3\u675F\u540E\u7CFB\u7EDF\u91CA\u653E</span>
	<span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

	<span class="token keyword">int</span><span class="token operator">&amp;</span> ref <span class="token operator">=</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ref=&quot;</span> <span class="token operator">&lt;&lt;</span> ref <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// \u7B2C\u4E00\u6B21\u7ED3\u679C\u6B63\u786E\uFF0C\u56E0\u4E3A\u7F16\u8BD1\u5668\u505A\u4E86\u4FDD\u7559</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ref=&quot;</span> <span class="token operator">&lt;&lt;</span> ref <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// \u7B2C\u4E8C\u6B21\u7ED3\u679C\u9519\u8BEF\uFF0Ca\u7684\u5185\u5B58\u5DF2\u7ECF\u91CA\u653E</span>


	<span class="token keyword">int</span><span class="token operator">&amp;</span> ref2 <span class="token operator">=</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ref2=&quot;</span> <span class="token operator">&lt;&lt;</span> ref2 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ref2=&quot;</span> <span class="token operator">&lt;&lt;</span> ref2 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token comment">//\u51FD\u6570\u7684\u8C03\u7528\u53EF\u4EE5\u4F5C\u4E3A\u5DE6\u503C</span>
	<span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">// \u5982\u679C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u5F15\u7528\uFF0C\u8FD9\u4E2A\u51FD\u6570\u8C03\u7528\u53EF\u4EE5\u4F5C\u4E3A\u5DE6\u503C</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ref2=&quot;</span> <span class="token operator">&lt;&lt;</span> ref2 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ref2=&quot;</span> <span class="token operator">&lt;&lt;</span> ref2 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F15\u7528\u7684\u672C\u8D28" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7684\u672C\u8D28" aria-hidden="true">#</a> \u5F15\u7528\u7684\u672C\u8D28</h3><p>\u672C\u8D28\uFF1A\u5F15\u7528\u7684\u672C\u8D28\u5728 C++\u5185\u90E8\u5B9E\u73B0\u662F\u4E00\u4E2A\u6307\u9488\u5E38\u91CF\uFF0C\u5F15\u7528\u4E00\u65E6\u521D\u59CB\u5316\u5C31\u4E0D\u53EF\u4EE5\u53D1\u751F\u6539\u53D8</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u53D1\u73B0\u662F\u5F15\u7528\uFF0C\u8F6C\u6362\u4E3A int* const ref = &amp;a;</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ref <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// ref\u662F\u5F15\u7528\uFF0C\u8F6C\u6362\u4E3A*ref = 100</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token comment">// \u81EA\u52A8\u8F6C\u6362\u4E3A int* const ref = &amp;a; \u6307\u9488\u5E38\u91CF\u662F\u6307\u9488\u6307\u5411\u4E0D\u53EF\u6539\uFF0C\u4E5F\u8BF4\u660E\u4E3A\u4EC0\u4E48\u5F15\u7528\u4E0D\u53EF\u66F4\u6539</span>
	<span class="token keyword">int</span><span class="token operator">&amp;</span> ref <span class="token operator">=</span> a<span class="token punctuation">;</span>
	ref <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span><span class="token comment">// \u5185\u90E8\u53D1\u73B0 ref \u662F\u5F15\u7528\uFF0C\u81EA\u52A8\u5E2E\u6211\u4EEC\u8F6C\u6362\u4E3A\uFF1A *ref = 20;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a:&quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ref:&quot;</span> <span class="token operator">&lt;&lt;</span> ref <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u91CF\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF\u5F15\u7528" aria-hidden="true">#</a> \u5E38\u91CF\u5F15\u7528</h3><p>\u4F5C\u7528\uFF1A\u5E38\u91CF\u5F15\u7528\u4E3B\u8981\u7528\u6765\u4FEE\u9970\u5F62\u53C2\uFF0C\u9632\u6B62\u8BEF\u64CD\u4F5C\u3002\u5728\u51FD\u6570\u5F62\u53C2\u5217\u8868\u4E2D\uFF0C\u53EF\u4EE5\u52A0 const \u4FEE\u9970\u5F62\u53C2\uFF0C\u9632\u6B62\u5F62\u53C2\u6539\u53D8\u5B9E\u53C2</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u6253\u5370\u51FD\u6570\u6570\u636E const \u4FEE\u9970\u5F62\u53C2\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539</span>
<span class="token keyword">void</span> <span class="token function">showValue</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//val = 100;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;val=&quot;</span> <span class="token operator">&lt;&lt;</span> val <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">// \u5F15\u7528\u4F7F\u7528\u7684\u573A\u666F\uFF0C\u901A\u5E38\u7528\u6765\u4FEE\u9970\u5F62\u53C2\uFF0C\u9632\u6B62\u8BEF\u64CD\u4F5C</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token comment">// \u52A0\u4E0A cosnt \u4E4B\u540E\uFF0C\u7F16\u8BD1\u5668\u5C06\u4EE3\u7801\u4FEE\u6539 int temp = 10; const int &amp;ref = temp;</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> ref <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// \u5F15\u7528\u5FC5\u987B\u5F15\u4E00\u5757\u5408\u6CD5\u7684\u5185\u5B58\u7A7A\u95F4</span>

	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token function">showValue</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;b=&quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u63D0\u9AD8" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u63D0\u9AD8" aria-hidden="true">#</a> \u51FD\u6570\u63D0\u9AD8</h2><h3 id="\u51FD\u6570\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> \u51FD\u6570\u9ED8\u8BA4\u53C2\u6570</h3><p>\u5728 C++\u4E2D\uFF0C\u51FD\u6570\u7684\u5F62\u53C2\u5217\u8868\u4E2D\u7684\u53C2\u6570\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u3002\u8BED\u6CD5<code>\u8FD4\u56DE\u503C\u7C7B\u578B \u51FD\u6570\u540D(\u53C2\u6570 = \u9ED8\u8BA4\u503C) {}</code><br><strong>\u6CE8\u610F\u4E8B\u9879</strong></p><ul><li>1.\u5982\u679C\u67D0\u4E2A\u4F4D\u7F6E\u5DF2\u7ECF\u5B58\u5728\u4E86\u9ED8\u8BA4\u53C2\u6570\uFF0C\u90A3\u4E48\u4ECE\u8FD9\u4E2A\u4F4D\u7F6E\u5F80\u540E\uFF0C\u4ECE\u5DE6\u5230\u53F3\u90FD\u5FC5\u987B\u6709\u9ED8\u8BA4\u503C</li><li>2.\u5982\u679C\u51FD\u6570\u58F0\u660E\u6709\u9ED8\u8BA4\u53C2\u6570\uFF0C\u51FD\u6570\u5B9E\u73B0\u5C31\u4E0D\u80FD\u591F\u6709\u9ED8\u8BA4\u53C2\u6570</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u67D0\u4E2A\u4F4D\u7F6E\u5DF2\u7ECF\u5B58\u5728\u4E86\u9ED8\u8BA4\u53C2\u6570\uFF0C\u90A3\u4E48\u4ECE\u8FD9\u4E2A\u4F4D\u7F6E\u5F80\u540E\uFF0C\u4ECE\u5DE6\u5230\u53F3\u90FD\u5FC5\u987B\u6709\u9ED8\u8BA4\u503C</span>
<span class="token keyword">int</span> <span class="token function">pushFunction</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5982\u679C\u51FD\u6570\u58F0\u660E\u6709\u9ED8\u8BA4\u53C2\u6570\uFF0C\u51FD\u6570\u5B9E\u73B0\u5C31\u4E0D\u80FD\u591F\u6709\u9ED8\u8BA4\u53C2\u6570</span>
<span class="token comment">// \u58F0\u660E\u548C\u5B9E\u73B0\u53EA\u80FD\u6709\u4E00\u4E2A\u8BBE\u7F6E\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5426\u5219\u7F16\u8BD1\u5668\u62A5\u9519</span>
<span class="token keyword">int</span> <span class="token function">functTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">functTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">pushFunction</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>


	<span class="token keyword">int</span> reslut_a <span class="token operator">=</span> <span class="token function">functTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> reslut_a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u5C55\u4F4D\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5C55\u4F4D\u53C2\u6570" aria-hidden="true">#</a> \u51FD\u6570\u5C55\u4F4D\u53C2\u6570</h3><ul><li>C++\u4E2D\u51FD\u6570\u7684\u5F62\u53C2\u5217\u8868\u4E2D\u53EF\u4EE5\u6709\u5360\u4F4D\u53C2\u6570\uFF0C\u7528\u6765\u5360\u4F4D\uFF0C\u8C03\u7528\u51FD\u6570\u65F6\u5FC5\u987B\u586B\u8865\u8BE5\u4F4D\u7F6E\u3002</li><li>\u8BED\u6CD5\uFF1A<code>\u8FD4\u56DE\u503C\u7C7B\u578B \u51FD\u6570\u540D(\u6570\u636E\u7C7B\u578B){}</code></li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u5360\u4F4D\u53C2\u6570  --- \u8FD4\u56DE\u503C\u7C7B\u578B \u51FD\u6570\u540D(\u6570\u636E\u7C7B\u578B){}</span>
<span class="token comment">// \u76EE\u524D\u9636\u6BB5\u7684\u5360\u4F4D\u53C2\u6570\uFF0C\u7528\u4E0D\u5230\uFF0C\u5360\u4F4D\u53C2\u6570\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;this is function&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u8F7D" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u8F7D</h3><h4 id="\u51FD\u6570\u91CD\u8F7D\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u8F7D\u63CF\u8FF0" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u8F7D\u63CF\u8FF0</h4><p>\u4F5C\u7528\uFF1A\u51FD\u6570\u540D\u53EF\u4EE5\u76F8\u540C\uFF0C\u63D0\u9AD8\u590D\u7528<br><strong>\u51FD\u6570\u91CD\u8F7D\u6EE1\u8DB3\u6761\u4EF6\uFF1A</strong></p><ul><li>\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u4E0B</li><li>\u51FD\u6570\u540D\u79F0\u76F8\u540C</li><li>\u51FD\u6570<strong>\u7C7B\u578B\u4E0D\u540C</strong>\uFF0C\u6216\u8005<strong>\u4E2A\u6570\u4E0D\u540C</strong>\u6216\u8005<strong>\u987A\u5E8F\u4E0D\u540C</strong></li></ul><p>\u6CE8\u610F\uFF1A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E0D\u53EF\u4EE5\u4F5C\u4E3A\u51FD\u6570\u91CD\u8F7D\u7684\u6761\u4EF6</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u51FD\u6570\u91CD\u8F7D\uFF0C\u63D0\u9AD8\u590D\u7528\u3002\u51FD\u6570\u91CD\u8F7D\u9700\u8981\u51FD\u6570\u90FD\u5728\u4E00\u4E2A\u4F5C\u7528\u57DF\u4E0B</span>

<span class="token comment">//\u51FD\u6570\u91CD\u8F7D\u6EE1\u8DB3\u6761\u4EF6\uFF1A</span>
<span class="token comment">//\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u4E0B</span>
<span class="token comment">//\u51FD\u6570\u540D\u79F0\u76F8\u540C</span>
<span class="token comment">//\u51FD\u6570 \u7C7B\u578B\u4E0D\u540C\uFF0C\u6216\u8005 \u4E2A\u6570\u4E0D\u540C  \u6216\u8005  \u987A\u5E8F\u4E0D\u540C</span>
<span class="token comment">//\u5B58\u5728\u8FD4\u56DE\u503C\u7684\u51FD\u6570\uFF0C\u4E0D\u5141\u8BB8\u8FDB\u884C\u51FD\u6570\u91CD\u8F7D</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func \u7684\u8C03\u7528&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func\uFF08int a\uFF09\u7684\u8C03\u7528&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F20\u9012\u53C2\u6570\u987A\u5E8F\u4E0D\u540C</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func\uFF08int a, double b\uFF09\u7684\u8C03\u7528&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">double</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func\uFF08int a, double b\uFF09\u7684\u8C03\u7528&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>




<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u51FD\u6570\u91CD\u8F7D\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u8F7D\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u8F7D\u6CE8\u610F\u4E8B\u9879</h4><ul><li>\u5F15\u7528\u4F5C\u4E3A\u51FD\u6570\u91CD\u8F7D\u6761\u4EF6</li><li>\u51FD\u6570\u91CD\u8F7D\u78B0\u5230\u51FD\u6570\u9ED8\u8BA4\u53C2\u6570</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">///////////////\u5F15\u7528\u4F5C\u4E3A\u51FD\u6570\u91CD\u8F7D\u6761\u4EF6/////////////////</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func\uFF08int &amp;a\uFF09\u7684\u8C03\u7528=&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func\uFF08const int&amp; a\uFF09\u7684\u8C03\u7528&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">///////////////\u51FD\u6570\u91CD\u8F7D\u78B0\u5230\u51FD\u6570\u9ED8\u8BA4\u53C2\u6570/////////////////</span>
<span class="token keyword">void</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func2(int a)\u7684\u8C03\u7528&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;func2(int a)\u7684\u8C03\u7528&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>


	<span class="token comment">// \u8C03\u7528 void func(int &amp;a)</span>
	<span class="token comment">/*int a = 10;
	func(a);*/</span>

	<span class="token comment">// \u8C03\u7528 void func(const int&amp; a)</span>
	<span class="token comment">//func(10);</span>

	<span class="token comment">//func2(10); // \u5F53\u51FD\u6570\u91CD\u8F7D\u9047\u5230\u9ED8\u8BA4\u53C2\u6570\uFF0C\u51FA\u73B0\u4E8C\u4E49\u884C\uFF0C\u62A5\u9519\uFF0C\u5C3D\u91CF\u907F\u514D</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u548C\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u548C\u5BF9\u8C61" aria-hidden="true">#</a> \u7C7B\u548C\u5BF9\u8C61</h2><p>C++\u9762\u5411\u5BF9\u8C61\u7684\u4E09\u5927\u7279\u6027\u4E3A\uFF1A\u5C01\u88C5\u3001\u591A\u6001\u3001\u7EE7\u627F<br> C++\u8BA4\u4E3A\u4E07\u4E8B\u4E07\u7269\u7686\u4E3A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u5B58\u5728\u5176\u5C5E\u6027\u548C\u884C\u4E3A<br> \u4F8B\u5982\uFF1A\u4EBA\u53EF\u4EE5\u4F5C\u4E3A\u5BF9\u8C61\uFF0C\u5C5E\u6027\u6709\u59D3\u540D\u3001\u5E74\u9F84\u3001\u8EAB\u9AD8\u3001\u4F53\u91CD\uFF0C...\u884C\u4E3A\u6709\u8D70\u3001\u8DD1\u3001\u8DF3\u3001\u5403\u996D\u7B49 \u5177\u6709\u76F8\u540C\u6027\u8D28\u7684\u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EF\u4EE5\u62BD\u8C61\u4E3A\u7C7B</p><h3 id="\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5" aria-hidden="true">#</a> \u5C01\u88C5</h3><h4 id="\u5C01\u88C5\u7684\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u7684\u610F\u4E49" aria-hidden="true">#</a> \u5C01\u88C5\u7684\u610F\u4E49</h4><p>\u5C01\u88C5\u662F C++\u9762\u5411\u5BF9\u8C61\u4E09\u5927\u7279\u6027\u4E4B\u4E00<br> \u5C01\u88C5\u7684\u610F\u4E49\uFF1A</p><ul><li>\u5C06\u5C5E\u6027\u548C\u884C\u4E3A\u4F5C\u4E3A\u4E00\u4E2A\u6574\u4F53\uFF0C\u8868\u73B0\u751F\u6D3B\u4E2D\u7684\u4E8B\u52A1</li><li>\u5C06\u5C5E\u6027\u548C\u884C\u4E3A\u52A0\u4EE5\u6743\u9650\u63A7\u5236</li></ul><p><strong>\u5C01\u88C5\u7B2C\u4E00\u5C42\u542B\u4E49\uFF1A</strong> \u5728\u8BBE\u8BA1\u7C7B\u7684\u65F6\u5019\uFF0C\u5C5E\u6027\u548C\u884C\u4E3A\u5199\u5728\u4E00\u8D77\uFF0C\u8868\u73B0\u4E8B\u52A1 <strong>\u8BED\u6CD5\uFF1A</strong><code>class \u7C7B\u540D{\u8BBF\u95EE\u6743\u9650:\u5C5E\u6027/\u884C\u4E3A};</code><br> **\u793A\u4F8B 1\uFF1A**\u8BBE\u7F6E\u4E00\u4E2A\u5706\u7C7B\uFF0C\u6C42\u5706\u7684\u5468\u957F</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6E\u4E00\u4E2A\u5706\u7C7B\uFF0C\u6C42\u5706\u5468\u957F</span>
<span class="token comment">// \u5706\u5468\u957F\u516C\u5F0F\uFF1A2 * PI * \u534A\u5F84</span>

<span class="token comment">//\u5706\u5468\u7387</span>
<span class="token keyword">const</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.1415926</span><span class="token punctuation">;</span>

<span class="token comment">//class \u4EE3\u8868\u8BBE\u8BA1\u4E00\u4E2A\u7C7B\uFF0C\u7C7B\u540E\u9762\u8DDF\u7740\u7C7B\u540D\u79F0</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8BBF\u95EE\u6743\u9650</span>
	<span class="token comment">// \u516C\u5171\u6743\u9650</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// \u5C5E\u6027\uFF1A\u534A\u5F84</span>
	<span class="token keyword">int</span> m_r<span class="token punctuation">;</span>

	<span class="token comment">// \u884C\u4E3A\uFF1A\u83B7\u53D6\u5706\u7684\u5468\u957F</span>
	<span class="token keyword">double</span> <span class="token function">calculateZC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> PI <span class="token operator">*</span> m_r<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">// \u540C\u901A\u8FC7\u5706\u7C7B \u521B\u5EFA\u5177\u4F53\u7684\u5706\uFF08\u5BF9\u8C61\uFF09</span>
	Circle c1<span class="token punctuation">;</span>
	<span class="token comment">// \u7ED9\u5706\u5BF9\u8C61\u7684\u5C5E\u6027\u8FDB\u884C\u8D4B\u503C</span>
	c1<span class="token punctuation">.</span>m_r <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5706\u5468\u957F=====&quot;</span> <span class="token operator">&lt;&lt;</span> c1<span class="token punctuation">.</span><span class="token function">calculateZC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**\u793A\u4F8B 2\uFF1A**\u8BBE\u7F6E\u4E00\u4E2A\u5B66\u751F\u7C7B\uFF0C\u5C5E\u6027\u6709\u59D3\u540D\u3001\u5B66\u53F7\u3001\u53EF\u4EE5\u7ED9\u59D3\u540D\u548C\u5B66\u53F7\u8D4B\u503C\u3002\u53EF\u4EE5\u663E\u793A\u5B66\u751F\u59D3\u540D\u548C\u5B66\u53F7</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6E\u4E00\u4E2A\u5B66\u751F\u7C7B\uFF0C\u5C5E\u6027\u6709\u59D3\u540D\u3001\u5B66\u53F7\u3001\u53EF\u4EE5\u7ED9\u59D3\u540D\u548C\u5B66\u53F7\u8D4B\u503C\u3002\u53EF\u4EE5\u663E\u793A\u5B66\u751F\u59D3\u540D\u548C\u5B66\u53F7</span>

<span class="token comment">// \u7C7B\u4E2D\u5C5E\u6027\u548C\u884C\u4E3A\u6211\u4EEC\u7EDF\u4E00\u79F0\u4E3A\u6210\u5458</span>
<span class="token comment">//\u5C5E\u6027 \u6210\u5458\u5C5E\u6027 \u6210\u5458\u53D8\u91CF</span>
<span class="token comment">//\u884C\u4E3A \u6210\u5458\u51FD\u6570 \u6210\u5458\u65B9\u6CD5</span>

<span class="token comment">//class \u4EE3\u8868\u8BBE\u8BA1\u4E00\u4E2A\u7C7B\uFF0C\u7C7B\u540E\u9762\u8DDF\u7740\u7C7B\u540D\u79F0</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8BBF\u95EE\u6743\u9650:\u516C\u5171\u6743\u9650</span>
	<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// \u5C5E\u6027\uFF1A\u59D3\u540D\u3001\u5B66\u53F7</span>
	string m_Name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> m_Id<span class="token punctuation">;</span>

	<span class="token comment">// \u884C\u4E3A\uFF1A\u83B7\u53D6\u5B66\u751F\u5B66\u53F7\u548C\u59D3\u540D</span>
	<span class="token keyword">void</span> <span class="token function">showStudent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u540D\u5B57:&quot;</span> <span class="token operator">&lt;&lt;</span> m_Name <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; \u5B66\u53F7\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> m_Id <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u7ED9\u59D3\u540D\u8D4B\u503C</span>
	<span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span>string name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_Name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u7ED9\u5B66\u53F7\u8D4B\u503C</span>
	<span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_Id <span class="token operator">=</span> id<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">// \u540C\u901A\u8FC7\u5B66\u751F\u7C7B \u521B\u5EFA\u5177\u4F53\u7684\u5B66\u751F\uFF08\u5BF9\u8C61\uFF09</span>
	Student s1<span class="token punctuation">;</span>
	<span class="token comment">// \u7ED9\u5B66\u751F\u5BF9\u8C61\u7684\u5C5E\u6027\u8FDB\u884C\u8D4B\u503C</span>
	s1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token number">2016084512</span><span class="token punctuation">;</span>
	s1<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

	s1<span class="token punctuation">.</span><span class="token function">showStudent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5C01\u88C5\u7B2C\u4E8C\u5C42\u542B\u4E49\uFF1A</strong><br> \u7C7B\u5728\u8BBE\u8BA1\u65F6\uFF0C\u53EF\u4EE5\u516B\u5C5E\u6027\u548C\u884C\u4E3A\u653E\u5728\u4E0D\u540C\u6743\u9650\u4E0B\uFF0C\u52A0\u4EE5\u63A7\u5236<br> \u8BBF\u95EE\u6743\u9650\u6709\u4E09\u79CD\uFF1A</p><ul><li>pubilc \u516C\u5171\u6743\u9650 \u7C7B\u5185\u53EF\u8BBF\u95EE \u7C7B\u5916\u53EF\u8BBF\u95EE</li><li>protected \u4FDD\u62A4\u6743\u9650 \u7C7B\u5185\u53EF\u8BBF\u95EE \u7C7B\u5916\u4E0D\u53EF\u4EE5\u8BBF\u95EE</li><li>private \u79C1\u6709\u6743\u9650 \u7C7B\u5185\u53EF\u8BBF\u95EE \u7C7B\u5916\u4E0D\u53EF\u8BBF\u95EE</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">/*
	pubilc \u516C\u5171\u6743\u9650 \u7C7B\u5185\u53EF\u8BBF\u95EE \u7C7B\u5916\u53EF\u8BBF\u95EE
	protected \u4FDD\u62A4\u6743\u9650 \u7C7B\u5185\u53EF\u8BBF\u95EE \u7C7B\u5916\u4E0D\u53EF\u4EE5\u8BBF\u95EE \u5B50\u7C7B\u53EF\u4EE5\u8BBF\u95EE\u7236\u7C7B\u4E2D\u7684\u4FDD\u62A4\u5185\u5BB9
	private \u79C1\u6709\u6743\u9650 \u7C7B\u5185\u53EF\u8BBF\u95EE \u7C7B\u5916\u4E0D\u53EF\u8BBF\u95EE \u5B50\u7C7B\u4E0D\u53EF\u4EE5\u8BBF\u95EE\u7236\u7C7B\u4E2D\u7684\u79C1\u6709\u5185\u5BB9
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// \u516C\u5171\u6743\u9650</span>
	string m_Name<span class="token punctuation">;</span> <span class="token comment">// \u59D3\u540D</span>

<span class="token keyword">protected</span><span class="token operator">:</span>
	<span class="token comment">// \u4FDD\u62A4\u6743\u9650</span>
	string m_Car<span class="token punctuation">;</span> <span class="token comment">// \u6C7D\u8F66</span>
<span class="token keyword">private</span><span class="token operator">:</span>
	<span class="token comment">// \u79C1\u6709\u6743\u9650</span>
	<span class="token keyword">int</span> m_Password<span class="token punctuation">;</span> <span class="token comment">// \u94F6\u884C\u5361\u5BC6\u7801</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token keyword">void</span> <span class="token function">fuinc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_Name <span class="token operator">=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">;</span>
		m_Car <span class="token operator">=</span> <span class="token string">&quot;\u5954\u9A70&quot;</span><span class="token punctuation">;</span>
		m_Password <span class="token operator">=</span> <span class="token number">457787</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">// \u5B9E\u4F8B\u5316\u5177\u4F53\u5BF9\u8C61</span>
	Person p1<span class="token punctuation">;</span>
	p1<span class="token punctuation">.</span>m_Name <span class="token operator">=</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">;</span>
	<span class="token comment">//p1.m_Car = &quot;44545&quot; // \u4FDD\u62A4\u6743\u9650\u5185\u5BB9\uFF0C\u5728\u7C7B\u5916\u4E0D\u53EF\u8BBF\u95EE</span>
	<span class="token comment">//p1.m_Password = 451274 // \u79C1\u6709\u6743\u9650\uFF0C\u5728\u7C7B\u5916\u4E0D\u53EF\u8BBF\u95EE</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;=======&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="struct-\u548C-class-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#struct-\u548C-class-\u533A\u522B" aria-hidden="true">#</a> struct \u548C class \u533A\u522B</h4><p>C++\u4E2D<code>struct</code>\u548C<code>class</code>\u552F\u4E00\u533A\u522B\u5C31\u5728\u4E8E\u9ED8\u8BA4\u7684\u8BBF\u95EE\u6743\u9650\u4E0D\u540C<br> \u533A\u522B\uFF1A</p><ul><li>struct \u9ED8\u8BA4\u6743\u9650\u4E3A\u516C\u5171</li><li>class \u9ED8\u8BA4\u6743\u9650\u4E3A\u79C1\u6709</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">C1</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u662F\u516C\u6709\u6743\u9650</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">C2</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> m_A<span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u662F\u79C1\u6709\u6743\u9650</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	C1 c1<span class="token punctuation">;</span>
	c1<span class="token punctuation">.</span>m_A <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

	C2 c2<span class="token punctuation">;</span>
	<span class="token comment">//c2.m_A = 100; // c2 \u4E3A class \u521B\u5EFA\u7C7B\u9ED8\u8BA4\u4E3A\u79C1\u6709\u7C7B\u5916\u4E0D\u53EF\u8BBF\u95EE</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6210\u5458\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u79C1\u6709" tabindex="-1"><a class="header-anchor" href="#\u6210\u5458\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u79C1\u6709" aria-hidden="true">#</a> \u6210\u5458\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u79C1\u6709</h4><p>\u4F18\u70B9\uFF1A</p><ul><li>\u5C06\u6240\u6709\u6210\u5458\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u79C1\u6709\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u63A7\u5236\u8BFB\u5199\u6743\u9650</li><li>\u5BF9\u4E8E\u5199\u6743\u9650\uFF0C\u6211\u4EEC\u53EF\u4EE5\u68C0\u6D4B\u6570\u636E\u7684\u6709\u6548\u6027</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token comment">// \u6210\u5458\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u79C1\u6709</span>
<span class="token comment">//1.\u53EF\u4EE5\u81EA\u5DF1\u63A7\u5236\u8BFB\u5199\u6743\u9650</span>
<span class="token comment">//2.\u5BF9\u4E8E\u5199\u53EF\u4EE5\u68C0\u6D4B\u6570\u636E\u7684\u6709\u6548\u6027</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// \u5199\u59D3\u540D</span>
	<span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span>string name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_Name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u8BFB\u59D3\u540D</span>
	string <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> m_Name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token comment">// \u8BBE\u7F6E\u5E74\u9F84 \u53EF\u8BFB\u53EF\u5199\uFF0C\u5982\u679C\u4FEE\u6539\u5E74\u9F84\u8303\u56F4\u5FC5\u987B\u57280~150\u4E4B\u95F4</span>
	<span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> age <span class="token operator">&gt;</span> <span class="token number">150</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		m_Age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u83B7\u53D6\u5E74\u9F84</span>
	<span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//m_Age = 0; // \u521D\u59CB\u5316\u4E3A0\u5C81</span>
		<span class="token keyword">return</span> m_Age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u8BBE\u7F6E\u559C\u597D</span>
	<span class="token keyword">void</span> <span class="token function">setLover</span><span class="token punctuation">(</span>string lover<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_Lover <span class="token operator">=</span> lover<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token keyword">private</span><span class="token operator">:</span>
	string m_Name<span class="token punctuation">;</span> <span class="token comment">// \u53EF\u8BFB\u53EF\u5199</span>
	<span class="token keyword">int</span> m_Age<span class="token punctuation">;</span> <span class="token comment">// \u53EA\u8BFB</span>
	string m_Lover<span class="token punctuation">;</span> <span class="token comment">// \u53EA\u5199</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

	Person p<span class="token punctuation">;</span>
	p<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u59D3\u540D\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	p<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">1100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5E74\u9F84\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

	<span class="token comment">// \u53EA\u5199\uFF0C\u53EA\u80FD\u5728class\u5185\u8FDB\u884C\u8BBF\u95EE\u5230</span>
	p<span class="token punctuation">.</span><span class="token function">setLover</span><span class="token punctuation">(</span><span class="token string">&quot;\u559C\u6B22\u6C7D\u8F66&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token comment">//p.m_Name = &quot;\u5F20\u4E09&quot;;</span>

	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC3\u4E60\u6848\u4F8B 1\uFF1A\u8BBE\u8BA1\u7ACB\u65B9\u4F53\u7C7B\uFF08Cube\uFF09\u6C42\u51FA\u7ACB\u65B9\u4F53\u9762\u79EF\u548C\u4F53\u79EF\uFF0C\u5206\u522B\u7528\u5168\u5C40\u51FD\u6570\u548C\u6210\u5458\u51FD\u6570\u5224\u65AD\u4E24\u4E2A\u7ACB\u65B9\u4F53\u662F\u5426\u76F8\u7B49</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

<span class="token comment">// \u8BBE\u8BA1\u7ACB\u65B9\u4F53\u7C7B\uFF08Cube\uFF09\u6C42\u51FA\u7ACB\u65B9\u4F53\u9762\u79EF\u548C\u4F53\u79EF\uFF0C\u5206\u522B\u7528\u5168\u5C40\u51FD\u6570\u548C\u6210\u5458\u51FD\u6570\u5224\u65AD\u4E24\u4E2A\u7ACB\u65B9\u4F53\u662F\u5426\u76F8\u7B49</span>
<span class="token keyword">class</span> <span class="token class-name">Cube</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u884C\u4E3A \u83B7\u53D6\u91CC\u7ACB\u65B9\u4F53\u9762\u79EF\u548C\u4F53\u79EF</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// \u8BBE\u7F6E\u957F</span>
	<span class="token keyword">void</span> <span class="token function">setL</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_L <span class="token operator">=</span> l<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u83B7\u53D6\u957F</span>
	<span class="token keyword">int</span> <span class="token function">getL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> m_L<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u8BBE\u7F6E\u5BBD</span>
	<span class="token keyword">void</span> <span class="token function">setW</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_W <span class="token operator">=</span> w<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u83B7\u53D6\u5BBD</span>
	<span class="token keyword">int</span> <span class="token function">getW</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> m_W<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u8BBE\u7F6E\u9AD8</span>
	<span class="token keyword">void</span> <span class="token function">setH</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_H <span class="token operator">=</span> h<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u83B7\u53D6\u9AD8</span>
	<span class="token keyword">int</span> <span class="token function">getH</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> m_H<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u83B7\u53D6\u7ACB\u65B9\u4F53\u9762\u79EF</span>
	<span class="token keyword">int</span> <span class="token function">calculateS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> m_L <span class="token operator">*</span> m_W <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> m_W <span class="token operator">*</span> m_H <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> m_L <span class="token operator">*</span> m_H<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u83B7\u53D6\u7ACB\u65B9\u4F53\u4F53\u79EF</span>
	<span class="token keyword">int</span> <span class="token function">calculateV</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> m_L<span class="token operator">*</span> m_W<span class="token operator">*</span> m_H<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u5229\u7528\u6210\u5458\u51FD\u6570\u5224\u65AD\u4E24\u4E2A\u7ACB\u65B9\u4F53\u662F\u5426\u76F8\u7B49</span>
	<span class="token keyword">bool</span> <span class="token function">isSameByClass</span><span class="token punctuation">(</span>Cube <span class="token operator">&amp;</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> c<span class="token punctuation">.</span><span class="token function">getL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">getW</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> c<span class="token punctuation">.</span><span class="token function">getW</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">getH</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> c<span class="token punctuation">.</span><span class="token function">getH</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u5C5E\u6027</span>
<span class="token keyword">private</span><span class="token operator">:</span>
	<span class="token keyword">int</span> m_L<span class="token punctuation">;</span>
	<span class="token keyword">int</span> m_W<span class="token punctuation">;</span>
	<span class="token keyword">int</span> m_H<span class="token punctuation">;</span>


<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">// \u5229\u7528\u5168\u5C40\u51FD\u6570\u5224\u65AD\u4E24\u4E2A\u7ACB\u65B9\u4F53\u662F\u5426\u76F8\u7B49 ,\u91C7\u7528\u503C\u4F20\u9012\u65B9\u5F0F\u4F20\u9012\u53C2\u6570</span>
<span class="token keyword">bool</span> <span class="token function">isSame</span><span class="token punctuation">(</span>Cube <span class="token operator">&amp;</span>c1<span class="token punctuation">,</span> Cube <span class="token operator">&amp;</span>c2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>c1<span class="token punctuation">.</span><span class="token function">getL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> c2<span class="token punctuation">.</span><span class="token function">getL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> c1<span class="token punctuation">.</span><span class="token function">getW</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> c2<span class="token punctuation">.</span><span class="token function">getW</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> c1<span class="token punctuation">.</span><span class="token function">getH</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> c2<span class="token punctuation">.</span><span class="token function">getH</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

	<span class="token comment">// \u521B\u5EFA\u7ACB\u65B9\u4F53\u5BF9\u8C61</span>
	Cube c1<span class="token punctuation">;</span>
	c1<span class="token punctuation">.</span><span class="token function">setL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	c1<span class="token punctuation">.</span><span class="token function">setW</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	c1<span class="token punctuation">.</span><span class="token function">setH</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C1\u7684\u9762\u79EF\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> c1<span class="token punctuation">.</span><span class="token function">calculateS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C1\u7684\u4F53\u79EF\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> c1<span class="token punctuation">.</span><span class="token function">calculateV</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>


	Cube c2<span class="token punctuation">;</span>
	c2<span class="token punctuation">.</span><span class="token function">setL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	c2<span class="token punctuation">.</span><span class="token function">setW</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	c2<span class="token punctuation">.</span><span class="token function">setH</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C2\u7684\u9762\u79EF\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> c2<span class="token punctuation">.</span><span class="token function">calculateS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C2\u7684\u4F53\u79EF\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> c2<span class="token punctuation">.</span><span class="token function">calculateV</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token comment">// \u5229\u7528\u5168\u5C40\u51FD\u6570\u5224\u65AD\u7ACB\u65B9\u4F53\u662F\u5426\u76F8\u7B49</span>
	<span class="token keyword">bool</span> result <span class="token operator">=</span> <span class="token function">isSame</span><span class="token punctuation">(</span>c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5168\u5C40\u51FD\u6570==c1\u548Cc2\u662F\u76F8\u7B49\u7684&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5168\u5C40\u51FD\u6570==c1\u548Cc2\u4E0D\u76F8\u7B49&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u5229\u7528\u6210\u5458\u51FD\u6570\u5224\u65AD\u7ACB\u65B9\u4F53\u662F\u5426\u76F8\u7B49</span>
	<span class="token keyword">bool</span> ret <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">isSameByClass</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ret<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u7C7B\u6210\u5458\u51FD\u6570==c1\u548Cc2\u662F\u76F8\u7B49\u7684&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u7C7B\u6210\u5458\u51FD\u6570==c1\u548Cc2\u4E0D\u76F8\u7B49&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u8C61\u7684\u521D\u59CB\u5316\u548C\u6E05\u7406" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u521D\u59CB\u5316\u548C\u6E05\u7406" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u521D\u59CB\u5316\u548C\u6E05\u7406</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="c-\u5BF9\u8C61\u6A21\u578B\u548C-this-\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#c-\u5BF9\u8C61\u6A21\u578B\u548C-this-\u6307\u9488" aria-hidden="true">#</a> C++\u5BF9\u8C61\u6A21\u578B\u548C this \u6307\u9488</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u53CB\u5143" tabindex="-1"><a class="header-anchor" href="#\u53CB\u5143" aria-hidden="true">#</a> \u53CB\u5143</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8FD0\u7B97\u7B26\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26\u91CD\u8F7D" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26\u91CD\u8F7D</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u591A\u6001" tabindex="-1"><a class="header-anchor" href="#\u591A\u6001" aria-hidden="true">#</a> \u591A\u6001</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> \u6587\u4EF6\u64CD\u4F5C</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,94),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","C++\u6838\u5FC3\u7F16\u7A0B.html.vue"]]);export{r as default};
