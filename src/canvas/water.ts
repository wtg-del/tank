import config from "../config";
import CanvasAbstract from "./canvasAbstract";
import model from "../model/water";

class Water extends CanvasAbstract implements ICanvas {
  get name()  {
    return 'water';
  }

  get num() {
    return config.water.num;
  }

  get model() {
    return model;
  }

  render() {
    super.createModels();
    super.renderModels();
  }
}

const water = new Water();
export default water;