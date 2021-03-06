import config from "../config";
import CanvasAbstract from "./canvasAbstract";
import model from "../model/straw";

class Straw extends CanvasAbstract implements ICanvas {
  get name()  {
    return 'straw';
  }

  get num() {
    return config.straw.num;
  }

  get model() {
    return model;
  }

  render() {
    super.createModels();
    super.renderModels();
  }
}

const straw = new Straw();
export default straw;