import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrustToken() {
  const tasks = [
    {
      text: "TrustToken frees money to move to wherever it creates the most value - instantly. Borrow & Lend. Fully transparent uncollateralized lending, powered by TRU",
      keywords: ["Apache POI"],
    },
    {
      text: "Have developed Ethereum Energy contract and Frontend-with react, web3, ether.js",
      keywords: ["scripts"],
    },

    {
      text: "Designed, single-handedly, UX/UI for end-to-end wastemanagement logistics platform, namely the work ordercollection, managing resources (drivers/vehicles), work ordertimeline planning, live dispatch management, close shift andreporting",
      keywords: ["Figma"],
    },
    {
      text: "Developed Smart Contract with solidity and Defi",
      keywords: ["non-developers"],
    },
    {
      text: "Introduce the embedded signature wallet on existing system",
      keywords: ["non-developers"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full-Stack Web Developer{" "}
            <span className="text-AAsecondary">@ BrainSmiths Labs</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            August 2018 - January 2020
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
