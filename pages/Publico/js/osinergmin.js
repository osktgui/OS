 
jQuery(document).ready(function(query) {
	var temporal="";
	var time;
	var urldoc = ""+document.location;
	
      function load(num) {

			if(urldoc.indexOf("map.html") > 0 && num==""){
					var x = 0;
					var urlHome = ""+document.location
			var countGato = urlHome.indexOf("#");
			var numElementos = urlHome.split("#");
			if(numElementos.length>=2){
				if (numElementos[1]=="")
				//window.location.replace((urlHome+temporal.replace("/", "%2F")));
				return false;
			}
			
				$(".main-content").load("map.html"+" .main-content",function(response, status, xhr)
				{	
					//$("div.tooltip").remove();alert(num);
					//$("map#Map2").remove();
					//$("div.main-content:first").remove();
					//query.getScript("/mapper.js");
					
					simple_tooltip("area","tooltip");
					
					$('.map').maphilight();
					map();
					//alert( xhr.statusText);
					//x++;
				});
				
				
				return false;
			}else if(num==""){
				//<!--[if lt IE 9]>
				return false;
				//<![endif]-->
			 //$("div.tooltip").remove();
			}
			
			
			
			var href_num = num.split("/");
			//$(".tooltip").each(function(){$(this).attr('style',' ')});
			if(href_num.length>1){
				var href_base = href_num[0];
				if(href_base=="pages-ofregionales"){
					$(".main-content").load(num+" .main-content",function()
					{
											
														if(num=="sedes-lima.html"){
															
															$(".content-sede a").each(function(){
																$(this).click(function(e){
																	
																	e.preventDefault();
														
																	var i=0;
																	
																	$(".main-content").load($(this).attr("href")+" .main-content",function()
																	{
																		
																		if(i==0){
																		loadTabs();
																		loadBtnBack();
																		}
																		i++;
																		
																	});
																	
																	
																	$(".dinamicoSL").load($(this).attr("href")+" .dinamico",function(){
																				
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
														else if(href_num.length<=2){
															$("#acc3").accordion({initShow : "#current"});
															 btnBack();
															}
															else{
																$("#acc3").accordion({initShow : "#current"});
																
																btnBackCustom();
															}
															
	
													
					});
										if(num!="sedes-lima.html" && (href_num.length<=2)){
												//$(".principal_sr").html("");
													$(".dinamicoSR").load(num + " .dinamico",function(){
														//temporal = num;	
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
												
												return false;
				
				}
				//else if(){}
			}
			
			
			
			if(num=="sedes-lima.html")
			{	
			$(".main-content").html('<img class="loading" src="images/loading.gif"/>');
				$(".main-content").load( num+" .main-content",function()
				{
								$(".dinamicoSL").html("");
								$(".content-sede a").each(function(){
									$(this).click(function(e){
										e.preventDefault();
										var i=0;
										var url = $(this).attr("href");
										temporal = num;
										url = url.replace(/^.*#/, '');
										
										$(".dinamicoSL").load(url + " .dinamico",function(){
														//temporal = num;	
																	//alert("cargado mapa");
																	$("#acc1").accordion({
																		  el: ".h", 
																		  head: "h4, h5", 
																		  next: "div",
																		  initShow : "div.outer:eq(0)"
																	  });
															ajx();
													});
												
										query.history.load(url);
										
									});
								});
				});
				return false;
			}
			
			
			var j=0;
			$(".main-content").load(num+" .main-content",function()
										{
											
											if(j==0){
											loadTabs();
											if(href_num.length<=2)
												loadBtnBack();
											else
												btnBackCustom();
											}
											j++;
											
											
											
											
			});
			
			if(href_num.length<=2)
			$(".dinamicoSL").load(num+" .dinamico",function(){
				
							
												$("#acc1").accordion({
												el: ".h", 
												head: "h4, h5", 
												next: "div",
												initShow : "div.outer:eq(0)"
											 });
											ajx();
										});
			$("#acc3").accordion({initShow : "#current"});
        }
		
		
		 query.history.init(load);
		 
		 //query.history.load(url);
		//url="";
       //load(url == "" ? "1" : url);

	

	var contrl = 1;
	ajx();
	function ajx(){
			if(contrl == 1){
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
								
								var url = href;
									
								url = url.replace(/^.*#/, '');
										
								query.history.load(url);
										 
									
								$(".dinamicoSL").html("");
								$(".content-sede a").each(function(){
									$(this).click(function(e){
										e.preventDefault();
										//temporal = $(this).attr("href");
										var i=0;
										
										$(".main-content").load($(this).attr("href")+" .main-content",function()
										{
											if(i==0)
											loadTabs();
											i++;
										});
										$(".dinamicoSL").load($(this).attr("href")+" .dinamico",function(){
												$("#acc1").accordion({
													  el: ".h", 
													  head: "h4, h5", 
													  next: "div",
													  initShow : "div.outer:eq(0)"
												  });
												  ajx();
										});
										
										btnBackCustom();
										
									});
								});
								
								
							}
							else{
							$("#acc3").accordion({initShow : "#current"});
							
								var url = href;
									
								url = url.replace(/^.*#/, '');
										
								query.history.load(url);
							}
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
				
				
				
				}else{
				///////////////////
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
				

				contrl++;

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
		function loadBtnBack()
		{
			$(".back").click(function(){
				var j=0;
				
				//var url = "sedes-lima.html";
				
					var url = "sedes-lima.html";
					
			
				url = url.replace(/^.*#/, '');
				//alert(url);
				query.history.load(url);
				return false;
				$(".main-content").load("sedes-lima.html .main-content", function(){
					//alert("cargado back");
					if(j==0){
					$(".content-sede a").each(function(){
						$(this).click(function(e){
										e.preventDefault();
										var i=0;
										
										var url = $(this).attr('href');
										//alert(url);
										url = url.replace(/^.*#/, '');
										//alert(url);
										query.history.load(url);
								
									
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
			
		}
		function btnBack(){
			$(".back").click(function(){
					document.location = "map.html";
			});
			
		
		
		}
		function btnBackSL(){
			$(".back").click(function(){
					var url = "sedes-lima.html";
				url = url.replace(/^.*#/, '');
				
				query.history.load(url);
			});
		
		}
		
		
		function btnBackCustom(){
			$(".back").click(function(){
				var url = temporal;
				url = url.replace(/^.*#/, '');
				
				query.history.load(url);
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
		 // map();
	function map(){
		$("#Map2 area").each(function(){
									$(this).click(function(e){
										
										e.preventDefault();
										var i=0;
										var href = $(this).attr("href");
											if(href!="#"){
												
												var url = href;
												temporal = url;
												
												url = url.replace(/^.*#/, '');
												
												if(i==0)
												query.history.load(url);
												
												i++;
																						
																	
												hiddenTooltips();
											
											}
										
									});
								});
								
			}

		function hiddenTooltips(){
			$(".tooltip").each(function(){$(this).hide();});
			//var t = setTimeout(hidden,1000);
			time = setInterval(hidden,500);
		}			
		function hidden(){
		$(".tooltip").each(function(){$(this).hide();});
		}
								//query.history.init(load);
});

