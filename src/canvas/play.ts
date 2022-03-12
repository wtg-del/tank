import config from "../config";
import CanvasAbstract from "./canvasAbstract";
import model from "../model/play";

class Play extends CanvasAbstract implements ICanvas {
  get name()  {
    return 'play';
  }

  get num() {
    return 0;
  }

  get model() {
    return model;
  }

  render() {
    this.createModels();
    super.renderModels();
  }

  protected createModels() {
    const cw = config.canvas.width;
    const ch = config.canvas.height;
    const mw = config.model.width;
    const mh = config.model.height;
    this.models.push(new this.model(cw / 2 + mw * 4, ch - mh));
  }
}

const play = new Play();
export default play;