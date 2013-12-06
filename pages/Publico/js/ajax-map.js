

jQuery(document).ready(function(query) {


	
			
	
		
		$("#Map2 area").each(function(){
									$(this).click(function(e){
										
										e.preventDefault();
										
										var href = $(this).attr("href");
											if(href!="#"){
												
												var url = href;
												temporal = url;
												
												url = url.replace(/^.*#/, '');
												
												$(".dinamicoSR").load(href + " .dinamico",function(){
														
																	$("#acc1").accordion({
																		  el: ".h", 
																		  head: "h4, h5", 
																		  next: "div",
																		  initShow : "div.outer:eq(1)"
																	  });
															  navegador_izq();
													});
											
												query.history.load(url);
												
												
												
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
		
			
			
		
});