import { updateResponseKeyString, formartDate } from "../helpers/utils";

const Legend = (props) => {
  return (
    <legend className="">

      <div className="px-8 py-2 dark:text-gray-500">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          <div>
            <p className="text-sm inline-block uppercase">PickUp Location:&nbsp;</p>
            <span className="text-lg inline-block pl-4 pr-4 uppercase">{updateResponseKeyString(props.pickUpTimeData.PickUpLocation).Name}</span>
          </div>

          <a href="/" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">


            <p className="text-sm inline-block uppercase font-bold">Return Location: </p>
            <span className="text-lg inline-block">
              {updateResponseKeyString(props.pickUpTimeData.ReturnLocation).Name}
            </span>

          </a>
        </div>


        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          
          <a href="/" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {/* <p className="text-sm inline-block uppercase">PickUp Time:</p> */}
            <span className="text-lg inline-block">
              {formartDate(props.pickUpTimeData.PickUpDateTime)}
            </span>

          </a>

          <a href="/" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {/* <p className="text-sm inline-block uppercase font-bold">Return Time: </p> */}
            <span className="text-lg inline-block">
              {formartDate(props.pickUpTimeData.ReturnDateTime)}
            </span>

          </a>
        </div>


      </div>
    </legend>
  );
};

export default Legend;
