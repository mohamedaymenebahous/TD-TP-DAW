$(function() 
{
    $("li:contains('Sucre')").text('Miel');
});

$(function()
{
    $("li:eq(1)").css("font-style", "italic");
});

$(function()
{
    $("ul").append("<hr>");
    $("ul").append("<li class='nothot' id='confiture'>Confiture</li>");
});

$(function()
{
    $("li:last-child, li:nth-last-child(3)").css("background-color", "#ff8827")
});

$(function()
{
    $("li").nextUntil("li:nth-last-child(3), li:last-child").prepend('+ ');
});

/*
$(function()
{
    $("li:eq(1)").remove();
    $("hr:eq(1)").remove();
});
*/

$(function()
{
    
});