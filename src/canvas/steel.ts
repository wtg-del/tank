import config from "../config";
import CanvasAbstract from "./canvasAbstract";
import model from "../model/steel";

class Steel extends CanvasAbstract implements ICanvas {
  get name()  {
    return 'steel';
  };

  get num() {
    return config.steel.num;
  }

  get model() {
    return model;
  }

  render() {
    super.createModels();
    super.renderModels();
  }
}

const steel = new Steel();
export default steel;