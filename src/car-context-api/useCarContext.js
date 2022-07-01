import CarContext from "./CarContext";

const useCarContext = () => {
  const cars = CarContext();
  if (cars === undefined) {
    throw new Error("useCarContext can only be used inside CarProvider");
  }
  return cars;
};

export default useCarContext;
