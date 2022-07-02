import {
  Link
} from "react-router-dom";

const CarCard = (props) => {
  // console.log("vehicles", props.carInfo);
  return (
    <div className="rounded overflow-hidden shadow-lg dark:bg-slate-900 content-center">
      <div className="pl-10 pr-10 pt-5">
        <img
          className="w-full"
          src={props.carInfo.PictureURL}
          alt="River"
        ></img>
      </div>

      <div className="px-6 py-4 text-center ">
        <div className="font-bold text-2xl mb-2 text-center">
          {" "}
          {props.carName.Name}{" "}
        </div>
        <p className="inline-flex text-lg p-1">
          {props.carTotalCharges.CurrencyCode}{" "}
        </p>
        <p className="inline-flex p-2 text-xl font-bold rounded-md text-violet-300">
          {props.carTotalCharges.EstimatedTotalAmount}{" "}
        </p>
        <p className="inline-flex text-sm">(estimate total) </p>
      </div>

      <div className="px-3 pb-2 ">
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {props.carInfo.PassengerQuantity} Passengers
        </span>
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {props.carInfo.DoorCount} Doors
        </span>
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {props.carInfo.TransmissionType}
        </span>

        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {props.carInfo.AirConditionInd ? "AC" : "No AC"}
        </span>
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {props.carInfo.FuelType}
        </span>
        <span className="shadow-lg shadow-indigo-500/10 inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          Buggage Quantity #{props.carInfo.BaggageQuantity}
        </span>
      </div>

      <div className="px-8 pt-4 pb-5 grid grid-cols-1 content-center ">
        <Link
          to={props.carDetailURL}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet-800 bg-white hover:bg-violet-50"
        >
          {" "}
          More Details{" "}
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
