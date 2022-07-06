import {
  Link
} from "react-router-dom";
import textStyle from "../styles/textstyle.module.css";
import cardStyle from '../styles/carcard.module.css';



const CarCard = (props) => {
  // console.log("vehicles", props.carInfo);
  return (
    <div className={cardStyle.cardContainer}>
      <div className={ cardStyle.cardImage}>
        <img
          className="lg:w-full"
          src={props.carInfo.PictureURL}
          alt="River"
        ></img>
      </div>

      <div className={ textStyle.textCenter }>
        <div className={textStyle.primaryColorText }>
          <span className={textStyle.subtitleXL }>
              {props.carName.Name}
          </span>
 
        </div>

        <p className={cardStyle.currencyCode}>
          {props.carTotalCharges.CurrencyCode}
        </p>
        <p className={cardStyle.rentalCost}>
          {props.carTotalCharges.EstimatedTotalAmount}
        </p>
      </div>

      <div className="px-3 pb-2 text-center">
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-normal text-gray-200 mr-2 mb-2">
          {props.carInfo.PassengerQuantity} Passengers
        </span>
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-normal text-gray-200 mr-2 mb-2">
          {props.carInfo.DoorCount} Doors
        </span>
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-normal text-gray-200 mr-2 mb-2">
          {props.carInfo.TransmissionType}
        </span>

        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-normal text-gray-200 mr-2 mb-2">
          {props.carInfo.AirConditionInd ? "AC" : "No AC"}
        </span>
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-normal text-gray-200 mr-2 mb-2">
          {props.carInfo.FuelType}
        </span>
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-normal text-gray-200 mr-2 mb-2">
          Buggage Quantity #{props.carInfo.BaggageQuantity}
        </span>
      </div>

      <div className="px-8 pt-4 pb-5 grid grid-cols-1 content-center ">
        <Link
          to={props.carDetailURL}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-sm font-medium rounded-md text-violet-800 bg-white hover:bg-violet-50"
        >
          {" "}
          More Details{" "}
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
