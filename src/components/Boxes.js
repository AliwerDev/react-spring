import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";

function Boxes() {
  const [toggle, setToggle] = useState(true);
  const { opacity, transform } = useSpring({
    opacity: toggle ? 1 : 0,
    transform: `perspective(600px) rotateX(${toggle ? 180 : 0}deg)`,
    config: config.molasses,
  });
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div
        onClick={() => setToggle((t) => !t)}
        className="relative w-[400px] h-[400px] rounded"
      >
        <animated.div
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
          className={
            "w-full h-full absolute top-0 left-0 bg-cover bg-[url('https://images.theconversation.com/files/399816/original/file-20210510-5797-xqoxsr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')]"
          }
        />
        <animated.div
          style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
          className={
            "w-full h-full absolute top-0 left-0 bg-cover bg-[url('https://dearsam.com/img/600/744/resize/n/a/nature-day-70x50_8ace0.jpg')]"
          }
        />
      </div>
    </div>
  );
}

export default Boxes;

// import React, { useState } from "react";
// import { animated, useSpring } from "react-spring";

// function Boxes() {
//   const [toggle, setToggle] = useState(false);

//   const { transform, opacity } = useSpring({
//     opacity: toggle ? 1 : 0,
//     transform: `perspective(600px) rotateX(${toggle ? 180 : 0}deg)`,
//   });

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center">
//       <div onClick={() => setToggle(ref => !ref)} className="relative w-[400px] bg-red h-[400px]">
//         <animated.div
//           className={
//             "absolute rounded-lg top-0 left-0 w-full h-full bg-cover cursor-pointer bg-[url('https://pv-magazine-usa.com/wp-content/uploads/sites/2/2019/10/FordEV-1200x800.jpeg')]"
//           }
//           style={{
//             opacity: opacity.interpolate((o) => 1 - o),
//             transform,
//           }}
//         />
//         <animated.div
//           className={
//             "absolute rounded-lg top-0 left-0 w-full h-full bg-cover cursor-pointer bg-[url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2021%2F10%2F22%2Fpink-camellias.jpg')]"
//           }
//           style={{
//             opacity,
//             transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Boxes;
