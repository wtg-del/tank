import config from "../config";
import image from "../service/image";

abstract class ModelAbstract {
  abstract render(): void;
  constructor(
    public canvas: CanvasRenderingContext2D,
    protected x:  number,
    protected y: number
  ) {}

  protected deaw() {
    this.canvas.drawImage(image.get('straw')!, this.x, this.y, config.model.width, config.model.height);
  }
}

export default ModelAbstract;