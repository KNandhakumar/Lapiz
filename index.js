function updateChart() {
    var inputData = parseInt(document.getElementById('dataInput').value) || 0;
    var inputData2 = parseInt(document.getElementById('dataInput2').value) || 0;
    var inputData3 = parseInt(document.getElementById('dataInput3').value) || 0;

    if (!(inputData) || inputData < 0 || inputData > 72 || !(inputData2) || inputData2 < 0 || inputData2 > 72 || !(inputData3) || inputData3 < 0 || inputData3 > 72) {
        alert('Please enter valid numbers between 0 and 72 for all inputs.');
        return;
    }

    if (inputData + inputData2 + inputData3 > 72) {
        alert('The total value cannot exceed 72.');
        return;
    }

    var coffeePercentage = inputData / 72;
    var teaPercentage = inputData2 / 72;
    var vanillaPercentage = inputData3 / 72;

    window.history.replaceState({}, document.title, `?data=${inputData}&data2=${inputData2}&data3=${inputData3}`);

    var data = [vanillaPercentage * 72, coffeePercentage * 72, teaPercentage * 72];
    var labels = ['Tea', 'vanilla', 'coffee'];
    var backgroundColor = ['#FF6384', '#FFCE56', '#36A2EB'];

    var ctx = document.getElementById('myPieChart').getContext('2d');
    var existingChart = Chart.getChart(ctx);
    if (existingChart) {
        existingChart.data.datasets[0].data = data;
        existingChart.data.labels = labels;
        existingChart.data.datasets[0].backgroundColor = backgroundColor;
        existingChart.update();
    } else {
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,
                }],
            },
        });
    }
}
