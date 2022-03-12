import ModelAbstract from './modelAbstract';
import image from "../service/image";
import wall from "../canvas/wall";

class Wall extends ModelAbstract implements IModel {
  name: string = 'wall';
  public canvas: ICanvas = wall;

  get image(): HTMLImageElement {
    return image.get('wall')!;
  }

  render() {
    super.deaw();
  }
}

export default Wall;