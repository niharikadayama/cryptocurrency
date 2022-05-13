import React from "react";
import GridHeader from "../../components/gridHeader";
import GridTable from "../../components/gridTable";
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
