import CarCard from "./CarCard";
import CarFilter from "./Filter";
import Legend from "./Legend";
import { updateResponseKeyString } from "../helpers/utils";

const DisplayCars = (props) => {
  var allCars = props.allCars;

  var availableVendors = props.availableVendors;
  var availableCarsToRentInfo = props.availableCarsToRentInfo;

  const filterByVendor = (vendor) => {
    console.log(vendor);
    // const selectedVendor = allCars.find(
    //   (cars) => updateResponseKeyString(cars.Vendor).Name === vendor
    // );

    // console.log(">>", updateResponseKeyString(selectedVendor.VehAvails))
    // console.log(">>2", updateResponseKeyString(availableCarsToRentInfo))

    // return updateResponseKeyString(selectedVendor.VehAvails);
  };

  return (
    <>
      <section className="dark:text-gray-100">
        {availableVendors.length !== 0 ? (
          <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:text-gray-100">
            {availableVendors.map((vendor) => (
              <CarFilter
                key={vendor.Code}
                vendorName={vendor.Name}
                // filter={filterByVendor(vendor.Name)}
              />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Legend />
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {availableCarsToRentInfo.length !== 0 ? (
              availableCarsToRentInfo.map((car) => (
                <CarCard
                  key={updateResponseKeyString(car.Vehicle).Code}
                  carInfo={updateResponseKeyString(car.Vehicle)}
                  carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                  carTotalCharges={updateResponseKeyString(car.TotalCharge)}
                  carDetailURL={`/rentalcars/${
                    updateResponseKeyString(car.Vehicle).Code
                  }`}
                />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more cars...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayCars;
