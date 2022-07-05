import CarCard from "./CarCard";
import FilterByVendor from "./Filter";
import Legend from "./Legend";
import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext, useEffect, useState } from "react";
import CarContext from "../car-context-api/CarContext";
import displayStyle from '../styles/display.module.css';


const DisplayCars = (props) => {

  const allCars = props.allCars;
  const { filteredByVendor, filterState } = useContext(CarContext);
  const [filteredCarsByVendor, filterCarsByVendor] = filteredByVendor;
  const [showFiltered, setFilter] = filterState;
  const [availableCarsToRentFilteredByNumber, setCarsByNumber] = useState([]);

  const availableVendors = props.availableVendors;
  const availableCarsToRentInfo = props.availableCarsToRentInfo;

  const handleFilterByNumber = (number) => setCarsByNumber(availableCarsToRentInfo.slice(0, number));

  useEffect(() => {
    handleFilterByNumber(6);
  }, []);

  // console.log(props.pickUpTimeData)

  return (

      <section className={displayStyle.displayCars}>
        {availableVendors.length !== 0 ? (
          <div className={displayStyle.filterContainer}>
            <button
              data-test="instructions"
              onClick={() => {
                filterCarsByVendor([]);
                setFilter(false);
              }}
              className={displayStyle.allVendorsBtn + ' ' + 'semibold'}
            >
              ALL
            </button>
            {availableVendors.map((vendor) => (
              <FilterByVendor
                key={vendor.Code}
                vendorName={vendor.Name}
                allCars={allCars}
                vendorCode={vendor.Code}
              />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <Legend pickUpTimeData={props.pickUpTimeData} />
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">


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
                  carDetailURL={`/rentalcars/${updateResponseKeyString(car.Vehicle).Code
                    }`}
                />
              ))
              : filteredCarsByVendor.map((car) => (
                <CarCard
                  key={updateResponseKeyString(car.Vehicle).Code}
                  carInfo={updateResponseKeyString(car.Vehicle)}
                  carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                  carTotalCharges={updateResponseKeyString(car.TotalCharge)}
                  carDetailURL={`/rentalcars/${updateResponseKeyString(car.Vehicle).Code
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

  );
};

export default DisplayCars;
