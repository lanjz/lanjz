import{_ as p,o as l,c as i,b as e,a as c,d as a,e as d,r as s}from"./app.8ae844c0.js";var n="/lanjz/assets/tcp_1.39e1b2b0.png",r="/lanjz/assets/tcp_2.3ad5696a.png",t="/lanjz/assets/tcp_3.f3aa3521.png",C="/lanjz/assets/tcp_5.36ac5708.png";const T={},A=a('<h1 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h1><p>TCP\uFF08Transmission Control Protocol\uFF09\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\u7684\u3001\u53EF\u9760\u7684\u3001\u57FA\u4E8E\u5B57\u8282\u6D41\u7684<strong>\u4F20\u8F93\u5C42</strong>\u901A\u4FE1\u534F\u8BAE</p><h2 id="tcp\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#tcp\u7279\u6027" aria-hidden="true">#</a> TCP\u7279\u6027</h2><ul><li><p>TCP\u662F\u5BF9\u9762\u8FDE\u63A5\u3001\u53EF\u9760\u7684\u5B57\u8282\u6D41\u670D\u52A1</p></li><li><p>\u5728\u4E00\u6B21TCP\u8FDE\u63A5\u4E2D\uFF0C\u4EC5\u6709\u4E24\u65B9\u8FDB\u884C\u901A\u4FE1\u3002\u5E7F\u64AD\u548C\u591A\u64AD\u4E0D\u80FD\u7528TCP</p></li><li><p>TCP\u4F7F\u7528\u6821\u9A8C\u548C\uFF0C\u786E\u8BA4\u548C\u91CD\u4F20\u673A\u5236\u6765\u4FDD\u8BC1\u53EF\u9760\u4F20\u8F93</p></li><li><p>TCP\u7ED9\u6570\u636E\u5206\u8282\u8FDB\u884C\u6392\u5E8F\uFF0C\u5E76\u4F7F\u7528\u7D2F\u79EF\u786E\u8BA4\u4FDD\u8BC1\u6570\u636E\u7684\u987A\u5E8F\u4E0D\u53D8\u548C\u975E\u91CD\u590D</p></li><li><p>TCP\u4F7F\u7528\u6ED1\u52A8\u7A97\u53E3\u673A\u5236\u6765\u5B9E\u73B0\u6D41\u91CF\u63A7\u5236\uFF0C\u901A\u8FC7\u52A8\u6001\u6539\u53D8\u7A97\u53E3\u7684\u5927\u5C0F\u8FDB\u884C\u62E5\u585E\u63A7\u5236</p></li></ul><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1ATPC\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u6570\u636E\u4E00\u5B9A\u80FD\u767E\u5206\u767E\u4F20\u8F93\u6210\u529F\uFF0CTCP\u80FD\u505A\u7684\u53EA\u662F\uFF0C\u5982\u679C\u6709\u53EF\u80FD\u5C31\u628A\u6570\u636E\u4F20\u9012\u7ED9\u5BF9\u65B9\uFF0C\u5426\u5219\u5C31\uFF08\u901A\u8FC7\u653E\u5F03\u91CD\u4F20\u4E14\u4E2D\u65AD\u8FDE\u63A5\u7684\u65B9\u5F0F\uFF09\u901A\u8FC7\u7528\u6237\u3002\u56E0\u6B64\u51C6\u786E\u7684\u8BF4TCP\u4E0D\u662F\u767E\u5206\u767E\u53EF\u9760\u7684\u534F\u8BAE\uFF0C\u5B83\u6240\u80FD\u63D0\u4F9B\u662F\u6570\u636E\u7684\u53EF\u9760\u4F20\u9001\u6216\u6545\u969C\u7684\u901A\u77E5</p><h2 id="\u4E09\u6B21\u63E1\u624B\u4E0E\u56DB\u6B21\u6325\u624B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u6B21\u63E1\u624B\u4E0E\u56DB\u6B21\u6325\u624B" aria-hidden="true">#</a> \u4E09\u6B21\u63E1\u624B\u4E0E\u56DB\u6B21\u6325\u624B</h2><p>\u6BCF\u6B21\u4E3B\u52A8\u5EFA\u7ACB\u4E00\u6B21TCP\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u9700\u8981\u5171\u4EA4\u6362\u4E09\u4E2A\u6570\u636E\u5305\uFF0C\u5373\u4E09\u6B21\u63E1\u624B</p><p>\u6BCF\u6B21\u4E3B\u52A8\u65AD\u5F00\u4E00\u6B21TCP\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u9700\u8981\u5171\u4EA4\u6362\u56DB\u4E2A\u6570\u636E\u5305\uFF0C\u5373\u56DB\u6B21\u6325\u624B</p><p>TCT\u62A5\u6587\u4E2D\u67096\u79CD\u6807\u5FD7\u4F4D\uFF1A</p><ul><li><p>SYN\uFF1A\u5EFA\u7ACB\u8FDE\u63A5</p></li><li><p>ACK\uFF1A\u662F\u5BF9\u6536\u5230\u7684\u6570\u636E\u5305\u7684\u786E\u8BA4\uFF0C\u503C\u662F<code>Acknowledge number</code></p></li><li><p>PSH\uFF1A\u53D1\u9001</p></li><li><p>FIN\uFF1A\u7ED3\u675F</p></li><li><p>RST\uFF1A\u91CD\u7F6E</p></li><li><p>URG\uFF1A\u7D27\u6025</p></li><li><p>Sequence number\uFF1A\u5E8F\u5217\u53F7\uFF0C\u4E3A\u4E86\u5EFA\u7ACB\u8FDE\u63A5\u4EE5\u540E\u4F20\u9001\u6570\u636E\u7684\u4F4D\u7F6E</p></li><li><p>Acknowledge number\uFF1A\u8868\u793A\u671F\u671B\u5BF9\u65B9\uFF08\u63A5\u6536\u65B9\uFF09\u7684\u4E0B\u4E00\u6B21<code>sequence number</code>\u662F\u591A\u5C11</p></li></ul><h3 id="\u4E09\u6B21\u63E1\u624B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u6B21\u63E1\u624B" aria-hidden="true">#</a> \u4E09\u6B21\u63E1\u624B</h3><p>\u4E09\u6B21\u63E1\u624B\u7684\u76EE\u7684\u662F\u8FDE\u63A5\u670D\u52A1\u5668\u7684\u6307\u5B9A\u7AEF\u53E3\uFF0C\u5EFA\u7ACBTCP\u8FDE\u63A5\uFF0C\u5E76\u540C\u6B65\u53CC\u65B9\u7684\u5E8F\u5217\u53F7\u548C\u786E\u8BA4\u53F7\u4EA4\u6362TCP\u7A97\u53E3\u5927\u5C0F\u4FE1\u606F,\u5728Socket\u7F16\u7A0B\u4E2D\u5BA2\u6237\u7AEF\u6267\u884C<code>connect()</code>\u65F6\uFF0C\u5C06\u89E6\u53D1\u4E09\u6B21\u63E1\u624B\u3002</p><ul><li><p>\u7B2C\u4E00\u6B21\u63E1\u624B: <code>SYN(\u540C\u6B65\u5E8F\u5217\u7F16\u53F7)=1</code>;<code>seq(\u5E8F\u53F7)=x</code></p><ul><li><p><code>SYN=1</code>: \u544A\u8BC9\u670D\u52A1\u5668\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5E0C\u671B\u5EFA\u7ACB\u8FDE\u63A5\u8BF7\u6C42</p></li><li><p><code>seq=x</code>: \u4E00\u4E2A\u968F\u673A\u7684\u521D\u59CB\u987A\u5217\u53F7</p></li></ul><p>\u53D1\u9001\u5B8C\u6BD5\u540E\uFF0C\u5BA2\u6237\u7AEF\u8FDB\u5165<code>SYN_SEND</code>\u72B6\u6001\u3002</p></li><li><p>\u7B2C\u4E8C\u6B21\u63E1\u624B: <code>ACK=1</code>; <code>ACKnum=x+1</code>; <code>seq=y</code>; <code>SYN=1</code></p><ul><li><p><code>ACK=1</code>\uFF1A\u7528\u6765\u786E\u8BA4\u6536\u5230\u5BA2\u6237\u7AEF\u7684SYN\u5305</p></li><li><p><code>ACKnum=x+1</code>\uFF1A\u51C6\u5907\u63A5\u6536\u5E8F\u5217\u53F7\u4E3A<code>x+1</code>\u7684\u5305</p></li><li><p><code>SYN=1</code>\uFF1A\u8868\u660E\u670D\u52A1\u7AEF\u4E5F\u5E0C\u671B\u5EFA\u7ACBTCP\u8FDE\u63A5</p></li><li><p><code>seq=y</code>: \u53D1\u9001\u81EA\u5DF1\u7684\u521D\u59CB\u987A\u5217\u53F7</p></li></ul><p>\u53D1\u9001\u5B8C\u6BD5\u540E\uFF0C\u670D\u52A1\u5668\u7AEF\u8FDB\u5165<code>SYN_RCVD</code>\u72B6\u6001</p></li><li><p>\u7B2C\u4E09\u6B21\u63E1\u624B: <code>ACK=1</code>; <code>ACKnum=y+1</code>\uFF1B<code>seq=x+1</code></p><ul><li><p><code>ACK=1</code>\uFF1A\u7528\u6765\u786E\u8BA4\u6536\u5230\u670D\u52A1\u7AEF\u7684\u5305</p></li><li><p><code>seq=x+1</code>: \u6B64\u65F6\u5E8F\u5217\u53F7\u4E3A<code>x+1</code>(\u5BF9\u5E94\u4E0A\u4E00\u6B65\u4E0A\u7684<code>ACKnum=x+1</code>)</p></li><li><p><code>ACKnum=y+1</code>\uFF1A\u8868\u793A\u5BA2\u6237\u7AEF\u51C6\u5907\u63A5\u6536\u670D\u52A1\u7AEF\u5E8F\u5217\u53F7\u4E3A<code>y+1</code>\u7684\u6570\u636E\u5305</p></li></ul><p>\u53D1\u9001\u5B8C\u6BD5\u540E\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u90FD\u8FDB\u5165<code>ESTABLISEND</code>\u72B6\u6001\uFF0CTCP\u63E1\u624B\u7ED3\u675F\u3002</p></li></ul><p>\u4E09\u6B21\u63E1\u624B\u56FE\u793A\uFF1A</p><p><img src="'+n+'" alt=""></p><h3 id="\u56DB\u6B21\u6325\u624B" tabindex="-1"><a class="header-anchor" href="#\u56DB\u6B21\u6325\u624B" aria-hidden="true">#</a> \u56DB\u6B21\u6325\u624B</h3><p>TCP\u7684\u8FDE\u63A5\u7684\u89E3\u9664\u9700\u8981\u53D1\u9001\u56DB\u4E2A\u5305\uFF0C\u56E0\u6B64\u79F0\u4E3A\u56DB\u6B21\u6325\u624B\u3002\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u5747\u53EF\u4EE5\u4E3B\u52A8\u53D1\u8D77\u6325\u624B\u52A8\u4F5C\uFF0C\u5728<code>socket</code>\u7F16\u7A0B\u4E2D\uFF0C\u4EFB\u4F55\u4E00\u65B9\u6267\u884C<code>close()</code>\u64CD\u4F5C\u5373\u53EF\u4EA7\u751F\u6325\u624B\u64CD\u4F5C\u3002</p><ul><li><p>\u7B2C\u4E00\u6B21\u6325\u624B: <code>FIN=1</code>; <code>seq=x</code></p><p>\u4EE5\u5BA2\u6237\u7AEF\u60F3\u8981\u5173\u95ED\u8FDE\u63A5\u4E3A\u4F8B</p><ul><li><p><code>FIN_WAIT_1</code>:\u8868\u793A\u81EA\u5DF1\u5DF2\u7ECF\u6CA1\u6709\u6570\u636E\u53EF\u4EE5\u53D1\u9001\u4E86(\u4F46\u662F\u4ECD\u7136\u53EF\u4EE5\u63A5\u53D7\u6570\u636E)</p></li><li><p><code>seq=x</code>: \u5E8F\u5217\u53F7</p></li></ul><p>\u53D1\u9001\u5B8C\u6BD5\u540E\uFF0C\u5BA2\u6237\u7AEF<code>FIN_WAIT_1</code>\u72B6\u6001</p></li><li><p>\u7B2C\u4E8C\u6B21\u6325\u624B: <code>ACK=1</code>; <code>ACKnum=x+1</code>; <code>seq=y</code></p><ul><li><p>ACK=1\uFF1A\u786E\u8BA4\u6536\u5230\u5305\uFF08\u4F46\u8FD8\u6CA1\u6709\u51C6\u5907\u597D\u5173\u95ED\u8FDE\u63A5\uFF09</p></li><li><p>ACKnum=x+1\uFF1A\u51C6\u5907\u63A5\u6536<code>x+1</code>\u4F4D\u7F6E\u7684\u5305</p></li><li><p>seq=y\uFF1A \u53D1\u9001\u81EA\u5DF1\u7684\u987A\u5217\u53F7</p></li></ul></li></ul><p>\u53D1\u9001\u5B8C\u6BD5\u540E\uFF0C\u670D\u52A1\u5668\u8FDB\u5165<code>CLOSE_WAIT</code>\u72B6\u6001\uFF0C\u5BA2\u6237\u7AEF\u63A5\u6536\u5230\u8FD9\u4E2A\u786E\u8BA4\u5305\u4E4B\u540E\uFF0C\u8FDB\u5165<code>FIN_WAIT2</code>\u72B6\u6001\uFF0C\u7B49\u5F85\u670D\u52A1\u5668\u5173\u95ED\u8FDE\u63A5</p><ul><li><p>\u7B2C\u4E09\u6B21\u6325\u624B\uFF1A<code>FIN=1</code>; <code>ACK=1</code>; <code>seq=z</code>; <code>ACKnumber=x+1</code></p><ul><li><p><code>FIN=1</code>: \u670D\u52A1\u5668\u7AEF\u51C6\u5907\u597D\u5173\u95ED\u8FDE\u63A5\u65F6\uFF0C\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u7ED3\u675F\u8FDE\u63A5\u8BF7\u6C42</p></li><li><p><code>ACK</code>: \u7EE7\u7EED\u4E4B\u524D\u7684\u786E\u8BA4\uFF1F</p></li><li><p><code>seq=z</code>\uFF1A\u518D\u53D1\u4E00\u4E2A\u5E8F\u54A7\u53F7\uFF1F</p></li><li><p><code>ACKnumber=x+1</code>\uFF1A\u51C6\u5907\u63A5\u6536<code>x+1</code>\u4F4D\u7F6E\u7684\u5305</p></li></ul><p>\u53D1\u9001\u5B8C\u6BD5\u540E\uFF0C\u670D\u52A1\u5668\u8FDB\u5165<code>LAST_ACK</code>\u72B6\u6001\uFF0C\u7B49\u5F85\u6765\u81EA\u5BA2\u6237\u7AEF\u7684\u6700\u540E\u4E00\u4E2AACK</p></li><li><p>\u7B2C\u56DB\u6B21\u6325\u624B\uFF1A<code>ACK=1</code>; <code>seq=x+1</code>; <code>ACKnum=z+1</code></p><ul><li><p><code>ACK=1</code>: \u786E\u8BA4\u6536\u5230\u5305</p></li><li><p><code>seq=x+1</code>\uFF1A\u5305\u7684\u4F4D\u7F6E\uFF08\u5BF9\u5E94\u4E0A\u9762\u7684<code>ACKnumber=x+1</code>\uFF09</p></li><li><p><code>ACKnum=z+1</code>: \u51C6\u5907\u63A5\u6536<code>z+1</code>\u7684\u4F4D\u7F6E\u7684\u5305</p></li></ul></li></ul><p>\u5BA2\u6237\u7AEF\u63A5\u6536\u6765\u81EA\u670D\u52A1\u5668\u7AEF\u7684\u5173\u95ED\u8BF7\u6C42\uFF0C\u53D1\u9001\u4E00\u4E2A\u786E\u8BA4\u5305\uFF0C\u5E76\u8FDB\u5165<code>TIME_WAIT</code>\u72B6\u6001\uFF0C\u7B49\u5F85\u53EF\u80FD\u51FA\u73B0\u7684\u8981\u6C42\u91CD\u4F20\u7684<code>ACK\u5305</code></p><p>\u670D\u52A1\u5668\u7AEF\u63A5\u6536\u5230\u8FD9\u4E2A\u786E\u8BA4\u5305\u4E4B\u540E\uFF0C\u5173\u95ED\u8FDE\u63A5\uFF0C\u8FDB\u5165<code>close</code>\u72B6\u6001</p><p>\u5BA2\u6237\u7AEF\u7B49\u5F85\u4E86\u67D0\u4E2A\u56FA\u5B9A\u65F6\u95F4\u4E4B\u540E\uFF0C\u6CA1\u6709\u6536\u5230\u670D\u52A1\u5668\u7AEF\u7684<code>ACK</code>\uFF0C\u8BA4\u4E3A\u670D\u52A1\u5668\u7AEF\u5DF2\u7ECF\u6B63\u5E38\u5173\u95ED\u8FDE\u63A5\uFF0C\u4E8E\u662F\u81EA\u5DF1\u4E5F\u5173\u95ED\u8FDE\u63A5\uFF0C\u8FDB\u5165<code>CLOSED</code>\u72B6\u6001\u3002</p><p>\u56DB\u6B21\u6325\u624B\u7684\u793A\u610F\u56FE\u5982\u4E0B\uFF1A</p><p><img src="'+r+'" alt=""></p><h3 id="seq\u548Cacknum" tabindex="-1"><a class="header-anchor" href="#seq\u548Cacknum" aria-hidden="true">#</a> Seq\u548CACKnum</h3><ul><li><p><code>seq</code>:\u8868\u793A\u5F53\u524D\u8981\u4F20\u8F93\u7684\u6570\u636E\u5728\u5305\u4E2D\u7684\u4F4D\u7F6E</p></li><li><p><code>ACKnum</code>: \u8868\u793A\u5E0C\u671B\u4E0B\u6B21\u5BF9\u65B9\u4F20\u6570\u636E\u8FC7\u6765\u65F6\uFF0C\u6570\u636E\u5728\u5305\u4E2D\u7684\u4F4D\u7F6E</p></li></ul><p>\u62FF\u4E0B\u5B8C\u6574\u7684TCP\u8FDE\u63A5-HTTP\u8BF7\u6C42-TCP\u65AD\u5F00\u5217\u5B50\u6765\u7406\u89E3\u4E00\u4E0B</p><p><strong>ACK\u4EC5\u4EC5\u8868\u793A\u786E\u8BA4\u7684\u610F\u601D\uFF0C\u4E0B\u9762\u56FE\u4E2D\u7684ACK\u8868\u793A\u7684\u662F ACKnum</strong></p><p><img src="'+t+'" alt=""></p><ol><li><p>=\u300B\u53051\uFF1ATCP\u4F1A\u8BDD\u7684\u4EFB\u4F55\u4E00\u7AEF\u5F00\u59CB\u7684\u5E8F\u5217\u53F7\u53EF\u80FD\u662F\u968F\u673A\u4E5F\u6709\u53EF\u80FD\u662F\u4E0A\u4E00\u4E2A\u8BE5\u7AEF\u53E3\u7684\u5E8F\u5217\u53F7+1\uFF0C\u8FD9\u91CC\u5047\u8BBE\u4ECE 0 \u5F00\u59CB\uFF08<code>seq=0,SYN=1</code>\uFF09</p></li><li><p>\u300A= \u53052\uFF1A\u670D\u52A1\u7AEF\u6536\u5230\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u5E76\u5728\u54CD\u5E94\u4E2D\u6807\u8BB0<code>ACK_N=0+1</code>\u544A\u8BC9\u5BA2\u6237\u7AEF\u4E0B\u6B21\u6570\u636E\u4ECE<code>1</code>\u4F4D\u7F6E\u5F00\u59CB\u4F20\u8F93\uFF0C\u540C\u65F6\u6807\u8BB0<code>seq=0</code>\u8868\u793A\u81EA\u5DF1\u5F53\u524D\u5E8F\u5217\u4F4D\u7F6E</p></li><li><p>=\u300B\u53053\uFF1A\u6536\u5230\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\u540E\uFF0C\u5BA2\u6237\u7AEF\u7EE7\u7EED\u505A\u51FA\u56DE\u5E94\uFF0C\u6B64\u65F6\u6807\u8BB0<code>seq=1</code>\uFF08\u5BF9\u5E94\u53052\u4E2D\u7684<code>ACK_N=0+1</code>\uFF09\uFF0C\u540C\u65F6\u6807\u8BB0<code>ACK_N=1</code>(\u5BF9\u5E94\u53052\u7684<code>seq=0+1</code>)\uFF0C\u8868\u793A\u5E0C\u671B\u670D\u52A1\u7AEF\u4E0B\u6B21\u4F20\u6570\u636E\u4ECE<code>1</code>\u4F4D\u7F6E\u5F00\u59CB</p></li></ol><p>\u6B64\u65F6TCP\u63E1\u624B\u6210\u529F</p><ol start="4"><li><p>=\u300B\u53054\uFF1A\u5BA2\u6237\u7AEF\u5F00\u59CB\u53D1\u9001HTTP\u8BF7\u6C42\uFF0C\u6B64\u65F6\u8BF7\u6C42\u5305\u6807\u8BB0<code>seq=1</code>\uFF0C\u4E4B\u6240\u4EE5\u4ECD\u4E3A 1 \u662F\u56E0\u4E3A\u76EE\u524D\u8FD8\u6CA1\u53D1\u9001\u8FC7\u6570\u636E\uFF0C\u4F4D\u7F6E\u4E0D\u9700\u8981\u6539\u53D8\uFF0C\u540C\u65F6\u4E5F\u5BF9\u5E94\u53052\u7684<code>ACK_N=1</code>\uFF1B<code>ACK_N</code>\u4E5F\u8FD8\u662F<code>1</code>\uFF08\u56E0\u4E3A\u6CA1\u6536\u5230\u670D\u52A1\u7AEF\u4EFB\u4F55\u6570\u636E\uFF0C\u7EF4\u6301\u53053\u7684\u4F4D\u7F6E\uFF09\uFF0C\u9664\u4E86\u8FD9\u4E9B\u6807\u8BB0\u8FD8\u4F20\u9001\u4E86 725 \u5B57\u8282\u957F\u5EA6\u7684\u6570\u636E</p></li><li><p>\u300A= \u53055\uFF1A\u670D\u52A1\u7AEF\u6536\u5230\u8BF7\u6C42\u4E86\uFF0C\u5F53\u524D\u6807\u8BB0<code>seq=1</code>\uFF08\u56E0\u4E3A\u76EE\u524D\u670D\u52A1\u7AEF\u6CA1\u4F20\u9001\u8FC7\u4EFB\u4F55\u6570\u636E\uFF0C\u4E0D\u9700\u8981\u6539\u53D8\u4F4D\u7F6E\uFF0C\u540C\u65F6\u5BF9\u5E94\u53054\u4E2D\u7684<code>ACK_N=1</code>\uFF09\uFF0C<code>ACK_N=725+1</code>(\u56E0\u4E3A\u5BA2\u6237\u7AEF\u53D1\u9001\u4E86<code>725</code>\u5B57\u8282\u7684\u6570\u636E)\uFF0C\u90A3\u4E48\u4E0B\u6B21\u5E0C\u671B\u5BA2\u6237\u7AEF\u4ECE<code>726</code>\u4F4D\u7F6E\u5F00\u59CB\u4F20\u9001\u6570\u636E</p></li><li><p>\u300A= \u53056\uFF1A\u7D27\u63A5\u7740\u670D\u52A1\u7AEF\u53D1\u9001<code>1448</code>\u5B57\u8282\u957F\u5EA6\u7684\u6570\u636E\uFF0C\u6B64\u65F6\u6807\u8BB0<code>seq=1</code>\uFF08\u56E0\u4E3A\u5728\u8FD9\u4E4B\u524D\u6CA1\u4F20\u9001\u8FC7\u4EFB\u4F55\u6570\u636E\uFF0C\u4E0D\u9700\u8981\u6539\u53D8\u4F4D\u7F6E\uFF0C\u540C\u65F6\u4E5F\u5BF9\u5E94\u53054\u7684<code>ACK_N=1</code>\uFF09\uFF0C<code>ACK_N=725+1</code>(\u540C\u53055\uFF0C\u56E0\u4E3A\u5BA2\u6237\u7AEF\u53D1\u9001\u4E86<code>725</code>\u5B57\u8282\u7684\u6570\u636E)\uFF0C\u90A3\u4E48\u4E0B\u6B21\u5E0C\u671B\u5BA2\u6237\u7AEF\u4ECE<code>726</code>\u4F4D\u7F6E\u5F00\u59CB\u4F20\u9001\u6570\u636E</p></li><li><p>=\u300B\u53057\uFF1A\u6B64\u65F6\u5BA2\u6237\u7AEF<code>seq=726</code>\uFF08\u5BF9\u5E94\u53056\u4E2D\u7684<code>ACK_N=725+1</code>\uFF09\uFF0C<code>ACK_N</code>\u662F<code>1448+1</code>\uFF08\u56E0\u4E3A\u76EE\u524D\u53056\u4E2D\u670D\u52A1\u7AEF\u53D1\u9001\u4E86<code>1448</code>\u5B57\u8282\u957F\u5EA6\u7684\u6570\u636E\uFF09\uFF0C\u544A\u8BC9\u670D\u7AEF\u5E0C\u671B\u4E0B\u6B21\u4ECE<code>1449</code>\u4F4D\u7F6E\u5F00\u59CB\u4F20\u8F93\u6570\u636E</p></li><li><p>\u300A= \u53058\uFF1A\u670D\u52A1\u7AEF\u518D\u6B21\u53D1\u9001<code>1448</code>\u5B57\u8282\u957F\u5EA6\u7684\u6570\u636E\uFF0C\u6B64\u65F6\u6807\u8BB0<code>seq=1449</code>\uFF08\u5BF9\u5E94\u5BA2\u6237\u7AEF\u7684<code>ACK_N=1449</code>\uFF09\uFF0C<code>ACK_N=726</code>(\u56E0\u4E3A\u76EE\u524D\u4E3A\u5BA2\u6237\u7AEF\u5171\u53D1\u9001\u4E86<code>725</code>\u5B57\u8282\u7684\u6570\u636E)\uFF0C\u90A3\u4E48\u4E0B\u6B21\u5E0C\u671B\u5BA2\u6237\u7AEF\u4ECE<code>726</code>\u4F4D\u7F6E\u5F00\u59CB\u4F20\u9001\u6570\u636E</p></li><li><p>=\u300B\u53059\uFF1A\u5BA2\u6237\u7AEF<code>seq=726</code>(\u5BF9\u5E94\u53058\u4E2D\u7684<code>ACK_N=726</code>)\uFF0C<code>ACK_N=1448+1448+1=2896</code>(\u670D\u52A1\u4F20\u8FC7\u7684\u4E24\u6B21\u6570\u636E\u7684\u957F\u5EA6+1)\uFF0C\u8868\u793A\u4E0B\u6B21\u670D\u7AEF\u5E94\u4ECE<code>2896</code>\u4F4D\u7F6E\u5F00\u59CB\u4F20\u8F93\u6570\u636E</p></li><li><p>\u300A= \u530510\uFF1A<code>seq=2896</code>(\u5BF9\u5E94\u53059\u4E2D\u7684<code>ACK_N=2896</code>)\uFF0C<code>ACK_N=726</code>\uFF08\u56E0\u4E3A\u76EE\u524D\u4E3A\u5BA2\u6237\u7AEF\u5171\u53D1\u9001\u4E86<code>725</code>\u5B57\u8282\u7684\u6570\u636E\uFF09\uFF0C\u540C\u65F6\u53D1\u9001<code>1448</code>\u5B57\u8282\u7684\u6570\u636E</p></li><li><p>=\u300B\u530511\uFF1A<code>seq=726</code>(\u5BF9\u5E94\u530510\u4E2D\u7684<code>ACK_N=726</code>),<code>ACK_N=1448+1448+1448+1=4345</code>(\u5171\u53D1\u9001\u4E864344\u7684\u5B57\u8282\u957F\u5EA6+1)</p></li></ol><p>\u4EE5\u6B64\u7C7B\u63A8</p><p>\u63A5\u4E0B\u6765\u65AD\u5F00\u8FDE\u63A5</p><ol start="12"><li><p>=\u300B \u530512\uFF1A <code>seq=627</code>\uFF08\u8FD8\u662F\u4E4B\u524D\u7684\u503C\uFF09\uFF0C<code>ACK_N=4345</code>(\u8FD8\u662F\u4E4B\u524D\u7684\u503C,\u5373\u4F7F\u8981\u65AD\u5F00\u4E5F\u8981\u901A\u77E5\u4E00\u4E0B\uFF0C\u5982\u679C\u4E07\u4E00\u4F60\u8FD8\u6709\u6570\u636E\u8FC7\u6765\uFF0C\u8BF7\u653E\u5728\u8FD9\u4E2A\u4F4D\u7F6E),<code>FIN=1</code>\u8868\u793A\u8981\u65AD\u5F00\u8FDE\u63A5\u4E86</p></li><li><p>\u300A= \u530513\uFF1A<code>seq=4345</code>\uFF08\u5BF9\u5E94\u530512\u7684<code>ACK_N=4345</code>\uFF09<code>ACK_N=627+1=628</code></p></li><li><p>\u300A= \u530513\uFF1A<code>seq=4345</code>\uFF08\u4FDD\u6301\u4E4B\u524D\u530513\u7684\uFF09<code>ACK_N=628</code>\uFF08\u4FDD\u6301\u4E4B\u524D\u530513\u7684\uFF09,<code>FIN=1</code>\u8868\u793A\u8981\u65AD\u5F00\u8FDE\u63A5\u4E86</p></li><li><p>=&gt; \u530514\uFF1A\u5BA2\u6237\u7AEF\u53D1\u9001<code>ACK=1</code>,<code>seq=628</code>,<code>ACK_N=4345</code>\uFF0C\u7ED3\u675F</p></li></ol><h3 id="syn\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#syn\u653B\u51FB" aria-hidden="true">#</a> SYN\u653B\u51FB</h3><p>\u4EC0\u4E48\u662F SYN \u653B\u51FB\uFF08SYN Flood\uFF09\uFF1F</p><p>\u5728\u4E09\u6B21\u63E1\u624B\u8FC7\u7A0B\u4E2D\uFF0C\u670D\u52A1\u5668\u53D1\u9001 SYN-ACK \u4E4B\u540E\uFF0C\u6536\u5230\u5BA2\u6237\u7AEF\u7684 ACK \u4E4B\u524D\u7684 TCP \u8FDE\u63A5\u79F0\u4E3A\u534A\u8FDE\u63A5(half-open connect)\u3002\u6B64\u65F6\u670D\u52A1\u5668\u5904\u4E8E SYN_RCVD \u72B6\u6001\u3002\u5F53\u6536\u5230 ACK \u540E\uFF0C\u670D\u52A1\u5668\u624D\u80FD\u8F6C\u5165 ESTABLISHED \u72B6\u6001.</p><p>SYN \u653B\u51FB\u6307\u7684\u662F\uFF0C\u653B\u51FB\u5BA2\u6237\u7AEF\u5728\u77ED\u65F6\u95F4\u5185\u4F2A\u9020\u5927\u91CF\u4E0D\u5B58\u5728\u7684IP\u5730\u5740\uFF0C\u5411\u670D\u52A1\u5668\u4E0D\u65AD\u5730\u53D1\u9001SYN\u5305\uFF0C\u670D\u52A1\u5668\u56DE\u590D\u786E\u8BA4\u5305\uFF0C\u5E76\u7B49\u5F85\u5BA2\u6237\u7684\u786E\u8BA4\u3002\u7531\u4E8E\u6E90\u5730\u5740\u662F\u4E0D\u5B58\u5728\u7684\uFF0C\u670D\u52A1\u5668\u9700\u8981\u4E0D\u65AD\u7684\u91CD\u53D1\u76F4\u81F3\u8D85\u65F6\uFF0C\u8FD9\u4E9B\u4F2A\u9020\u7684SYN\u5305\u5C06\u957F\u65F6\u95F4\u5360\u7528\u672A\u8FDE\u63A5\u961F\u5217\uFF0C\u6B63\u5E38\u7684SYN\u8BF7\u6C42\u88AB\u4E22\u5F03\uFF0C\u5BFC\u81F4\u76EE\u6807\u7CFB\u7EDF\u8FD0\u884C\u7F13\u6162\uFF0C\u4E25\u91CD\u8005\u4F1A\u5F15\u8D77\u7F51\u7EDC\u5835\u585E\u751A\u81F3\u7CFB\u7EDF\u762B\u75EA\u3002</p><p>SYN \u653B\u51FB\u662F\u4E00\u79CD\u5178\u578B\u7684 DoS/DDoS \u653B\u51FB</p><p><strong>\u5982\u4F55\u68C0\u6D4B SYN \u653B\u51FB\uFF1F</strong></p><p>\u68C0\u6D4B SYN \u653B\u51FB\u975E\u5E38\u7684\u65B9\u4FBF\uFF0C\u5F53\u4F60\u5728\u670D\u52A1\u5668\u4E0A\u770B\u5230\u5927\u91CF\u7684\u534A\u8FDE\u63A5\u72B6\u6001\u65F6\uFF0C\u7279\u522B\u662F\u6E90IP\u5730\u5740\u662F\u968F\u673A\u7684\uFF0C\u57FA\u672C\u4E0A\u53EF\u4EE5\u65AD\u5B9A\u8FD9\u662F\u4E00\u6B21SYN\u653B\u51FB\u3002\u5728 Linux/Unix \u4E0A\u53EF\u4EE5\u4F7F\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684 netstats \u547D\u4EE4\u6765\u68C0\u6D4B SYN \u653B\u51FB</p><p><strong>\u5982\u4F55\u9632\u5FA1 SYN \u653B\u51FB\uFF1F</strong></p><p>SYN\u653B\u51FB\u4E0D\u80FD\u5B8C\u5168\u88AB\u963B\u6B62\uFF0C\u9664\u975E\u5C06TCP\u534F\u8BAE\u91CD\u65B0\u8BBE\u8BA1\u3002\u6211\u4EEC\u6240\u505A\u7684\u662F\u5C3D\u53EF\u80FD\u7684\u51CF\u8F7BSYN\u653B\u51FB\u7684\u5371\u5BB3\uFF0C\u5E38\u89C1\u7684\u9632\u5FA1 SYN \u653B\u51FB\u7684\u65B9\u6CD5\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A</p><ul><li><p>\u7F29\u77ED\u8D85\u65F6\uFF08SYN Timeout\uFF09\u65F6\u95F4</p></li><li><p>\u589E\u52A0\u6700\u5927\u534A\u8FDE\u63A5\u6570</p></li><li><p>\u8FC7\u6EE4\u7F51\u5173\u9632\u62A4</p></li><li><p>SYN cookies\u6280\u672F</p></li></ul><h2 id="tcp-keepalive" tabindex="-1"><a class="header-anchor" href="#tcp-keepalive" aria-hidden="true">#</a> TCP KeepAlive</h2><p>TCP \u7684\u8FDE\u63A5\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E00\u79CD\u7EAF\u8F6F\u4EF6\u5C42\u9762\u7684\u6982\u5FF5\uFF0C\u5728\u7269\u7406\u5C42\u9762\u5E76\u6CA1\u6709\u201C\u8FDE\u63A5\u201D\u8FD9\u79CD\u6982\u5FF5\u3002TCP \u901A\u4FE1\u53CC\u65B9\u5EFA\u7ACB\u4EA4\u4E92\u7684\u8FDE\u63A5\uFF0C\u4F46\u662F\u5E76\u4E0D\u662F\u4E00\u76F4\u5B58\u5728\u6570\u636E\u4EA4\u4E92\uFF0C\u6709\u4E9B\u8FDE\u63A5\u4F1A\u5728\u6570\u636E\u4EA4\u4E92\u5B8C\u6BD5\u540E\uFF0C\u4E3B\u52A8\u91CA\u653E\u8FDE\u63A5\uFF0C\u800C\u6709\u4E9B\u4E0D\u4F1A\u3002\u5728\u957F\u65F6\u95F4\u65E0\u6570\u636E\u4EA4\u4E92\u7684\u65F6\u95F4\u6BB5\u5185\uFF0C\u4EA4\u4E92\u53CC\u65B9\u90FD\u6709\u53EF\u80FD\u51FA\u73B0\u6389\u7535\u3001\u6B7B\u673A\u3001\u5F02\u5E38\u91CD\u542F\u7B49\u5404\u79CD\u610F\u5916\uFF0C\u5F53\u8FD9\u4E9B\u610F\u5916\u53D1\u751F\u4E4B\u540E\uFF0C\u8FD9\u4E9B TCP \u8FDE\u63A5\u5E76\u672A\u6765\u5F97\u53CA\u6B63\u5E38\u91CA\u653E\uFF0C\u5728\u8F6F\u4EF6\u5C42\u9762\u4E0A\uFF0C\u8FDE\u63A5\u7684\u53E6\u4E00\u65B9\u5E76\u4E0D\u77E5\u9053\u5BF9\u7AEF\u7684\u60C5\u51B5\uFF0C\u5B83\u4F1A\u4E00\u76F4\u7EF4\u62A4\u8FD9\u4E2A\u8FDE\u63A5\uFF0C\u957F\u65F6\u95F4\u7684\u79EF\u7D2F\u4F1A\u5BFC\u81F4\u975E\u5E38\u591A\u7684\u534A\u6253\u5F00\u8FDE\u63A5\uFF0C\u9020\u6210\u7AEF\u7CFB\u7EDF\u8D44\u6E90\u7684\u6D88\u8017\u548C\u6D6A\u8D39\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5728\u4F20\u8F93\u5C42\u53EF\u4EE5\u5229\u7528 TCP \u7684 KeepAlive \u673A\u5236\u5B9E\u73B0\u6765\u5B9E\u73B0\u3002\u4E3B\u6D41\u7684\u64CD\u4F5C\u7CFB\u7EDF\u57FA\u672C\u90FD\u5728\u5185\u6838\u91CC\u652F\u6301\u4E86\u8FD9\u4E2A\u7279\u6027\u3002</p><p>TCP KeepAlive \u7684\u57FA\u672C\u539F\u7406\u662F\uFF0C\u9694\u4E00\u6BB5\u65F6\u95F4\u7ED9\u8FDE\u63A5\u5BF9\u7AEF\u53D1\u9001\u4E00\u4E2A\u63A2\u6D4B\u5305\uFF0C\u5982\u679C\u6536\u5230\u5BF9\u65B9\u56DE\u5E94\u7684 ACK\uFF0C\u5219\u8BA4\u4E3A\u8FDE\u63A5\u8FD8\u662F\u5B58\u6D3B\u7684\uFF0C\u5728\u8D85\u8FC7\u4E00\u5B9A\u91CD\u8BD5\u6B21\u6570\u4E4B\u540E\u8FD8\u662F\u6CA1\u6709\u6536\u5230\u5BF9\u65B9\u7684\u56DE\u5E94\uFF0C\u5219\u4E22\u5F03\u8BE5 TCP \u8FDE\u63A5\u3002</p><h3 id="tcp-keepalive-\u7684\u5C40\u9650" tabindex="-1"><a class="header-anchor" href="#tcp-keepalive-\u7684\u5C40\u9650" aria-hidden="true">#</a> TCP KeepAlive \u7684\u5C40\u9650</h3><p>\u9996\u5148 TCP KeepAlive \u76D1\u6D4B\u7684\u65B9\u5F0F\u662F\u53D1\u9001\u4E00\u4E2A probe \u5305\uFF0C\u4F1A\u7ED9\u7F51\u7EDC\u5E26\u6765\u989D\u5916\u7684\u6D41\u91CF\uFF0C\u53E6\u5916 TCP KeepAlive \u53EA\u80FD\u5728\u5185\u6838\u5C42\u7EA7\u76D1\u6D4B\u8FDE\u63A5\u7684\u5B58\u6D3B\u4E0E\u5426\uFF0C\u800C\u8FDE\u63A5\u7684\u5B58\u6D3B\u4E0D\u4E00\u5B9A\u4EE3\u8868\u670D\u52A1\u7684\u53EF\u7528\u3002\u4F8B\u5982\u5F53\u4E00\u4E2A\u670D\u52A1\u5668 CPU \u8FDB\u7A0B\u670D\u52A1\u5668\u5360\u7528\u8FBE\u5230 100%\uFF0C\u5DF2\u7ECF\u5361\u6B7B\u4E0D\u80FD\u54CD\u5E94\u8BF7\u6C42\u4E86\uFF0C\u6B64\u65F6 TCP KeepAlive \u4F9D\u7136\u4F1A\u8BA4\u4E3A\u8FDE\u63A5\u662F\u5B58\u6D3B\u7684\u3002\u56E0\u6B64 TCP KeepAlive \u5BF9\u4E8E\u5E94\u7528\u5C42\u7A0B\u5E8F\u7684\u4EF7\u503C\u662F\u76F8\u5BF9\u8F83\u5C0F\u7684\u3002\u9700\u8981\u505A\u8FDE\u63A5\u4FDD\u6D3B\u7684\u5E94\u7528\u5C42\u7A0B\u5E8F\uFF0C\u4F8B\u5982 QQ\uFF0C\u5F80\u5F80\u4F1A\u5728\u5E94\u7528\u5C42\u5B9E\u73B0\u81EA\u5DF1\u7684\u5FC3\u8DF3\u529F\u80FD\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>TCP KeepAlive\u548CHTTP KeepAlive\u662F\u4E24\u4E2A\u4E1C\u897F\uFF01</p></div><h2 id="\u961F\u5934\u963B\u585E" tabindex="-1"><a class="header-anchor" href="#\u961F\u5934\u963B\u585E" aria-hidden="true">#</a> \u961F\u5934\u963B\u585E</h2><p>TCP\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4F1A\u628A\u6570\u636E\u62C6\u5206\u4E3A\u4E00\u4E2A\u4E2A\u6309\u7167\u987A\u5E8F\u6392\u5217\u7684\u6570\u636E\u5305\uFF0C\u8FD9\u4E9B\u6570\u636E\u5305\u901A\u8FC7\u7F51\u7EDC\u4F20\u8F93\u5230\u4E86\u63A5\u6536\u7AEF\uFF0C\u63A5\u6536\u7AEF\u518D\u6309\u7167\u987A\u5E8F\u5C06\u8FD9\u4E9B\u6570\u636E\u5305\u7EC4\u5408\u6210\u539F\u59CB\u6570\u636E\uFF0C\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u6570\u636E\u4F20\u8F93\u3002</p><p>\u4F46\u662F\u5982\u679C\u5176\u4E2D\u7684\u67D0\u4E00\u4E2A\u6570\u636E\u5305\u6CA1\u6709\u6309\u7167\u987A\u5E8F\u5230\u8FBE\uFF0C\u63A5\u6536\u7AEF\u4F1A\u4E00\u76F4\u4FDD\u6301\u8FDE\u63A5\u7B49\u5F85\u6570\u636E\u5305\u8FD4\u56DE\uFF0C\u8FD9\u65F6\u5019\u5C31\u4F1A\u963B\u585E\u540E\u7EED\u8BF7\u6C42\u3002\u8FD9\u5C31\u53D1\u751F\u4E86TCP\u961F\u5934\u963B\u585E</p><p><strong>HTTP\u7684\u961F\u5934\u963B\u585E</strong></p><p>HTTP\u548CTCP\u90FD\u5B58\u5728\u961F\u5934\u963B\u585E\uFF0C\u867D\u7136HTTP2\u7684\u591A\u8DEF\u590D\u7528\u89E3\u51B3\u4E86HTTP\u7684\u961F\u5934\u963B\u585E\u95EE\u9898\uFF0C\u4F46\u662FTCP\u7684\u961F\u5934\u963B\u585E\u4ECD\u7136\u5B58\u5728</p><p>\u540C\u65F6\u8981\u6CE8\u610F\u5230 HTTP/1.1 \u4E2D\u89C4\u5B9A\u4E00\u4E2A\u57DF\u540D\u53EF\u4EE5\u67096\u4E2ATCP\u8FDE\u63A5\u3002\u800CHTTP/2\u4E2D\uFF0C\u540C\u4E00\u4E2A\u57DF\u540D\u53EA\u662F\u7528\u4E00\u4E2ATCP\u8FDE\u63A5\u3002</p><p>\u6240\u4EE5\uFF0C\u5728HTTP/2\u4E2D\uFF0CTCP\u961F\u5934\u963B\u585E\u9020\u6210\u7684\u5F71\u54CD\u4F1A\u66F4\u5927\uFF0C\u56E0\u4E3AHTTP/2\u7684\u591A\u8DEF\u590D\u7528\u6280\u672F\u4F7F\u5F97\u591A\u4E2A\u8BF7\u6C42\u5176\u5B9E\u662F\u57FA\u4E8E\u540C\u4E00\u4E2ATCP\u8FDE\u63A5\u7684\uFF0C\u90A3\u5982\u679C\u67D0\u4E00\u4E2A\u8BF7\u6C42\u9020\u6210\u4E86TCP\u961F\u5934\u963B\u585E\uFF0C\u90A3\u4E48\u591A\u4E2A\u8BF7\u6C42\u90FD\u4F1A\u53D7\u5230\u5F71\u54CD</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>TCP \u548CHTTP \u5404\u81EA\u90FD\u5B58\u5728\u961F\u5934\u963B\u585E\uFF01</p></div><h2 id="tcp\u63E1\u624B\u65F6\u957F" tabindex="-1"><a class="header-anchor" href="#tcp\u63E1\u624B\u65F6\u957F" aria-hidden="true">#</a> TCP\u63E1\u624B\u65F6\u957F</h2><p>\u4E00\u63D0\u5230TCP\u534F\u8BAE\uFF0C\u5927\u5BB6\u6700\u5148\u60F3\u5230\u7684\u4E00\u5B9A\u662F\u4ED6\u7684\u4E09\u6B21\u63E1\u624B\u4E0E\u56DB\u6B21\u5173\u95ED\u7684\u7279\u6027\u3002</p><p>\u56E0\u4E3ATCP\u662F\u4E00\u79CD\u53EF\u9760\u901A\u4FE1\u534F\u8BAE\uFF0C\u800C\u8FD9\u79CD\u53EF\u9760\u5C31\u662F\u9760\u4E09\u6B21\u63E1\u624B\u5B9E\u73B0\u7684\uFF0C\u901A\u8FC7\u4E09\u6B21\u63E1\u624B\uFF0CTCP\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u4FDD\u8BC1\u63A5\u6536\u65B9\u6536\u5230\u7684\u6570\u636E\u662F\u5B8C\u6574\uFF0C\u6709\u5E8F\uFF0C\u65E0\u5DEE\u9519\u7684\u3002</p><p>\u4F46\u662F\uFF0C\u95EE\u9898\u662F\u4E09\u6B21\u63E1\u624B\u662F\u9700\u8981\u6D88\u8017\u65F6\u95F4\u7684\uFF0C\u8FD9\u91CC\u63D2\u64AD\u4E00\u4E2A\u5173\u4E8E\u7F51\u7EDC\u5EF6\u8FDF\u7684\u6982\u5FF5\u3002</p><p>\u7F51\u7EDC\u5EF6\u8FDF\u53C8\u79F0\u4E3A RTT(Round Trip Time)\u3002\u4ED6\u662F\u6307\u4E00\u4E2A\u8BF7\u6C42\u4ECE\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u6570\u636E\u5305\u5230\u670D\u52A1\u5668\uFF0C\u518D\u4ECE\u670D\u52A1\u5668\u5F97\u5230\u54CD\u5E94\u6570\u636E\u5305\u7684\u8FD9\u6BB5\u65F6\u95F4\u3002RTT \u662F\u53CD\u6620\u7F51\u7EDC\u6027\u80FD\u7684\u4E00\u4E2A\u91CD\u8981\u6307\u6807\u3002</p><p><img src="'+C+'" alt=""></p><p>\u6211\u4EEC\u77E5\u9053\uFF0CTCP\u4E09\u6B21\u63E1\u624B\u7684\u8FC7\u7A0B\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u9700\u8981\u4EA4\u4E92\u4E09\u6B21\uFF0C\u90A3\u4E48\u4E5F\u5C31\u662F\u8BF4\u9700\u8981\u6D88\u80171.5 RTT</p><p>\u53E6\u5916\uFF0C\u5982\u679C\u4F7F\u7528\u7684\u662F\u5B89\u5168\u7684HTTPS\u534F\u8BAE\uFF0C\u5C31\u8FD8\u9700\u8981\u4F7F\u7528TLS\u534F\u8BAE\u8FDB\u884C\u5B89\u5168\u6570\u636E\u4F20\u8F93\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53C8\u8981\u6D88\u8017\u4E00\u4E2ARTT(TLS\u4E0D\u540C\u7248\u672C\u7684\u63E1\u624B\u673A\u5236\u4E0D\u540C\uFF0C\u8FD9\u91CC\u6309\u7167\u6700\u5C0F\u7684\u6D88\u8017\u6765\u7B97)</p><p>\u90A3\u4E48\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u4E2A\u7EAFHTTP/2\u7684\u8FDE\u63A5\uFF0C\u9700\u8981\u6D88\u80171.5\u4E2ARTT\uFF0C\u5982\u679C\u662F\u4E00\u4E2AHTTPS\u8FDE\u63A5\uFF0C\u5C31\u9700\u8981\u6D88\u80173-4\u4E2ARTT\u3002</p><p>\u800C\u5177\u4F53\u6D88\u8017\u7684\u65F6\u957F\u6839\u636E\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u8DDD\u79BB\u5219\u4E0D\u5C3D\u76F8\u540C\uFF0C\u5982\u679C\u6BD4\u8F83\u8FD1\u7684\u8BDD\uFF0C\u6D88\u8017\u5728100ms\u4EE5\u5185\uFF0C\u5BF9\u4E8E\u7528\u6765\u8BF4\u53EF\u80FD\u6CA1\u4EC0\u4E48\u611F\u77E5\uFF0C\u4F46\u662F\u5982\u679C\u4E00\u4E2ARTT\u7684\u8017\u65F6\u8FBE\u5230300-400ms\uFF0C\u90A3\u4E48\uFF0C\u4E00\u6B21\u8FDE\u63A5\u5EFA\u7ACB\u8FC7\u7A0B\u603B\u8017\u65F6\u53EF\u80FD\u8981\u8FBE\u5230\u4E00\u79D2\u949F\u5DE6\u53F3\uFF0C\u8FD9\u65F6\u5019\uFF0C\u7528\u6237\u5C31\u4F1A\u660E\u663E\u7684\u611F\u77E5\u5230\u7F51\u9875\u52A0\u8F7D\u5F88\u6162</p><h2 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> UDP</h2><p>\u4E0A\u6587\u5148\u4E0ATCP\u662F\u9762\u5411\u8FDE\u63A5\u7684\u534F\u8BAE\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u6536\u53D1\u6570\u636E\u524D\uFF0C\u5FC5\u987B\u548C\u5BF9\u65B9\u5EFA\u7ACB\u53EF\u9760\u7684\u8FDE\u63A5\u3002 \u4E00\u4E2ATCP\u8FDE\u63A5\u5FC5\u987B\u8981\u7ECF\u8FC7\u4E09\u6B21\u201C\u5BF9\u8BDD\u201D\u624D\u80FD\u5EFA\u7ACB\u8D77\u6765</p><p>UDP\u662F\u4E00\u4E2A\u975E\u8FDE\u63A5\u7684\u534F\u8BAE\uFF0C\u4F20\u8F93\u6570\u636E\u4E4B\u524D\u6E90\u7AEF\u548C\u7EC8\u7AEF\u4E0D\u5EFA\u7ACB\u8FDE\u63A5\uFF0C \u53D1\u9001\u7AEF\u5C3D\u53EF\u80FD\u5FEB\u7684\u5C06\u6570\u636E\u6254\u5230\u7F51\u7EDC\u4E0A\uFF0C\u63A5\u6536\u7AEF\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u8BFB\u53D6\u6D88\u606F\u6BB5 \u5728\u53D1\u9001\u7AEF\uFF0CUDP\u4F20\u9001\u6570\u636E\u7684\u901F\u5EA6\u4EC5\u4EC5\u662F\u53D7\u5E94\u7528\u7A0B\u5E8F\u751F\u6210\u6570\u636E\u7684\u901F\u5EA6\u3001 \u8BA1\u7B97\u673A\u7684\u80FD\u529B\u548C\u4F20\u8F93\u5E26\u5BBD\u7684\u9650\u5236<br> \u5728\u63A5\u6536\u7AEF\uFF0CUDP\u628A\u6BCF\u4E2A\u6D88\u606F\u6BB5\u653E\u5728\u961F\u5217\u4E2D\uFF0C\u5E94\u7528\u7A0B\u5E8F\u6BCF\u6B21\u4ECE\u961F\u5217\u4E2D\u8BFB\u4E00\u4E2A\u6D88\u606F\u6BB5\u3002</p><p>\u548C TCP \u76F8\u6BD4\uFF0CUDP \u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u6027\uFF1A</p><ul><li><p>\u7531\u4E8E\u4F20\u8F93\u6570\u636E\u4E0D\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u56E0\u6B64\u4E5F\u5C31\u4E0D\u9700\u8981\u7EF4\u62A4\u8FDE\u63A5\u72B6\u6001\uFF0C\u5305\u62EC\u6536\u53D1\u72B6\u6001\u7B49\uFF0C \u56E0\u6B64\u4E00\u53F0\u670D\u52A1\u673A\u53EF\u540C\u65F6\u5411\u591A\u4E2A\u5BA2\u6237\u673A\u4F20\u8F93\u76F8\u540C\u7684\u6D88\u606F</p></li><li><p>UDP\u4FE1\u606F\u5305\u7684\u6807\u9898\u5F88\u77ED\uFF0C\u53EA\u67098\u4E2A\u5B57\u8282\uFF0C\u76F8\u5BF9\u4E8ETCP\u768420\u4E2A\u5B57\u8282\u4FE1\u606F\u5305\u7684\u989D\u5916\u5F00\u9500\u5F88\u5C0F</p></li><li><p>\u541E\u5410\u91CF\u4E0D\u53D7\u62E5\u6324\u63A7\u5236\u7B97\u6CD5\u7684\u8C03\u8282\uFF0C\u53EA\u53D7\u5E94\u7528\u8F6F\u4EF6\u751F\u6210\u6570\u636E\u7684\u901F\u7387\u3001\u4F20\u8F93\u5E26\u5BBD\u3001 \u6E90\u7AEF\u548C\u7EC8\u7AEF\u4E3B\u673A\u6027\u80FD\u7684\u9650\u5236</p></li><li><p>UDP\u4F7F\u7528\u5C3D\u6700\u5927\u52AA\u529B\u4EA4\u4ED8\uFF0C\u5373\u4E0D\u4FDD\u8BC1\u53EF\u9760\u4EA4\u4ED8\uFF0C \u56E0\u6B64\u4E3B\u673A\u4E0D\u9700\u8981\u7EF4\u6301\u590D\u6742\u7684\u94FE\u63A5\u72B6\u6001\u8868\uFF08\u8FD9\u91CC\u9762\u6709\u8BB8\u591A\u53C2\u6570\uFF09</p></li><li><p>TCP\u534F\u8BAE\u9762\u5411\u5B57\u8282\u6D41\uFF0C\u5C06\u5E94\u7528\u5C42\u62A5\u6587\u770B\u6210\u4E00\u4E32\u65E0\u7ED3\u6784\u7684\u5B57\u8282\u6D41\uFF0C\u5206\u89E3\u4E3A\u591A\u4E2ATCP\u62A5\u6587\u6BB5\u4F20\u8F93\u540E\uFF0C\u5728\u76EE\u7684\u7AD9\u91CD\u65B0\u88C5\u914D; UDP\u662F\u9762\u5411\u62A5\u6587\u7684\u3002\u4E0D\u62C6\u5206\u5E94\u7528\u5C42\u62A5\u6587\uFF0C\u53EA\u4FDD\u7559\u62A5\u6587\u8FB9\u754C\uFF0C\u4E00\u6B21\u53D1\u9001\u4E00\u4E2A\u62A5\u6587\uFF0C\u63A5\u6536\u65B9\u53BB\u9664\u62A5\u6587\u9996\u90E8\u540E\uFF0C\u539F\u5C01\u4E0D\u52A8\u5C06\u62A5\u6587\u4EA4\u7ED9\u4E0A\u5C42\u5E94\u7528</p></li><li><p>TCP\u53EA\u80FD\u70B9\u5BF9\u70B9\u5168\u53CC\u5DE5\u901A\u4FE1;UDP\u652F\u6301\u4E00\u5BF9\u4E00\u3001\u4E00\u5BF9\u591A\u3001\u591A\u5BF9\u4E00\u548C\u591A\u5806\u579B\u7684\u4EA4\u4E92\u901A\u4FE1</p></li></ul><h2 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h2><p><strong>\u4E3A\u4EC0\u4E48\u5EFA\u7ACB\u8FDE\u63A5\u9700\u8981\u4E09\u6B21\u63E1\u624B\uFF0C\u5173\u95ED\u8FDE\u63A5\u9700\u8981\u56DB\u6B21\u63E1\u624B</strong></p><p>\u56E0\u4E3A\u5173\u95ED\u8FDE\u63A5\u65F6\uFF0C\u5728\u6536\u5230\u5BF9\u65B9\u7684<code>FIN\u62A5\u6587</code>\u901A\u77E5\u65F6\uFF0C\u4EC5\u4EC5\u8868\u793A\u6CA1\u6709\u6570\u636E\u8981\u53D1\u9001\u7ED9\u4F60\u4E86\uFF0C\u4F46\u672A\u5FC5\u4F60\u6240\u6709\u7684\u6570\u636E\u90FD\u5168\u90E8\u53D1\u9001\u7ED9\u5BF9\u65B9\u4E86\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u53EF\u80FD\u8FD8\u4F1A\u53D1\u9001\u4E00\u4EFD\u6570\u636E\u7ED9\u5BF9\u65B9\u4E4B\u540E\uFF0C\u518D\u53D1<code>\xB7FIN\u62A5\u6587</code>\u5BF9\u5BF9\u65B9\u8868\u793A\u540C\u610F\u5173\u95ED\u8FDE\u63A5\uFF0C\u6240\u4EE5\u5B83\u8FD9\u91CC\u7684<code>ACK\u62A5\u6587</code>\u548C<code>FIN\u62A5\u6587</code>\u662F\u5206\u5F00\u53D1\u9001</p><p><strong>\u4E3A\u4EC0\u4E48\u9700\u8981\u4E09\u6B21\u63E1\u624B\uFF0C\u800C\u975E\u4E24\u6B21</strong></p><p>\u4E3A\u4E86\u9632\u6B62\u5DF2\u7ECF\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u7A81\u7136\u53C8\u4F20\u5230\u670D\u52A1\u7AEF\uFF0C\u56E0\u800C\u4EA7\u751F\u9519\u8BEF\u3002</p><p>\u8FD9\u79CD\u60C5\u51B5\u662F\uFF1A\u4E00\u7AEF(client)A\u53D1\u51FA\u53BB\u7684\u7B2C\u4E00\u4E2A\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u5E76\u6CA1\u6709\u4E22\u5931\uFF0C\u800C\u662F\u56E0\u4E3A\u67D0\u4E9B\u672A\u77E5\u7684\u539F\u56E0\u5728\u67D0\u4E2A\u7F51\u7EDC\u8282\u70B9\u4E0A\u53D1\u751F\u6EDE\u7559\uFF0C \u5BFC\u81F4\u5EF6\u8FDF\u5230\u8FDE\u63A5\u91CA\u653E\u4EE5\u540E\u7684\u67D0\u4E2A\u65F6\u95F4\u624D\u5230\u8FBE\u53E6\u4E00\u7AEF(server)B\u3002\u672C\u6765\u8FD9\u662F\u4E00\u4E2A\u65E9\u5DF2\u5931\u6548\u7684\u62A5\u6587\u6BB5\uFF0C\u4F46\u662FB\u6536\u5230\u6B64\u5931\u6548\u7684\u62A5\u6587\u4E4B\u540E\uFF0C \u4F1A\u8BEF\u8BA4\u4E3A\u662FA\u518D\u6B21\u53D1\u51FA\u7684\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u4E8E\u662FB\u7AEF\u5C31\u5411A\u53C8\u53D1\u51FA\u786E\u8BA4\u62A5\u6587\uFF0C\u8868\u793A\u540C\u610F\u5EFA\u7ACB\u8FDE\u63A5\u3002\u5982\u679C\u4E0D\u91C7\u7528\u201C\u4E09\u6B21\u63E1\u624B\u201D\uFF0C \u90A3\u4E48\u53EA\u8981B\u7AEF\u53D1\u51FA\u786E\u8BA4\u62A5\u6587\u5C31\u4F1A\u8BA4\u4E3A\u65B0\u7684\u8FDE\u63A5\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\uFF0C\u4F46\u662FA\u7AEF\u5E76\u6CA1\u6709\u53D1\u51FA\u5EFA\u7ACB\u8FDE\u63A5\u7684\u8BF7\u6C42\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u53BB\u5411B\u7AEF\u53D1\u9001\u6570\u636E\uFF0C B\u7AEF\u6CA1\u6709\u6536\u5230\u6570\u636E\u5C31\u4F1A\u4E00\u76F4\u7B49\u5F85\uFF0C\u8FD9\u6837B\u7AEF\u5C31\u4F1A\u767D\u767D\u6D6A\u8D39\u6389\u5F88\u591A\u8D44\u6E90\u3002\u5982\u679C\u91C7\u7528\u201C\u4E09\u6B21\u63E1\u624B\u201D\u7684\u8BDD\u5C31\u4E0D\u4F1A\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\uFF0CB\u7AEF\u6536\u5230\u4E00\u4E2A\u8FC7\u65F6\u5931\u6548\u7684\u62A5\u6587\u6BB5\u4E4B\u540E\uFF0C\u5411A\u7AEF\u53D1\u51FA\u786E\u8BA4\uFF0C\u6B64\u65F6A\u5E76\u6CA1\u6709\u8981\u6C42\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u6240\u4EE5\u5C31\u4E0D\u4F1A\u5411B\u7AEF\u53D1\u9001\u786E\u8BA4\uFF0C\u8FD9\u4E2A\u65F6\u5019B\u7AEF\u4E5F\u80FD\u591F\u77E5\u9053\u8FDE\u63A5\u6CA1\u6709\u5EFA\u7ACB\u3002</p><p>TPC\u7684\u8FDE\u63A5\u662F\u4EA4\u4E92\u5E8F\u53F7\u7684\u8FC7\u7A0B\uFF0CA\u5411B\u901A\u4FE1\uFF0CB\u5411A\u56DE\u4F20\uFF0C\u8FD9\u4E24\u6B21\u53EA\u80FD\u786E\u8BA4\u5BF9A\u7684\u5E8F\u5217\u53F7\u7B54\u6210\u4E00\u81F4\uFF0C\u5E76\u4E0D\u80FD\u5BF9B\u7684\u5E8F\u5217\u53F7\u8FD8\u6CA1\u786E\u8BA4</p><ul><li><p>A\u5411B\u8BF4\uFF0C\u6211\u662FA</p></li><li><p>B\u56DEA\uFF0C\u6211\u77E5\u9053\u4F60\u662FA\u4E86\uFF0C\u6211\u662FB</p></li></ul><p>\u6B64\u65F6\u7ED3\u675F\u7684\u8BDD\uFF0CB\u4F1A\u60F3\uFF0C\u8FD9A\u5230\u5E95\u77E5\u9053\u4E0D\u77E5\u9053\u6211\u662FB</p><p><strong>TCP\u7B2C\u56DB\u6B21\u6325\u624B\u4E3A\u4EC0\u4E48\u8981\u7B49\u5F852MSL</strong></p><p>\u6700\u4E3B\u8981\u662F\u56E0\u4E3A\u4E24\u4E2A\u7406\u7531:</p><ol><li><p>\u4E3A\u4E86\u4FDD\u8BC1\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u6700\u540E\u4E00\u4E2A<code>ACK\u62A5\u6587\u6BB5</code>\u80FD\u591F\u5230\u8FBE\u670D\u52A1\u5668\u3002\u56E0\u4E3A\u8FD9\u4E2A<code>ACK</code>\u6709\u53EF\u80FD\u4E22\u5931\uFF0C\u4ECE\u800C\u5BFC\u81F4\u5904\u5728<code>LAST-ACK</code>\u72B6\u6001\u7684\u670D\u52A1\u5668\u6536\u4E0D\u5230\u5BF9<code>FIN-ACK</code>\u7684\u786E\u8BA4\u62A5\u6587\u3002\u670D\u52A1\u5668\u4F1A\u8D85\u65F6\u91CD\u4F20\u8FD9\u4E2A<code>FIN-ACK</code>\uFF0C\u63A5\u7740\u5BA2\u6237\u7AEF\u518D\u91CD\u4F20\u4E00\u6B21\u786E\u8BA4\uFF0C\u91CD\u65B0\u542F\u52A8\u65F6\u95F4\u7B49\u5F85\u8BA1\u65F6\u5668\u3002\u6700\u540E\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u90FD\u80FD\u6B63\u5E38\u7684\u5173\u95ED\u3002\u5047\u8BBE\u5BA2\u6237\u7AEF\u4E0D\u7B49\u5F85<code>2MSL</code>\uFF0C\u800C\u662F\u5728\u53D1\u9001\u5B8C<code>ACK</code>\u4E4B\u540E\u76F4\u63A5\u91CA\u653E\u5173\u95ED\uFF0C\u4E00\u4F46\u8FD9\u4E2A<code>ACK</code>\u4E22\u5931\u7684\u8BDD\uFF0C\u670D\u52A1\u5668\u5C31\u65E0\u6CD5\u6B63\u5E38\u7684\u8FDB\u5165\u5173\u95ED\u8FDE\u63A5\u72B6\u6001</p></li><li><p>\u5BA2\u6237\u7AEF\u5728\u53D1\u9001<code>ACK</code>\u540E\uFF0C\u518D\u7B49\u5F85<code>2MSL</code>\u65F6\u95F4\uFF0C\u53EF\u4EE5\u4F7F\u672C\u6B21\u8FDE\u63A5\u6240\u4EA7\u751F\u7684\u6570\u636E\u6BB5\u4ECE\u7F51\u7EDC\u4E2D\u6D88\u5931\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u4E0B\u6B21\u5EFA\u7ACB\u8FDE\u63A5\u540E\u4E0D\u4F1A\u4EA7\u751F\u6570\u636E\u51B2\u7A81</p></li></ol><p><strong>\u4E3A\u4EC0\u4E48seq\u662F\u968F\u673A\u7684</strong></p><p><code>seq</code>\u4E00\u822C\u662F\u57FA\u4E8E\u65F6\u95F4\uFF0C\u5229\u7528\u6563\u5217\u51FD\u6570\uFF08\u8FD9\u4E2A\u51FD\u6570\u4E00\u5B9A\u65F6\u95F4\u4E5F\u4F1A\u8F6E\u6362\uFF09\u8BA1\u7B97\u800C\u6210\u7684\uFF0C\u76EE\u7684\u662F\u9632\u6B62\u88AB\u731C\u6D4B\u5E8F\u5217\u53F7\u4ECE\u800C\u88AB\u4F2A\u9020\u653B\u51FB\u3002\u540C\u65F6\u56E0\u4E3A\u662F\u57FA\u4E8E\u65F6\u95F4\u7684\uFF0C\u6240\u4EE5\u51E0\u4E4E\u4E0D\u4F1A\u4E0E\u6700\u8FD1\u65AD\u5F00\u7684\u6216\u6B63\u5728\u7B49\u5F85\u4E2D\u7684\u5E8F\u5217\u53F7\u76F8\u540C</p>',89),P={href:"https://blog.csdn.net/a19881029/article/details/38091243",target:"_blank",rel:"noopener noreferrer"},h=d("\u7406\u89E3TCP\u5E8F\u5217\u53F7\uFF08Sequence Number\uFF09\u548C\u786E\u8BA4\u53F7\uFF08Acknowledgment Number)"),u={href:"https://hit-alibaba.github.io/interview/basic/network/TCP.html",target:"_blank",rel:"noopener noreferrer"},K=d("TCP\u7279\u6027");function N(_,S){const o=s("ExternalLinkIcon");return l(),i("div",null,[A,e("blockquote",null,[e("p",null,[e("a",P,[h,c(o)])])]),e("blockquote",null,[e("p",null,[e("a",u,[K,c(o)])])])])}var q=p(T,[["render",N],["__file","TCP.html.vue"]]);export{q as default};
