import React, { useEffect, useState } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { useParams, useNavigate } from "react-router-dom";

import { Loading, ProgressBarLineExample, LineChart } from "../../components";
import { Images } from "../../constants/images";
import "./style.scss";

const CoinDetails = () => {
  const { link, search, upload, paper, coding, m, info } = Images;
  const { id } = useParams();
  const nav = useNavigate();
  const [APIData, setAPIData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});

  const getData = async () => {
    try {
      let request = await axios.get(
        `https://api.coinstats.app/public/v1/coins/${id}`
      );
      return request.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPrices = async () => {
    try {
      let request = await axios.get(
        `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${id}`
      );
      console.log(request.data);
      return request.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [APIData]);
  useEffect(() => {
    getData().then((data) => {
      setAPIData(data.coin);
      setLoading(false);
    });
    fetchPrices().then((data) => {
      setChartData({
        labels: ["2:34PM", "5:34PM", "8:34PM", "11:34PM", "2:34AM"],
        datasets: [
          {
            label: "Price in USD",
            data: data,
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
          },
        ],
      });
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="coinDetails-container">
          <Loading />
        </div>
      ) : (
        <div className="coinDetails-container">
          <div className="coinDetails-card">
            <div className="coinDetails-nav">
              <button className="coinDetails-nav-button">
                Cryptocurrencies
                <span className="coinDetails-nav-button-arrow">{">"}</span>
              </button>
              <button
                className="coinDetails-nav-button"
                onClick={() => nav(-1)}
              >
                Coins
                <span className="coinDetails-nav-button-arrow">{">"}</span>
              </button>
              <button className="coinDetails-nav-button current-coin">
                {APIData?.name}
              </button>
            </div>
            <div className="coinDetails-coinInfo">
              <div className="coinDetails-coinInfo-left">
                <div className="coinDetails-coinInfo-left-row1">
                  <img
                    src={APIData?.icon}
                    alt="coin-icon"
                    className="coinDetails-coinInfo-left-row1-img"
                  />
                  <p className="coinDetails-coinInfo-left-row1-coinName">
                    {APIData?.name}
                  </p>
                  <p className="coinDetails-coinInfo-left-row1-coinTokenName">
                    {APIData?.symbol}
                  </p>
                  <span className="coinDetails-coinInfo-left-row1-star">
                    <button className="coinDetails-coinInfo-left-row1-star-button">
                      &#10025;
                    </button>
                  </span>
                </div>
                <div className="coinDetails-coinInfo-left-row2">
                  <div className="coinDetails-coinInfo-left-row2-tokens selected-token">
                    Rank #{APIData?.rank}
                  </div>
                  <div className="coinDetails-coinInfo-left-row2-tokens">
                    Coin
                  </div>
                  <div className="coinDetails-coinInfo-left-row2-tokens">
                    On 3,153,564 watchlists
                  </div>
                </div>
              </div>
              <div className="coinDetails-coinInfo-right">
                <p className="coinDetails-coinInfo-right-row1">
                  {APIData?.name} Price
                  <span className="coinDetails-coinInfo-right-row1-span">
                    ({APIData?.symbol})
                  </span>
                </p>
                <div className="coinDetails-coinInfo-right-row2">
                  <p className="coinDetails-coinInfo-right-row2-price">
                    <NumberFormat
                      value={(APIData?.price).toFixed(2)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    {APIData?.priceChange1h <= 0 ? (
                      <span className="coinDetails-coinInfo-right-row2-percentage-div red-bg">
                        &#9660; {APIData?.priceChange1h}%
                      </span>
                    ) : (
                      <span className="coinDetails-coinInfo-right-row2-percentage-div green-bg">
                        &#9650; 1.64%
                      </span>
                    )}
                  </p>
                </div>
                <div className="coinDetails-coinInfo-right-row3">
                  <p className="coinDetails-coinInfo-right-row3-price">
                    14.62 ETH
                    <span className="coinDetails-coinInfo-right-row3-percentage-div">
                      &#9660; 0.74%
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="coinDetails-source">
              <div className="coinDetails-source-websites">
                <div className="coinDetails-source-websites-details">
                  <ul>
                    <li>
                      <a
                        href={APIData.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="coinDetails-source-websites-details-button">
                          <span className="coinDetails-source-websites-details-button-span">
                            <img
                              src={link}
                              alt="link"
                              className="coinDetails-source-websites-details-imgStart"
                            />
                            <p className="coinDetails-source-websites-details-title">
                              {APIData.name}.org
                            </p>
                            <img
                              src={upload}
                              alt="link"
                              className="coinDetails-source-websites-details-imgEnd"
                            />
                          </span>
                        </button>
                      </a>
                    </li>
                    <li>
                      <a href={APIData.exp[3]}>
                        <button className="coinDetails-source-websites-details-button">
                          <span className="coinDetails-source-websites-details-button-span">
                            <img
                              src={search}
                              alt="link"
                              className="coinDetails-source-websites-details-imgStart"
                            />
                            <p className="coinDetails-source-websites-details-title">
                              Explorers
                            </p>
                            <img
                              src={upload}
                              alt="link"
                              className="coinDetails-source-websites-details-imgEnd"
                            />
                          </span>
                        </button>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/centrehq/centre-tokens">
                        <button className="coinDetails-source-websites-details-button">
                          <span className="coinDetails-source-websites-details-button-span">
                            <img
                              src={coding}
                              alt="link"
                              className="coinDetails-source-websites-details-imgStart"
                            />
                            <p className="coinDetails-source-websites-details-title">
                              Source code
                            </p>
                            <img
                              src={upload}
                              alt="link"
                              className="coinDetails-source-websites-details-imgEnd"
                            />
                          </span>
                        </button>
                      </a>
                    </li>
                    <li>
                      <a href="https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf">
                        <button className="coinDetails-source-websites-details-button">
                          <span className="coinDetails-source-websites-details-button-span">
                            <img
                              src={paper}
                              alt="link"
                              className="coinDetails-source-websites-details-imgStart"
                            />
                            <p className="coinDetails-source-websites-details-title">
                              Whitepaper
                            </p>
                            <img
                              src={upload}
                              alt="link"
                              className="coinDetails-source-websites-details-imgEnd"
                            />
                          </span>
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="coinDetails-source-websites-tags">
                  <div className="coinDetails-source-websites-tags-title">
                    Tags:
                  </div>
                  <div className="coinDetails-source-websites-tags-content">
                    <ul>
                      <li className="coinDetails-source-websites-tags-content-title">
                        Mineable
                      </li>
                      <li className="coinDetails-source-websites-tags-content-title">
                        PoW
                      </li>
                      <li className="coinDetails-source-websites-tags-content-title">
                        SHA-256
                      </li>
                      <li className="coinDetails-source-websites-tags-content-title">
                        Store Of Value
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="coinDetails-source-actions">
                <div className="coinDetails-source-actions-sponsor">
                  <img
                    src={m}
                    alt="sponsor"
                    className="coinDetails-source-actions-sponsor-img"
                  />
                  <span className="coinDetails-source-actions-sponsor-text">
                    Sponsored
                  </span>
                </div>
                <div className="coinDetails-source-actions-buttons-div">
                  <button className="coinDetails-source-actions-buttons">
                    Buy &#9660;
                  </button>
                  <button className="coinDetails-source-actions-buttons">
                    Exchange &#9660;
                  </button>
                  <button className="coinDetails-source-actions-buttons">
                    Gaming &#9660;
                  </button>
                  <button className="coinDetails-source-actions-buttons">
                    Earn Crypto &#9660;
                  </button>
                </div>
              </div>
            </div>
            <div className="coinDetails-stockInfo">
              <div className="coinDetails-stockInfo-div">
                <div className="coinDetails-stockInfo-div-stats">
                  <p className="coinDetails-stockInfo-div-stats-title">
                    Market Cap
                    <span>
                      <img
                        src={info}
                        alt="stats"
                        className="coinDetails-stockInfo-div-stats-title-img"
                      />
                    </span>
                  </p>
                  <p className="coinDetails-stockInfo-div-stats-price">
                    <NumberFormat
                      value={Math.floor(APIData?.marketCap)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </p>
                  <p className="coinDetails-stockInfo-div-stats-percent">
                    &#9650; 0.68%
                  </p>
                </div>
                <div className="coinDetails-stockInfo-div-stats left two-div">
                  <div>
                    <p className="coinDetails-stockInfo-div-stats-title">
                      Volume
                      <span className="coinDetails-stockInfo-div-stats-title-span">
                        24h
                      </span>
                      <span>
                        <img
                          src={info}
                          alt="stats"
                          className="coinDetails-stockInfo-div-stats-title-img"
                        />
                      </span>
                    </p>
                    <p className="coinDetails-stockInfo-div-stats-price">
                      <NumberFormat
                        value={Math.floor(APIData?.volume)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </p>
                    <p className="coinDetails-stockInfo-div-stats-percent">
                      &#9650; 14.59%
                    </p>
                  </div>
                  <div>
                    <p className="coinDetails-stockInfo-div-stats-title">
                      Volume/Market Cap
                    </p>
                    <p className="coinDetails-stockInfo-div-stats-price">
                      {(APIData.volume / APIData.marketCap).toFixed(5)}
                    </p>
                  </div>
                </div>
                <div className="coinDetails-stockInfo-div-stats left two-div">
                  <div>
                    <p className="coinDetails-stockInfo-div-stats-title">
                      Circulating supply
                      <span>
                        <img
                          src={info}
                          alt="stats"
                          className="coinDetails-stockInfo-div-stats-title-img"
                        />
                      </span>
                    </p>
                    <p className="coinDetails-stockInfo-div-stats-price">
                      <NumberFormat
                        value={APIData?.availableSupply}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      {"  "}
                      BTC
                    </p>
                    <div>
                      <ProgressBarLineExample
                        val={
                          (APIData.availableSupply / APIData.totalSupply) * 100
                        }
                      />
                    </div>
                  </div>
                  <div className="coinDetails-stockInfo-div-stats-supply">
                    <div className="coinDetails-stockInfo-div-stats-supply-info">
                      <p className="coinDetails-stockInfo-div-stats-title">
                        Max supply
                        <span>
                          <img
                            src={info}
                            alt="stats"
                            className="coinDetails-stockInfo-div-stats-title-img"
                          />
                        </span>
                      </p>
                      <p className="coinDetails-stockInfo-div-stats-supply-info-price">
                        <NumberFormat
                          value={Math.floor(APIData?.totalSupply)}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </p>
                    </div>
                    <div className="coinDetails-stockInfo-div-stats-supply-info">
                      <p className="coinDetails-stockInfo-div-stats-title">
                        Total supply
                        <span>
                          <img
                            src={info}
                            alt="stats"
                            className="coinDetails-stockInfo-div-stats-title-img"
                          />
                        </span>
                      </p>
                      <p className="coinDetails-stockInfo-div-stats-supply-info-price">
                        <NumberFormat
                          value={Math.floor(APIData?.availableSupply)}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <LineChart chartData={chartData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
