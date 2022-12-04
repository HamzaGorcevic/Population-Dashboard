import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../SearchCountry";
import Cactus from "./SingleDashboard";
export default function Langing() {
  const [country, setCountry] = useState("");
  const [name, setName] = useState("serbia");
  const [population, setPopulation] = useState([]);
  const [overall, setOverall] = useState(0);
  const [arrForPop, setArrForPop] = useState([]);

  // https://countryflagsapi.com/png/ link za slike
  let helper = 0;
  let arr = [];

  useEffect(() => {
    axios({
      method: "post",
      url: "https://countriesnow.space/api/v0.1/countries/population",
      data: {
        country: `${name}`,
      },
    }).then((response) => {
      console.log(response.data.data.populationCounts, "What is this");
      let help = response.data.data.populationCounts;

      setPopulation(help);

      for (let i of response.data.data.populationCounts) {
        arr.push(i.value);

        helper += i.value;
        setOverall(helper / 29);
      }
      setArrForPop(arr);
    });
  }, [name]);
  return (
    <>
      <SearchBar country={country} setCountry={setCountry} setName={setName} />
      <div className="bg-yellow-500 h-screen flex justify-center items-end">
        <div className="bg-amber-600 flex items-end h-[600px] w-[80vw] rounded-2xl overflow-x-auto relative my-5">
          <div className="w-[80%]  flex flex-col gap-y-[60px] h-full bg-green-200">
            <div className="h-[1px] w-[100%]  bg-black"></div>
            <div className="h-[1px] w-[100%] bg-black"></div>
            <div className="h-[1px] w-[100%] bg-black"></div>
            <div className="h-[1px] w-[100%] bg-black"></div>
            <div className="h-[1px] w-[100%] bg-black"></div>
            <div className="h-[1px] w-[100%] bg-black"></div>
            <div className="h-[1px] w-[100%] bg-black"></div>
          </div>
          {population.map((pop) => {
            return <Cactus pop={pop} overall={overall} arr={arrForPop} />;
          })}
        </div>
      </div>
    </>
  );
}
