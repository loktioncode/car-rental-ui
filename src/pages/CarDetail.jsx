import { useParams } from "react-router-dom";
import { updateResponseKeyString } from "../helpers/utils.js";
import {
  Link
} from "react-router-dom";

import carDetailStyle from "../styles/cardetailspage.module.css";
import textStyle from "../styles/textstyle.module.css";
import doorIcon from '../assets/Icons/door.svg';
import bagIcon from '../assets/Icons/bag.svg'
import fuelIcon from '../assets/Icons/fuel.svg'
import planeIcon from '../assets/Icons/plane.svg'
import personIcon from '../assets/Icons/person.svg'
import snowflakeIcon from '../assets/Icons/snowflake.svg'
import transmissionIcon from '../assets/Icons/transmission.svg'





const CarDetails = (props) => {
  const { carId } = useParams();
  const carsData = props.availableCarsToRentInfo;

  const selectedCar = carsData.find(
    (car) => updateResponseKeyString(car.Vehicle).Code === carId
  );

  const selectedCarName = updateResponseKeyString(
    selectedCar.Vehicle.VehMakeModel
  );

  const carInfo = updateResponseKeyString(selectedCar.Vehicle);

  return (
    <>
      <ol className="flex overflow-hidden ">
        <li className="flex items-center">

          <Link to="/" className="flex items-center h-10 px-4 transition-colors bg-gray-300 hover:text-violet-600"><span className="ml-1.5 font-medium text-sm"> Home </span></Link>
        </li>

        <li className="relative flex items-center">
          <span className="absolute inset-y-0 w-4 h-10 bg-gray-300 -left-px clip"> </span>

          <button
            className="flex items-center h-10 pl-8 pr-4 text-xs font-medium transition-colors bg-white hover:text-gray-900"

          >
            Car Details
          </button>
        </li>
      </ol>

      <section className="p-6">
        <div className={carDetailStyle.carDetailBox}>

          <div className={carDetailStyle.infoContainer}>

            <div className={carDetailStyle.infoBox}>
              <span className={textStyle.primaryTextColor}>
                {selectedCar.Status}
              </span>
              <h1 className={`${textStyle.titleXl} ${textStyle.primaryTextColor}`}>
                {selectedCarName.Name}
              </h1>

              {/* / */}
              <div className="px-2 py-6">

                <p className={textStyle.subtitleL}>
                  {updateResponseKeyString(selectedCar.TotalCharge).CurrencyCode}{" "}
         
                  {updateResponseKeyString(selectedCar.TotalCharge).EstimatedTotalAmount}{" "}
                </p>
                <p className={`${textStyle.bodyM} ${textStyle.primaryTextColor}`}>(total estimate) </p>
              </div>

              <div className={carDetailStyle.carAttributesBox}>
            
             
                <span className={textStyle.subtitleS}>
                <img className={carDetailStyle.iconStyle} src={personIcon}></img>
                  {carInfo.PassengerQuantity} Passengers
                </span>
                <span className={textStyle.subtitleS}>
                <img className={carDetailStyle.iconStyle} src={doorIcon}></img>
                  {carInfo.DoorCount}
                </span>

                <span className={textStyle.subtitleS}>
                <img className={carDetailStyle.iconStyle} src={transmissionIcon}></img>

                  {carInfo.TransmissionType}
                </span>

                <span className={textStyle.subtitleS}>
                <img className={carDetailStyle.iconStyle} src={fuelIcon}></img>

                  {carInfo.FuelType}
                </span>
                <span className={textStyle.subtitleS}>
                <img className={carDetailStyle.iconStyle} src={snowflakeIcon}></img>

                  {carInfo.AirConditionInd ? "Air Conditioner" : "No Air Conditioner"}
                </span>
              </div>

              {/* <button
              type="button"
              className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              CHOOSE
            </button> */}

            </div>

          </div>
          <div className="py-10">
            <img
              src={carInfo.PictureURL}
              alt=""
              className="w-full rounded-md xl:col-span-3 dark:bg-gray-500"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default CarDetails;
