const popmotion = require("popmotion");
const { easing, keyframes, styler } = popmotion;

const divStyler = styler(document.querySelector(".box"));

keyframes({
  values: [
    { x: 0, y: 0, rotateY: 0, background: "#9B65DE" },
    { x: 300, y: 0, rotateY: 180, rotateX: 0, background: "#14D790" },
    { x: 300, y: 200, rotateY: 180, rotateX: 180, background: "#FF1C68" },
    { x: 0, y: 200, rotateY: 0, rotateX: 180, background: "#198FE3" },
    { x: 0, y: 0, rotateY: 0, rotateX: 0, background: "#9B65DE" },
  ],
  duration: 3000,
  easings: [
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut,
    easing.easeInOut,
  ],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(divStyler.set);
