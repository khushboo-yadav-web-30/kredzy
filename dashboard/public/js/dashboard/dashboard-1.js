(function($) {
    /* "use strict" */


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
		
	var donutChart1 = function(){
		$("span.donut1").peity("donut", {
			width: "90",
			height: "90"
		});
	}
	var chartTimeline = function(){
		
		var optionsTimeline = {
			chart: {
				type: "bar",
				height: 200,
				toolbar: {
					show: false
				}
			},
			series: [{
				name: "New Clients",
				data: [75, 150, 225, 200, 35, 50, 150, 89, 50, 78, 50, 60, 40, 160, 90, 40]
			}],
			colors: ['#3B4CB8'],
			grid: {
				show: false
			},
			legend: {
				show: false
			},
			xaxis: {
				categories: ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
			},
			yaxis: {
				show: false
			}
		};
		
		try {
			var chartElement = document.querySelector("#chartTimeline");
			if (chartElement) {
				console.log('Initializing chartTimeline...');
				var chartTimelineRender = new ApexCharts(chartElement, optionsTimeline);
				chartTimelineRender.render();
				console.log('chartTimeline rendered successfully');
			} else {
				console.error('chartTimeline element not found');
			}
		} catch (error) {
			console.error('Error rendering chartTimeline:', error);
		}
	}
	var chartBar = function() {
		var options = {
          series: [{
          name: 'series1',
          data: [800, 440, 360, 510, 420, 680, 400,200,700]
        }, {
          name: 'series2',
          data: [210, 320, 130, 320, 150, 310, 120,620,320]
        }],
          chart: {
          height: 350,
          type: 'area',
		  toolbar: {
			show: false,
		  },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
		  width: 2,
		  colors: ['#3B4CB8','#37D159'],
        },
		legend: {
			show: false,
		},
		colors: ['#3B4CB8','#37D159'],
		xaxis: {
          categories: ["April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
        };

        try {
            var chartElement = document.querySelector("#chartBar");
            if (chartElement) {
                console.log('Initializing chartBar...');
                var chart = new ApexCharts(chartElement, options);
                chart.render();
                console.log('chartBar rendered successfully');
            } else {
                console.error('chartBar element not found');
            }
        } catch (error) {
            console.error('Error rendering chartBar:', error);
        }
	}
	var monocromeChart = function(){
		var options = {
          series: [38, 62],
          chart: {
          width: '100%',
          height: 100,
          type: 'pie',
        },
        labels: ["Agent", "Customers"],
        colors: ['#FFB067','#B655E4'],
        legend: {
          show: false
        }
        };

        try {
            var chartElement = document.querySelector("#monocromeChart");
            if (chartElement) {
                console.log('Initializing monocromeChart...');
                var chart = new ApexCharts(chartElement, options);
                chart.render();
                console.log('monocromeChart rendered successfully');
            } else {
                console.error('monocromeChart element not found');
            }
        } catch (error) {
            console.error('Error rendering monocromeChart:', error);
        }
	}
	
	var handleWorldMap = function(trigger = 'load'){
		console.log('handleWorldMap called with trigger:', trigger);
		
		var vmapSelector = $('#world-map');
		console.log('World map selector found:', vmapSelector.length > 0);
		
		if(trigger == 'resize')
		{
			vmapSelector.empty();
			vmapSelector.removeAttr('style');
		}
		
		try {
			// Check if jQuery Vector Maps is loaded
			if (typeof $.fn.vectorMap === 'undefined') {
				console.error('jQuery Vector Maps plugin not loaded!');
				return;
			}
			
			console.log('Initializing world map...');
			console.log('Available maps:', $.fn.vectorMap.maps);
			
			vmapSelector.delay( 1000 ).unbind().vectorMap({ 
				map: 'world_en',
				backgroundColor: 'transparent',
				borderColor: 'rgb(239, 242, 244)',
				borderOpacity: 0.25,
				borderWidth: 1,
				color: 'rgb(239, 242, 244)',
				enableZoom: true,
				hoverColor: 'rgba(59, 76, 184, 0.9)',
				hoverOpacity: null,
				normalizeFunction: 'linear',
				scaleColors: ['#b6d6ff', '#005ace'],
				selectedColor: 'rgba(59, 76, 184, 0.9)',
				selectedRegions: null,
				showTooltip: true,
				onRegionClick: function(element, code, region)
				{
					var message = 'You clicked "'
						+ region
						+ '" which has the code: '
						+ code.toUpperCase();
			 
					alert(message);
				},
				onMapReady: function() {
					console.log('World map is ready and rendered');
				}
			});
			console.log('World map initialization completed');
		} catch (error) {
			console.error('Error initializing world map:', error);
			
			// Fallback: Show a message if the map fails to load
			vmapSelector.html('<div style="padding: 40px; text-align: center; background: #f8f9fa; border: 1px dashed #dee2e6; color: #6c757d;"><h5>World Map</h5><p>Interactive world map showing property locations by region</p><small>Map data loading failed. Please refresh the page.</small></div>');
		}
	}
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				console.log('Loading charts...');
				donutChart1();
				chartTimeline();
				chartBar();
				monocromeChart();
				handleWorldMap();
				console.log('All charts loaded');
			},
			
			resize:function(){
				handleWorldMap('resize');
			}
		}
	
	}();

	jQuery(document).ready(function(){
		console.log('DOM ready - attempting to initialize charts...');
		// Try to initialize charts immediately if elements exist
		setTimeout(function() {
			if (document.querySelector("#chartTimeline") && 
				document.querySelector("#chartBar") && 
				document.querySelector("#monocromeChart")) {
				console.log('All chart elements found, initializing charts...');
				dzChartlist.load();
			} else {
				console.log('Some chart elements not found yet, waiting for window load...');
			}
		}, 100);
	});
		
	jQuery(window).on('load',function(){
		console.log('Window loaded, waiting 1 second before loading charts...');
		setTimeout(function(){
			console.log('Timeout completed, calling dzChartlist.load()');
			// Wait a bit more to ensure DOM is fully ready
			setTimeout(function() {
				dzChartlist.load();
			}, 500);
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		setTimeout(function(){
			dzChartlist.resize();
		}, 1000); 
		
	});     

})(jQuery);