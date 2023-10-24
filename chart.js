/**
 * generates a chart
 */

function chartStatements(){
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: baseStatName,
        datasets: [{
          label: '# of Votes',
          data: baseStatValue,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}