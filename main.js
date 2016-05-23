$(document).ready(function ($) {
    var URL = "https://api.instagram.com/oembed/?url=https://www.instagram.com/p/2w-Ro1rj_w/?taken-by=darthhomme";
    $.ajax({
        url: URL,
        dataType: "jsonp", // this is important
        cache: false,
        success: function (response) {
            var html = '<div id="container"><a href="' + response.thumbnail_url + '" ><img src="' + response.thumbnail_url + '" alt="thumbnail" /></a><p>Author : ' + response.author_name + '<br />Author\'s ID: ' + response.author_id + '<br />Title : ' + response.title + '</p></div>';
            $("#container").html(html);
        },
        error: function () {
            $("#container").html("<p>There was an error in the ajax call</p>");
        }
    });
}); // ready
