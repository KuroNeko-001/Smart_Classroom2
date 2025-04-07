import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const lineData = {
  labels: ['15:41:30', '15:42:00', '15:42:30', '15:43:00', '15:43:30', '15:44:00', '15:44:30', '15:45:00'],
  datasets: [
    {
      label: 'PM2.5',
      data: [12.3, 12.5, 12.7, 12.6, 12.4, 12.5, 12.6, 12.5],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: true,
    },
    {
      label: 'PM10',
      data: [25.6, 25.8, 26.0, 25.9, 25.7, 25.8, 25.9, 25.8],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'PM2.5 and PM10 Levels',
    },
  },
};

function SDS011Sensor() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">เซ็นเซอร์ SDS011</h2>
      <div className="h-48">
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
}

export default SDS011Sensor;