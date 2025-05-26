// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
	type: 'bar',
	data: {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{
			label: 'Sales',
			data: [5000, 4600, 3800, 5400, 600, 4000, 5000],
			backgroundColor: 'rgba(255, 161, 46, 1)',
			borderColor: 'rgba(255, 161, 46, 1)',
			borderWidth: 1,
			barThickness: 20,
		}]
	},
	options: {
		responsive: true,
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				beginAtZero: true,
				min: 0,
				max: 6000,
				ticks: {
					stepSize: 1000
				},
				grid: {
					display: true
				}
			},
			x: {
				grid: {
					display: false // ❌ hide vertical grid lines
				}
			}
		}
	}
});

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
	type: 'line',
	data: {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{
			label: 'Visitors',
			data: [30, 10, 60, 50, 60, 90, 100, 120],
			fill: false,
			borderColor: 'rgba(196, 18, 48, 1)',
			pointRadius: 0,
			borderWidth: 1,
		}]
	},
	options: {
		responsive: true,
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				beginAtZero: false,
				grid: {
					display: true // ✅ show horizontal lines
				}
			},
			x: {
				grid: {
					display: false // ❌ hide vertical lines
				}
			}
		}
	}
});
