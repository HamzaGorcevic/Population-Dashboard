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

    while (popValue >= 1500) {
      popValue /= 10;
    }
    return { pop: popValue, color: "#178922c7" };
  }
  console.log(parseInt(String(overall)[0]), String(Math.round(overall)).length);
  console.log(formatPopulationForHeight(pop.value).pop / 2);
  return (
    <div
      className="mx-[90px]  flex flex-col items-center "
      style={{
        height: `${
          parseInt(String(overall)[0]) <= 5 &&
          String(Math.round(overall)).length < 10
            ? formatPopulationForHeight(pop.value).pop / 2 + 300
            : formatPopulationForHeight(pop.value).pop / 2
        }px`,
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
