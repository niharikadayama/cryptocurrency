import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberFormat from 'react-number-format';
import "./style.scss";

const GridTable = (props) => {
  const nav = useNavigate();
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
          <table>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Circulating Supply</th>
              <th>Volume(24h)</th>
              <th>% 1h</th>
              <th>% 24h</th>
              <th>% 7d</th>
            </tr>
            {APIData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val?.rank}</td>
                  <td>
                    <button onClick={() => nav("/h")} className="button-name">
                      <p className="img-symbol">
                        <img src={val.icon} alt="icon" className="icon-img" />
                        <span className="symbol">{val?.symbol}</span>
                      </p>
                      <p className="name">{val?.name}</p>
                    </button>
                  </td>
                  <td>
                    <NumberFormat value={Math.floor(val?.marketCap)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                  <td>
                  <NumberFormat value={(val?.price).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </td>
                  <td><NumberFormat value={val?.totalSupply} displayType={'text'} thousandSeparator={true} /> <span>{val?.symbol}</span></td>
                  <td>
                  <NumberFormat value={Math.floor(val?.volume)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </td>
                  <td>{val?.priceChange1h}%</td>
                  <td>{val?.priceChange1d}%</td>
                  <td>{val?.priceChange1w}%</td>
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
