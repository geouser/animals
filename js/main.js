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
    $('.hasUl').children('a').click(function(event){
        event.preventDefault();
    });

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

    $('.offer--slider').slick({
        fade: true,
        arrows: false,
        dots: true
    });



/*---------------------------
                              GOOGLE MAP
---------------------------*/
  var map;
  function googleMap_initialize() {
    var lat = $('.map-box').data('lat');
    var long = $('.map-box').data('lng');
    var mapCenterCoord = new google.maps.LatLng(lat, long);
    var mapMarkerCoord = new google.maps.LatLng(lat, long);


    var mapOptions = {
      center: mapCenterCoord,
      zoom: 16,
      //draggable: false,
      disableDefaultUI: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var markerImage = new google.maps.MarkerImage('images/location.png');
    var marker = new google.maps.Marker({
      icon: markerImage,
      position: mapMarkerCoord, 
      map: map,
      title:"LOGO"
    });
    
    $(window).resize(function (){
      map.setCenter(mapCenterCoord);
    });
  }
  if ( $('.map-box').length > 0) {
    googleMap_initialize();   
  }



/*---------------------------
                              CONTACTS FORM
---------------------------*/
$('input, textarea').on('focusin', function(event) {
    event.preventDefault();
    $(this).parent().addClass('focus');
});
$('input, textarea').on('focusout', function(event) {
    event.preventDefault();
    if ( !$(this).val() ) {
        $(this).parent().removeClass('focus');
    }
    
});

}); // end file