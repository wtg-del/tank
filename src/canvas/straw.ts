import config from "../config";
import CanvasAbstract from "./canvasAbstract";
import Model from "../model/straw";

class Straw extends CanvasAbstract {
  constructor() {
    super();
    super.createModels(config.straw.num, Model);
  }
  render(): void {
    super.renderModels();
  }
}

const straw = new Straw();
export default straw;