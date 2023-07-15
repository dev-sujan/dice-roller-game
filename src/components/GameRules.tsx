import React from "react";

const GameRules = () => {
  return (
    <div className="bg-[#FBF1F1] inline-block p-5">
      <h2 className="text-2xl font-bold">How to play dice game</h2>
      <br />
      <ol className="text-base">
        <li>Select any number.</li>
        <li>Click on dice image.</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get 10 points.
        </li>
        <li>if you get wrong guess then 2 points will be dedcuted </li>
      </ol>
    </div>
  );
};

export default GameRules;
