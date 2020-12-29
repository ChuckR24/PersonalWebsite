$(document).ready(function() {
    $("#aboutMe-para").load("content/about.html", function(responseTxt, statusTxt, xhr) {
        if (statusTxt == "success")
            alert("External content loaded successfully!");
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});