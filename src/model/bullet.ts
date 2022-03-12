import ModelAbstract from './modelAbstract';
import image from "../service/image";
import bullet from "../canvas/bullet";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import tank from "../canvas/tank";
import { Direction } from '../enum/direction';
import { isCanvasTouch, isModelTouch } from '../utils';
import boss from '../canvas/boss';
import play from '../canvas/play';

class Bullet extends ModelAbstract implements IModel {
  name: string = 'bullet';
  canvas: ICanvas = bullet;
  tank: IModel;

  constructor(tank: IModel) {
    super(tank.x + tank.width / 2, tank.y + tank.height / 2);
    this.tank = tank;
    this.direction = tank.direction as Direction;
  }

  get image() {
    return image.get('bullet')!;
  }

  render() {
    this.move();
  }

  protected move() {
    let x = this.x;
    let y = this.y;
    const step = this.tank.name === 'play' ? 10 : 5;
    switch(this.direction) {
      case Direction.top:
        y -= step;
        break;
      case Direction.bottom:
        y += step;
        break;
      case Direction.left:
        x -= step;
        break;
      case Direction.right:
        x += step;
    }
    const touchModel = isModelTouch(x, y, 2, 2, [...wall.models, ...steel.models, ...boss.models, ...tank.models, ...play.models])
    if (isCanvasTouch(x, y, 2, 2)) {
      this.destroy();
    } else if (touchModel && touchModel.name !== this.tank.name) {
      this.blast(touchModel, this.tank.name);
      this.destroy();
      if (touchModel.name !== 'steel') touchModel?.destroy?.();
    } else {
      this.x = x;
      this.y = y;
      this.deaw();
    }
  }

  protected deaw() {
    this.canvas.ctx.drawImage(this.image, this.x, this.y, 2, 2);
  }
}

export default Bullet;