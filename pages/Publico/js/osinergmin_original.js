$(document).ready(function() 
{	 simple_tooltip("area","tooltip");
	ajx();
	function ajx(){
			$(".level1 a, .menu a").each(function(){
				var href = $(this).attr("href");
				$(this).click(function(e){

					
					var divlink = href.split("/")
						var comp = 	divlink[divlink.length-1];
						
					if((comp.indexOf('html')>=0 || comp=="#") && comp !="map.html" )
					{	
							
						e.preventDefault();
						 if(comp!="#"){
						$(".main-content").html('<img class="loading" src="images/loading.gif"/>');
						$(".main-content").load( href+" .main-content",function()
						{	
							if(href=="sedes-lima.html")
							{
								$(".dinamicoSL").html("");
								$(".content-sede a").each(function(){
									$(this).click(function(e){
										e.preventDefault();
										var i=0;
										$(".main-content").load($(this).attr("href")+" .main-content",function()
										{
											//alert("cargado11");
											
											if(i==0)
											loadTabs();
											i++;
										});
										$(".dinamicoSL").load($(this).attr("href")+" .dinamico",function(){
												//alert("cargado navigate");
												$("#acc1").accordion({
													  el: ".h", 
													  head: "h4, h5", 
													  next: "div",
													  initShow : "div.outer:eq(0)"
												  });
												  ajx();
										});
										//alert($(this).attr("href"));
										
									});
								});
							}
							else
							$("#acc3").accordion({initShow : "#current"});
						});
						}
					}
					else{
						if (comp =="map.html")
							document.location= href;
						else
							window.open (href);
					}
	
					});
					
				});
		}
		function loadTabs(){
	
			$("#acc3").accordion({initShow : "#current"});
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
	loadBtnBack();
		}	
		function loadBtnBack()
		{
			$(".back").click(function(){
				var j=0;
				
				$(".main-content").load("sedes-lima.html .main-content", function(){
					//alert("cargado back");
					if(j==0){
					$(".content-sede a").each(function(){
						$(this).click(function(e){
										e.preventDefault();
										var i=0;
										
										$(".main-content").load($(this).attr("href")+" .main-content",function()
										{
											//alert("cargado222222");
											if(i==0){
											loadTabs();
											
											
											
											}
											i++;
											
										});
										
										$(".dinamicoSL").load($(this).attr("href")+" .dinamico",function(){
												//alert("cargado navigate map");
												$("#acc1").accordion({
												el: ".h", 
												head: "h4, h5", 
												next: "div",
												initShow : "div.outer:eq(0)"
											 });
											ajx();
										});
										
										//alert($(this).attr("href"));
						});
					});}
					
					
					j++;
				});
				
				$(".principal").load("index.html"+" .dinamicoSL",function(){
						//alert("cargado navigate index");
						$("#acc1").accordion({
						el: ".h", 
						head: "h4, h5", 
						next: "div",
						initShow : "div.outer:eq(0)"
					 });
					ajx();
				});
				
			});
			//$(".main-content").load(href+" .main-content",function()
			//{});
		}
		function btnBack(){
			$(".back").click(function(){
					document.location = "map.html";
			});
		
		}
		
			$(".level2 a.lvl01, .menu a").each(function(){
				$(this).click(function(e){
					
					
					$(".level2 a.lvl01").each(function(){
						$(this).removeClass("active");
					});
					
					$(".menu a").each(function(){
						$(this).removeClass("active");
					});
					e.preventDefault();
					
					//$(this).attr("class", "active level1 open");
					if($(this).parent().attr("id") != "home")
						$(this).addClass("active");
					//alert("--");
					
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
			
			$("html").addClass("js");
		$.fn.accordion.defaults.container = false; 

	
		  $("#acc3").accordion({initShow : "#current"});
		  $("#acc1").accordion({
			  el: ".h", 
			  head: "h4, h5", 
			  next: "div"
		  });
		  $("#acc2").accordion({
			  obj: "div", 
			  wrapper: "div", 
			  el: ".h", 
			  head: "h4, h5", 
			  next: "div", 
			  showMethod: "slideFadeDown",
			  hideMethod: "slideFadeUp",
			  initShow : "div.shown"
			});
			
		  $("html").removeClass("js");
	
		$("#Map2 area").each(function(){
									$(this).click(function(e){
										e.preventDefault();
										var i=0;
										var href = $(this).attr("href");
												if(href!="#"){
												
												$(".main-content").load(href+" .main-content",function()
												{	
														$(".tooltip").each(function(){$(this).attr('style','')});
														if(href=="sedes-lima.html"){
														$(".content-sede a").each(function(){
															$(this).click(function(e){
																
																e.preventDefault();
																
																var i=0;
																
																$(".main-content").load($(this).attr("href")+" .main-content",function()
																{
																	//alert("cargado");
																	if(i==0)
																	loadTabs();
																	i++;
																	
																});
																$(".dinamicoSL").load($(this).attr("href")+" .dinamico",function(){
																			//alert("cargado mapa ---");
																			$("#acc1").accordion({
																					  el: ".h", 
																					  head: "h4, h5", 
																					  next: "div",
																					  initShow : "div.outer:eq(0)"
																			});
																		ajx();
																});
															});
														});
														
														}
														else{
															$("#acc3").accordion({initShow : "#current"});
															 btnBack();
															}
													//alert($(this).attr("href"));	
												});
												if(href!="sedes-lima.html"){
												//$(".principal_sr").html("");
												$(".dinamicoSR").load(href + " .dinamico",function(){
																//alert("cargado mapa");
																$("#acc1").accordion({
																	  el: ".h", 
																	  head: "h4, h5", 
																	  next: "div",
																	  initShow : "div.outer:eq(1)"
																  });
														ajx();
												});
												}
											}
										//alert($(this).attr("href"));
									});
								});
});