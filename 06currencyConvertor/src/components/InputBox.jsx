import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd", //Here bydefault we keep usd, if nothing comes it will take usd
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

    const amountInputId=useId();
    //The useId hook in React provides a unique ID that is stable across server and client rendering, which is especially useful in contexts where you need consistent identifiers for elements, such as for accessibility attributes like htmlFor in labels or id in inputs.
    //useId ensures that the id attribute for the input and the htmlFor attribute for the label are unique and consistent, avoiding potential conflicts if this component is rendered multiple times.
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value))
            // Here first we check if onAmountChange exists and than do operation with its value
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          {/* Pass key(unique field,id etc..) in loop for performance */}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
