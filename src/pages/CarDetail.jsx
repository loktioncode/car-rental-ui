import { useParams } from "react-router-dom";
import { updateResponseKeyString } from "../helpers/utils.js";
import {
  Link
} from "react-router-dom";

const CarDetails = (props) => {
  const { carId } = useParams();
  var carsData = props.availableCarsToRentInfo;
  var carInfo;

  const selectedCar = carsData.find(
    (car) => updateResponseKeyString(car.Vehicle).Code === carId
  );

  const selectedCarName = updateResponseKeyString(
    selectedCar.Vehicle.VehMakeModel
  );

  carInfo = updateResponseKeyString(selectedCar.Vehicle);

  return (
    <>
      <div className="px-2 text-left ">
      
      <Link to="/" className="inline-flex text-md">Home {" "}</Link>
     
      <p className="inline-flex pl-2 pr-2 text-md text-white"> / </p>
      <p className="inline-flex  text-lg font-bold rounded-md text-violet-200">
        Cars{" "}
      </p> 
      
     
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
              {selectedCar.Status}
            </span>
            <h1 className="text-3xl font-extrabold dark:text-gray-50">
              {selectedCarName.Name}
            </h1>

            {/* / */}
            <div className="px-2 text-center ">
      
              <p className="inline-flex text-md ">
                {updateResponseKeyString(selectedCar.TotalCharge).CurrencyCode}{" "}
              </p>
              <p className="inline-flex p-2 text-xl font-bold rounded-md text-violet-300">
                {updateResponseKeyString(selectedCar.TotalCharge).EstimatedTotalAmount}{" "}
              </p>
              <p className="inline-flex text-xs">(estimate total) </p>
            </div>

            <div className="px-2 ">
              <span className="uppercase shadow-lg shadow-indigo-500/10 inline-block px-10 py-4 text-sm font-semibold text-gray-200 mr-0 mb-2">
                {carInfo.PassengerQuantity} Passengers
              </span>
              <span className=" uppercase shadow-lg shadow-indigo-500/10 inline-block px-10 py-4 text-sm font-semibold text-gray-200 mr-1 mb-2">
                {carInfo.DoorCount} Doors
              </span>

              <span className="uppercase shadow-lg shadow-indigo-500/10 inline-block px-10 py-4 text-sm font-semibold text-gray-200 mr-1 mb-2">
                {carInfo.TransmissionType}
              </span>

              <span className="uppercase shadow-lg shadow-indigo-500/10 inline-block px-10 py-4 text-sm font-semibold text-gray-200 mr-1 mb-2">
                {carInfo.FuelType}
              </span>
              <span className="uppercase shadow-lg shadow-indigo-500/10 inline-block px-12 py-4 text-sm font-semibold text-gray-200 mr-1 mb-2">
                {carInfo.AirConditionInd ? "Air Con" : "No AC"}
              </span>
            </div>

            {/* <button
              type="button"
              className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              CHOOSE
            </button> */}
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
