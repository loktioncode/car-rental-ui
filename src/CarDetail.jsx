import { useParams } from "react-router-dom";
import { updateResponseKeyString } from "./components/utils.js";

const CarDetails = (props) => {
  const { carId } = useParams();
  var carsData = props.availableCarsToRentInfo;

  const selectedCar = carsData.find(
    (car) => updateResponseKeyString(car.Vehicle).Code === carId
  );
  const selectedCarName = updateResponseKeyString(
    selectedCar.Vehicle.VehMakeModel
  ).Name;

  return (
    <>
      <div>
        <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{selectedCarName}</h1>
      </div>
      <a
        rel="noopener noreferrer"
        href="/"
        className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400  dark:text-gray-50"
      > </a>

    

      <div className="  mx-auto sm:p-10 md:p-16 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="/"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                The Best Activewear from the Nordstrom Anniversary Sale
              </a>
              <p className="text-xs dark:text-gray-400">
                By
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="text-xs hover:underline"
                >
                  Leroy Jenkins
                </a>
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>Insert the actual text content here...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
