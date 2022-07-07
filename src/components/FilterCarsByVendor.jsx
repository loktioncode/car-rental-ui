import { updateResponseKeyString } from "../helpers/utils";
import React, { useContext } from "react";
import CarContext from "../car-context-api/CarContext";
import style from '../styles/filter.module.css';
import avisLogo from '../assets/Vendors/avis.svg';
import hertzLogo from '../assets/Vendors/hertz.svg';
import alamoLogo from '../assets/Vendors/alamo.svg'




const FilterByVendor = (props) => {
  const { filteredByVendor, filterState } = useContext(CarContext);
  const [, filterCarsByVendor] = filteredByVendor;
  const [, setVendorFilter] = filterState;


  const allCars = props.allCars;
  var filteredCars = [];

  const findCarsByVendor = (vendor) => {

    let selectedVendor = allCars.find(
      (cars) => updateResponseKeyString(cars.Vendor).Name === vendor
    );

    for (const key in updateResponseKeyString(selectedVendor.VehAvails)) {
      filteredCars.push(updateResponseKeyString(selectedVendor.VehAvails[key]));
    }
  };

  const filterAction = () => {
    findCarsByVendor(props.vendorName);
    filterCarsByVendor(filteredCars);
    setVendorFilter(true);
  }

  return (
    <button
      type="button"
      onClick={() => filterAction()}
      className={style.filterBtn}
    >
      {

        props.vendorName === "ALAMO" ? <img src={alamoLogo} alt={props.vendorName + " " + "logo"} className={style.vendorLogo} /> :
          props.vendorName === "AVIS" ? <img src={avisLogo} alt={props.vendorName + " " + "logo"} className={style.vendorLogo} /> :
            props.vendorName === "HERTZ" ? <img src={hertzLogo} alt={props.vendorName + " " + "logo"} className={style.vendorLogo} /> : props.vendorName

      }

    </button>
  );
};

export default FilterByVendor;
