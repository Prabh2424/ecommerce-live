$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        navigation: true, // Show next and prev buttons
        autoplay: true, // Start autoplay
        autoplayTimeout: 3000, // Autoplay interval for the first carousel (in milliseconds)
        slideSpeed: 600,
        pagination: false, // Disable pagination
        dots: false, // Disable dots
        items: 1, 
        loop: true, // Set loop to true for infinite carousel
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });

    $("#another-owl-demo").owlCarousel({
        navigation: true, // Show next and prev buttons
        autoplay: true, // Start autoplay
        autoplayTimeout: 1500, // Autoplay interval for the second carousel (in milliseconds)
        slideSpeed: 600,
        pagination: false, // Disable pagination
        dots: true, // Enable dots
        items: 1, 
        loop: true, // Set loop to true for infinite carousel
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });
});
