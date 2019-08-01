var app = {
  
  init: function(){
  
    app.loop_time();
    
  },
  
  loop_time: function(){
    
    setTimeout(function(){
      app.pop_time();
      app.loop_time();
    }, 1000);
    
  },
  
  pop_time: function(){
    
    //Create timespan by passing in year, month, day, hour, and minute
    
    //Target time: April 6, 2015 at 3:10 p.m.
    var year = 2017;
    var month = 3; //(months are 0-11)
    var day = 6;
    var hour = 15; //(hours are 0-23)
    var min = 10;
    
    var timespan = countdown( new Date(year, month, day, hour, min), null, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS );

    //Update each number
    jQuery("#days .time").text(timespan.days);
    jQuery("#hours .time").text(timespan.hours);
    jQuery("#minutes .time").text(timespan.minutes);
    jQuery("#seconds .time").text(timespan.seconds);
        
  }
  
}

jQuery(document).ready(function(){
  app.init();
});