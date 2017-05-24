$( document ).ready(function() {
    var url = "https://www.theatlantic.com/feed/best-of/";
    loadFeed(url);
});

function loadFeed(url) {
    alert("load feed called");
    var request = $.get(url);

    request.done(function (data) {
        $("#feed-content").html(data);
        alert("success");
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
        alert("error: " + textStatus + "," + errorThrown);
    });

    request.always(function() {
        alert("done");
    });
}
