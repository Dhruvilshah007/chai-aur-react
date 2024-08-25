import { useEffect, useState } from "react";

//use is added just for naming convention
//useCurrencyInfo is custom hook

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  return data;
}
//So here we are directly returning whole method, same as in useState, and we will get data which we can use in our manner


export default useCurrencyInfo;