
/* Setup Chart Data */ 
const labels = ["St Louis 2019", "USA Average 2019", "St Louis 2018", "USA Average 2018", "St Louis 2017", "USA Average 2017"];
const data = {
    labels: labels,
    datasets: [{
        axis: 'y',
        label: 'Property Crime Rate Cases',
        data: [560.9, 178.6, 530.8, 190.2, 541.2, 206.4],
        fill: false,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

/* Configure Chart */ 
const crime = document.getElementById('propertyCrimeChart');
new Chart(crime, {
    type: 'bar',
    data,
    options: {
      indexAxis: 'y',
    }
});