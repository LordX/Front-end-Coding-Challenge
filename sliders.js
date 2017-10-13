$(document).ready(function(){
	
	var width;
	$(window).resize(function() {
		$(".slider ul li").each(function(i,item){
			item = $(item);
			console.log(item.width(),item.height())
			width=item.width()
		});
	});
	/*auto slider stoped when it hover*/
	
	var timer=0;
   $(function(){
      
	
		  timer=setInterval(function(){
         $(".start ul").animate({marginLeft:-1*width},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
      }, 3500);
	
	  $(this).find(".slider").mouseenter(function(){
		  $(this).addClass("stop").removeClass("start");
	  });
	   $(this).find(".slider").mouseleave(function(){
		  $(this).addClass("start").removeClass("stop");
	  })
	  
   });
   $(function(){
	   $(this).find(".left.arrow").click(function(){
		   //alert("not work");
		   $(".stop ul").animate({marginLeft:-1*width},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
	   });
	   });
	   $(this).find(".right.arrow").click(function(){
		   //alert("not work");
			$(".stop ul").animate({marginLeft:width},800,function(){
            $(this).css({marginLeft:0}).find("li:first").before($(this).find("li:last"));
	   });
	   
	   });
   
     });
	
});
