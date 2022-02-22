import { Button } from "@mui/material";
import React, { useState } from "react";
import { animated, config, useTransition } from "react-spring";

export default function TransitionArr() {
  const [slide, setSlide] = useState(false);
  const transition = useTransition(slide, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
    config: config.default,

  });

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Button
        variant={"contained"}
        onClick={() => {
          setSlide((v) => !v);
        }}
      >
        Enter
      </Button>
      <div className="w-full mt-[100px] h-[200px]">
        {transition((style, item) =>
          item ? (
            <animated.div
              className={
                "w-[100px] h-[100px] mx-auto rounded flex justify-center items-center text-4xl text-white fond-bold bg-slate-500"
              }
              style={style}
            >
              {item.text}
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
