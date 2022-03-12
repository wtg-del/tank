import ModelAbstract from './modelAbstract';
import image from "../service/image";
import { Direction } from '../enum/direction';
import { firstToUpper, isModelTouch, isCanvasTouch } from '../utils';
import config from '../config';
import play from "../canvas/play";
import wall from '../canvas/wall';
import water from '../canvas/water';
import steel from '../canvas/steel';
import boss from '../canvas/boss';
import bullet from '../canvas/bullet';
import audio from '../service/audio';

class Play extends ModelAbstract implements IModel {
  name = 'play';
  canvas: ICanvas = play;
  isBindEvent = false;

  constructor(...props: [number, number]) {
    super(...props);
  }

  render() {
    super.deaw();
    if (!this.isBindEvent) {
      this.isBindEvent = true;
      document.addEventListener('keydown', this.move);
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.code === 'Space') {
          audio.fire();
          bullet.addPlayBullet();
        }
      })
    }
  }

  protected move = (event: KeyboardEvent) => {
    let x = this.x;
    let y = this.y;
    switch (event.code) {
      case 'ArrowUp':
        y -= 10;
        this.direction = Direction.top;
        break;
      case 'ArrowDown':
        y += 10;
        this.direction = Direction.bottom;
        break;
      case 'ArrowLeft':
        x -= 10;
        this.direction = Direction.left;
        break;
      case 'ArrowRight':
        x += 10;
        this.direction = Direction.right;
        break;
    }
    const models = [...wall.models, ...water.models, ...steel.models, ...boss.models];
    if (
      isModelTouch(x, y, config.model.width, config.model.height, models) ||
      isCanvasTouch(x, y, config.model.width, config.model.height)
    ) {
      return;
    } else {
      this.x = x;
      this.y = y;
    }
    this.canvas.renderModels();
  }

  get image() {
    const imageKey = this.name + firstToUpper(this.direction) as keyof typeof config.images;
    return image.get(imageKey)!
  }
}

export default Play;