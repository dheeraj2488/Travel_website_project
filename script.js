$(document).ready(function () {
    // Example: Change the color of the heading when clicked
    $(".lg-heading").click(function () {
        $(this).css("color", "red");
    });


    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // contact us page= script
    $('form').submit(function (e) {
        var username = $('#username').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#textarea').val();

        if (username === '' || email === '' || phone === '' || message === '') {
            alert('Please fill out all fields');
            e.preventDefault(); // Prevent form submission
        }
    });

    $('#about-heading').click(function () {
        $('#about-content').fadeToggle(3000);
    });

    // Toggle Why Choose Us content
    $('#why').click(function () {
        $('#about-content').fadeToggle(3000);
    });

    var currentIndex = 0;
    var slides = $('.slider img');
    var totalSlides = slides.length;

    // Show the first slide initially
    showSlide(currentIndex);

    // Function to show a slide by index
    function showSlide(index) {
        slides.hide().eq(index).fadeIn();
    }

    // Function to show the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Set interval to rotate slides every 3 seconds
    var slideInterval = setInterval(nextSlide, 2000);

    // Pause slider on hover
    $('.slider').hover(
        function () {
            clearInterval(slideInterval);
        },
        function () {
            slideInterval = setInterval(nextSlide, 2000);
        }
    );
});



