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
      <ol className="flex overflow-hidden text-gray-700 ">
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <Link to="/" className="flex items-center h-10 px-4 transition-colors bg-gray-300 hover:text-violet-600"><span className="ml-1.5 font-medium text-sm"> Home </span></Link>
        </li>

        <li className="relative flex items-center">
          <span className="absolute inset-y-0 w-4 h-10 bg-gray-300 -left-px clip"> </span>

          <button
            className="flex items-center h-10 pl-8 pr-4 text-xs font-medium transition-colors bg-white hover:text-gray-900"
           
          >
            Cars
          </button>
        </li>
      </ol>

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
