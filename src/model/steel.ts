import ModelAbstract from './modelAbstract';
import image from "../service/image";
import steel from "../canvas/steel";

class Steel extends ModelAbstract implements IModel {
  name: string = 'steel';
  public canvas: ICanvas = steel;

  get image() {
    return image.get('steel')!;
  }

  render() {
    super.deaw();
  }
}

export default Steel;