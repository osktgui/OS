
jQuery(document).ready(function(query) {
	var temporal="";
	var urldoc = ""+document.location;
	
		 //query.history.load(url);
		//url="";
       //load(url == "" ? "1" : url);
		 function load(ruta){
		
			if(ruta=="") {
			var urlHome = ""+document.location
			var countGato = urlHome.indexOf("#");
			var numElementos = urlHome.split("#");
			if(numElementos.length>=2){
				if (numElementos[1]=="")
				//window.location.replace((urlHome+temporal.replace("/", "%2F")));
				return false;
			}
			ruta="index.html";

			}
			$(".main-content-dinamico").html('<img class="loading" src="images/loading.gif"/>');
			$(".main-content-dinamico").load( ruta+" .main-content",function()
			{
				$("#acc3").accordion({initShow : "#current"});
				$("#accc3").accordion({initShow : "#current"});
				if(ruta=="sedes-lima.html"){
					$(".dinamicoSL").html("");
								$(".content-sede a").each(function(){
									
									$(this).click(function(e){
										e.preventDefault();
										
										var href=$(this).attr("href");
										
				
										temporal = href;
										var url = href;
										url = url.replace(/^.*#/, '');
										$(".dinamicoSL").load($(this).attr("href")+" .dinamico",function(){
												$("#acc1").accordion({
													  el: ".h", 
													  head: "h4, h5", 
													  next: "div",
													  initShow : "div.outer:eq(0)"
												  });
												  navegador_izq();
										});
										
										query.history.load(url);
										
									});
									
								});
				}
				else if(ruta.indexOf("pages-sgc") >= 0){
					
					btnBack(temporal);
					
					//temporal="";
				}
				else if(ruta.indexOf("sedes-lima/") >= 0 || ruta.indexOf("pages-orlima-od/") >= 0){
						loadTabs();
						btnBack("sedes-lima.html");		
				}
				else if(ruta.indexOf("pages-orlima-od\\") >= 0  ){
					btnBack(temporal);
				}
				/*else if(){
				
				
				}*/
				
			
			});
		 
		 }
	

		query.history.init(load);
		
			$(".level1 a, .menu a").each(function(){
				var href = $(this).attr("href");
				$(this).click(function(e){
											
					e.preventDefault();
					
					if(href.indexOf("map.html")>=0) {
						document.location="map.html";
						return false;
					}
					else if(href.indexOf(".html") > 0 && href.indexOf("map.html")<0)
					{			
						
								var url = href;
								url = url.replace(/^.*#/, '');

								query.history.load(url);
					}
					else if(href != "#"){
						window.open(href);
					}
					});
				});
				
				
				
				
			function navegador_izq(){
			
				$(".lvlDinamico a").each(function(){
					
				var href = $(this).attr("href");
				$(this).click(function(e){
					
					var divlink = href.split("/")
						var comp = 	divlink[divlink.length-1];
						e.preventDefault();
						 if(comp!="#" && comp.indexOf('html')>=0){
						
								var url = href;	
								url = url.replace(/^.*#/, '');
								query.history.load(url);
								
						}
						else if((comp.indexOf('html')<=0 && comp!="#"))
							window.open (href);
					});
					
				});
			}
		
		//acordion
		
		$("html").addClass("js");
		$.fn.accordion.defaults.container = false; 
		$("html").removeClass("js");
		
		
		//tabs
		
		
		
		function loadTabs(){
	
			$("#acc3").accordion({initShow : "#current"});
			$("#accc3").accordion({initShow : "#current"});
			$(".tab_content").hide();
		$("ul.tabs li:first").addClass("active_tab").show();
		$(".tab_content:first").show();

		$("ul.tabs li").click(function()
		   {
		   
	
			$("ul.tabs li").removeClass("active_tab");
			$(this).addClass("active_tab");
			$(".tab_content").hide();

			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn();
			
			// IE Hack starts
			 if($.browser.msie && $.browser.version.indexOf("7.")>-1){
			 var tab = activeTab.split("#")
			 var tabActive = "#"+tab[1];
			   $(tabActive).show(); //or adjust the selector to show the right tab please.
			 }
			// IE Hack ends
			return false;
		});
		
		
		// Enable or leave the keys
	$('.slider').each(function(){
		if($('li:last',this).width()+$('li:last',this).offset().left-$('li:first',this).offset().left>$('div',this).width()){
			// enable the buttons
			$('button',this).css('display','inline');
			$('button.prev',this).css('visibility','hidden');
		}
	});
	
	
	$(".slider .next").click(function(){
		//Remove the exist selector
		//Set the width to the widest of either
		var $div =$('div',this.parentNode)
			,maxoffset = $('li:last',$div).width()+$('li:last',$div).offset().left - $('li:first',$div).offset().left - $div.width()
			,offset = Math.abs(parseInt( $('ul',$div).css('marginLeft') ))
			,diff = $div.width();

		if( offset >= maxoffset )
			return;
		else if ( offset + diff >= maxoffset ){
			diff = maxoffset - offset + 20;
			// Hide this
			$(this).css('visibility','hidden');
		}
		// enable the other
		$('.prev', this.parentNode).css('visibility','visible');
		
			
		$("ul", $(this).parent() ).animate({
			marginLeft: "-=" + diff
		},400, 'swing');
	});
	
	$(".slider .prev").click(function(){

		var offset = Math.abs(parseInt( $('ul',this.parentNode).css('marginLeft') ));
		var diff = $('div',this.parentNode).width();
		if( offset <= 0 )
			return;
		else if ( offset - diff <= 0 ){
			$(this).css('visibility','hidden');		
			diff = offset;
		}
		$('.next', this.parentNode).css('visibility','visible');

		$("ul",$(this).parent()).animate({
			marginLeft: '+='+diff
		},400, 'swing');
	});
	//loadBtnBack();
		}	
			function btnBack(variable){
				
				$(".back").click(function(){
						variable = variable.replace(/^.*#/, '');
					query.history.load(variable);
				});
			}
		 //menu select
			$(".level2 a.lvl01, .menu a").each(function(){
				$(this).click(function(e){
					
					
					$(".level2 a.lvl01").each(function(){
						$(this).removeClass("active");
					});
					
					$(".menu a").each(function(){
						$(this).removeClass("active");
					});
					e.preventDefault();

					if($(this).parent().attr("id") != "home")
						$(this).addClass("active");
			
					
				});
			});
			
			$(".level3 a").each(function(){
				$(this).click(function(e){
					$(".level3 a").each(function(){
						$(this).removeClass("subactive");
					});
					$(this).addClass("subactive");
					
					
				});
			});
			//
});