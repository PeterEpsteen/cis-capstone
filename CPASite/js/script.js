
$( window ).on( "load", function() {
var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2016", "2015", "2014"],
            datasets: [{
                label: 'Ratio',
                data: [5, 2, 3],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: '#EEEEEE'
                }
            },
            gridLines: {
                color: '#EEEEEE'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        fontColor: '#EEEEEE'
                    },
                    gridLines: {
                       color: '#EEEEEE'
                    },
                    scaleLabel: {
                        fontColor: '#EEEEEE'
                    }
                }],
                xAxes : [{
                    ticks: {
                        fontColor: '#EEEEEE'
                    },
                    gridLines: {
                        color: '#EEEEEE'
                    }
                }]

            }
        }
    });




 });
