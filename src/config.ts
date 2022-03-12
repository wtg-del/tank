import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";
import tankTop from "./static/images/tank/top.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import bullet from "./static/images/bullet/bullet.jpg";
import boss from "./static/images/boss/boss.png";
import playTop from "./static/images/player/top.gif";
import playBottom from "./static/images/player/bottom.gif";
import playLeft from "./static/images/player/left.gif";
import playRight from "./static/images/player/right.gif";

const config = {
  timeout: 50,
  canvas: {
    width: 800,
    height: 500,
  },
  model: {
    width: 20,
    height: 20,
  },
  straw: {
    num: 120,
  },
  wall: {
    num: 60,
  },
  water: {
    num: 60,
  },
  steel: {
    num: 20,
  },
  tank: {
    num: 10,
  },
  images: {
    straw,
    wall,
    water,
    steel,
    tankLeft,
    tankRight,
    tankTop,
    tankBottom,
    bullet,
    boss,
    playTop,
    playBottom,
    playLeft,
    playRight,
  }
};

export default config;