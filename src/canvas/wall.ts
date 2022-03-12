import config from "../config";
import CanvasAbstract from "./canvasAbstract";
import model from "../model/wall";

class Wall extends CanvasAbstract implements ICanvas {
  get name()  {
    return 'wall';
  }

  get num() {
    return config.wall.num;
  }

  get model() {
    return model;
  }

  render() {
    this.createModels();
    this.createBossWall();
    super.renderModels();
  }

  createBossWall() {
    const cw = config.canvas.width;
    const ch = config.canvas.height;
    const mw = config.model.width;
    const mh = config.model.height;

    const pos = [
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2 - mw, y: ch - mh * 3 },
      { x: cw / 2, y: ch - mh * 3 },
      { x: cw / 2 + mw, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh },
    ];

    pos.forEach(({ x, y }) => {
      this.models.push(new this.model(x as any, y));
    });
  }
}

const wall = new Wall();
export default wall;