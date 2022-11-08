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

  // https://countryflagsapi.com/png/ link za slike
  let helper = 0;
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
        helper += i.value;
        setOverall(helper / 29);
      }
    });
  }, [name]);
  console.log("OVERALL this neam", overall);
  return (
    <>
      <SearchBar country={country} setCountry={setCountry} setName={setName} />
      <div className="bg-yellow-500 h-screen flex justify-center items-end">
        <div className="bg-amber-600 flex  items-end min-h-[80%] min-w-[80%] rounded-2xl overflow-scroll">
          {population.map((pop) => {
            return <Cactus pop={pop} overall={overall} />;
          })}
        </div>
      </div>
    </>
  );
}
