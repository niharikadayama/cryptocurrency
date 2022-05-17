import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const GridTable = (props) => {
  const nav =useNavigate();
  const [APIData, setAPIData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=10";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson === null) {
      console.log("Waiting for reaponse");
    } else {
      console.log(responseJson);
      setAPIData(responseJson.coins);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(APIData);
  }, [APIData]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Please wait..</p>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr className="table-header-row">
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Market Cap</th>
                <th>Price</th>
                <th>Circulating Supply</th>
                <th>Volume(24h)</th>
                <th>% 1h</th>
                <th>% 24h</th>
                <th>% 7d</th>
              </tr>
            </thead>
            {APIData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val?.rank}</td>
                  <td><button onClick={()=>nav("/h")}>{val?.name}</button></td>
                  <td>{val?.symbol}</td>
                  <td>{val?.marketCap}</td>
                  <td>{val?.price}</td>
                  <td>{val?.availableSupply}</td>
                  <td>{val?.Volume}</td>
                  <td>{val?.priceChange1h}</td>
                  <td>{val?.priceChange1d}</td>
                  <td>{val?.priceChange1w}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export default GridTable;
