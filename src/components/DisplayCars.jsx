import CarCard from "./CarCard";
import FilterByVendor from "./Filter";
import Legend from "./Legend";
import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext, useEffect, useState } from "react";
import CarContext from "../car-context-api/CarContext";

const DisplayCars = (props) => {
  var allCars = props.allCars;
  const { filteredByVendor, filterState } = useContext(CarContext);
  const [filteredCarsByVendor, filterCarsByVendor] = filteredByVendor;
  const [showFiltered, setFilter] = filterState;
  var [availableCarsToRentFilteredByNumber, setCarsByNumber] = useState([]);

  var availableVendors = props.availableVendors;
  var availableCarsToRentInfo = props.availableCarsToRentInfo;



  const handleFilterByNumber = (number) => {
    setCarsByNumber(availableCarsToRentInfo.slice(0, number));
  };

  useEffect(() => {
    handleFilterByNumber(6);
  }, []);

  // console.log(props.pickUpTimeData)

  return (
    <>
      <section className="dark:text-gray-100">
        {availableVendors.length !== 0 ? (
          <div className="flex -mx-4 space-x-2 overflow-x-auto overflow-y-hidden justify-center flex-nowrap dark:text-gray-100">
            <button
            data-test="instructions"
              onClick={() => {
                filterCarsByVendor([]);
                setFilter(false);
              }}
              className="flex items-center flex-shrink-0 px-5 py-2 dark:text-gray-50 border-b-4 active:border-violet-400 hover:bg-violet-600 focus:border-violet-400"
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
            {availableCarsToRentInfo.length !== 0 &&
            !showFiltered &&
            availableCarsToRentFilteredByNumber.length !== 0
              ? availableCarsToRentFilteredByNumber.map((car) => (
                  <CarCard
                    key={updateResponseKeyString(car.Vehicle).Code}
                    carInfo={updateResponseKeyString(car.Vehicle)}
                    carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                    carTotalCharges={updateResponseKeyString(car.TotalCharge)}
                    carDetailURL={`/rentalcars/${
                      updateResponseKeyString(car.Vehicle).Code
                    }`}
                  />
                ))
              : filteredCarsByVendor.map((car) => (
                  <CarCard
                    key={updateResponseKeyString(car.Vehicle).Code}
                    carInfo={updateResponseKeyString(car.Vehicle)}
                    carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                    carTotalCharges={updateResponseKeyString(car.TotalCharge)}
                    carDetailURL={`/rentalcars/${
                      updateResponseKeyString(car.Vehicle).Code
                    }`}
                  />
                ))}
          </div>
          <div className="flex justify-center">
            {availableCarsToRentFilteredByNumber.length !== props.availableCarsToRentInfo.length && !showFiltered ? (
              <button
                type="button"
                className="px-6 py-3 text-base rounded-md hover:underline dark:bg-gray-900 dark:text-gray-100"
                onClick={() => {
                  handleFilterByNumber(props.availableCarsToRentInfo.length);
                }}
              >
                Load More Cars...
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayCars;
