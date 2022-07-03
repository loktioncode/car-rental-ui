import { useState, useEffect} from "react";
import { allCars } from "./car_data";
import CarContext from "./CarContext";

export const CarProvider = ({ children }) => {

  const [cars, setCars] = useState(allCars);
  const [filteredCarsByVendor, setVendorFilterByVendor] = useState([]);
  const [showFilter, setFilter] = useState(false);



  //ANOTHER WAY TO GET CARS DYNAMICALLY
  // const getCars = async () => {
  //   const response = await fetch("http://www.cartrawler.com/ctabe/cars.json", {
  //     mode: "cors",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });

  //   if (!response.ok) {
  //     const message = `An error has occured: ${response.status}`;
  //     throw new Error(message);
  //   }
  // };

  // useEffect(() => {
    // const allCars = getCars();
    // setCars(allCars);
  // }, []);

  const filterCarsByVendor = (data) => {
    setVendorFilterByVendor(data);
  }

  return (
    <CarContext.Provider value={{ allCarsData: [cars, setCars], filteredByVendor: [filteredCarsByVendor, filterCarsByVendor], filterState: [showFilter, setFilter] }}>
      {children}
    </CarContext.Provider>
  );
};
