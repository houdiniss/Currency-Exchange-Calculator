import classes from "../cssModules/InputCurrency.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedCurrencies } from "../stateReducers/selectedCurrencies";

function BaseCurrency({ label, name }) {
  const [baseCurrency, setBaseCurrency] = useState("Select an option");
  const currencies = useSelector((state) => state.currencies.value);  
  const dispatch = useDispatch();



  function handleSelectChange(e) {
    const newBaseCurrency = e.target.value;
    setBaseCurrency(newBaseCurrency);

    dispatch(changeSelectedCurrencies({baseCurrency: newBaseCurrency}));
  };




  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="baseCurrency">{label}</label>
      <select 
        className={classes.inputContainer} 
        name={name} 
        id="baseCurrency"
        value={baseCurrency}
        onChange={handleSelectChange}
      >
        <option disabled>Select an option</option>
        {currencies.map((currency) => (
          <option 
            key={currency.name} 
            value={currency.name}
          >
            {currency.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BaseCurrency