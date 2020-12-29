$(document).ready(function() {
    $("#aboutMe-para").load("content/about.html");
});

window.onscroll = function()
{
    var distFromTop = document.documentElement.scrollTop || document.body.scrollTop;

    if(distFromTop >= 100)
    {
        document.getElementById('return-to-top-btn').style.visibility="visible";
    }else
    {
        document.getElementById('return-to-top-btn').style.visibility="hidden";
    }
};