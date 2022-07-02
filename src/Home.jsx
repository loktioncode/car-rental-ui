import React, { useContext } from "react";
import CarContext from "./car-context-api/CarContext";
// import { CarCard } from "./components";
import { DisplayCars } from "./components";
// import logo from "./logo.svg";
import { updateResponseKeyString } from "./components/utils.js";

function Home() {
  const [cars] = useContext(CarContext);

  if (!cars) {
    alert("no cars to rent !!");
    // return <Navigate replace to="/login" />;
  }

  var pickUpTimeData = cars[0].VehAvailRSCore.VehRentalCore;
  var availableCarsToRent = cars[0].VehAvailRSCore.VehVendorAvails;

  const newPickUpTimeData = updateResponseKeyString(pickUpTimeData);
  console.log(newPickUpTimeData);

  return (
    <div className="container mx-auto space-y-16">
      <DisplayCars allCars={availableCarsToRent} />
    </div>
  );
}

export default Home;
