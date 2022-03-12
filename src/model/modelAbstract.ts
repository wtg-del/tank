import config from "../config";
import { Direction } from "../enum/direction";
import audio from "../service/audio";

abstract class ModelAbstract {
  abstract render(): void;
  protected abstract name: string;
  public abstract canvas: ICanvas;
  abstract get image(): HTMLImageElement;
  public direction: Direction = Direction.top;
  public width = config.model.width;
  public height = config.model.height;

  constructor(
    public x:  number,
    public y: number
  ) {}

  protected deaw() {
    this.canvas.ctx.drawImage(this.image, this.x, this.y, config.model.width, config.model.height);
  }

  destroy() {
    this.canvas.removeModel(this as any);
    this.canvas.renderModels();
  }

  blast(model: IModel, tankName: string) {
    if (tankName === 'play') audio.blast();
    Array(...Array(8).keys()).reduce((promise, cur) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const img = new Image();
          img.src = `/src/static/images/blasts/blast${cur}.gif`
          img.onload = () => {
            this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height);
            resolve(promise);
          }
        }, 100);
      })
    }, Promise.resolve());
  }
}

export default ModelAbstract;