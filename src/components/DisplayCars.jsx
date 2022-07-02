import CarCard from "./CarCard";
import CarFilter from "./Filter";
import { updateResponseKeyString } from "./utils.js";

const DisplayCars = (props) => {
  var allCars = props.allCars;
  var availableVendors = [];
  var availableCarsToRent = [];
  var availableCarsToRentInfo = [];

  for (var car in allCars) {
    availableVendors.push(updateResponseKeyString(allCars[car].Vendor));
    availableCarsToRent.push(allCars[car].VehAvails);
  }

  if (availableVendors.length === allCars.length) {
    for (var index in availableCarsToRent) {
      for (var i in availableCarsToRent[index]) {
        availableCarsToRentInfo.push(
          updateResponseKeyString(availableCarsToRent[index][i])
        );
        // availableCarsToRent.push(allCars[car].VehAvails);
      }
    }
  }

  if (availableCarsToRentInfo.length !== 0) {
    availableCarsToRentInfo.sort(function (a, b) {
      return (
        parseInt(updateResponseKeyString(a.TotalCharge).EstimatedTotalAmount) -
        parseInt(updateResponseKeyString(b.TotalCharge).EstimatedTotalAmount)
      );
    });

    console.log("sorted rentals desc order >>", availableCarsToRentInfo);
  }

  return (
    <>
      <section>
        {availableVendors.length === allCars.length ? (
          <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:text-gray-100">
            {availableVendors.map((vendor) => (
              <CarFilter key={vendor.Code} vendorName={vendor.Name} />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </section>

      <section className="dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* our grid sits in here */}
            {availableCarsToRentInfo.length !== 0 ? (
              availableCarsToRentInfo.map((car) => (
                <CarCard
                  key={updateResponseKeyString(car.Vehicle).Code}
                  carInfo={updateResponseKeyString(car.Vehicle)}
                  carName={updateResponseKeyString(car.Vehicle.VehMakeModel)}
                  carTotalCharges={updateResponseKeyString(car.TotalCharge)}
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
