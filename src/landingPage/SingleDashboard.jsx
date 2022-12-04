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
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  function formatPopulationForHeight(pop) {
    let popValue = pop;
    while (popValue >= 1000) {
      popValue /= 10;
    }
    return { pop: popValue, color: "#178922c7" };
  }

  return (
    <div
      className="m-[90px]  flex flex-col items-center "
      style={{
        height: `${formatPopulationForHeight(pop.value).pop / 8 + 200}px`,
      }}
    >
      {formatPopulationForHeight(pop.value).pop ===
      formatPopulationForHeight(max).pop ? (
        <hr className="" />
      ) : (
        ""
      )}
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
      <h2 className="text-white">{pop.year}</h2>
    </div>
  );
}
