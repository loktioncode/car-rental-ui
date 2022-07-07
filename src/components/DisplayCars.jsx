import CarCard from "./CarCard";
import FilterByVendor from "./FilterCarsByVendor";
import Legend from "./Legend";
import FilterByPrice from "./FilterCarsByPrice";
import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext, useEffect, useState, useCallback } from "react";
import CarContext from "../car-context-api/CarContext";
import displayStyle from '../styles/displaycars.module.css';
import secondaryBtnStyle from '../styles/buttons.module.css';



const DisplayCars = (props) => {

  const allCars = props.allCars;
  const { filteredByVendor, filterState } = useContext(CarContext);
  const [filteredCarsByVendor, filterCarsByVendor] = filteredByVendor;
  const [showFiltered, setVendorFilter] = filterState;
  const [availableCarsToRentFilteredByNumber, setCarsByNumber] = useState([]);

  const availableVendors = props.availableVendors;
  const availableCarsToRentInfo = props.availableCarsToRentInfo;

  const [sortByPrice, setSortByPrice] = useState('Sort by price: low to high');
  const options = [
    { label: 'Sort by price: low to high', value: '1' },
    { label: 'Sort by price: high to low', value: '2' }
  ];

  const onPriceFilterChange = (event) => {
    setSortByPrice(event.target.value);

  };


  const handleFilterByNumber = useCallback((number) => {
    setCarsByNumber(availableCarsToRentInfo.slice(0, number))
  }, [availableCarsToRentInfo]);


  const filterByPrice = useCallback(() => {
    if (sortByPrice === 'Sort by price: low to high') {

      availableCarsToRentInfo.sort(function (a, b) {
        return (
          parseInt(updateResponseKeyString(a.TotalCharge).EstimatedTotalAmount) -
          parseInt(updateResponseKeyString(b.TotalCharge).EstimatedTotalAmount)

        );
      });
      handleFilterByNumber(6);

    } else {

      availableCarsToRentInfo.sort(function (a, b) {
        return (
          parseInt(updateResponseKeyString(b.TotalCharge).EstimatedTotalAmount) -
          parseInt(updateResponseKeyString(a.TotalCharge).EstimatedTotalAmount)

        );
      });
      handleFilterByNumber(6);
    }
  }, [availableCarsToRentInfo, sortByPrice, handleFilterByNumber]);


  useEffect(() => {
    filterByPrice();
  }, [handleFilterByNumber, filterByPrice]);

  // console.log(props.pickUpTimeData)

  return (

    <section className={displayStyle.displayCars}>
      {availableVendors.length !== 0 ? (
        <div className={displayStyle.filterContainer}>
          <div className="">
            <button
              data-test="instructions"
              onClick={() => {
                filterCarsByVendor([]);
                setVendorFilter(false);
              }}
              className={secondaryBtnStyle.secondaryBtn}
            >
              ALL
            </button>
          </div>

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


        
      {  !showFiltered ? <FilterByPrice options={options} onChange={onPriceFilterChange} value={sortByPrice} />: null}


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
              className={secondaryBtnStyle.secondaryBtn}
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
