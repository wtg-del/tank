import ModelAbstract from './modelAbstract';
import image from "../service/image";
import { Direction } from '../enum/direction';
import { firstToUpper, isModelTouch, isCanvasTouch } from '../utils';
import config from '../config';
import tank from "../canvas/tank";
import water from "../canvas/water";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import boss from '../canvas/boss';

class Tank extends ModelAbstract implements IModel {
  public name = 'tank';
  public canvas: ICanvas = tank;

  constructor(...props: [number, number]) {
    super(...props);
    this.randomrDirection();
  }

  render() {
    this.move();
    if (Math.floor(Math.random() * 10) === 1) {
      this.direction = Direction.bottom;
    }
  }

  protected move() {
    while(true) {
      let x = this.x;
      let y = this.y;
      switch(this.direction) {
        case Direction.top:
          y--;
          break;
        case Direction.bottom:
          y++;
          break;
        case Direction.left:
          x--;
          break;
        case Direction.right:
          x++;
      }
      const models = [...wall.models, ...water.models, ...steel.models, ...boss.models];
      if (
        isModelTouch(x, y, config.model.width, config.model.height, models) ||
        isCanvasTouch(x, y, config.model.width, config.model.height)
      ) {
        this.randomrDirection();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.deaw();
  }

  randomrDirection() {
    this.direction = Object.keys(Direction)[Math.floor(Math.random() * 4)] as Direction;
  }

  get image() {
    const imageKey = this.name + firstToUpper(this.direction) as keyof typeof config.images;
    return image.get(imageKey)!
  }
}

export default Tank;