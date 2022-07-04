import { useState } from "react";
import { allCars } from "./car_data";
import CarContext from "./CarContext";

export const CarProvider = ({ children }) => {

  const [cars, setCars] = useState(allCars);
  const [filteredCarsByVendor, setFilterCarByVendor] = useState([]);
  const [showFilter, setFilter] = useState(false);

  const filterCarsByVendor = (data) => {
    setFilterCarByVendor(data);
  }

  return (
    <CarContext.Provider value={{ allCarsData: [cars, setCars], filteredByVendor: [filteredCarsByVendor, filterCarsByVendor], filterState: [showFilter, setFilter] }}>
      {children}
    </CarContext.Provider>
  );
};
