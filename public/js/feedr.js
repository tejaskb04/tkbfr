$( document ).ready(function() {
    var url = "http://www.shankarscodex.com/2015/10/visual-studio-community-edition-net.html";
    loadFeed(url);
});

function loadFeed(url) {
    alert("load feed called");
    $.get(url, function( data ) {
        $("#feed-content").html(data);
        alert("loadFeed finished");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        alert(textStatus);
        if (textStatus == 'timeout')
            alert("server is not responding");

        if (textStatus == 'error')
            alert(errorThrown);
    })
    .always(function() {
        alert("get finished");
    });
}
