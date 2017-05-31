var TabbedContent = {
	init: function() {	
		$(".bannerWarp ul li").click(function() {
			$(this).addClass('hit').siblings().removeClass('hit');
			$('.banner>div:eq('+$(this).index()+')').show().siblings().hide();
		
			var background = $(this).parent().find(".hit");
			
			$(background).stop().animate({
				left: $(this).position()['left']
			}, {
				duration: 300
			});
			
			TabbedContent.slideContent($(this));
			
		});
	},
	
	slideContent: function(obj) {
		
		var margin = $(obj).parent().parent().find(".banner1").width();
		margin = margin * ($(obj).prevAll().size() );
		margin = margin * -1;
		
		$(obj).parent().parent().find(".tabslider").stop().animate({
			marginLeft: margin+"px"
		}, {
			duration: 300
		});
	}
}

$(document).ready(function() {
	TabbedContent.init();
});