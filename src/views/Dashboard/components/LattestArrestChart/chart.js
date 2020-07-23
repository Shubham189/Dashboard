// Palette
import palette from 'theme/palette';
import * as d3 from "d3";
import test from './test.csv';
//import csv from './jquery.csv.js';
let xs=[];
let ys=[];
//var csv = require('../../../../../node_modules/jquery-csv/src/jquery.csv.js');

/*
data.forEach(row =>{
    xs.push(row['occurred_date']);
    let date=row['occurred_date'];
    
    ys.push(row['victim_age']);
  })

*/ 
getData();

// Chart data
export const data = {
  //labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'],
  labels: xs,
  datasets: [
    {
      label: 'Arrests ',
      backgroundColor: palette.primary.main,
      data : ys
      //data: [18, 5, 19, 27, 29, 19, 20]
    }/*,
    {
      label: 'Last year',
      backgroundColor: palette.common.neutral,
      data: [11, 20, 12, 29, 30, 25, 13]
    }*/
  ]
};



// Chart options
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.common.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};

export async function getData(){
  await d3.csv(test).then(data=>{
    for(let i=0;i<data.length;i++)
    {
      let flag=0;
      for(let j=0;j<xs.length;j++)
      {
          if(xs[j]===data[i]['occurred_date'])
          {
            flag=1;
            break;
          }
      }
      if(flag===0)
      {
        let cnt=0;
        for(let j=i;j<data.length;j++)
        {
          if((data[j]['occurred_date']===data[i]['occurred_date']))
          {
            cnt++;
          }
        }
        xs.push(data[i]['occurred_date']);
        ys.push(cnt);
      }
    }
  })
  xs=xs.reverse();
  ys=ys.reverse();
  return [xs,ys]
} 



console.log(xs,ys);

/*
console.log(test);
var data1=csv.toArray(test);
console.log(data1);


/*
//const response = 
fetch("./test.csv")
.then((response)=>{
  return response.text();
}).then(text =>
  console.log(text)
);
//const data1 = response.text();

/*data1.forEach(row=>{
xs.push(row['agency_name'])
ys.push(row['victim_age'])
})*/