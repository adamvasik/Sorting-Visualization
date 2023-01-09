import React, { useState } from 'react';
import './canvas.css';

const Canvas = ({ barChart }) => {
  return (
    <div className="canvas">
      {
        barChart.array.map((element, index) => {
          let background;
          if (barChart.swappers.includes(index)) {
            background = "mediumseagreen";
          } else if (barChart.pointer.includes(index)) {
            background = "darkred";
          } else {
            background = "azure";
          }

          return (
            <div
              className="bar"
              key={index}
              style={{
                height: `${element}px`,
                width: "10px",
                margin: "5px",
                backgroundColor: background,
                color: "black",
              }}
            ></div>
          );
        })
      }
    </div>
  );
};

export { Canvas };
