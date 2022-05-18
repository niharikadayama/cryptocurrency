import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../src/pages/homePage";
import CoinDetails from "./pages/coinDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/client/:id" element={<CoinDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
