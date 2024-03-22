// Data for the chart (replace this with your data)
const data_bar = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Product',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ], // Blue color with 50% opacity
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ], // Solid blue color
      borderWidth: 1,
      barThickness: 40,
      data: [100, 120, 150, 180, 200, 240, 220, 190, 160, 130, 120, 100] // Sample sales data for each month
    }]
  };

  // Configuration for the chart
  const config_bar = {
    type: 'bar', // Type of chart (bar chart in this case)
    data: data_bar,
    options: {
      scales: {
        y: {
          beginAtZero: true // Start the y-axis at 0
        }
      }
    },
  };

  // Get the canvas element
  const canvas_bar = document.getElementById('bar-chart');

  // Create the chart with the provided data and configuration
  const barChart = new Chart(canvas_bar, config_bar);