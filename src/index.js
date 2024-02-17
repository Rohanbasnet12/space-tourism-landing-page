let navLinks = $('#menu li a');
let activeButton = false;

navLinks.each(function () {
    $(this).on('click', function () {
        $(this).addClass('active');
    });
});
