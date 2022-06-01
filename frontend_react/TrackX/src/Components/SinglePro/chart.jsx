import React, { Component } from 'react'
import Chart from 'react-google-charts'
import "./chart.scss"

const chart = () => {
    
const LineData = [
  ["x", "Amazon", "Flipkart"],
  ["Nov 2021", 19000, 20000],
  ["Dec 2021", 18500, 18550],
  ["Jan 2022", 19000, 18750],
  ["Feb 2022", 18550, 17000],
  ["Mar 2022", 19000, 18550],
  ["Apr 2022", 17000, 19000],
  ["May 2022", 17550, 17000],
];
const LineChartOptions = {
  hAxis: {
    title: "Time",
    textStyle: {
      color: "black",
      fontName: "Montserrat",
      fontSize: 16,
    },
  },
  vAxis: {
    title: "Prices (Rs)",
    textStyle: {
      color: "black",
      fontName: "Montserrat",
      fontSize: 16,
    },
  },
//   series: {
//     3: { curveType: "function" },
//   },
  curveType: "function",
};
    return (
      <div className='my-[100px]'>
        <strong className=" app__flex text-4xl popular">
          Price Comparison 
        </strong>
        <div className="font font-bold text-xl container">
          <Chart
            width={"1500px"}
            height={"800px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={LineData}
            options={LineChartOptions}
            rootProps={{ "data-testid": "2" }}
            style={{ font: "bold" }}
          />
        </div>
      </div>
    );
}
 
export default chart;