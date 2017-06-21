// feed controller actions

exports.read = function (req, res, next) {
	// read the variable that comes as part of url, "./feed/read/<url>"
	console.log("feed read reached");
	var params = req.params;
	var feedurl = params.feedurl;
	console.log("feed url: %s", feedurl);

	// pass that <url> to feed-read module
	feed(feedurl, function (err, articles) {
		if (err) throw err;
		else {
			// get the result of feed-read module as JSON
			// send that JSON back to the caller (which is the jquery get function)
			// do not use res.render, because there is no HTML to be rendered, only JSON to send back
			res.send(articles);
		}
	});
};

exports.list = function (req, res, next) {
    /* TODO
    - create an object called feedsViewModel
    - create a list of items in this object
    - an item should have a title and a URL
    - these items are the feed information stored by the user
    - for now, hard code the list of items
    - pass in this view model object as the parameter to the list page
    */

	var items = [];
	items.push({ title: "BBC Feed", url: "http://feeds.bbci.co.uk/news/rss.xml" });
	items.push({ title: "Sky Feed", url: "http://news.sky.com/feeds/rss/home.xml" });
	items.push({ title: "Techmeme Feed", url: "http://www.techmeme.com/feed.xml" });

	var viewModel = {};
	viewModel.title = "List of Feeds";
	viewModel.items = items;
	res.render("./feed/list", { viewModel: viewModel });
};
