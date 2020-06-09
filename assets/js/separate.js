var year= ['2017', '2018', '2019'];
var barchart = 
{
    labels: ['2017', '2018', '2019'],
    datasets: [
      {
        label : "Average Salary(LPA)",
        backgroundColor: '#a75d58',
        borderWidth: 1,
        data: [3,3.4,6.2]
      },                    
      {
        label : "Highest Salary(LPA)",
        backgroundColor: '#a6f87e',
        borderWidth: 1,
        data: [10, 10, 17]
      }
            ]
};
        var ctx = $('#myChart');
        var chart0= new Chart(ctx, {
          type: 'bar',
          data: barchart,
          options: 
          {
            responsive: true,
            maintainaspectratio: true,
            legend: 
            {
              position: 'top',
            },
            title: 
            {
              display: true,
              text: 'Salary Distribution'
            },
            scales: {
              xAxes: 
              [{
                display: true,
                scaleLabel: 
                {
                  display: true,
                  labelString: "YEAR"
                }
              }],
              yAxes: 
              [{
                display: true,
                scaleLabel: 
                {
                  display: true,
                  labelString: "SALARY IN LPA"
                },
                ticks: {
                  min: 2,
                  max: 20,
                  stepSize: 2
                }
              }]
            }
          }
        });

/*Chart for placement percentage and avg sal*/
var year= ['2017', '2018', '2019'];
var barchart = 
{
    labels: ['2017', '2018', '2019'],
    datasets: [
      {
        label : "Total Students Registered",
        backgroundColor: '#0800b0',
        borderWidth: 1,
        data: [40,56,45]
      },
      {
        label : "Total Jobs Offered",
        backgroundColor: '#f20b8e',
        borderWidth: 1,
        data: [44,77,36]
      },
      {
        label : "Percentage",
        backgroundColor: '#d7421b',
        borderWidth: 1,
        data: [85, 84, 69]}
            ]
};
        var ctx = $('#myChart0');
        var chart0= new Chart(ctx, {
          type: 'bar',
          data: barchart,
          options: 
          {
            responsive: true,
            legend: 
            {
              position: 'top',
            },
            title: 
            {
              display: true,
              text: 'Placement Status'
            },
            scales: {
              xAxes: 
              [{
                display: true,
                scaleLabel: 
                {
                  display: true,
                  labelString: "YEAR"
                }
              }],
              yAxes: 
              [{
                display: true,
                scaleLabel: 
                {
                  display: true,
                  labelString: "NO OF STUDENTS"
                },
                ticks: {
                  min: 20,
                  max: 90,
                  stepSize: 10
                }
              }]
            }
          }
        });

/*Pie chart 1*/
$(function(){
  var ctx1= $("#piechart1")
  var data1= {
    labels: ["<3 LPA", "3-5 LPA", ">5 LPA"],
      datasets: [{
        label: "",
        data: [44,18,15],
        backgroundColor: ["#4BCA19", "#0BEAE1","#F21F0B"],
        borderwidth: [0.5,0.5,0.5]
      }]
    };
  var options= {
    responsive: false,
    maintainaspectratio: true,
    title:{
      display: true,
      position: "top",
      text: "Salary Distribution",
      fontSize: 25,
      fontColor: "#111"
    },
    legend:{
      display: true,
      position:"left",
      labels:{
        fontColor: "#333",
        fontSize: 15
      }
    }
  };
  var chart1= new Chart(ctx1,{
    type: "pie",
    data: data1,
    options: options
  }); 
});

/*Pie Chart 2*/
$(function(){
  var ctx1= $("#piechart2")
  var data1= {
    labels: ["4-6 LPA", "6-10 LPA", ">10 LPA"],
      datasets: [{
        label: "",
        data: [11,17,2],
        backgroundColor: ["#FF4500", "#00FF00","1E90FF"],
        borderwidth: [0.5,0.5,0.5]
      }]
    };
  var options= {
    responsive: false,
    maintainaspectratio: true,
    title:{
      display: true,
      position: "top",
      text: "Salary Distribution",
      fontSize: 25,
      fontColor: "#111"
    },
    legend:{
      display: true,
      position:"left",
      labels:{
        fontColor: "#333",
        fontSize: 15
      }
    }
  };
  var chart1= new Chart(ctx1,{
    type: "pie",
    data: data1,
    options: options
  }); 
});

/*Js file for Lucknow*/

var year= ['2018', '2019'];
var barchart = 
{
    labels: ['2018', '2019'],
    datasets: [
      {
        label : "Average Salary(LPA)",
        backgroundColor: '#a75d58',
        borderWidth: 1,
        data: [11.37,18.42]
      },                    
      {
        label : "Highest Salary(LPA)",
        backgroundColor: '#a6f87e',
        borderWidth: 1,
        data: [28,43]
      }
            ]
};
        var ctx = document.getElementById('Lucknowchart').getContext('2d');
        var chart0= new Chart(ctx, {
          type: 'bar',
          data: barchart,
          options: 
          {
            responsive: true,
            maintainaspectratio: true,
            legend: 
            {
              position: 'top',
            },
            title: 
            {
              display: true,
              text: 'Salary Distribution'
            },
            scales: {
              xAxes: 
              [{
                display: true,
                scaleLabel: 
                {
                  display: true,
                  labelString: "YEAR"
                }
              }],
              yAxes: 
              [{
                display: true,
                scaleLabel: 
                {
                  display: true,
                  labelString: "SALARY IN LPA"
                },
                ticks: {
                  min: 5,
                  max: 50,
                  stepSize: 5
                }
              }]
            }
          }
        });

/*Placement percentage*/
var year= ['2018', '2019'];
var barchart = 
{
    labels: ['2018', '2019'],
    datasets: [{
        label : "Percentage",
        backgroundColor: '#d7421b',
        borderWidth: 1,
        data: [85, 84, 69]}
            ]
};
        var ctx = $('#lucknowchart0');
        var chart0= new Chart(ctx, {
          type: 'bar',
          data: barchart,
          options: 
          {
            responsive: true,
            legend: 
            {
              position: 'top',
            },
            title: 
            {
              display: true,
              text: 'Placement Status'
            },
            scales: {
              xAxes: 
              [{
                display: true,
                scaleLabel: 
                {
                  display: true,
                  labelString: "YEAR"
                }
              }],
              yAxes: 
              [{
                display: true,
                scaleLabel: 
                {
                  display: true,
                  labelString: "NO OF STUDENTS"
                },
                ticks: {
                  min: 20,
                  max: 90,
                  stepSize: 10
                }
              }]
            }
          }
        });
/*First Pie chart for IIIT lucknow*/
$(function(){
  var ctx1= $("#piechartl1")
  var data1= {
    labels: ["Finance", "Consultancy", "Core IT", "Analytics","Travel Network","Engineering & Technology", "Others"],
      datasets: [{
        label: "",
        data: [11.11, 25.92, 25.92, 7.40, 11.11 , 7.40, 11.11],
        backgroundColor: ["#FF4500", "#00FF00","#1E90FF","#DC143C","#FFFF00","#00FA9A","#DAA520"],
        borderwidth: [0.5,0.5,0.5,0.5,0.5,0.5,0.5]
      }]
    };
  var options= {
    responsive: true,
    maintainaspectratio: true,
    title:{
      display: true,
      position: "top",
      text: "DOMAIN OF JOBS",
      fontSize: 25,
      fontColor: "#111"
    },
    legend:{
      display: true,
      position:"left",
      labels:{
        fontColor: "#333",
        fontSize: 15
      }
    }
  };
  var chart1= new Chart(ctx1,{
    type: "pie",
    data: data1,
    options: options
  }); 
});

/*Second Pie chart for IIIT lucknow*/
$(function(){
  var ctx1= $("#piechartl2")
  var data1= {
    labels: ["Finance", "Consultancy", "Core IT", "Analytics","Travel Network","Engineering & Technology", "Others"],
      datasets: [{
        label: "",
        data: [11, 25.9, 26.4, 7.40, 11.1 , 7.40, 10.8],
        backgroundColor: ["#aaf5d8", "#e03b3b","#f0bc18","#6e6813","#FFFF00","#db391c","#DAA520"],
        borderwidth: [0.5,0.5,0.5,0.5,0.5,0.5,0.5]
      }]
    };
  var options= {
    responsive: true,
    maintainaspectratio: true,
    title:{
      display: true,
      position: "top",
      text: "DOMAIN OF JOBS",
      fontSize: 25,
      fontColor: "#111"
    },
    legend:{
      display: true,
      position:"left",
      labels:{
        fontColor: "#333",
        fontSize: 15
      }
    }
  };
  var chart1= new Chart(ctx1,{
    type: "pie",
    data: data1,
    options: options
  }); 
});

