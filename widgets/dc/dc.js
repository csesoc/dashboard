function dc() {
    div = $(".dc");
    $.ajax({
        url: "http://cgi.cse.unsw.edu.au/~obca109/dc/json/",
        context: document.body,
        success: function(json) {
            json = JSON.parse(json);
            div.html(json["text"]);
        }
    });
}

dc();
setInterval(dc, 10000);
