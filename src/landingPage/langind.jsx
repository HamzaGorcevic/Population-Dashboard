import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../SearchCountry";
import Cactus from "./SingleDashboard";
import World from ".//album/africa.jpg";
import "./cactus.css";
export default function Langing() {
  const [country, setCountry] = useState("");
  const [name, setName] = useState("serbia");
  const [population, setPopulation] = useState([]);
  const [overall, setOverall] = useState(0);
  const [arrForPop, setArrForPop] = useState([]);

  // https://countryflagsapi.com/png/
  let avg = 0;
  let arr = [];

  useEffect(() => {
    axios({
      method: "post",
      url: "https://countriesnow.space/api/v0.1/countries/population",
      data: {
        country: `${name}`,
      },
    }).then((response) => {
      let help = response.data.data.populationCounts;

      setPopulation(help);

      for (let i = 0; i < response.data.data.populationCounts.length; i++) {
        arr.push(i.value);

        avg += response.data.data.populationCounts[i].value;
        setOverall(avg / i);
      }
      setArrForPop(arr);
    });
  }, [name]);
  return (
    <div className="bg-yellow-500 min-h-screen flex flex-col items-center justify-center">
      <SearchBar country={country} setCountry={setCountry} setName={setName} />

      <div className="h-[8rem] w-[8rem]  my-11 relative blendMode ">
        <img className="blend" src={World} alt="" />
        <img
          className="blend"
          src={`https://countryflagsapi.com/png/${name}`}
          alt=""
        />
      </div>
      <div className="bg-amber-600 flex items-end h-[46rem] w-[80vw] rounded-2xl overflow-x-auto ">
        {population.map((pop) => {
          return <Cactus pop={pop} overall={overall} arr={arrForPop} />;
        })}
      </div>
    </div>
  );
}
