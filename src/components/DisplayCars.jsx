import CarCard from "./CarCard";
import CarFilter from "./Filter";
import { updateResponseKeyString } from "./utils.js";

const DisplayCars = (props) => {
  var allCars = props.allCars;
  var availableVendors = [];

  for (var car in allCars) {
    availableVendors.push(updateResponseKeyString(allCars[car].Vendor));
  }

  return (
    <>
      <section>
        {availableVendors.length === allCars.length ? (
          <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:text-gray-100">
            {availableVendors.map((vendor) => (
              <CarFilter
                key={vendor.Code}
                vendorName={vendor.Name}
              />
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

            {allCars.map((car) => (
              <CarCard
                key={car.id}
                model={car.model}
                price={car.price}
                id={car.id}
                image={car.image}
                category={car.category}
              />
            ))}
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
