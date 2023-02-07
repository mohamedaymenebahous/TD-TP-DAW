$(function() 
{
    $("li:contains('Sucre')").text('Miel');
    $("li:eq(1)").css("font-style", "italic");
    $("ul").append("<hr>");
    $("ul").append("<li class='nothot' id='confiture'>Confiture</li>");
    $("li:last-child, li:nth-last-child(3)").css("background-color", "#ff8827")
    $("li").nextUntil("li:nth-last-child(3), li:last-child").prepend('+ ');
});