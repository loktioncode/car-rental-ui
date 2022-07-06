import React, { useContext, useEffect, useState } from "react";
import filterStyle from '../styles/filterbyprice.module.css';


const FilterByPrice = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);


    return (
        <>
            <form class={filterStyle.filterBox} method="get">
                <select name="orderby" class="orderby" onClick={toggling}>
                <option value="price" selected="selected">Default Sorting</option>
                <option value="price-asc"  onClick={() => props.low("ss")}>Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>

                </select>
                <input type="hidden" name="paged" value="1"></input>
            </form>
        </>
    );
};


export default FilterByPrice;






