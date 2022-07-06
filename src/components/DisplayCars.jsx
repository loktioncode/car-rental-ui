import CarCard from "./CarCard";
import FilterByVendor from "./FilterCarsByVendor";
import Legend from "./Legend";
import FilterByPrice from "./FilterCarsByPrice";
import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext, useEffect, useState } from "react";
import CarContext from "../car-context-api/CarContext";
import displayStyle from '../styles/displaycars.module.css';
import secondaryBtnStyle from '../styles/buttons.module.css';



const DisplayCars = (props) => {

  const allCars = props.allCars;
  const { filteredByVendor, filterState } = useContext(CarContext);
  const [filteredCarsByVendor, filterCarsByVendor] = filteredByVendor;
  const [showFiltered, setFilter] = filterState;
  const [availableCarsToRentFilteredByNumber, setCarsByNumber] = useState([]);

  const availableVendors = props.availableVendors;
  const availableCarsToRentInfo = props.availableCarsToRentInfo;

  const handleFilterByNumber = (number) => setCarsByNumber(availableCarsToRentInfo.slice(0, number));


  const filterByLowest = (lowest) => {

    console.log(`Filter byHighest: ${lowest}`);
  };

  const filterByHighest = (highest) => {
    console.log(`Filter byHighest: ${highest}`);
    // if (availableCarsToRentInfo.length !== 0) {
    //   availableCarsToRentInfo.sort(function (a, b) {
    //     return (
    //       parseInt(updateResponseKeyString(b.TotalCharge).EstimatedTotalAmount) -
    //       parseInt(updateResponseKeyString(a.TotalCharge).EstimatedTotalAmount) 
         
    //     );
    //   });
    // }
  
  };


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
        <FilterByPrice low={filterByLowest} high={filterByHighest} />
        <Legend pickUpTimeData={props.pickUpTimeData} />
        <div className={displayStyle.carsContainer}>

          <div className={displayStyle.carGrid}>
            {availableCarsToRentInfo.length !== 0 &&
              !showFiltered &&
              availableCarsToRentFilteredByNumber.length !== 0
              ? availableCarsToRentFilteredByNumber.map((car) => (
                <CarCard
                  key={updateResponseKeyString(car.Vehicle).Code}
                  carInfo={updateResponseKeyString(car.Vehicle)}
                  carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                  carTotalCharges={updateResponseKeyString(car.TotalCharge)}
                  carDetailURL={`/rentalcars/${updateResponseKeyString(car.Vehicle).Code}`}
                />
              ))
              : filteredCarsByVendor.map((car) => (
                <CarCard
                  key={updateResponseKeyString(car.Vehicle).Code}
                  carInfo={updateResponseKeyString(car.Vehicle)}
                  carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                  carTotalCharges={updateResponseKeyString(car.TotalCharge)}
                  carDetailURL={`/rentalcars/${updateResponseKeyString(car.Vehicle).Code}`}
                />
              ))}
          </div>

          <div className="mt-8">
            {availableCarsToRentFilteredByNumber.length !== props.availableCarsToRentInfo.length && !showFiltered ? (
              <button
                type="button"
                className={ secondaryBtnStyle.secondaryBtn}
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
