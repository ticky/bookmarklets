# Viewport Breakers

Bookmarklet to detect elements which force the page outside the viewport.

## Bookmarklet

```
javascript:!function(a){function c(){return a.width>a.documentElement.clientWidth}function d(b){return b.offsetLeft+b.offsetWidth>a.documentElement.clientWidth}function e(b){var c=b.tagName.toLowerCase();""!==b.id&&(c=[c,b.id].join("#")),b.classList.length>0&&(c=[c,b.className.replace(" ",".")].join("."));var d=a.body.querySelectorAll(c);if(d.length>1)for(var f=0;f<d.length;f++)if(d[f]===b){c=[c,"[",f,"]"].join("");break}return c}var b=navigator.userAgent.toLowerCase().match(/ip(?:hone|(?:o|a)d)/g).length>0;if(c()){for(var f=a.body.querySelectorAll("*"),g=[],h=0;h<f.length;h++)d(f[h])&&(f[h].style.outline="1px solid pink",g.push(e(f[h])));console.log(g.length),g.length>0?alert([["\u26a0",g.length.toString(),"elements appear to overflow the page;"].join(" "),g.join("\n \u2022 ")].join("\n \u2022 ")):alert([b?"\u26a0 ":"","No elements appear to overflow the page, but the document is wider than the viewport."].join(""))}else alert([b?"👍 ":"","Document does not appear to overflow the viewport.\nYou're all good."].join(""))}(document);
```