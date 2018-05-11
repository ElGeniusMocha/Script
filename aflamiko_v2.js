// Back To Top
jQuery(document).ready(function(e){var t=e("#toTop");e(window).scroll(function(){e(this).scrollTop()>=200?t.show(10).animate("#toTop").addClass("active"):t.animate("#toTop").removeClass("active")});t.click(function(t){t.preventDefault();e("html,body").animate({scrollTop:0},400)})})

$(document).ready(function(){$(".btn-servDown").click(function(){$("#download-overlay,#downloadPopUp").toggleClass("open");});});
$(document).ready(function(){$(".b-close").click(function(){$("#download-overlay,#downloadPopUp").removeClass("open");});});
$(document)['ready'](function(){
$( ".div_download" ).appendTo( $( "#download-url_2" ) );

$( ".post_story4" ).appendTo( $( ".boxVideos" ) );

$( ".post_story3" ).appendTo( $( ".servers" ) );


});

// Search //
$(function () {
    $('li.search').on('click', function (ab2) {
        event.preventDefault();
        if ($('#search').hasClass("open")) {
            $('#search').removeClass('open');
        } else {
            $('#search').addClass('open');
        }
    });
    $('#search, #search button.close').on('click keyup', function (ab2) {
        if (ab2.target == this || ab2.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});










        $(document).ready(function(e) {
                $('.showTrailer_btn').click(function(){
                    $('.modalTrailer').toggle();
                    $('.modalTrailer *').attr('autoplay', '');
                });
                $('.modalTrailerClose').click(function(){
                    $('.modalTrailer').hide();
                });
            });

  document.getElementById("loading").innerHTML = '<div id="loading-center"><div id="loading-center-absolute"><div class="object" id="object_one"></div><div class="object" id="object_two"></div><div class="object" id="object_three"></div></div></div>';



$('.abdoutech_sid')['owlCarousel']({
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        merge: false,
        items: 5,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [980, 4],
        itemsTablet: [768, 3],
        itemsTabletSmall: false,
        itemsMobile: [479, 2],
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        loop: true,
        margin:5,
        responsiveClass: true,
        responsive: {0: {items: 2},380: {items: 2},480: {items: 3}, 600: {items: 3}, 1000: {items: 5}}
});
