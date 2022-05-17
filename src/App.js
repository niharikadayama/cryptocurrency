import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinDetails from "./pages/coinDetails";
import Homepage from "./pages/homePage";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/x" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
