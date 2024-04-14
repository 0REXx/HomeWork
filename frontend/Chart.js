import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DataChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.category),
    datasets: [{
      data: data.map(d => d.amount),
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
      hoverBackgroundColor: ['darkred', 'darkblue', 'darkyellow', 'darkgreen', 'darkpurple']
    }]
  };

  return <Doughnut data={chartData} />;
};

export default DataChart;
