import React from 'react';
import Chart from "react-google-charts";

function Piechart (){
    return (
    <div><Chart
    // width={'500px'}
    // height={'300px'}
    chartType="PieChart"
    loader={<div>Loading Pie Chart</div>}
    data={[
        ['Category', 'Dollars'],
        ['Housing', 800],
        ['Food', 200],
        ['Utilities', 150],
        ['Shopping', 100],
        ['Dept Payment', 50]
    ]}
    options={{
        title: "Spending Breakdown",
        legend: 'none'
    }}
    /></div>
    );
}
export default Piechart;