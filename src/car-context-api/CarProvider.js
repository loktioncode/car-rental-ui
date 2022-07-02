import { useState} from "react";
import { allCars } from "./car-info";
import CarContext from "./CarContext";

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(allCars);

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
  //   const allCars = getCars();
  //   setCars(allCars);
  // }, []);

  return (
    <CarContext.Provider value={[cars, setCars]}>
      {children}
    </CarContext.Provider>
  );
};
