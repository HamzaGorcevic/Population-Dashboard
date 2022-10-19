import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Langing() {
  const [countries, setCountries] = useState([]);
  const [points, setPoints] = useState(0);
  const ref = useRef(false);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
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

  function randomCountry() {
    while (countries.length !== 0) {
      let randomCounteries = Array(2)
        .fill()
        .map(() => {
          return countries[Math.floor(Math.random() * 200)];
        });

      return randomCounteries;
    }
  }
  function CorrectAnswer(value, country) {
    if (value === "higher") {
      if (country[1].population > country[0].population) {
        setPoints(points + 1);
      } else {
        setPoints(0);
      }
    } else {
      if (country[1].population < country[0].population) {
        setPoints(points + 1);
      } else {
        setPoints(0);
      }
    }
  }
  function CorrectAnswerFinal(value, country) {
    ref.current = !ref.current;
    setTimeout(() => {
      CorrectAnswer(value, country);
      ref.current = false;
    }, 1000);
  }
  let arr = [];
  return (
    <div className="flex flex-wrap content-center justify-center">
      <h1 className="absolute top-0 text-red-500 text-3xl">{points}</h1>
      {randomCountry()?.map((country, index) => {
        arr.push(country);
        return (
          <div className="w-[700px] h-[700px] bg-blue-500 m-2 p-2 border gap-x-2.5">
            <h1 className="text-3xl font-bold text-white">
              {country.name.common}
            </h1>
            <img
              className="h-[50%] w-screen shadow-xl"
              src={`${country.flags.png}`}
              alt=""
            />
            {ref.current ? (
              <h1 className="text-2xl text-white ">
                {numFormatter(parseInt(country.population))}
              </h1>
            ) : (
              ""
            )}
            {index === 1 ? (
              <div className="relative w-full lg:max-w-sm">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={(el) => {
                    CorrectAnswerFinal(el.target.innerText, arr);
                  }}
                >
                  higher
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={(el) => {
                    CorrectAnswerFinal(el.target.innerText, arr);
                  }}
                >
                  lower
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
