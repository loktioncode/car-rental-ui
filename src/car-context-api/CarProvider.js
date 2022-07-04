import { useState } from "react";
import { allCars } from "./car_data";
import CarContext from "./CarContext";

export const CarProvider = ({ children }) => {

  const [cars, setCars] = useState(allCars);
  const [filteredCarsByVendor, setVendorFilterByVendor] = useState([]);
  const [showFilter, setFilter] = useState(false);

  const filterCarsByVendor = (data) => {
    setVendorFilterByVendor(data);
  }

  return (
    <CarContext.Provider value={{ allCarsData: [cars, setCars], filteredByVendor: [filteredCarsByVendor, filterCarsByVendor], filterState: [showFilter, setFilter] }}>
      {children}
    </CarContext.Provider>
  );
};
