var myAdjectives = ['Developer.', 'Entrepreneur.', 'Idealist.','Engineer.']


$(document).ready(function(){
	var counter = 0;
	var $rotate = $('#rotate');

	var rotate = function() { //This function is to rotate to the next adjective in the myAdjectives array
		counter++;
		var currentAdj = myAdjectives[counter % myAdjectives.length];
		//Set the inner html of the id rotate to the specified adjective.
		$rotate.fadeTo(1000,0.0)
		setTimeout(function(){
			$rotate.html(currentAdj)},1000);
		setTimeout(function(){$rotate.fadeTo(1000,1)},2000);

	}
	setInterval(rotate,4000);
	var $win = $(window);

//Background image scrolling
    $('div.background').each(function(){
        var scroll_speed =5;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });

    $('div.portfolioPage').each(function(){
        var scroll_speed =5;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });



    // $('li').hover(function(){
    // 	$('li').css("background-color", '#f08080');
    
    // });
    //nav bar color change while scrolling
    $(function(){
    	$(window).scroll(function(){
	        var $scrollPercent = ($(document).scrollTop() / 2000);

	        if($scrollPercent <= 1){
	            $('ul').css({backgroundColor:'rgba(101,76,97,'+$scrollPercent+')'});
        }
    	});
	});
//     $('aboutClick').on('click', 'a', function(event){
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
// });

//tag movement
// $('a[href^="#"]').on('click', function(event) {
//     var target = $(this.getAttribute('href'));
//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').stop().animate({
//             scrollTop: target.offset().top+250
//         }, 1000);
//     }
// });
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-60
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });




});