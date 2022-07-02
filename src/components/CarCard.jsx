const CarCard = (props) => {
  // console.log("vehicles", props.carInfo);
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg dark:bg-gray-800">
        <div className="px-3 pt-4 pb-2">
          <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            {props.carInfo.PassengerQuantity} Passengers
          </span>
          <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            {props.carInfo.DoorCount} Doors
          </span>
          <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            {props.carInfo.TransmissionType}
          </span>
        </div>

        <div className="pl-10 pr-10">
          <img
            className="w-full"
            src={props.carInfo.PictureURL}
            alt="River"
          ></img>
        </div>

        <div className="px-6 py-4 ">
          <div className="font-bold text-2xl mb-2"> {props.carName.Name} </div>
          <p className="inline-flex text-lg p-2">{props.carTotalCharges.CurrencyCode} </p>
          <p className="inline-flex p-2 text-1xl font-bold rounded-md text-violet-300">{props.carTotalCharges.EstimatedTotalAmount} </p>
          <p className="inline-flex text-sm">(estimate total) </p>
        </div>

        <div className="px-8 pt-4 pb-5 grid grid-cols-2 gap-1 content-evenly">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700"
            >
              {" "}
              Choose Car {" "}
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet-600 bg-white hover:bg-violet-50"
            >
              {" "}
              Learn more{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
