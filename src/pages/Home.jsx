import React from "react";
import { DisplayCars } from "../components";

function Home(props) {
  var allCars = props.allCars;

  var availableVendors = props.availableVendors;
  var availableCarsToRentInfo = props.availableCarsToRentInfo;
  var pickUpTimeData = props.pickUpTimeData;

  return (
      <DisplayCars
        availableCarsToRentInfo={availableCarsToRentInfo}
        availableVendors={availableVendors}
        allCars={allCars}
        pickUpTimeData={pickUpTimeData}
      />
  );
}

export default Home;
