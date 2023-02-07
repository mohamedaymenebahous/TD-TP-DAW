$(function() 
{
    $("li:contains('Sucre')").text('Miel');
    $("li:last-child").css("background-color", "#ff8827");
    $("li:eq(1)").remove();
    $("hr:eq(1)").remove();
    $("li:eq(1)").css("font-style", "italic");
});