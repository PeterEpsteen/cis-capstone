$(window).on("load", function() {
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
                        beginAtZero: true,
                        fontColor: '#EEEEEE'
                    },
                    gridLines: {
                        color: '#EEEEEE'
                    },
                    scaleLabel: {
                        fontColor: '#EEEEEE'
                    }
                }],
                xAxes: [{
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
var balanceTab = $('#balance-sheet-tab');
var incomeTab = $('#income-statement-tab')
balanceTab.click(function() {
    if (!balanceTab.hasClass('active')) {
        balanceTab.toggleClass('active');
        incomeTab.toggleClass('active');
    }
});
incomeTab.click(function() {
    if (!incomeTab.hasClass('active')) {
        incomeTab.toggleClass('active');
        balanceTab.toggleClass('active');
    }
});

function updateCustomDescription() {
    $('.customRatioTop').text(getOptionsString('sbNum'));
    $('.customRatioBottom').text(getOptionsString('sbDem'));
}

function getOptionsString(selectID) {
    var options = $('#' + selectID + ' option').clone();
    var optionsString = '';
    $.each(options, function(ele) {
        optionsString += options[ele].innerHTML;
    });
    return optionsString;
} 

$('#numPlus').on('click', function() {
    var options = $('#sbOne option:selected').clone();
    var optionsString = '';
    $.each(options, function(ele) {
        options[ele].innerHTML = ' + ' + options[ele].innerHTML;
        optionsString += options[ele].innerHTML;

    });
    $('#sbNum').append(options);
    // $('.customRatioTop').text(getOptionsString('sbNum'));
    updateCustomDescription();
});
$('#numMinus').on('click', function() {
    var options = $('#sbOne option:selected').clone();
    $.each(options, function(ele) {
        options[ele].innerHTML = ' - ' + options[ele].innerHTML;
    });
    $('#sbNum').append(options);
    updateCustomDescription();
});
$('#denominatorPlus').on('click', function() {
    var options = $('#sbOne option:selected').clone();
    $.each(options, function(ele) {
        options[ele].innerHTML = ' + ' + options[ele].innerHTML;
    });
    $('#sbDem').append(options);
    updateCustomDescription();
});
$('#denominatorMinus').on('click', function() {
    var options = $('#sbOne option:selected').clone();
    $.each(options, function(ele) {
        options[ele].innerHTML = ' - ' + options[ele].innerHTML;
    });
    $('#sbDem').append(options);
    updateCustomDescription();
});
$('#remove').on('click', function() {
    $('select.newRatioSelect option:selected').remove();
    updateCustomDescription();
});

$('#removeAll').on('click', function() {
    $('select.newRatioSelect').empty();
    updateCustomDescription();
});
