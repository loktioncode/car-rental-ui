import "./App.css";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import CarContext from "./car-context-api/CarContext";
import { updateResponseKeyString } from "./helpers/utils.js";

const App = () => {

  const { allCarsData } = useContext(CarContext);
  const [cars,] = allCarsData;
  const pickUpTimeData = cars[0].VehAvailRSCore.VehRentalCore;
  const allCars = cars[0].VehAvailRSCore.VehVendorAvails;

  var availableVendors = [];
  var availableCarsToRent = [];
  var availableCarsToRentInfo = [];

  for (var car in allCars) {
    availableVendors.push(updateResponseKeyString(allCars[car].Vendor));
    availableCarsToRent.push(allCars[car].VehAvails);
  }

  if (availableVendors.length === allCars.length) {
    for (var index in availableCarsToRent) {
      for (var i in availableCarsToRent[index]) {
        availableCarsToRentInfo.push(
          updateResponseKeyString(availableCarsToRent[index][i])
        );
      }
    }
  }

  if (availableCarsToRentInfo.length !== 0) {
    availableCarsToRentInfo.sort(function (a, b) {
      return (
        parseInt(updateResponseKeyString(a.TotalCharge).EstimatedTotalAmount) -
        parseInt(updateResponseKeyString(b.TotalCharge).EstimatedTotalAmount)
      );
    });

    // console.log("sorted rentals desc order >>", availableCarsToRentInfo);
  }

  if (!cars) {
    alert("no cars to rent !!");
    // return <Navigate replace to="/login" />;
  }


  const newPickUpTimeData = updateResponseKeyString(pickUpTimeData);


  return (
    <div className="App-header min-h-screen">
      <div className="p-6 space-y-8">
        <Router>
          <NavBar />
          {(availableCarsToRentInfo.length !== 0 && availableVendors.length === allCars.length) ? (
            <main>
              <Routes>
                <Route path="/" element={<Home pickUpTimeData={newPickUpTimeData} allCars={allCars} availableVendors={availableVendors} availableCarsToRentInfo={availableCarsToRentInfo} />} />
                <Route path="/rentalcars/:carId" element={<CarDetail availableCarsToRentInfo={availableCarsToRentInfo} />} />
              </Routes>
            </main>
          ) : (
            <div>Loading...</div>
          )}

        </Router>
        <Footer />
      </div>
    </div>

  );
}

export default App;
