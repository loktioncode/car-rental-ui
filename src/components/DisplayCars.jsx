import CarCard from "./CarCard";


const DisplayCars = (props) => {
  return (
    <>
      <section className="dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
       
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* our grid sits in here */}
            <CarCard cars={""} />
            <a
              rel="noopener noreferrer"
              href="/"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                alt=""
                role="presentation"
                className="object-cover w-full rounded h-66 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?1"
              ></img>
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 21, 2021
                </span>
                <p className="text-lg">
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="/"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                alt=""
                role="presentation"
                className="object-cover w-full rounded h-66 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?2"
              ></img>
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 22, 2021
                </span>
                <p className="text-lg">
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="/"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                alt=""
                role="presentation"
                className="object-cover w-full rounded h-66 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?3"
              ></img>
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 23, 2021
                </span>
                <p className="text-lg">
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
          
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
