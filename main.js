

function activeMenu(index)
{
	$("#menu li").each(function(l_index, element) {
			if(l_index == index -1)
			{
				$(element).addClass('active');
			} 
			else
			{
				$(element).removeClass('active');
			}
    	});
		
	
}

$(document).ready(function() {
	  $('#fullpage').fullpage({
		  sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
		  loopBottom:true,
		  loopTop:true,

		 onLeave: function(index, nextIndex, direction){
             activeMenu(nextIndex)
		},
		afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
           console.info('afterSlideLoad')
        }
	  });
	  
	  $("#menu a").each(function(index, element) {
        $(element).bind("click",function(){
 			 $.fn.fullpage.moveTo(index + 1);
			 
			clearTimer();
		});
    });
  });
