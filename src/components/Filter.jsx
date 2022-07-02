const CarFilter = (props) => {
  return (
    <a
      rel="noopener noreferrer"
      href="/"
      className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400 dark:text-gray-50"
    >
      {props.vendorName}
    </a>
  );
};

export default CarFilter;
