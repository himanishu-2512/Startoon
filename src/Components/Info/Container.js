import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Container({props}) {
  return (
    <>
      <div className="w-[90%] bg-[#002647] mt-5 shadow-xl shadow-[#7d7d7d] h-[180px] rounded-xl flex flex-col items-center">
        <div className="text-white pt-3 ">Goal Reached</div>
        <div className="flex justify-between w-[80%]">
          <div className="w-[150px] mt-5">
            <CircularProgressbar
              value={props.percentage}
              text={props.percentage+"%"}
              circleRatio={0.5}
              styles={buildStyles({
                rotation: 0.75,
                strokeLinecap: "butt",
                path: { stroke: "#fcb000" },
                trailColor: "#bcbcbc",
                pathColor: "#fcb000",
                textColor: "white",
                textSize: "12px",
              })}
            ></CircularProgressbar>
          </div>
          <div>
            <div className="w-[60px] h-[40px] m-3 bg-white relative rounded-md">
              <div className="pl-1 text-sm">EMG</div>
              <div className="absolute bottom-0 left-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#37dd0d"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[60px] h-[40px] m-3 bg-white relative rounded-md">
              <div className="pl-1 text-sm">ROM</div>
              <div className="absolute bottom-0 left-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#df0100"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
