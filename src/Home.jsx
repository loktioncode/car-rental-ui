import React from "react";
import { DisplayCars } from "./components";

function Home(props) {
  // var allCars = props.allCars;

  var availableVendors = props.availableVendors;
  var availableCarsToRentInfo = props.availableCarsToRentInfo;

  return (
    <div className="container mx-auto space-y-16">
      <DisplayCars
        availableCarsToRentInfo={availableCarsToRentInfo}
        availableVendors={availableVendors}
      />
    </div>
  );
}

export default Home;
