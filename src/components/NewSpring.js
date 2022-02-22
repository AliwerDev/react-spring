import React from "react";
import { animated, useSpring } from "react-spring";

function NewSpring() {
  const myStyle = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <animated.div
        className={"w-[100px] h-[100px] rounded bg-slate-400"}
        style={myStyle}
      >Hello world</animated.div>
    </div>
  );
}

export default NewSpring;
