import React from "react";
import GridLayout from "react-grid-layout";
import "./style.scss";

const GridTable = () => {
  const layout = [
    { i: "rank", x: 0, y: 0, w: 0.5, h: 1 },
    { i: "name", x: 1, y: 0, w: 0.5, h: 1 },
    { i: "symbol", x: 2, y: 0, w: 1, h: 1 },
    { i: "market_cap", x: 3, y: 0, w: 1, h: 1 },
    { i: "price", x: 4, y: 0, w: 1, h: 1 },
    { i: "circulating_supply", x: 5, y: 0, w: 1, h: 1 },
    { i: "volume", x: 6, y: 0, w: 1, h: 1 },
    { i: "1h", x: 7, y: 0, w: 1, h: 1 },
    { i: "24h", x: 8, y: 0, w: 1, h: 1 },
    { i: "7d", x: 9, y: 0, w: 1, h: 1 },
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={10}
      rowHeight={6}
      width={1350}
    >
      <div key="rank">
        <h4 className="layout-title">Rank</h4>
      </div>
      <div key="name">
        <h4 className="layout-title">Name</h4>
        <p>Bitcoin</p>
      </div>
      <div key="symbol">
        <h4 className="layout-title">Symbol</h4>
      </div>
      <div key="market_cap">
        <h4 className="layout-title">Market Cap</h4>
      </div>
      <div key="price">
        <h4 className="layout-title">Price</h4>
      </div>
      <div key="circulating_supply">
        <h4 className="layout-rxt">Circulating Supply</h4>
      </div>
      <div key="volume">
        <h4 className="layout-vol">Volume(24h)</h4>
      </div>
      <div key="1h">
        <h4 className="layout-title">% 1h</h4>
      </div>
      <div key="24h">
        <h4 className="layout-title">% 24h</h4>
      </div>
      <div key="7d">
        <h4 className="layout-title">% 7d</h4>
      </div>
    </GridLayout>
  );
};

export default GridTable;
