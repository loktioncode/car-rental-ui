const CarCard = (props) => {
  return (
    <>
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
           Car Card
          </h3>
          <span className="text-xs dark:text-gray-400">January 21, 2021</span>
          <p className="text-lg">
            Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
            neglegentur, ex has tantas percipit perfecto. At per tempor albucius
            perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
            indoctum pri.
          </p>
        </div>
      </a>
    </>
  );
};

export default CarCard;
