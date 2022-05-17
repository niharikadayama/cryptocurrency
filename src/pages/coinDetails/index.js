import React from "react";
import ProgressBarLineExample from "../../components/progressBar";
import { Images } from "../../constants/images";
import "./style.scss";

const CoinDetails = () => {
  const { arrow_down, link, search, upload, user, paper, coding, m, info } =
    Images;
  return (
    <div className="coinDetails-container">
      <div className="coinDetails-card">
        <div className="coinDetails-nav">
          <button className="coinDetails-nav-button">
            Cryptocurrencies
            <span className="coinDetails-nav-button-arrow">{">"}</span>
          </button>
          <button className="coinDetails-nav-button">
            Coins <span className="coinDetails-nav-button-arrow">{">"}</span>
          </button>
          <button className="coinDetails-nav-button current-coin">
            Bitcoin
          </button>
        </div>
        <div className="coinDetails-coinInfo">
          <div className="coinDetails-coinInfo-left">
            <div className="coinDetails-coinInfo-left-row1">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                alt="coin-icon"
                className="coinDetails-coinInfo-left-row1-img"
              />
              <p className="coinDetails-coinInfo-left-row1-coinName">Bitcoin</p>
              <p className="coinDetails-coinInfo-left-row1-coinTokenName">
                BTC
              </p>
              <span className="coinDetails-coinInfo-left-row1-star">
                <button className="coinDetails-coinInfo-left-row1-star-button">
                  &#10025;
                </button>
              </span>
            </div>
            <div className="coinDetails-coinInfo-left-row2">
              <div className="coinDetails-coinInfo-left-row2-tokens selected-token">
                Rank #1
              </div>
              <div className="coinDetails-coinInfo-left-row2-tokens">Coin</div>
              <div className="coinDetails-coinInfo-left-row2-tokens">
                On 3,153,564 watchlists
              </div>
            </div>
          </div>
          <div className="coinDetails-coinInfo-right">
            <p className="coinDetails-coinInfo-right-row1">
              Bitcoin Price{" "}
              <span className="coinDetails-coinInfo-right-row1-span">
                (BTC)
              </span>
            </p>
            <div className="coinDetails-coinInfo-right-row2">
              <p className="coinDetails-coinInfo-right-row2-price">
                $30,307.62
                <span className="coinDetails-coinInfo-right-row2-percentage-div">
                  &#9650; 1.64%
                </span>
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
            <div className="coinDetails-coinInfo-right-row4">
              <div className="coinDetails-coinInfo-right-row4-scale">
                <span className="coinDetails-coinInfo-right-row4-scaleTitle">
                  Low:
                </span>
                <span className="coinDetails-coinInfo-right-row4-scaleValue">
                  $29,527.74
                </span>
              </div>
              <div className="coinDetails-coinInfo-right-row4-progressBar">
                <ProgressBarLineExample />
              </div>
              <div className="coinDetails-coinInfo-right-row4-scale">
                <span className="coinDetails-coinInfo-right-row4-scaleTitle right">
                  High:
                </span>
                <span className="coinDetails-coinInfo-right-row4-scaleValue">
                  $31,527.19
                </span>
              </div>
              <div className="coinDetails-coinInfo-right-row4-dropdown">
                <span className="coinDetails-coinInfo-right-row4-dropdown-content">
                  24h &or;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="coinDetails-source">
          <div className="coinDetails-source-websites">
            <div className="coinDetails-source-websites-details">
              <ul>
                <li>
                  <button className="coinDetails-source-websites-details-button">
                    <span className="coinDetails-source-websites-details-button-span">
                      <img
                        src={link}
                        alt="link"
                        className="coinDetails-source-websites-details-imgStart"
                      />
                      <p className="coinDetails-source-websites-details-title">
                        Bitcoin.org
                      </p>
                      <img
                        src={upload}
                        alt="link"
                        className="coinDetails-source-websites-details-imgEnd"
                      />
                    </span>
                  </button>
                </li>
                <li>
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
                        src={arrow_down}
                        alt="link"
                        className="coinDetails-source-websites-details-imgEnd"
                      />
                    </span>
                  </button>
                </li>
                <li>
                  <button className="coinDetails-source-websites-details-button">
                    <span className="coinDetails-source-websites-details-button-span">
                      <img
                        src={user}
                        alt="link"
                        className="coinDetails-source-websites-details-imgStart"
                      />
                      <p className="coinDetails-source-websites-details-title">
                        Community
                      </p>
                      <img
                        src={arrow_down}
                        alt="link"
                        className="coinDetails-source-websites-details-imgEnd"
                      />
                    </span>
                  </button>
                </li>
                <li>
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
                </li>
                <li>
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
                $572,877,625,906
              </p>
              <p className="coinDetails-stockInfo-div-stats-percent">
                &#9650; 0.68%
              </p>
            </div>
            <div className="coinDetails-stockInfo-div-stats left">
              <p className="coinDetails-stockInfo-div-stats-title">
                Fully Diluted Market Cap
                <span>
                  <img
                    src={info}
                    alt="stats"
                    className="coinDetails-stockInfo-div-stats-title-img"
                  />
                </span>
              </p>
              <p className="coinDetails-stockInfo-div-stats-price">
                $621,587,890,887
              </p>
              <p className="coinDetails-stockInfo-div-stats-percent">
                &#9650; 1.21%
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
                  $572,877,625,906
                </p>
                <p className="coinDetails-stockInfo-div-stats-percent">
                  &#9650; 14.59%
                </p>
              </div>
              <div>
                <p className="coinDetails-stockInfo-div-stats-title">
                  Volume/Market Cap
                </p>
                <p className="coinDetails-stockInfo-div-stats-price">0.05609</p>
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
                  19,041,962.00 BTC
                </p>
                <div>
                  <ProgressBarLineExample />
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
                    21,000,000
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
                    19,041,962
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
