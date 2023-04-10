import{_ as s,o as n,c as a,e}from"./app.b74d2e03.js";const p={},t=e(`<h1 id="\u540E\u53F0\u7BA1\u7406-ui-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u540E\u53F0\u7BA1\u7406-ui-\u89C4\u8303" aria-hidden="true">#</a> \u540E\u53F0\u7BA1\u7406 UI \u89C4\u8303</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E3A\u540E\u53F0\u7BA1\u7406 UI \u8BBE\u8BA1\u63D0\u4F9B\u89C4\u8303\u53C2\u8003</p></div><h2 id="\u6805\u683C" tabindex="-1"><a class="header-anchor" href="#\u6805\u683C" aria-hidden="true">#</a> \u6805\u683C</h2><p>\u6805\u683C\u5E03\u5C40\uFF08\u89E3\u51B3\u81EA\u9002\u5E94\u548C\u54CD\u5E94\u5F0F\u95EE\u9898\uFF0C\u91C7\u7528 24 \u5217\u6805\u683C\u7CFB\u7EDF\u5B9E\u73B0\uFF0C\u4EE5\u6EE1\u8DB3 2\uFF0C3\uFF0C4\uFF0C5\uFF0C6 \u5206\u6BD4\u5E03\u5C40\u7B49\u591A\u79CD\u60C5\u51B5\uFF0C\u56FA\u5B9A\u5BBD\u5EA6 Column\uFF0C\u5C06\u95F4\u9694 Gutter \u8FDB\u884C\u52A8\u6001\u7F29\u653E\uFF09</p><ol><li>\u6805\u683C\u5B9A\u4E49</li><li>\u95F4\u9694\u5B9A\u4E49</li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$max-interval</span></span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$min-interval</span></span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5C3A\u5BF8\u8BBE\u5B9A</li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$lay-top-height</span></span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span> <span class="token comment">//\u9876\u90E8\u680F\u9AD8\u5EA6</span>
<span class="token property"><span class="token variable">$lay-left-width-min</span></span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span> <span class="token comment">//\u4FA7\u8FB9\u680F\u6536\u7F29\u72B6\u6001\u5BBD\u5EA6</span>
<span class="token property"><span class="token variable">$lay-left-width-max</span></span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">// \u4FA7\u8FB9\u680F\u5BBD\u5EA6</span>
<span class="token property"><span class="token variable">$lay-right-suspended</span></span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span> <span class="token comment">//\u53F3\u4FA7\u4FA7\u6D6E\u7A97\u5BBD\u5EA6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u6807</h2><p>\u56FE\u6807\uFF0C\u56FE\u6807\u5206\u4E3A\uFF0C\u7EBF\u6027\u56FE\u6807\u548C\u9762\u6027\u56FE\u8868\uFF0C\u4E00\u822C\u4E00\u4E2A\u7CFB\u7EDF\u4E2D\uFF0C\u91C7\u7528\u76F8\u540C\u98CE\u683C <code>$icon-element: &#39;&#39;;</code></p><h2 id="\u6807\u51C6\u8272" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u8272" aria-hidden="true">#</a> \u6807\u51C6\u8272</h2><ol><li>\u54C1\u724C\u8272\uFF08\u54C1\u724C\u8272\u7684\u5E94\u7528\u573A\u666F\u5305\u62EC\u64CD\u4F5C\u72B6\u6001\u3001\u6309\u94AE\u8272\u3001\u53EF\u64CD\u4F5C\u56FE\u6807\u7B49\uFF09 <code>$brand-color : #4886ff;</code></li><li>\u8F85\u52A9\u8272\uFF08\u8F85\u52A9\u8272\u7528\u4E8E\u63D0\u793A\u5176\u4ED6\u573A\u666F\uFF0C\u6BD4\u5982\u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A\u3001\u65E0\u6548\u7B49\uFF09</li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$serve-color1</span></span><span class="token punctuation">:</span> #6fc643<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$serve-color2</span></span><span class="token punctuation">:</span> #ecac4a<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$serve-color3</span></span><span class="token punctuation">:</span> #f85c5d<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$serve-color4</span></span><span class="token punctuation">:</span> #b2b3b5<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u4E2D\u6027\u8272\uFF08\u4E2D\u6027\u8272\u5E38\u7528\u4E8E\u6587\u672C\u3001\u80CC\u666F\u3001\u8FB9\u6846\u3001\u5206\u5272\u7EBF\u7B49\uFF0C\u9700\u8981\u8003\u8651\u6DF1\u8272\u80CC\u666F\u548C\u6D45\u8272\u80CC\u666F\u7684\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u9009\u62E9\u540C\u4E00\u8272\u76F8\u63A7\u5236\u900F\u660E\u5EA6\u53D8\u5316\uFF0C\u7528\u6765\u8868\u73B0\u4E0D\u540C\u7684\u5C42\u7EA7\u7ED3\u6784\uFF09</li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$neuter-color1</span></span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$neuter-color2</span></span><span class="token punctuation">:</span> #616266<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$neuter-color3</span></span><span class="token punctuation">:</span> #a2a2a2<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$neuter-color4</span></span><span class="token punctuation">:</span> #e5e5e5<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$neuter-color5</span></span><span class="token punctuation">:</span> #f2f2f2<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$neuter-color6</span></span><span class="token punctuation">:</span> #ebeef5<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$neuter-color7</span></span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$neuter-color8</span></span><span class="token punctuation">:</span> #f7fbfe<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$neuter-color9</span></span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5B57\u53F7" aria-hidden="true">#</a> \u5B57\u53F7</h2><p><strong>\u5E38\u7528\u5B57\u53F7\u8BBE\u7F6E</strong></p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-size12</span></span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size13</span></span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size14</span></span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size16</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size18</span></span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size20</span></span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size24</span></span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size30</span></span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u884C\u9AD8" tabindex="-1"><a class="header-anchor" href="#\u884C\u9AD8" aria-hidden="true">#</a> \u884C\u9AD8</h2><p>\u5E38\u7528\u5B57\u53F7\u5BF9\u5E94\u884C\u53F7\uFF08\u4E00\u822C\u884C\u9AD8 = \u6587\u5B57\u5927\u5C0F + 6px/8px \uFF09\u8FD9\u91CC\u6309\u7167\uFF08\u6587\u5B57\u5927\u5C0F+8px \u8BA1\u7B97\uFF09</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$line-height-size12</span></span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height-size13</span></span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height-size14</span></span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height-size16</span></span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height-size18</span></span><span class="token punctuation">:</span> 26px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height-size20</span></span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height-size24</span></span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$line-height-size30</span></span><span class="token punctuation">:</span> 38px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53" aria-hidden="true">#</a> \u5B57\u4F53</h2><p>\u6807\u51C6\u5B57\u4F53\u8BBE\u7F6E</p><ol><li>Win</li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-family-c-H</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Microsoft YaHei&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u4E2D\u6587</span>
<span class="token property"><span class="token variable">$font-family-c-Y</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Arial&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u82F1\u6587</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Mac</li></ol><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-family-e-H</span></span><span class="token punctuation">:</span> <span class="token string">&#39;PingFang SC&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u4E2D\u6587</span>
<span class="token property"><span class="token variable">$font-family-e-Y</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Helvetica&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u82F1\u6587</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#\u6309\u94AE" aria-hidden="true">#</a> \u6309\u94AE</h2><p>\u6309\u94AE\uFF08\u4EA4\u4E92\u72B6\u6001\u5305\u62EC\u9ED8\u8BA4\u3001\u60AC\u505C\u3001\u70B9\u51FB\u548C\u4E0D\u53EF\u7528\uFF09 \u6309\u94AE\u6839\u636E\u9700\u6C42\u5206\u4E3A\u4E0D\u540C\u5C3A\u5BF8\uFF0C\u5927\u4E2D\u5C0F\u4E09\u4E2A\u7EA7\u522B\u7528\u5728\u4E0D\u540C\u7684\u573A\u666F\uFF0C\u4E00\u822C\u6309\u7167 8 \u7684\u500D\u6570\u8BBE\u5B9A\u3002\u5982\u9AD8\u5EA6\u5206\u522B\u8BBE\u5B9A\u4E3A 24\u300132\u300140px\u3002 \u89C4\u8303\u6574\u7406\u65F6\u8981\u89C4\u5B9A\u4E0D\u540C\u7C7B\u578B\u6309\u94AE\u7684\u5BBD\u9AD8\u3001\u5706\u89D2\u53CA\u6587\u5B57\u5927\u5C0F\uFF0C\u540C\u65F6\u8FD8\u8981\u5C06\u6309\u94AE\u7684\u4E0D\u540C\u72B6\u6001\u5C55\u73B0\u51FA\u6765\u3002 \u586B\u5145\u6309\u94AE\u4E4B\u95F4\u95F4\u8DDD\u6700\u5C0F\u4E3A 10px;</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$button-height-min</span></span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$button-height-in</span></span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$button-height-max</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875" aria-hidden="true">#</a> \u5206\u9875</h2><p>\u5206\u9875\u7684\u9AD8\u5EA6\u8BBE\u5B9A\u4E3A 24px\u300130px\u300132px\uFF0C\u6839\u636E\u5E94\u7528\u573A\u666F\u9002\u5F53\u589E\u51CF\u5185\u5BB9\uFF0C\u6BD4\u5982\u8BBE\u5B9A\u6BCF\u9875\u5C55\u793A\u6570\u636E\u7684\u6761\u6570\u3001\u8DF3\u8F6C\u81F3\u6307\u5B9A\u9875\u7B49</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$paging-height-min</span></span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$paging-height-in</span></span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$paging-height-max</span></span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a> \u8868\u5355</h2><p>\u8868\u5355\u5143\u7D20\u9AD8\u5EA6\u53EF\u6309\u7167 8 \u7684\u500D\u6570\u8FDB\u884C\u8BBE\u5B9A\uFF0C\u6BD4\u5982 24px\u300132px \u8868\u5355\u4E2D\u6807\u9898\u6587\u5B57\u5DE6\u5BF9\u9F50\uFF0C\u8F93\u5165\u6846\u5DE6\u5BF9\u9F50\uFF0C\u6807\u9898\u6587\u5B57\u8DDD\u79BB\u8F93\u5165\u6846 20px \u6807\u9898\u6587\u5B57\u53F3\u5BF9\u9F50\uFF0C\u8F93\u5165\u6846\u5DE6\u5BF9\u9F50\uFF0C\u8F93\u5165\u6846\u5185\u6B63\u6587\u5B57\u4F53 14px\uFF0C\u6587\u5B57\u548C\u5DE6\u53F3\u4E24\u8FB9\u8FB9\u6846\u7684\u8FB9\u8DDD 10px</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$form-height-min</span></span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$form-height-max</span></span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a> \u8868\u683C</h2><p>\u8868\u683C\u4E3B\u8981\u5206\u4E3A\u4E94\u5927\u533A\u57DF\uFF1A\u9009\u62E9\u641C\u7D22\u533A\u3001\u64CD\u4F5C\u533A\u3001\u8868\u5934\u3001\u6B63\u6587\u3001\u5E95\u680F</p><ol><li>\u8868\u683C\u884C\u9AD8\u53EF\u8BBE\u7F6E\u4E3A\u8868\u683C\u5185\u5B57\u4F53\u9AD8\u5EA6\u7684 2~3 \u500D\uFF0C\u4E3B\u8868\u683C\u4F1A\u95F4\u9694\u663E\u793A\u4E0D\u540C\u989C\u8272\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u884C\u6570\u636E\u3001\u52A0\u5F3A\u89C6\u89C9\u6D41\u5F15\u5BFC\uFF0C\u5C55\u5F00\u5355\u884C\u7684\u5185\u7F6E\u8868\u683C\u53EF\u91C7\u7528\u7EAF\u8272\uFF0C\u9009\u4E2D\u884C\u5E94\u6709\u89C6\u89C9\u4E0A\u7684\u53CD\u9988\u3002\u8868\u5934\u8981\u548C\u8868\u683C\u5185\u5BB9\u6709\u89C6\u89C9\u4E0A\u7684\u533A\u5206,\u8868\u683C\u884C\u9AD8\u53EF\u91C7\u7528 36\u300140\u300148\u300160 \u7B49</li><li>\u8868\u683C\u884C\u6570\u592A\u591A\u52A0\u8F7D\u901F\u5EA6\u4F1A\u964D\u4F4E\uFF0C\u5EF6\u957F\u7528\u6237\u7B49\u5F85\u65F6\u95F4\uFF1B\u884C\u6570\u592A\u5C11\u4F1A\u5BFC\u81F4\u7528\u6237\u4E0D\u65AD\u7FFB\u9875\uFF0C\u964D\u4F4E\u4F7F\u7528\u6548\u7387\u3002\u6BD4\u8F83\u5408\u9002\u7684\u9ED8\u8BA4\u8868\u683C\u884C\u6570\u662F 20 \u6216 50\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u9700\u6C42\u9009\u62E9\u9ED8\u8BA4\u7684\u884C\u6570</li><li>\u5217\u5BBD\u6839\u636E\u5185\u5BB9\u5B57\u6BB5\u957F\u77ED\u9700\u8981\u6709\u4E0D\u540C\u4E14\u5408\u7406\u7684\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u5F97\u8868\u683C\u5B57\u6BB5\u6709\u826F\u597D\u7684\u5C55\u793A\u6548\u679C\u3002\u5217\u5185\u5BB9\u7684\u957F\u5EA6\u56FA\u5B9A\u65F6\uFF0C\u5217\u5BBD\u5E94\u5927\u4E8E\u56FA\u5B9A\u5BBD\u5EA6\uFF08\u6BD4\u5982\u65F6\u95F4\u3001MD5\u3001SHA1\uFF09\uFF1B\u5217\u5185\u5BB9\u4E0D\u56FA\u5B9A\u65F6\uFF0C\u80FD\u9884\u5224\u6700\u5927\u5BBD\u5EA6\u7684\u6309\u7167\u6700\u5927\u5BBD\u5EA6\u8BBE\u5B9A\u5217\u5BBD\uFF08\u6BD4\u5982 IP \u5730\u5740\u3001MAC \u5730\u5740\u3001\u59D3\u540D\uFF09\uFF0C\u4E0D\u80FD\u9884\u5224\u6700\u5927\u5BBD\u5EA6\u7684\u8BBE\u5B9A\u5217\u5BBD\u6309\u7167\u5E38\u7528\u5BBD\u5EA6\uFF0C\u591A\u4E8E\u5185\u5BB9\u7701\u7565\u4EE5\u300C\u2026\u300D\u5C55\u793A\uFF0C\u9F20\u6807\u60AC\u505C\u51FA\u73B0\u5B8C\u6574\u5185\u5BB9\uFF08\u6BD4\u5982\u8BE6\u60C5\u3001\u63CF\u8FF0</li><li>\u5217\u6570\uFF0C\u8868\u683C\u5217\u4E0D\u5E94\u8FC7\u591A\uFF0C\u5217\u6570\u6BD4\u8F83\u591A\u7684\u60C5\u51B5\u4E0B\u5E94\u8BE5\u5408\u7406\u8FDB\u884C\u5408\u5E76\u3001\u9690\u85CF\u3001\u5220\u9664\u6216\u8FDB\u884C\u4F18\u5148\u7EA7\u5904\u7406</li><li>\u5BF9\u9F50\u65B9\u5F0F</li><li>\u8BE6\u60C5\u5165\u53E3\uFF0C\u8868\u683C\u5185\u90E8\u6570\u636E\u7684\u8BE6\u60C5\u5165\u53E3\uFF0C\u5C06\u80FD\u70B9\u51FB\u4E0B\u94BB\u67E5\u770B\u8BE6\u60C5\u7684\u5185\u5BB9\u4EE5\u4E0D\u540C\u989C\u8272\u8868\u793A\uFF0C\u540C\u65F6\u5728\u8868\u683C\u884C\u6700\u540E\u4E00\u5217\u64CD\u4F5C\u6309\u94AE\u90E8\u5206\u653E\u7F6E\u4E00\u4E2A\u67E5\u770B\u6309\u94AE</li></ol><h2 id="\u53CD\u9988" tabindex="-1"><a class="header-anchor" href="#\u53CD\u9988" aria-hidden="true">#</a> \u53CD\u9988</h2><p>\u5305\u62EC\u5F39\u6846\u3001\u4FA7\u6ED1\u6846\u3001\u9AA8\u67B6\u5C4F\u3001\u5168\u5C40\u63D0\u793A\u3001\u8B66\u544A\u63D0\u793A\u3001\u6D88\u606F\u63D0\u9192\u3001\u52A0\u8F7D\u72B6\u6001\u7B49\u3002\u5206\u4E3A\u6A21\u6001\u6846\u548C\u975E\u6A21\u6001\u6846\uFF0C\u533A\u522B\u662F\u662F\u5426\u4F1A\u6253\u65AD\u7528\u6237\u5DE5\u4F5C\u6D41 1.\u5F39\u6846\u51FA\u73B0\u65F6\uFF0C\u4E3B\u9898\u5185\u5BB9\u589E\u52A0\u4E00\u5C42\u906E\u7F69 #000\uFF0C\u900F\u660E\u5EA6 50%\uFF0C\u907F\u514D\u4F7F\u7528\u53CC\u5C42\u5F39\u6846\uFF0C\u53EF\u540C\u65F6\u91C7\u7528\u6709\u5173\u95ED\u56FE\u6807\u7684\u5F39\u6846\u548C\u65E0\u5173\u95ED\u56FE\u6807\u7684\u5F39\u6846\uFF0C\u5F15\u5BFC\u7528\u6237\u5BF9\u5185\u5BB9\u8FDB\u884C\u6B63\u786E\u64CD\u4F5C 2.\u4FA7\u6ED1\u6846\u53C8\u79F0\u62BD\u5C49\uFF0C\u51FA\u73B0\u5728\u53F3\u4FA7\uFF0C\u56FA\u5B9A\u5BBD\u5EA6 400px\uFF0C\u9AD8\u5EA6\u8986\u76D6\u5728\u4E3B\u9898\u5185\u5BB9\u4E4B\u4E0A\uFF0C\u70B9\u51FB\u4FA7\u6ED1\u6846\u4EE5\u5916\u7684\u533A\u57DF\u5219\u6536\u8D77\u4FA7\u6ED1\u6846 3.\u9AA8\u67B6\u5C4F\uFF0C\u4E3A\u67D0\u4E9B\u7279\u5B9A\u6570\u636E\u63D0\u4F9B\u6570\u636E\u52A0\u8F7D\u7B49\u5F85\u65F6\u7684\u5360\u4F4D\u56FE\u5F62\u7EC4\u5408 4.\u5168\u5C40\u63D0\u793A\uFF0C\u5EFA\u8BAE\u505C\u7559\u65F6\u95F4 3s\uFF0C\u53EF\u6839\u636E\u6587\u5B57\u5B57\u6570\u8C03\u6574\u505C\u7559\u65F6\u95F4\uFF0C\u6587\u5B57\u5185\u5BB9\u9650\u5236\u5728 30 \u4EE5\u5185 5.\u8B66\u544A\u63D0\u793A\uFF0C\u7528\u4E0D\u540C\u989C\u8272\u548C\u6837\u5F0F\u5C55\u793A\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F 6.\u901A\u77E5\u63D0\u9192\uFF0C\u6D88\u606F\u901A\u77E5\u548C\u8B66\u544A\u4FE1\u606F\u7528\u901A\u77E5\u63D0\u9192\u6846\uFF0C\u5355\u4E2A\u6D88\u606F\u4ECE\u9875\u9762\u53F3\u4FA7\u4EE5\u62BD\u5C49\u7684\u65B9\u5F0F\u5212\u51FA\uFF0C\u7528\u6237\u53EF\u624B\u52A8\u5173\u95ED\uFF0C\u6216\u505C\u7559 3s \u540E\u81EA\u52A8\u5173\u95ED</p><h2 id="\u7F3A\u7701\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u7701\u72B6\u6001" aria-hidden="true">#</a> \u7F3A\u7701\u72B6\u6001</h2><p>\u7ED8\u5236\u4E0D\u540C\u7C7B\u578B\u7684\u60C5\u611F\u5316\u63D2\u753B\u8868\u793A\u7F3A\u7701\u72B6\u6001\uFF0C\u5982 404\u3001500\u3001\u6682\u65F6\u6CA1\u6709\u6570\u636E\u3001\u6CA1\u6709\u65B0\u6D88\u606F\u7B49\u3002 \u9875\u9762\u9700\u8981\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5E95\u8272\uFF0C\u9519\u8BEF\u6587\u5B57\u4F7F\u7528 14px\uFF0C\u4E0E\u60C5\u611F\u5316\u63D2\u753B\u95F4\u8DDD 20px\uFF0C\u4E0E\u6309\u94AE\u95F4\u8DDD 30px</p><h2 id="\u6570\u636E\u53EF\u89C6\u5316" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u53EF\u89C6\u5316" aria-hidden="true">#</a> \u6570\u636E\u53EF\u89C6\u5316</h2><p>\u6570\u636E\u53EF\u89C6\u5316\u90E8\u5206\u53EF\u80FD\u662F\u540E\u53F0\u4EA7\u54C1\u4E2D\u5BF9\u89C6\u89C9\u8BBE\u8BA1\u8981\u6C42\u8F83\u9AD8\u7684\u90E8\u5206\uFF0C\u4F7F\u7528\u60C5\u5883\u4E3A\u5404\u7C7B\u7EDF\u8BA1\u56FE\u3001\u5927\u5C4F\u5C55\u793A\u9875\u9762\u7B49\u3002 \u529F\u80FD\u578B\u9875\u9762\u7684\u6570\u636E\u53EF\u89C6\u5316\u53EF\u4EE5\u5F15\u5165\u56FE\u5F62\u5316\u8BBE\u8BA1\u7EC4\u4EF6\uFF0CEcharts\u3001G2\u3001d3 \u7B49\uFF1B\u5C55\u793A\u578B\u9875\u9762\u7684\u6570\u636E\u53EF\u89C6\u5316\u5219\u53EF\u4EE5\u505A\u5F97\u66F4\u6709\u8DA3\uFF0C \u6BD4\u5982\u7ACB\u4F53\u7684\u7EDF\u8BA1\u56FE\u3001\u7C92\u5B50\u5730\u7403\u6548\u679C\u3001\u7075\u6D3B\u6709\u8DA3\u7684\u7F51\u7EDC\u62D3\u6251\u56FE\u7B49\u3002 \u8003\u8651\u5230\u6570\u636E\u53EF\u89C6\u5316\u53EF\u80FD\u4F1A\u9700\u8981\u6DF1\u8272\u6D45\u8272\u4E0D\u540C\u7684\u80CC\u666F\uFF0C\u5728\u6570\u636E\u53EF\u89C6\u5316\u7EDF\u8BA1\u56FE\u7684\u8272\u5F69\u642D\u914D\u4E0A\u8981\u6CE8\u610F\u989C\u8272\u7684\u62D3\u5C55\u6027\u3002</p>`,45),i=[t];function l(c,o){return n(),a("div",null,i)}const u=s(p,[["render",l],["__file","\u540E\u53F0\u7BA1\u7406UI\u89C4\u8303.html.vue"]]);export{u as default};
