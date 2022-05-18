import React from "react";
import { GridHeader, GridTable } from "../../components";
import "./style.scss";

const Homepage = () => {
  return (
    <div className="container">
      <GridHeader title={"All Cryptocurrencies"} />
      <GridTable />
    </div>
  );
};

export default Homepage;
