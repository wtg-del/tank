import ModelAbstract from './modelAbstract';
import image from "../service/image";
import boss from "../canvas/boss";

class Boss extends ModelAbstract implements IModel {
  name: string = 'boss';
  public canvas: ICanvas = boss;

  get image() {
    return image.get('boss')!;
  }

  render() {
    super.deaw();
  }
}

export default Boss;