import ModelAbstract from './modelAbstract';
import image from "../service/image";
import straw from "../canvas/straw";

class Straw extends ModelAbstract implements IModel {
  name: string = 'straw';
  public canvas: ICanvas = straw;

  get image() {
    return image.get('straw')!;
  }

  render() {
    super.deaw();
  }
}

export default Straw;