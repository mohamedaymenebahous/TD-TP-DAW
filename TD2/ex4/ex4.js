$(function() 
{
    $("li:contains('Sucre')").text('Miel');
    $("li:eq(1)").css("font-style", "italic");

    $("li").not(":first-child, :last-child").css("background-color", "#c4a993");
    $("li").not(":first-child, :last-child").css("color", "#000000");
    $("li").not(":first-child, :last-child").css("font-family", "Arial");
    $("li").not(":first-child, :last-child").css("font-weight", "normal");
    $("li").not(":first-child, :last-child").css("padding-left", "1rem");

    $("hr").css("background-color", "#FFFFFF");
});