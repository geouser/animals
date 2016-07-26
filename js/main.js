// Global parameters
window.params = {
    widthFull: 750,
    maxRowHeight: 0,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};



jQuery(document).ready(function($) {

    /*---------------------------
                                  ADD CLASS ON SCROLL
    ---------------------------*/
    $(function() { 
        var $document = $(document),
            $element = $('.menu-button'),
            $element2 = $('header'),
            className = 'hasScrolled';

        $document.scroll(function() {
            $element.toggleClass(className, $document.scrollTop() >= 1);
            $element2.toggleClass(className, $document.scrollTop() >= 1);
        });
    });
      


    /*------ select language hover-----*/
    $('.lang').hover(
        function() {
            $('.firstLevel').toggleClass('blur');
        },
        function() {
            $('.firstLevel').toggleClass('blur');
        }
    );

    /*------ side nav li add class if has submenu-----*/
    $('.firstLevel li, .secondLevel li').has('ul').addClass('hasUl');

    /*------ side nav li hover-----*/
    $('.sideNav li').hover(
        function() {
            $(this).siblings('li').css('opacity', '.6');
            $(this).css('opacity', '1');
        },
        function() {
            $(this).siblings('li').css('opacity', '1');
        }
    );




    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $('.menu-button').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('header').toggleClass('active');
        if ($('header').hasClass('active')) {
                $('body, html').css('overflow', 'hidden');
            } else {
                $('body, html').css('overflow', 'visible');
            }
    });



    /*---------------------------
                                  Magnific popup
    ---------------------------*/
    $('.magnific').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',
        modal: false,

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $('.offer').slick({
        fade: true,
        arrows: false,
        dots: true
    });



}); // end file