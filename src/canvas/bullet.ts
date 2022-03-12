import CanvasAbstract from "./canvasAbstract";
import model from "../model/bullet";
import tank from "./tank";
import play from "./play";

class Bullet extends CanvasAbstract implements ICanvas {
  interval = 0;

  get name()  {
    return 'bullet';
  };

  get num() {
    return 0;
  }

  get model() {
    return model;
  }

  render() {
    this.interval = setInterval(() => {
      this.addBullet();
      super.renderModels();
    }, 50);
  }

  stop() {
    clearInterval(this.interval);
  }

  addBullet() {
    tank.models.forEach(tank => {
      if (!this.models.some(m => m.tank === tank)) {
        this.models.push(new this.model(tank));
      }
    });
  }

  addPlayBullet() {
    this.models.push(new this.model(play.models[0]));
  }
}

const bullet = new Bullet();
export default bullet;