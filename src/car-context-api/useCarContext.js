import CarContext from "./CarContext";

const useCarContext = () => {
  const car = CarContext();
  if (car === undefined) {
    throw new Error("useCarContext can only be used inside CarProvider");
  }
  return car;
};
