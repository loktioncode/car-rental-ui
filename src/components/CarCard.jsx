import {
  Link
} from "react-router-dom";
import textStyle from "../styles/textstyle.module.css";
import cardStyle from '../styles/carcard.module.css';
import btnStyle from '../styles/buttons.module.css';


const CarCard = (props) => {
  // console.log("vehicles", props.carInfo);
  return (
    <div className={cardStyle.cardContainer}>
      <div className={cardStyle.cardImage}>
        <img
          className="lg:w-full"
          src={props.carInfo.PictureURL}
          alt="River"
        ></img>
      </div>

      <div className={textStyle.textCenter}>
        <div className={textStyle.primaryTextColor}>
          <span className={textStyle.subtitleXL}>
            {props.carName.Name}
          </span>
        </div>

        <p className={textStyle.currencyCodeText}>
          {props.carTotalCharges.CurrencyCode}
        </p>
        <p className={textStyle.rentalCostText}>
          {props.carTotalCharges.EstimatedTotalAmount}
        </p>
      </div>

      <div className={textStyle.textCenter}>


        <div className={cardStyle.carInfoBox}>
          <p className={textStyle.bodyM}>
            {props.carInfo.PassengerQuantity} Passengers
          </p>
        </div>


        <div className={cardStyle.carInfoBox}>
          <p className={textStyle.bodyM}>
            {props.carInfo.DoorCount} Doors
          </p>
        </div>



        <div className={cardStyle.carInfoBox}>

          <p className={textStyle.bodyM}>
            {props.carInfo.TransmissionType}
          </p>

        </div>

        <div className={cardStyle.carInfoBox}>
          <p className={textStyle.bodyM}>
            {props.carInfo.AirConditionInd ? "AC" : "No AC"}
          </p>

        </div>



        <div className={cardStyle.carInfoBox}>
          <p className={textStyle.bodyM}>
            {props.carInfo.FuelType}
          </p>
        </div>


        <div className={cardStyle.carInfoBox}>
          <p className={textStyle.bodyM}>
            Buggage Quantity #{props.carInfo.BaggageQuantity}
          </p>
        </div>

      </div>

      <div className="px-8 pt-4 pb-5 grid grid-cols-1">


        <Link
          to={props.carDetailURL}

        >
          <button type="button" className={btnStyle.primaryBtn }>
            <span className={textStyle.bodyM}>
              More Details
            </span>
          </button>

        </Link>
      </div>

  
        
   


    </div>
  );
};

export default CarCard;
