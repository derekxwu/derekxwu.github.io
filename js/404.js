var rootFolderString = "https://dl.dropboxusercontent.com/u/5586777/404_data/"
var webmTable = [
    ["ha-ha-ha.webm", "http://www.nicovideo.jp/watch/sm22237296"],
    ["mitchirineko-march.webm", "https://www.youtube.com/watch?v=lAIGb1lfpBw"],
    ["boot-to-the-head.webm", "https://www.youtube.com/watch?v=vFldBVWFgWo"],
    ["det.swf.webm", "http://www.nicovideo.jp/watch/sm22028311"],
    ["love-the-way-you-move.webm", "https://www.youtube.com/watch?v=Wga5A6R9BJg"],
    ["me_lo_rin.webm", "http://www.nicovideo.jp/watch/sm21609471"],
    ["moses-supposes.webm", "http://vimeo.com/74621649"],
    ["oh-oh-oh.webm", "http://www.nicovideo.jp/watch/sm21895373"],
    ["who-put-the-bomp.webm", "http://www.nicovideo.jp/watch/sm4538955"]
];

$(document).ready(function() {
    $("#back").attr("href", document.referrer);
    var rand = Math.floor(Math.random() * webmTable.length);
    $(".video-container").prepend("<video controls autoplay><source src='" + rootFolderString + webmTable[rand][0] + "'type='video/webm'></video>");
    $("#sauce").html("Source: <a href='" + webmTable[rand][1] + "'>" + webmTable[rand][1] + "</a>");
});