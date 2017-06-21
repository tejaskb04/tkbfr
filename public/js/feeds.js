var feed = require("feed-read");
var http = require("http");
var urls = [
	"http://feeds.bbci.co.uk/news/rss.xml",
	"http://news.sky.com/feeds/rss/home.xml",
	"http://www.techmeme.com/feed.xml"
];
http.createServer(function (req, res) {
	res.writeHead(200, {
		"Content-Type": "text/html",
		"Transfer-Encoding": "chunked"
	});
	res.write("<html>\n<head>\n<title>RSS Feeds</title>\n</head>\n<body>");
	for (var j = 0; j < urls.length; j++) {
		feed(urls[j], function (err, articles) {
			for (var i = 0; i < articles.length; i++) {
				res.write("<h6>" + articles[i].title + "</h6>");
				if (i === articles.length - 1 && j === urls.length - 1) {
					res.end("</body>\n</html>");
				}
			}
		});
	}
}).listen(8000);
