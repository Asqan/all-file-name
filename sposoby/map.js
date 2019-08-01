jQuery(document).ready(function(){
jQuery(function() {
    jQuery("#map").googleMap();
    jQuery("#map").addMarker({
      coords: [52.07119400000001, 21.023124999999936], // GPS coords
      title: '<div class="mk-map">M.K. Consulting Mirosław Kaźmierczak</div>' // Title
      
    });
  })
  });