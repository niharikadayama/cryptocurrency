import React from "react"

class API extends React.Component{
    constructor(props){
      super(props);
      this.state ={
         apiData: []
      }
    }
    getData = async() => {
        const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';
        const response = await fetch(url);
        const responseJson = await response.json();
        this.setState(
            {apiData : responseJson.coins}
        );

        console.log(this.state.apiData);
      
    }
    render()
    {
        return(
            <div>
                <button onClick={this.getData}>

                Click Me</button>
                <div>{this.state.apiData.map((ele)=>{
                return(

                    <div><span>{ele.rank+" "}
                    {ele.name+ " "} {ele.symbol+ " "} {ele.marketCap+ " "} {ele.price+ " "}
                    {ele.availableSupply+ " "} {ele.volume+ " "} {ele.priceChange1h+ " "}
                    {ele.priceChange1d+ " "} {ele.priceChange1w}</span>
                    </div> )} )
                    }</div>


                
            </div>
        )
    }
}
export default API