import React, { useEffect, useState } from 'react';

function MQ7Sensor() {
  const [coValue, setCoValue] = useState(null); // State สำหรับเก็บค่า CO ล่าสุด
  const [timestamp, setTimestamp] = useState(null); // State สำหรับเก็บ timestamp ล่าสุด

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/mq7");
        const data = await response.json();
        console.log("Data from API:", data); // Debugging

        if (data && data.length > 0) {
          const latestData = data[data.length - 1]; // ดึงข้อมูลล่าสุด
          setCoValue(latestData.co);
          setTimestamp(new Date(latestData.timestamp).toLocaleTimeString("th-TH", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }));
        } else {
          console.error("No data received from API");
          setCoValue(null);
          setTimestamp(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCoValue(null);
        setTimestamp(null);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-kanit bg-white rounded-lg shadow-md" style={{ paddingTop: '10px', paddingLeft: '20px', paddingRight: '10px', marginBottom: '230px' }}>
      <h2 className="text-xl text-green-20">MQ7 Sensor</h2>
      <h2 className="text-xl font-bold text-black">ตรวจวัดก๊าซคาร์บอนมอนอกไซด์ (CO)</h2>
      <div>
        {coValue !== null ? (
          <>
            <p className="text-2xl font-bold text-indigo-600">{coValue} ppm</p>
            <p className="text-sm text-gray-500">เวลา: {timestamp}</p>
          </>
        ) : (
          <p className="text-gray-500">กำลังโหลดข้อมูล...</p>
        )}
      </div>
    </div>
  );
}

export default MQ7Sensor;