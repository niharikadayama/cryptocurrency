import React, { useEffect,useState } from "react";
import GridLayout from "react-grid-layout";
import "./style.scss";


const GridTable = () => {
   
  const layout = [
    { i: "rank", x: 0, y: 0, w: 0.5, h: 1 },
    { i: "name", x: 0.5, y: 0, w: 0.5, h: 1 },
    { i: "symbol", x: 1.5, y: 0, w: 1, h: 1 },
    { i: "market_cap", x: 2.5, y: 0, w: 1, h: 1 },
    { i: "price", x: 3.7, y: 0, w: 1, h: 1 },
    { i: "circulating_supply", x: 5.2, y: 0, w: 1, h: 1 },
    { i: "volume", x: 6.5, y: 0, w: 1, h: 1 },
    { i: "1h", x: 8, y: 0, w: 1, h: 1 },
    { i: "24h", x: 8.5, y: 0, w: 1, h: 1 },
    { i: "7d", x: 9, y: 0, w: 1, h: 1 },
  ];
  const[APIData , setAPIData] = useState(null)
  const getData = async() => {
         const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';
         const response = await fetch(url);
         const responseJson = await response.json();
         console.log(responseJson);
         if(responseJson===null)
         {
          console.log("Waiting for reaponse");
         }
         else{
            console.log(responseJson)
            setAPIData(responseJson.coins)
         }
       }
      
  useEffect(()=>{
   console.log(APIData)
  },[APIData])  
  useEffect(()=>{
    getData()
  },[])  
 
  
   
  return (
    <>
    
      <GridLayout
          className="layout"
          layout={layout}
          cols={10}
          rowHeight={6}
          width={1350}
        >
        <div key="rank">
            <h4 className="layout-title">Rank</h4>
            {APIData?.map((ele)=><p>{ele.rank}</p>)}
        </div>
        <div key="name">
                     <h4 className="layout-title">Name</h4>
                     {APIData?.map((ele)=><p>{ele.name}</p>)}
        </div>
        <div key="symbol">
                <h4 className="layout-title">Symbol</h4>
                {APIData?.map((ele)=><p>{ele.symbol}</p>)}
        </div>
        <div key="market_cap">
                <h4 className="layout-title">Market Cap</h4>
                {APIData?.map((ele)=><p>{ele.marketCap}</p>)}
        </div>
        <div key="price">
                <h4 className="layout-title">Price</h4>
                {APIData?.map((ele)=><p>{ele.price}</p>)}
         </div>
        <div key="circulating_supply">
                 <h4 className="layout-rxt">Circulating Supply</h4>
                 {APIData?.map((ele)=><p>{ele.availableSupply}</p>)}
          </div>
          <div key="volume">
                  <h4 className="layout-vol">Volume(24h)</h4>
                 {APIData?.map((ele)=><p>{ele.volume}</p>)}
           </div>
            <div key="1h">
                  <h4 className="layout-title">% 1h</h4>
                  {APIData?.map((ele)=><p>{ele.priceChange1h}</p>)}
            </div>
            <div key="24h">
                   <h4 className="layout-title">% 24h</h4>
                  {APIData?.map((ele)=><p>{ele.priceChange1d}</p>)}
            </div>
            <div key="7d">
                   <h4 className="layout-title">% 7d</h4>
                   {APIData?.map((ele)=><p>{ele.priceChange1w}</p>)}
            </div>
        </GridLayout>
     </>
      
  );
};

export default GridTable;
