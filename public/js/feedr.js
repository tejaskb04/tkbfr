function loadFeed(url, target) {
	alert("load feed called");
	//var request = $.get(url);
	var request = $.ajax({
		type: "GET",
		url: url,
		crossDomain: true
		//dataType: "jsonp"
	});

	request.done(function (data) {
		alert(data);
	});

	request.fail(function (jqXHR, textStatus, errorThrown) {
		alert("error: " + textStatus + "," + errorThrown);
	});

	request.always(function () {
		alert("done");
	});
}
