const CHART = document.getElementById("myChart");
console.log(CHART);

var r1 = Math.floor(Math.random() * 101);
var r2 = Math.floor(Math.random() * 101);
var r3 = Math.floor(Math.random() * 101);
var r4 = Math.floor(Math.random() * 101);
var r5 = Math.floor(Math.random() * 101);
var r6 = Math.floor(Math.random() * 101);
var r7 = Math.floor(Math.random() * 101);
let myChart = new Chart(CHART, {
  type: 'line',
  data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],

        datasets: [{
            label: "My First dataset",
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            borderCapStyle: 'butt',
            borderJoinStyle: 'miter',
            backgroundColor: 'rgb(240, 200, 132)',
            borderColor: 'rgb(255, 199, 132)',
            borderWidth: 3,
            data: [0, 10, 5, 2, 20, 30, 45],
        }, {
            label: "My Second dataset",
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            borderCapStyle: 'butt',
            borderJoinStyle: 'miter',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 3,
            data: [r1, r2, r3, r4, r5, r6, r7],
        }
      ]
    }
});


function revealStock() {
  document.getElementById("myChart").style.visibility = 'visible';
}
