import React, { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";
import callAPI from "../../services/apiCall";
import "./style.scss";

function LineChart({ id }) {
  const [latestPrice, setLatestPrice] = useState(0);
  const [days, setDays] = useState(1);
  const [interval, setInterval] = useState("24h");

  const setParams = (day, period) => {
    console.log(day);
    setDays(() => day);
    setInterval(() => period);
  };

  useEffect(() => {
    fetchData().then((chartData) => {
      initChart(chartData);
      setLatestPrice(
        parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2)
      );
    });
  }, [days, interval]);

  const fetchData = async () => {
    let data = { index: [], price: [], volumes: [] };
    let result = await callAPI(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
    );
    for (const item of result.prices) {
      data.index.push(item[0]);
      data.price.push(item[1]);
    }
    for (const item of result.total_volumes) data.volumes.push(item[1]);
    return data;
  };

  const initChart = (data) => {
    let trace_price = {
      name: "Price ($)",
      x: data.index.map((t) => new Date(t)),
      y: data.price,
      xaxis: "x",
      yaxis: "y1",
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "blue", size: 3 },
    };
    let trace_volumes = {
      name: "Volumne ($B)",
      x: data.index.map((t) => new Date(t)),
      y: data.volumes,
      xaxis: "x",
      yaxis: "y2",
      type: "bar",
      barmode: "relative",
      marker: {
        color: "rgb(49,130,189)",
        opacity: 0.7,
      },
    };
    let layout = {
      autosize: true,
      height: "100%",
      margin: {
        l: 50,
        r: 20,
        t: 35,
        pad: 3,
      },
      showlegend: false,
      xaxis: {
        domain: [1, 1],
        anchor: "y2",
      },
      yaxis: {
        domain: [0.1, 1],
        anchor: "x",
      },
      yaxis2: {
        showticklabels: false,
        domain: [0, 0.1],
        anchor: "x",
      },
      grid: {
        roworder: "bottom to top",
      },
    };
    let config = { responsive: true };
    let series = [trace_price, trace_volumes];
    Plotly?.newPlot("chart", series, layout, config);
  };

  return (
    <>
      <h2 className="chart-heading">
        Latest price of {id} : $ {latestPrice}
      </h2>
      <h4 className="chart-subHeading">
        <p>
          price: <span className="color-span">|</span>
        </p>
        <div className="chart-meter">
          <button
            className="chart-meter-params"
            onClick={() => {
              setParams(1, "24h");
            }}
          >
            1D
          </button>
          <button
            className="chart-meter-params"
            onClick={() => {
              setParams(30, "1m");
            }}
          >
            1M
          </button>
          <button
            className="chart-meter-params"
            onClick={() => {
              setParams(90, "3m");
            }}
          >
            3M
          </button>
          <button
            className="chart-meter-params"
            onClick={() => {
              setParams(364, "1y");
            }}
          >
            1Y
          </button>
        </div>
      </h4>
      <div id="chart" className="p-0 m-0"></div>
    </>
  );
}

export default LineChart;
