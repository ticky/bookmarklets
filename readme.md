# Bookmarklets

A collection of Bookmarklets

## List

* [960ify](#960ify)
* [Meta Snooper](#meta-snooper)
* [Viewport Breakers](#viewport-breakers)

## Bookmarklets

### 960ify

A quick bookmarklet for making fluid-width webpages 960px wide for readability.
Useful for MSDN and other documentation sites, especially where tables are used which Instapaper can't deal with.

```javascript
javascript:!function(a){a.style.margin="0 auto",a.style.width="960px"}(document.getElementsByTagName("body")[0]);
```

### Meta Snooper

Quickly grabs important meta content from the current page, including;

* Open Graph tags
* Description
* Keywords

```javascript
javascript:!function(a){for(var b=["Meta Snooper:"],c=0;c<a.length;c++)a[c].hasAttribute("property")&&b.push(a[c].getAttribute("property")+': "'+a[c].getAttribute("content")+'"'),a[c].hasAttribute("name")&&b.push(a[c].getAttribute("name")+': "'+a[c].getAttribute("content")+'"');b.length>1?alert(b.join("\n \u2022 ")):alert("No important meta tags were found.")}(document.querySelectorAll("meta[property^='og:'], meta[name='description'], meta[name='keywords']"));
```

_*Note*: Requires a browser which has `document.querySelectorAll`._

### Viewport Breakers

Bookmarklet to detect elements which force the page outside the viewport.

Currently does not attempt to determine if an element is not able to be causing a problem due to its parents `overflow`. You have to do at least some of the work.

```javascript
javascript:!function(a){function c(){return a.width>a.documentElement.clientWidth}function d(b){return b.offsetLeft+b.offsetWidth>a.documentElement.clientWidth}function e(b){var c=b.tagName.toLowerCase();""!==b.id&&(c=[c,b.id].join("#")),b.classList&&b.classList.length>0&&(c=[c,b.className.replace(" ",".")].join("."));var d=a.body.querySelectorAll(c.replace(/\//g,"\\/"));if(d&&d.length>1)for(var f=0;f<d.length;f++)if(d[f]===b){c=[c,"[",f,"]"].join("");break}return c}var b=null!==navigator.userAgent.toLowerCase().match(/ip(?:hone|(?:o|a)d)/g);if(c()){var f=a.body.querySelectorAll("*"),g=[];if(f)for(var h=0;h<f.length;h++)d(f[h])&&(f[h].style.outline="1px solid pink",g.push(e(f[h])));g.length>0?alert([["\u26a0",g.length.toString(),"elements appear to overflow the page;"].join(" "),g.join("\n \u2022 ")].join("\n \u2022 ")):alert([b?"\u26a0 ":"","No elements appear to overflow the page, but the document is wider than the viewport."].join(""))}else alert([b?"\uf44d ":"","Document does not appear to overflow the viewport.\nYou're all good."].join(""))}(document);
```

## Legal

Copyright © 2013 Jessica Stokes. Please see `license.txt`.