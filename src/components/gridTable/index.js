import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import Loading from "../loader";
import "./style.scss";

const GridTable = () => {
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
        <Loading />
      ) : (
        <div className="table-container">
          <table>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th className="right-align">Market Cap</th>
              <th className="right-align">Price</th>
              <th className="right-align">Circulating Supply</th>
              <th className="right-align">Volume</th>
              <th className="right-align">% 1h</th>
              <th className="right-align">% 24h</th>
              <th className="right-align">% 7d</th>
            </tr>
            {APIData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val?.rank}</td>
                  <td>
                    <button
                      onClick={() => nav(`/client/${val.id}`)}
                      className="button-name"
                    >
                      <span>
                        <img src={val.icon} alt="icon" className="icon-img" />
                      </span>
                      {val.name}
                    </button>
                  </td>
                  <td>{val.symbol}</td>
                  <td className="right-align">
                    <NumberFormat
                      value={Math.floor(val?.marketCap)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </td>
                  <td className="right-align">
                    <NumberFormat
                      value={(val?.price).toFixed(2)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </td>
                  <td className="right-align">
                    <NumberFormat
                      value={val?.availableSupply}
                      displayType={"text"}
                      thousandSeparator={true}
                    />

                    <span>{val?.symbol}</span>
                  </td>
                  <td className="volume right-align">
                    <NumberFormat
                      value={Math.floor(val?.volume)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </td>
                  {val?.priceChange1h <= 0 ? (
                    <td className="red right-align">{val?.priceChange1h}%</td>
                  ) : (
                    <td className="green right-align">{val?.priceChange1h}%</td>
                  )}
                  {val?.priceChange1d <= 0 ? (
                    <td className="red right-align">{val?.priceChange1d}%</td>
                  ) : (
                    <td className="green right-align">{val?.priceChange1d}%</td>
                  )}
                  {val?.priceChange1w <= 0 ? (
                    <td className="red right-align">{val?.priceChange1w}%</td>
                  ) : (
                    <td className="green right-align">{val?.priceChange1w}%</td>
                  )}
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
