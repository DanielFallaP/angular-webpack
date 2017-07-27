/**
 * Shows modal panel.
 */
function showModal(){
	$('.modal').modal();
	$('#modalPopup').modal('open');
}

/**
 * Shows toast notification with provided
 * message and delay.
 */
function showToast(message, delay){
	Materialize.toast(message, delay);
}

/**
 * Renders progress bar given div id and percentage.
 */
function renderProgressBar(id, percentage){
	document.getElementById(id).innerHTML = '';
	var bar = new ProgressBar.Line('#' + id, {
		strokeWidth: 2,
		easing: 'easeInOut',
		duration: 1400,
		color: '#aabf9d',
		trailColor: '#e27979',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'},
		text: {
		style: {
		  color: '#999',
		  position: 'absolute',
		  right: '5px',
		  bottom: '5px',
		  padding: 0,
		  margin: 0,
		  transform: null
		},
		autoStyleContainer: false
		},
		from: {color: '#FFEA82'},
		to: {color: '#ED6A5A'},
		step: (state, bar) => {
		bar.setText('Code covered ' + 
			Math.round(bar.value() * 100) + ' %');
		}
	});

	bar.animate(percentage / 100);
	return bar;
}

/**
 * Initializes chart.js context.
 */
function initializeContext(chartId){
	return document.getElementById(chartId).getContext('2d');
}

/**
 * Renders chart given context, passed, and failed tests.
 * If there is already a chart, it destroyes before 
 * creating one.
 */
function renderChart(ctx, passed, failed, chart){
	if (chart)
		chart.destroy();
	var percentage = passed / (passed + failed) * 100;
	var title = 'Tests passed: ' + percentage.toFixed(0) + '%';
	var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    passed,
                    failed
                ],
                backgroundColor: [
                    '#aabf9d',
                    '#e27979'
                ],
            }],
            labels: [
                "Passed",
                "Failed"
            ],
        },
        options: {
			title: {
				display: true,
				position: 'right',
				text: title,
				fontSize: 15,
				fontColor: '#999',
				fontStyle: 'normal',
				fontFamily: '"Roboto", sans-serif'
			},
			legend: {
				display: false
			},
            responsive: false
        }
    };
	return new Chart(ctx, config);
}

/**
 * Return the square color according to value
 */
function getSquareColor(value){
	if (value == 0)
		return '#d8d8d8';
	if (value == 1)
		return '#be0712'
	if (value == 2)
		return '#548039';
	if (value == 3)
		return '#5e9cd3'
}

/**
 * Returns the background color for the detail panel.
 */
function getDetailColorFunc(value){
	if (value==1)
		return 'rgba(242, 194, 195, 0.81)';
	if (value==2)
		return 'rgba(186, 208, 172, 0.78)';
	return 'white';
}

/**
 * Returns the correct icon according to the state.
 */
function getIconFunc(state){
	if (state==='Running')
		return 'crop_square';
	else
		return 'stop';
}

/**
 * Sets fade in animation.
 */
function setFadeInAnimation(el){
	if (el){
		setTimeout(function () {
			Materialize.fadeInImage($(el));
		}, 0);
	}
}