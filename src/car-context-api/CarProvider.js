import { useState, useEffect } from "react";
// import { getUser } from "./auth.js";
import CarContext from "./context/CarContext";

export const CarProvider = ({ children }) => {

  const [cars, setCars] = useState(null);

  const getCars = async () => {}


  useEffect(() => {
    const currentCars = getCars();
    setCars(currentCars);
  }, []);


  return <CarContext.Provider value={{ cars }}>{children}</CarContext.Provider>;
};
