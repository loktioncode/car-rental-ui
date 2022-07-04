import { updateResponseKeyString, formartDate } from "../helpers/utils";

const Legend = (props) => {
  return (
    <legend className="sticky top-0 container max-w-6xl  mx-auto mt-5 rounded-lg shadow-lg bg-slate-900/80 text-gray-200 bg-slate-900 bg-opacity-60 backdrop-blur-lg">
      <div className="md:flex justify-around sm:flex-wrap py-6 px-5 md:px-2">
        <div className="md:flex-2 md:px-2 sm:text-center">


          {
            updateResponseKeyString(props.pickUpTimeData.PickUpLocation).Name
              === updateResponseKeyString(props.pickUpTimeData.ReturnLocation).Name ? (
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>



                <span className="text-sm md:text-base inline-block uppercase font-bold ">{updateResponseKeyString(props.pickUpTimeData.PickUpLocation).Name}</span>
              </div>)

              : (
                <>
                  <div>
                    <p className="text-xs inline-block capitalize font-bold">PickUp Location:</p>
                    <span className="text-lg inline-block md:uppercase sm:text-xs sm:text-center">{updateResponseKeyString(props.pickUpTimeData.PickUpLocation).Name}</span>
                  </div>
                  <div>
                    <p className="text-xs inline-block capitalize font-bold">Return Location:</p>
                    <span className="text-base md:text-sm inline-block md:uppercase sm:text-xs">{updateResponseKeyString(props.pickUpTimeData.ReturnLocation).Name}</span>
                  </div>
                </>

              )
          }

        </div>
        <div className="flex-3 md:flex-1 px-0 md:px-5">

          <div>

            <p className="text-xs inline-block lg:uppercase md:pr-1">PickUp Time :</p>
            <span className="text-sm md:text-base inline-block lg:uppercase">{formartDate(props.pickUpTimeData.PickUpDateTime)}</span>
          </div>



        </div>
        <div className="flex-3 md:flex-1">

          <div>
            <p className="text-xs inline-block lg:uppercase md:pr-1">Return Time :</p>
            <span className="text-sm md:text-base inline-block lg:uppercase ">{formartDate(props.pickUpTimeData.ReturnDateTime)}</span>
          </div>


        </div>
      </div>

    </legend>
  );
};

export default Legend;
