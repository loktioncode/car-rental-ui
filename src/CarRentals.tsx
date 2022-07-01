import React from "react";
// import logo from "./logo.svg";
import useCarContext from "./car-context-api/useCarContext";

import { Navigate } from "react-router-dom";

function CarRentals() {
  const { cars } = useCarContext();

  if (!cars) {
    alert("no cars to rent !!")
    // return <Navigate replace to="/login" />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="text-3xl font-bold underline">Car rentals show here!</h1>
      </header>
    </div>
  );
}

export default CarRentals;
