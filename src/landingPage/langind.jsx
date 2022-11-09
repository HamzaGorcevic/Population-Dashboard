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
      setPopulation(response.data.data.populationCounts);
      for (let i of response.data.data.populationCounts) {
        arr.push(i.value);

        helper += i.value;
        setOverall(helper / 29);
      }
      setArrForPop(arr);
    });
  }, [name]);
  console.log("OVERALL this neam", overall);
  return (
    <>
      <SearchBar country={country} setCountry={setCountry} setName={setName} />
      <div className="bg-yellow-500 h-screen flex justify-center items-end">
        <div className="bg-amber-600 flex m-[25px]  items-end h-[500px] min-w-[80%] rounded-2xl overflow-scroll">
          {population.map((pop) => {
            return <Cactus pop={pop} overall={overall} arr={arrForPop} />;
          })}
        </div>
      </div>
    </>
  );
}
