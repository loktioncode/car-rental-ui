import { useParams } from "react-router-dom";

const CarDetails = (props) => {
  const { carId } = useParams();
  var carsData = [localStorage.getItem("rentals")];

  if (carsData.length !== 0) {
    // const selectedCar = carsData.find((car) => car.Vehicle.Code === carId)
    console.log(carsData);
  }

  return (
    <>
      <a
        rel="noopener noreferrer"
        href="/"
        className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400  dark:text-gray-50"
      >
        HOME /
      </a>
      <div>
        <h1>Car Details</h1>
      </div>
    </>
  );
};

export default CarDetails;
