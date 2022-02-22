import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Button, IconButton } from "@mui/material";

function ParrallaxDiv() {
  const parallax = useRef();

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <>
      <Button
        variant={"outlined"}
        className="absolute top-0 left-0 bg-slate-500 rounded cursor-pointer z-50"
        onClick={() => scroll(0)}
      >
        1
      </Button>
      <Button 
      variant="outlined"
        className="absolute top-0 left-[100px] bg-slate-500 rounded cursor-pointer z-50"
        onClick={() => scroll(1)}
      >
        2
      </Button>
      <Parallax horizontal={true} ref={parallax} pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default ParrallaxDiv;
