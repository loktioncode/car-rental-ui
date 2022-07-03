import { updateResponseKeyString, formartDate } from "../helpers/utils";

const Legend = (props) => {
  return (
    <legend className="">

      <div className="px-2 py-2 dark:text-gray-500">
        <div className="flex items-center container md:justify-between py-2">
          <div>
            <p className="text-sm inline-block capitalize lg:font-bold">PickUp Location:&nbsp;</p>
            <span className="text-lg inline-block lg:pl-4 lg:pr-4 lg:uppercase sm:text-xs">{updateResponseKeyString(props.pickUpTimeData.PickUpLocation).Name}</span>
          </div>

          <div>
            <p className="text-sm inline-block capitalize lg:font-bold ">Return Location:&nbsp;</p>
            <span className="text-lg inline-block lg:pl-4 lg:pr-4 lg:uppercase sm:text-xs">{updateResponseKeyString(props.pickUpTimeData.ReturnLocation).Name}</span>
          </div>
          
        </div>

        <div className="flex items-center container md:justify-between py-2">
          <div>
            
            <p className="text-sm inline-block capitalize lg:font-bold">PickUp Time</p>
            <span className="text-base inline-block lg:pl-4 lg:pr-4 lg:uppercase sm:text-xs">{formartDate(props.pickUpTimeData.PickUpDateTime)}</span>
          </div>

          <div>
            <p className="text-sm inline-block capitalize lg:font-bold">Return Time</p>
            <span className="text-base inline-block lg:pl-4 lg:pr-4 lg:uppercase sm:text-xs">{formartDate(props.pickUpTimeData.ReturnDateTime)}</span>
          </div>
          
        </div>



      </div>
    </legend>
  );
};

export default Legend;
