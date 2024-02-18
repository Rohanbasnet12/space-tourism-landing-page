let navLinks = $('#menu li a');

navLinks.each(function () {
    $(this).on('click', function () {
        // Add 'active' class to the clicked link
        $(this).addClass('active');

        // Remove 'active' class from other links
        navLinks.not(this).removeClass('active');
    });
});


//Making the ham burger button work
let hamBtn = $('#hamBtn');
let hamBtnClose = $('#hamBtn-close');

hamBtn.on("click", () => {
    hamBtn.toggle();
    hamBtnClose.toggle();
    $('#menu').addClass('side_bar');
})

hamBtnClose.on("click", () => {
    hamBtn.toggle();
    hamBtnClose.toggle();
    $('#menu').removeClass('side_bar');
})