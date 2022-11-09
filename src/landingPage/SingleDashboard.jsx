import { useEffect } from "react";
import { useState } from "react";
import "./cactus.css";
export default function Cactus({ pop, overall, arr }) {
  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return num / (1000).toFixed(1); // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1); // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  console.log(Math.max(...arr), Math.min(...arr));

  function formatPopulationForHeight(pop) {
    if (
      Math.max(...arr).toString().length > Math.min(...arr).toString().length
    ) {
    }
    if (pop > 999 && pop < 100000) {
      return { pop: pop / 100, color: "#41F253" };
    } else if (pop > 99999 && pop < 10000000) {
      return { pop: pop / 10000, color: "#469d50" };
    } else if (pop > 9999999 && pop < 10000000000) {
      return { pop: pop / 1000000, color: "#25642d" };
    }
  }

  return (
    <div
      className="m-[50px]"
      style={{
        height: `${
          formatPopulationForHeight(overall).pop / 10 > 80
            ? formatPopulationForHeight(pop.value).pop / 10 - 20
            : formatPopulationForHeight(pop.value).pop / 10
        }%`,
      }}
    >
      <div
        style={{
          background: formatPopulationForHeight(pop.value).color,
          height: "100%",
        }}
        className="cactus-body"
      >
        <div
          style={{ background: formatPopulationForHeight(pop.value).color }}
          className="arm left"
        >
          <div
            style={{ background: formatPopulationForHeight(pop.value).color }}
            className="leftt"
          ></div>
        </div>
        <div
          className="arm right"
          style={{ background: formatPopulationForHeight(pop.value).color }}
        >
          <div
            style={{ background: formatPopulationForHeight(pop.value).color }}
            className="rightt"
          ></div>
        </div>
      </div>
    </div>
  );
}
