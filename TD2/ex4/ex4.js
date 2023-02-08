$(function() 
{
    $("li:contains('Sucre')").text('Miel');
    $("li:eq(1)").css("font-style", "italic");

    let valCoul = $("li").not(":first-child, :last-child").css("background-color");
    $("li").not(":first-child, :last-child").css("background-color", "#c4a993");
    $("li").not(":first-child, :last-child").css("color", "#000000");
    $("li").not(":first-child, :last-child").css("font-family", "Arial");
    $("li").not(":first-child, :last-child").css("font-weight", "normal");
    $("li").not(":first-child, :last-child").css("padding-left", "2rem");

    $("hr").css("background-color", "#FFFFFF");

    $(".output").css("background-color", "#FFFFFF");
    $(".output").css("height", "0.75rem");
    $(".output").css("padding", "0.5rem");
    $(".output").css("padding-bottom", "0.80rem");
    $(".output").css("margin", "0 auto");
    $(".output").css("margin-top", "0.5rem");
    $(".output").css("margin-right", "1.25rem");
    $(".output").css("border-radius", "0.25rem");
    $(".output").css("color", "#5e5e5e");
    $(".output").css("font-size", "0.70rem");
    $(".output").css("letter-spacing", "0rem");
    $(".output").html("La couleur precedente: " + valCoul);
});