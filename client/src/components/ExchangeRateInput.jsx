import { useEffect, useState } from "react";
import classes from "../cssModules/ExchangeRateInput.module.css";

import { useSelector } from "react-redux";


function ExchangeRateInput({title, name}) {
  const [exchangeRate, setExchangeRate] = useState(null);


  // GETTING ALL THE CURRENCIES
  const currencies = useSelector((state) => state.currencies.value);      

  // GETTING THE SELECTED BASE & TARGET CURRENCY
  const selectedCurrencies = useSelector((state) => state.selectedCurrencies.value);

  const baseCurrency = selectedCurrencies?.baseCurrency;
  const targetCurrency = selectedCurrencies?.targetCurrency;
  

  useEffect(() => {
    if(baseCurrency && targetCurrency) {

      // FINDING THE OBJECT THAT CONTAINS BOTH BASE & TARGET CURRENCY
      const exchangeCurrency = (currencies || []).find((object) => object.baseCurrency == baseCurrency && object.targetCurrency == targetCurrency);

      if(exchangeCurrency) {
        setExchangeRate(exchangeCurrency.rate);
      } else {
        setExchangeRate(null);
      }
    }
  }, [baseCurrency, targetCurrency, currencies]);

 
  
  
  function handleInputChange(e) {
    setExchangeRate(e.target.value);
  };



  return (
    <div className={classes.container}>
      <label className={classes.label}>{title ? title : ""}</label>
      <input 
        className={classes.inputContainer} 
        name={name}
        type="number"
        disabled
        value={exchangeRate || ''}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default ExchangeRateInput