import React, { useState, useEffect } from "react";
import axios from "axios";

const EthChart = () => {
  const [chartImage, setChartImage] = useState(null);

  useEffect(() => {
    const fetchChartImage = async () => {
      try {
        const url = "http://localhost:5555/api/chart";
        const response = await axios.get(url, {
          responseType: "arraybuffer",
        });

        const blob = new Blob([response.data], { type: "image/png" });
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl);
        setChartImage(imageUrl);
      } catch (error) {
        console.error("Error fetching chart image:", error);
      }
    };

    fetchChartImage();
  }, []);

  return (
    <div>
      {chartImage ? (
        <img src={chartImage} alt="Price Chart" />
      ) : (
        <p>Loading chart image...</p>
      )}
    </div>
  );
};

export default EthChart;
