import config from "../config";
import position from "../service/position";

abstract class CanvasAbstract {
  protected models: IModel[] = [];
  abstract render(): void;

  constructor(
    protected app = document.querySelector<HTMLCanvasElement>('#app')!,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!,
  ) {
    this.createCanvas();
  }

  /**
   * @description 创建画布
   */
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement('afterbegin', this.el);
  }

  /**
   * @description 生成模式实例
   * @param num 
   * @param Model 
   */
  protected createModels(num: number, Model: ModelConstructor) {
    position.getCollection(num).forEach(({ x, y }) => {
      this.models.push(new Model(this.canvas, x, y));
    });
  }

  /**
   * @description 模型渲染到画布
   */
  protected renderModels() {
    this.models.forEach(model => {
      model.render();
    })
  }
}

export default CanvasAbstract;