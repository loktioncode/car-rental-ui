import { useState} from "react";
import { allCars } from "./car-info";
import CarContext from "./CarContext";

export const CarProvider = ({ children }) => {

  const [cars, setCars] = useState(allCars);

  return <CarContext.Provider value={[cars, setCars]}>{children}</CarContext.Provider>;
};
