import HomePage from  "../src/pages/homePage"
import CoinDetails from "./pages/coinDetails";
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route index element = {<HomePage/>}></Route>
              <Route path = "/h" element= {<CoinDetails />}></Route>
          </Routes>
    </BrowserRouter>
      
  
  );
}

export default App;
