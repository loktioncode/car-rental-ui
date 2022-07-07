import { useState } from "react";
import { allCars } from "./car_data";
import CarContext from "./CarContext";

export const CarProvider = ({ children }) => {

  const [cars, setCars] = useState(allCars);
  const [filteredCarsByVendor, setVendorFilterCarByVendor] = useState([]);
  const [showFilter, setVendorFilter] = useState(false);
  

  const filterCarsByVendor = (data) => {
    setVendorFilterCarByVendor(data);
  }

  return (
    <CarContext.Provider value={{ allCarsData: [cars, setCars], filteredByVendor: [filteredCarsByVendor, filterCarsByVendor], filterState: [showFilter, setVendorFilter] }}>
      {children}
    </CarContext.Provider>
  );
};
