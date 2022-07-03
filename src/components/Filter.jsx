import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext } from "react";
import CarContext from "../car-context-api/CarContext";

const CarFilter = (props) => {
  var allCars = props.allCars;
  var filteredCars = [];
  const { filteredByVendor } = useContext(CarContext);

  const [filteredVendors, filterCarsByVendor] = filteredByVendor;

  const filterByVendor = (vendor) => {
    const selectedVendor = allCars.find(
      (cars) => updateResponseKeyString(cars.Vendor).Name === vendor
    );
    // filterCarsByVendor(updateResponseKeyString(selectedVendor.VehAvails));

    for (const key in updateResponseKeyString(selectedVendor.VehAvails)) {
      // if (Object.hasOwnProperty.call(object, key)) {
      //   const element = object[key];

      // }
      filteredCars.push(updateResponseKeyString(selectedVendor.VehAvails[key]));
    }
  
  };

  // filterCarsByVendor(filteredCars);
  //  filterCarsByVendor("filteredCars ..");

  return (
    <button
      onClick={() => {
        filterByVendor(props.vendorName);
        filteredCars !== 0
          ? filterCarsByVendor(filteredCars)
          : console.log("filter empty");
      }}
      className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400  dark:text-gray-50"
    >
      {props.vendorName}
    </button>
  );
};

export default CarFilter;
