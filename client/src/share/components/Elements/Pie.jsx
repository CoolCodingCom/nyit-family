import React from "react";

import "./Pie.css";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ radius, colour, pct }) => {
  const circ = 2 * Math.PI * radius;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={radius}
      cx={183}
      cy={15}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.15rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    />
  );
};

const Text = ({ leftChar }) => {
  return (
    <text
      x="45%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"0.9em"}
    >
      {leftChar.toFixed(0)}
    </text>
  );
};

const Pie = ({ radius, percentage, colour, leftChar }) => {
  const pct = cleanPercentage(percentage);
  return (
    <div className="pie__container">
      <svg width={35} height={35}>
        {leftChar > -10 && (
          <g transform={`rotate(-90 ${"100 100"})`}>
            <Circle radius={radius} colour="lightgrey" />
            <Circle radius={radius} colour={colour} pct={pct} />
          </g>
        )}
        {leftChar <= 20 && <Text leftChar={leftChar} />}
      </svg>
    </div>
  );
};

export default Pie;
