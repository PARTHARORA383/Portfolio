import React from "react";

const keyboardLayout = [
  // ["Esc", "F1", "F2", "F3", "F4", "F5", "F6"],
  // ["~", "1", "2", "3", "4", "5", "6"],
  ["Tab", "Q", "W", "E", "R", "T"],
  ["Caps", "A", "S", "D", "F", "G"],
  ["Shift", "Z", "X", "C", "V" , "B"],
  ["Ctrl", "Win", "Alt", "Space"]
];

const getKeyWidth = (key) => {
  switch (key) {
    case "Backspace":
    case "Enter":
      return "w-24";
    case "Tab":
    case "Caps":
    case "Shift":
      return "w-20";
    case "Space":
      return "w-[160px]";
    case "Ctrl":
    case "Alt":
    case "Win":
      return "w-14";
    default:
      return "w-10";
  }
};

export default function Keyboard() {
  return (
    <div className=" text-neutral-200 p-4 rounded-lg w-full max-w-3xl mx-auto">
      <div className="space-y-2">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-1">
            {row.map((key, index) => (
              <div
                key={index}
                className={` border-neutral-700 border-[0.5px] rounded-md text-center text-sm py-2 ${getKeyWidth(
                  key
                )}`}
              >
                {key}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
