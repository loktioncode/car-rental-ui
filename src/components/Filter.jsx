import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext } from "react";
import CarContext from "../car-context-api/CarContext";

const FilterByVendor = (props) => {
  const { filteredByVendor, filterState } = useContext(CarContext);
  const [, filterCarsByVendor] = filteredByVendor;
  const [, setFilter] = filterState;

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
    filterCarsByVendor(filteredCars);
    setFilter(true);
  }

  return (
    <button
      onClick={() => filterAction()}
      className="flex items-center flex-shrink-0 px-5 py-2 dark:text-gray-50 border-b-4 active:border-violet-400 hover:bg-violet-600 focus:border-violet-400"
    >
      {props.vendorName}
    </button>
  );
};

export default FilterByVendor;
