
	
$(function() {



	$(window).resize(function(){
				var w	= $(window).width();
					h 	= $(window).height();
					sw	= window.innerWidth
					sh	= screen.height;
				 	line 	= $('#nav_top_line');		
					
				console.log(w);
			
				
				if(sw > 640 && line.is(':visible')) {
					
					$("#nav_top_line").hide();
				
				}
				if(sw > 640 && $('nav ul').is(':hidden')) {
					
					$('nav ul').show();
					$("#extra_menü").hide();
					$("#sonderfahrten_menü").hide();
				}
				if(sw < 640 && $('#pull').is(':visible')) {
					
					$('nav ul').hide();
					$('#nav_top_line').hide();
				
				}
		});
		
		
			
	
	
	$.fn.meineFunktion = function(x) { 
		
		var a = "#" + x;
			b = "sonderfahrten";
			c = "extra";
			v = "menu"
			d = b.localeCompare(x);
			e = c.localeCompare(x);
			l = v.localeCompare(x);
		
		if(d == 0 && e != 0 ){
			$("#sonderfahrten_menü").slideToggle(100);
			$("#extra_menü").hide();
				
		}else if(d != 0 && e == 0){
			$("#extra_menü").slideToggle(100);
			$("#sonderfahrten_menü").hide();
		}else if( l == 0){
			$("nav ul").toggle(0);
						
			if( $('nav ul').is(':hidden') ){
				
				$("#nav_top_line").hide();
				
			}else if($('nav ul').is(':visible')){
				
				$("#nav_top_line").show();	
			}	
			
			$("#sonderfahrten_menü").hide();
			$("#extra_menü").hide();
			
		}		
				
	}	
});			
		
		
	
