(function(metaTags){

	var outputList = ["Meta Snooper:"];

	for (var i = 0; i < metaTags.length; i++) {

		if (metaTags[i].hasAttribute("property")) {
			outputList.push(metaTags[i].getAttribute("property") + ": \"" + metaTags[i].getAttribute("content") + "\"");
		}

		if (metaTags[i].hasAttribute("name")) {
			outputList.push(metaTags[i].getAttribute("name") + ": \"" + metaTags[i].getAttribute("content") + "\"");
		}

	};

	if (outputList.length > 1) {
		alert(outputList.join('\n • '));
	} else {
		alert("No important meta tags were found.");
	}

}(document.querySelectorAll("meta[property^='og:'], meta[name='description'], meta[name='keywords']")));