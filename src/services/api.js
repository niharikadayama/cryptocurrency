import React, { useEffect, useState } from "react"


const API = (props) => {
         const[APIData , setAPIData] = useState([])
         const getData = async() => {
         const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';
         const response = await fetch(url);
         const responseJson = await response.json();
         setAPIData(responseJson.coins);
         console.log(APIData);
      
    }
    useEffect(()=>{
            getData()
    },[])
    return (
        <div>
            {
              APIData.map((ele)=>{
                 return(
                     <div>
                         <span>{ele.rank+" "}
                         {ele.name+ " "} {ele.symbol+ " "} {ele.marketCap+ " "} {ele.price+ " "}
                         {ele.availableSupply+ " "} {ele.volume+ " "} {ele.priceChange1h+ " "}
                         {ele.priceChange1d+ " "} {ele.priceChange1w}</span>
                     </div>)})}
        </div>)
    }
export default API;