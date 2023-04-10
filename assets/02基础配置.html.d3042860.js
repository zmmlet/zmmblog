import{_ as n,o as s,c as a,e}from"./app.b74d2e03.js";const p={},t=e(`<h1 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u7840\u914D\u7F6E</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728 <code>docs\\.vuepress</code> \u6587\u4EF6\u4E0B\u65B0\u5EFA <code>config.js</code> \u6587\u4EF6\uFF0C\u57FA\u7840\u914D\u7F6E\u6240\u6709\u914D\u7F6E\u9879\u5728 <code>config.js</code> \u6587\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E</p></div><h2 id="\u914D\u7F6E\u9879\u76EE\u540D\u79F0-\u9879\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE\u540D\u79F0-\u9879\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE\u540D\u79F0\uFF0C\u9879\u76EE\u63CF\u8FF0</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6211\u7761\u7740\u7684\u65F6\u5019\u4E0D\u56F0\u5509&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7F51\u7AD9\u6807\u9898</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;\u8BB0\u5F55\u5B66\u4E60\u7B14\u8BB0&#39;</span> <span class="token comment">// \u7F51\u7AD9\u7684\u63CF\u8FF0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u9879\u76EE\u672C\u5730\u7AEF\u53E3-\u6253\u5305\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE\u672C\u5730\u7AEF\u53E3-\u6253\u5305\u76EE\u5F55" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE\u672C\u5730\u7AEF\u53E3\uFF0C\u6253\u5305\u76EE\u5F55</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7F16\u8BD1\u540E\u7684\u8F93\u51FA\u76EE\u5F55./ROOT\u4EE3\u8868\u5728\u5DE5\u7A0B\u7684\u6839\u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2AROOT\u6587\u4EF6\uFF0C\u91CC\u9762\u662F\u7F16\u8BD1\u597D\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u62FFROOT\u76F4\u63A5\u90E8\u7F72</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/zmmblog/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7AD9\u70B9\u6839\u8DEF\u5F84 // \u8DEF\u5F84\u540D\u4E3A &quot;/&lt;REPO&gt;/&quot;</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3026</span> <span class="token comment">// \u7AEF\u53E3\u53F7</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E-head" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-head" aria-hidden="true">#</a> \u914D\u7F6E head</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u589E\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 favicon</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/favicons/favicon-16x16.png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sizes</span><span class="token operator">:</span> <span class="token string">&#39;16x16&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token comment">// \u89E3\u51B3\u5916\u8054\u56FE\u7247\u4E0D\u663E\u793A\u7531\u4E8E\u6211\u4EECvuepress\u672C\u5730\u670D\u52A1\u628A\u5F53\u524D\u672C\u7AD9\u7684referrer\u5E26\u7ED9\u4E86cdn\u56FE\u7247\u8BF7\u6C42\uFF0C\u7B2C\u4E09\u65B9\u53D1\u73B0\u4E0D\u662F\u672C\u7AD9\u7684\u8BF7\u6C42</span>
      <span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;referrer&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;no-referrer&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u79FB\u52A8\u7AEF\u4F18\u5316</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;viewport&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span>
          <span class="token string">&#39;width=device-width,initial-scale=1,user-scalable=no,maximum-scale=2&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E-theme-\u7684-navbar" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-theme-\u7684-navbar" aria-hidden="true">#</a> \u914D\u7F6E theme \u7684 navbar</h2><ol><li>\u5728 <code>docs\\.vuepress</code> \u6587\u4EF6\u5939\u4E2D\u65B0\u5EFA <code>config\\navbar\\index.js</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> navbar <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u7AD9\u5916\u94FE\u63A5&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;gitee&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://gitee.com/zmmlet&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6398\u91D1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://juejin.cn/user/114004940306909&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u524D\u7AEF&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/css/purgeCSS.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/frontend/css/SCSS.md&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;javaScript&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/javaScript/ES6.md&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/vue/electron+Vue\u4F7F\u7528\u603B\u7ED3.md&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728 <code>docs\\.vuepress\\config\\</code> \u6587\u4EF6\u5939\u4E2D\u65B0\u5EFA <code>index.js</code> \u6587\u4EF6</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./navbar/index.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u5728 <code>docs\\.vuepress\\config.js</code> \u6587\u4EF6\u4E2D\u5F15\u5165\u4F7F\u7528</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config/index&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> navbar
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E-theme-\u7684-sidebar" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-theme-\u7684-sidebar" aria-hidden="true">#</a> \u914D\u7F6E theme \u7684 sidebar</h2><ol><li>\u5728 <code>docs\\.vuepress</code> \u6587\u4EF6\u5939\u4E2D\u65B0\u5EFA <code>config\\sidebar\\index.js</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/frontend/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/css/purgeCSS.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/frontend/css/SCSS.md&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;javaScript&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/javaScript/ES6.md&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/frontend/vue/electron+Vue\u4F7F\u7528\u603B\u7ED3.md&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728 <code>docs\\.vuepress\\config\\index.js</code> \u6587\u4EF6</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./sidebar/index.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u5728 <code>docs\\.vuepress\\config.js</code> \u6587\u4EF6\u4E2D\u5F15\u5165\u4F7F\u7528</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config/index&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> sidebar
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u7840\u914D\u7F6E\u5B8C\u6574\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E\u5B8C\u6574\u4EE3\u7801" aria-hidden="true">#</a> \u57FA\u7840\u914D\u7F6E\u5B8C\u6574\u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> navbar<span class="token punctuation">,</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config/index&#39;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6211\u7761\u7740\u7684\u65F6\u5019\u4E0D\u56F0\u5509&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7F51\u7AD9\u6807\u9898</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;\u8BB0\u5F55\u5B66\u4E60\u7B14\u8BB0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7F51\u7AD9\u7684\u63CF\u8FF0</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7F16\u8BD1\u540E\u7684\u8F93\u51FA\u76EE\u5F55./ROOT\u4EE3\u8868\u5728\u5DE5\u7A0B\u7684\u6839\u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2AROOT\u6587\u4EF6\uFF0C\u91CC\u9762\u662F\u7F16\u8BD1\u597D\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u62FFROOT\u76F4\u63A5\u90E8\u7F72</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/zmmblog/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7AD9\u70B9\u6839\u8DEF\u5F84 // \u8DEF\u5F84\u540D\u4E3A &quot;/&lt;REPO&gt;/&quot;</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3026</span><span class="token punctuation">,</span> <span class="token comment">// \u7AEF\u53E3\u53F7</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u589E\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 favicon</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/favicons/favicon-16x16.png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sizes</span><span class="token operator">:</span> <span class="token string">&#39;16x16&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token comment">// \u89E3\u51B3\u5916\u8054\u56FE\u7247\u4E0D\u663E\u793A\u7531\u4E8E\u6211\u4EECvuepress\u672C\u5730\u670D\u52A1\u628A\u5F53\u524D\u672C\u7AD9\u7684referrer\u5E26\u7ED9\u4E86cdn\u56FE\u7247\u8BF7\u6C42\uFF0C\u7B2C\u4E09\u65B9\u53D1\u73B0\u4E0D\u662F\u672C\u7AD9\u7684\u8BF7\u6C42</span>
      <span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;referrer&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;no-referrer&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u79FB\u52A8\u7AEF\u4F18\u5316</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;viewport&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span>
          <span class="token string">&#39;width=device-width,initial-scale=1,user-scalable=no,maximum-scale=2&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> navbar<span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> sidebar
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[t];function l(i,r){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","02\u57FA\u7840\u914D\u7F6E.html.vue"]]);export{u as default};
