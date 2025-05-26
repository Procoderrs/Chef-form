// Bar Chart
					const barCtx = document.getElementById('barChart').getContext('2d');
					new Chart(barCtx, {
						type: 'bar',
						data: {
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
							datasets: [{
								label: 'Sales',
								data: [5000, 4600, 3800, 5400, 600, 4000, 5000],  // your data
								backgroundColor: 'rgba(99, 102, 241, 0.7)',
								borderColor: 'rgba(99, 102, 241, 1)',
								borderWidth: 1
							}]
						},
						options: {
							responsive: true,
							plugins: {
								legend: {
									display: false // hides the "Sales" label box
								}
							},
							scales: {
								y: {
									beginAtZero: true,
									min: 0,
									max: 6000,
									ticks: {
										stepSize: 1000 // custom tick marks: 0, 1000, 2000, ..., 6000
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
								borderColor: 'rgba(236, 72, 153, 1)', // pink-500

							}]
						},
						options: {
							responsive: true,
							plugins: {
								legend: {
									display: false,
								}
							},
							scales: {
								y: {
									beginAtZero: false,
								}
							}
						}
					});