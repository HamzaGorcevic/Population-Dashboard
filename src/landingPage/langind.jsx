import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../SearchCountry";

export default function Langing() {
  const [countries, setCountries] = useState([]);
  const [points, setPoints] = useState(0);
  const [show, setShow] = useState(false);
  const [mapCounteries, setMapCounteries] = useState([]);

  const [country, setCountry] = useState("");
  const [name, setName] = useState("serbia");

  // https://countryflagsapi.com/png/ link za slike

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return num / (1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  useEffect(() => {
    // axios
    //   .get("https://countriesnow.space/api/v0.1/countries/population", {
    //     params: { country: "nigeria" },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });
    axios({
      method: "post",
      url: "https://countriesnow.space/api/v0.1/countries/population",
      data: {
        country: `${name}`,
      },
    }).then((response) => {
      console.log(response);
    });
  }, [name]);
  let population = 200;
  console.log(name);
  return (
    <>
      <SearchBar country={country} setCountry={setCountry} setName={setName} />
      <div className="bg-yellow-500 h-screen flex justify-center items-center">
        <div className="w-96 h-[200px] bg-black"> nes</div>
        <div className={`bg-blue-400 w-96 h-[${population}px]`}>nelo</div>
      </div>
    </>
  );
}
