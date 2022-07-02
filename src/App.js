import "./App.css";
import Home from "./Home";
import CarDetail from "./CarDetail";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import CarContext from "./car-context-api/CarContext";
import { updateResponseKeyString } from "./components/utils.js";

function App() {
  const [cars] = useContext(CarContext);
  var pickUpTimeData = cars[0].VehAvailRSCore.VehRentalCore;
  var allCars = cars[0].VehAvailRSCore.VehVendorAvails;


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

    console.log("sorted rentals desc order >>", availableCarsToRentInfo);
  }

  if (!cars) {
    alert("no cars to rent !!");
    // return <Navigate replace to="/login" />;
  }
 

  const newPickUpTimeData = updateResponseKeyString(pickUpTimeData);
  console.log(newPickUpTimeData);


  return (
      <div className="App-header min-h-screen dark:bg-darkGray-800 dark:text-coolGray-100">
        <div className="p-6 space-y-8">
          <Router>
            <NavBar />
            {(availableCarsToRentInfo.length !== 0 && availableVendors.length === allCars.length) ? (
        <main>
        <Routes>
          <Route path="/" element={<Home allCars={allCars} availableVendors={availableVendors} availableCarsToRentInfo={availableCarsToRentInfo} />} />
          <Route path="/rentalcars/:carId" element={<CarDetail  availableCarsToRentInfo={availableCarsToRentInfo}/>} />
        </Routes>
      </main>
      ) : (
        <div>Loading...</div>
      )}
            
          </Router>
          <footer>
            <div className="container flex justify-between p-6 mx-auto lg:p-8 dark:bg-Gray-900">
              <a
                rel="noopener noreferrer"
                href="https://mam.com/business"
                className="font-bold"
              >
                Car Rental UI Test
              </a>
              <div className="flex space-x-2">
                <a
                  aria-label="Github"
                  rel="noopener noreferrer"
                  href="https://github.com/loktioncode"
                  className="flex items-center justify-center dark:text-coolGray-400"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
   
  );
}

export default App;
