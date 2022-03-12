import ModelAbstract from './modelAbstract';
import image from "../service/image";
import water from "../canvas/water";

class Water extends ModelAbstract implements IModel {
  name: string = "water";
  public canvas: ICanvas = water;

  get image(): HTMLImageElement {
    return image.get('water')!;
  }

  render() {
    super.deaw();
  }
}

export default Water;