$(function() {  


/* ************************************************************************
HEADER NAVIGATION AND DROPDOWN
*********************************************************************** */

  var timeoutIdOne;
  var timeoutIdTwo;

  var timeoutSeconds = 700;
  var dropdown = '.dropdown-menu'

  $('li.dropdown-mainnav').hover(function() {
    var thisUpcaret = $(this).find(".upcaret");
    var thisMenu = $(this).find(dropdown);

    if (!timeoutIdOne) {
      timeoutIdOne = window.setTimeout(function() {
        timeoutIdOne = null;   

        $(dropdown).hide();
        $(".upcaret").hide();       

        $('.upcaret').not(thisUpcaret).hide();
        thisUpcaret.show();   
        $(dropdown).not(thisMenu).hide();
        thisMenu.show();        
        $(".overlay").addClass("-active");  

      }, timeoutSeconds);
     }
  }, function() {
    if (timeoutIdOne) {
      window.clearTimeout(timeoutIdOne);
      timeoutIdOne = null;
    }
  });


	$('li.no-dropdown').hover(function(){		
	  if (!timeoutIdTwo) {
      timeoutIdTwo = window.setTimeout(function() {
        timeoutIdTwo = null;		

  			$(dropdown).hide();
  			$(".upcaret").hide();  		
  			$(".overlay").removeClass("-active"); 	
  	   }, timeoutSeconds);
	   }
  }, function() {
    if (timeoutIdTwo) {
      window.clearTimeout(timeoutIdTwo);
      timeoutIdTwo = null;
    }
  });



  $('.dropdown-menu').on('click', function(e) {
   	e.stopPropagation();
  });

  $(document).on('click', function (e) {
   	$('.dropdown-menu').hide();
    $(".upcaret").hide();
  	$(".overlay").removeClass("-active")
  });





  /* ************************************************************************
  	HOMEPAGE SLIDESHOW
  *********************************************************************** */

  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 3000);

});