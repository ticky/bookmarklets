(function(d){
  
  var deviceIsAppleiOS = (navigator.userAgent.toLowerCase().match(/ip(?:hone|(?:o|a)d)/g) !== null);

  function isDocumentWiderThanViewport() {
    return d.width > d.documentElement.clientWidth;
  };

  function isElementOutsideViewport(element) {
    return (element.offsetLeft + element.offsetWidth) > d.documentElement.clientWidth;
  };
  
  function generateNameFromElement(element) {
    var name = element.tagName.toLowerCase();
    
    if (element.id !== '') {
      name = [name, element.id].join('#');
    }
    
    if (element.classList && element.classList.length > 0) {
      name = [name, element.className.replace(' ', '.')].join('.');
    }
    
    var matchingElements = d.body.querySelectorAll(name.replace(/\//g, '\\/'));
    
    if (matchingElements && matchingElements.length > 1) {
      var index = -1;
      
      for (var i = 0; i < matchingElements.length; i++) {
        if (matchingElements[i] === element) {
          name = [name, '[', i, ']'].join('');
          break;
        }
      }
    }
    
    return name;
  };

  if (isDocumentWiderThanViewport()) {
    var elements = d.body.querySelectorAll('*'),
      elementList = [];
    
    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        if (isElementOutsideViewport(elements[i])) {
          elements[i].style.outline = '1px solid pink';
          elementList.push(generateNameFromElement(elements[i]));
        }
      }
    }
    
    if (elementList.length > 0) {
      alert([['⚠', elementList.length.toString(), 'elements appear to overflow the page;'].join(' '), elementList.join('\n • ')].join('\n • '));
    } else {
      alert([deviceIsAppleiOS ? '⚠ ' : '','No elements appear to overflow the page, but the document is wider than the viewport.'].join(''));
    }
  } else {
    alert([deviceIsAppleiOS ? '👍 ' : '','Document does not appear to overflow the viewport.\nYou\'re all good.'].join(''));
  }
}(document));