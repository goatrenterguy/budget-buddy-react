import React from "react";
import Chart from "react-google-charts";

function BudgetUsageGraph() {
  return (
    <div>
      <Chart
        // width={'500px'}
        // height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Bar Chart</div>}
        diffdata={{
          old: [
            ["Category", "Dollars"],
            ["Housing", 1000],
            ["Food", 300],
            ["Utilities", 175],
            ["Shopping", 50],
            ["Dept Payment", 150],
          ],
          new: [
            ["Category", "Dollars"],
            ["Housing", 800],
            ["Food", 200],
            ["Utilities", 150],
            ["Shopping", 100],
            ["Dept Payment", 50],
          ],
        }}
        options={{
          title: 'Budget Usage By Category',
          legend: 'none',
          colors: ['#4db994', 'black'],
        }}
      />
    </div>
  );
}
export default BudgetUsageGraph;
