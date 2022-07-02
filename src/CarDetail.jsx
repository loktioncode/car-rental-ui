import { useParams } from "react-router-dom";
import { updateResponseKeyString } from "./helpers/utils.js";

const CarDetails = (props) => {
  const { carId } = useParams();
  var carsData = props.availableCarsToRentInfo;
  var carInfo;

  const selectedCar = carsData.find(
    (car) => updateResponseKeyString(car.Vehicle).Code === carId
  );
  
  const selectedCarName = updateResponseKeyString(
    selectedCar.Vehicle.VehMakeModel
  ).Name;

  carInfo = updateResponseKeyString(selectedCar.Vehicle);

  

  return (
    <>
      <div>
      
      </div>
      <a
        rel="noopener noreferrer"
        href="/"
        className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400  dark:text-gray-50"
      >
        {" "}
      </a>

      <section className="p-6 dark:text-gray-100">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <span className="block mb-2 dark:text-violet-400">
              {selectedCarName}
            </span>
            <h1 className="text-3xl font-extrabold dark:text-gray-50">
            {selectedCarName}
            </h1>
            <p className="my-8">
              <span className="font-medium dark:text-gray-50">
                Modular and versatile.
              </span>
              Fugit vero facilis dolor sit neque cupiditate minus esse accusamus
              cumque at.
            </p>
            <button
              type="button"
              className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              CHOOSE
            </button>
          </div>
          <img
            src={carInfo.PictureURL}
            alt=""
            className="w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
          
        </div>
      </section>
    </>
  );
};

export default CarDetails;
