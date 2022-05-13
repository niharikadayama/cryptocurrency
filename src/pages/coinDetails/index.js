import React from "react";
import "./style.scss";

const CoinDetails = () => {
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
            <p>Bitcoin Price (BTC)</p>
            <p>
              $30,307.62<span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
