import { useEffect } from "react";
import { useState } from "react";
import "./cactus.css";
export default function Cactus({ pop, overall }) {
  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return num / (1000).toFixed(1); // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1); // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  function formatPopulationForHeight(pop) {
    if (pop > 999 && pop < 10000) {
      return pop / 10;
    } else if (pop > 9999 && pop < 100000) {
      return pop / 100;
    } else if (pop > 99999 && pop < 1000000) {
      return pop / 1000;
    } else if (pop > 999999 && pop < 10000000) {
      return pop / 10000;
    } else if (pop > 9999999 && pop < 100000000) {
      return pop / 100000;
    } else if (pop > 99999999 && pop < 1000000000) {
      return pop / 1000000;
    } else if (pop > 999999999 && pop < 10000000000) {
      return pop / 10000000;
    }
  }
  console.log();

  return (
    <div className="m-[50px]">
      {console.log(formatPopulationForHeight(overall), "in funck")}
      <div
        style={{
          height:
            formatPopulationForHeight(overall) < 500
              ? formatPopulationForHeight(pop.value) + 200
              : formatPopulationForHeight(pop.value),
        }}
        className="cactus-body"
      >
        <div className="arm left"></div>
        <div className="arm right"></div>
      </div>
    </div>
  );
}
