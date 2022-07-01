import { useState, useEffect } from "react";
// import { getUser } from "./auth.js";
import CarContext from "./context/CarContext";

export const CarProvider = ({ children }) => {

  const [car, setCar] = useState(null);

  const getCars = async () => {}


  useEffect(() => {
    const currentCars = getCars();
    setCar(currentCars);
  }, []);


  return <CarContext.Provider value={{ car }}>{children}</CarContext.Provider>;
};
