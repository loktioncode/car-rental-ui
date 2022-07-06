
import filterStyle from '../styles/filterbyprice.module.css';


const FilterByPrice = ({ value, options, onChange }) => {

    return (

        <div className={filterStyle.filterBox} >
            <select value={value} onChange={onChange} >
                {options.map((option) => (
                    <option key={Math.random()} value={options.value}>{option.label}</option>
                ))}
            </select>
        </div>

    );
};


export default FilterByPrice;






