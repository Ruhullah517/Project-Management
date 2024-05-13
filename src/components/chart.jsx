import React from 'react';
import {Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; 


// Register required chart components
Chart.register(...registerables);

const CompletedTasksChart = ({ completedTasksData }) => {
    // Define the data for the chart


    const data = {
        labels: completedTasksData.map(task => task.date), // Assuming each task object has a 'date' property
        datasets: [
            {
                label: 'Completed Tasks',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: completedTasksData.map(task => task.completedCount), // Assuming each task object has a 'completedCount' property
            },
        ],
    };

    // Define options for the chart (if needed)
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default CompletedTasksChart;
