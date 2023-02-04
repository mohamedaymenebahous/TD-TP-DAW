$(function() {
    $('li:contains("Sucre")').text('Miel');
    $('li.hot').html(function() {
        $('li.hot').hide();
    })
    $('hr.hot').html(function() {
        $('hr.hot').hide();
    })
});

$(function() {
    $("li:eq(1)").css("font-style", "italic");
});

//3frf