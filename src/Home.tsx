import React, { useContext } from "react";
import CarContext from "./car-context-api/CarContext";
// import logo from "./logo.svg";

// import { Navigate } from "react-router-dom";

function Home() {
  const [cars] = useContext(CarContext);

  if (!cars) {
    alert("no cars to rent !!");
    // return <Navigate replace to="/login" />;
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">Car rentals show here!</h1>
    </>
  );
}

export default Home;
