import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext } from "react";
import CarContext from "../car-context-api/CarContext";

const FilterByVendor = (props) => {
  const { filteredByVendor, filterState } = useContext(CarContext);
  const [, filterCarsByVendor] = filteredByVendor;
  const [showFilter, setFilter] = filterState;

  var allCars = props.allCars;
  var filteredCars = [];

  const findCarsByVendor = (vendor) => {
    const selectedVendor = allCars.find(
      (cars) => updateResponseKeyString(cars.Vendor).Name === vendor
    );

    for (const key in updateResponseKeyString(selectedVendor.VehAvails)) {
      filteredCars.push(updateResponseKeyString(selectedVendor.VehAvails[key]));
    }
  };

  const filterAction = () => {
    findCarsByVendor(props.vendorName);
    filterCarsByVendor(filteredCars)
    setFilter(true);
  }

  return (
    <button
      onClick={() => filterAction()}
      className="flex items-center flex-shrink-0 px-5 py-2 dark:text-gray-50 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
    >
      {props.vendorName}
    </button>
  );
};

export default FilterByVendor;
