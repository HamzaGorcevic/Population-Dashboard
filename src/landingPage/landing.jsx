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
  const [loader, setLoader] = useState(false);

  // https://countryflagsapi.com/png/
  let avg = 0;
  let arr = [];

  useEffect(() => {
    setLoader(true);
    axios({
      method: "post",
      url: "https://countriesnow.space/api/v0.1/countries/population",
      data: {
        country: `${name}`,
      },
    }).then((response) => {
      setLoader(false);
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
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center justify-center relative">
      {loader ? (
        <div className="h-screen w-screen bg-white absolute top-0 z-10 flex justify-center items-center">
          <div className=" loader h-[5rem] w-[5rem]">
            <div className="inside flex w-full h-full flex-col justify-between">
              <div className="flex justify-between">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>

              <div className="flex justify-between">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <SearchBar country={country} setCountry={setCountry} setName={setName} />
      <h1
        className="mt-[5rem] bg-green-400 text-white"
        style={{ fontSize: 60 }}
      >
        Population for each country
      </h1>
      <div className="h-[8rem] w-[8rem]  my-11 relative blendMode ">
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
