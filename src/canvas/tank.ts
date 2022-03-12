import config from "../config";
import CanvasAbstract from "./canvasAbstract";
import model from "../model/tank";
import position from "../service/position";

class Tank extends CanvasAbstract implements ICanvas {
  interval = 0;

  get name()  {
    return 'tanke';
  }

  get num() {
    return config.tank.num;
  }

  get model() {
    return model;
  }

  render() {
    this.createModels();
    this.interval = setInterval(this.renderModels, config.timeout);
  }

  stop() {
    clearInterval(this.interval);
  }

  protected createModels() {
    for(let i = 0; i < this.num; i++) {
      const pos = position.position();
      this.models.push(new this.model(pos.x, 0));
    }
   }

  renderModels = () => {
    super.renderModels();
  }
}

const tank = new Tank();
export default tank;