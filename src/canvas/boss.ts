import CanvasAbstract from "./canvasAbstract";
import model from "../model/boss";
import config from "../config";

class Boss extends CanvasAbstract implements ICanvas {
  get name()  {
    return 'boss';
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
    const x = config.canvas.width / 2;
    const y = config.canvas.height - config.model.height;
    this.models.push(new this.model(x, y));
  }
}

const boss = new Boss();
export default boss;