import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Langing() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      console.log(countries);
    });
  }, []);
  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return num / (1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  return (
    <div className="flex flex-wrap">
      {countries.map((el) => {
        return (
          <div className="w-[300px] h-[400px] bg-blue-200 m-2">
            <h1 className="text-3xl font-bold underline">{el.name.common}</h1>
            <img src={`${el.flags.png}`} alt="" />
            <p>{numFormatter(parseInt(el.population))}</p>
          </div>
        );
      })}
    </div>
  );
}
