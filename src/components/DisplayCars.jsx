import CarCard from "./CarCard";
import FilterByVendor from "./Filter";
import Legend from "./Legend";
import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext, useState } from "react";
import CarContext from "../car-context-api/CarContext";


const DisplayCars = (props) => {

  var allCars = props.allCars;
  const { filteredByVendor, filterState} = useContext(CarContext);
  const [filteredCarsByVendor, filterCarsByVendor] = filteredByVendor;
  const [showFiltered, setFilter] = filterState;
  const [selectedVendor, setSelectedVendor] = useState("");


  var availableVendors = props.availableVendors;
  var availableCarsToRentInfo = props.availableCarsToRentInfo;

  console.log("filtered Cars>>", filteredCarsByVendor);
    // console.log("all Cars>>", availableCarsToRentInfo);

  return (
    <>
      <section className="dark:text-gray-100">
        {availableVendors.length !== 0 ? (
          <div className="flex -mx-4 space-x-2 overflow-x-auto overflow-y-hidden justify-center flex-nowrap dark:text-gray-100">
            <button
              onClick={() => {
                console.log("show all cars");
                filterCarsByVendor([])
                setFilter(false);
              }}
              className="flex items-center flex-shrink-0 px-5 py-2 dark:text-gray-50 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            >
              ALL
            </button>
            {availableVendors.map((vendor) => (
              <FilterByVendor
                key={vendor.Code}
                vendorName={vendor.Name}
                allCars={allCars}
              />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Legend pickUpTimeData={props.pickUpTimeData} />
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            

            {availableCarsToRentInfo.length !== 0 && !showFiltered ? (
              availableCarsToRentInfo.map((car) => (
                <CarCard
                  key={updateResponseKeyString(car.Vehicle).Code}
                  carInfo={updateResponseKeyString(car.Vehicle)}
                  carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                  carTotalCharges={updateResponseKeyString(car.TotalCharge)}
                  carDetailURL={`/rentalcars/${updateResponseKeyString(car.Vehicle).Code
                    }`}
                />
              ))
            ) : (
              filteredCarsByVendor.map((car) => (
                <CarCard
                  key={updateResponseKeyString(car.Vehicle).Code}
                  carInfo={updateResponseKeyString(car.Vehicle)}
                  carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                  carTotalCharges={updateResponseKeyString(car.TotalCharge)}
                  carDetailURL={`/rentalcars/${updateResponseKeyString(car.Vehicle).Code
                    }`}
                />
              ))
            )}


          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more cars...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayCars;
