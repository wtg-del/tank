import config from "../config";
import position from "../service/position";

abstract class CanvasAbstract {
  public models: IModel[] = [];
  abstract get name(): string;
  abstract render(): void;
  abstract get num (): number;
  abstract get model (): ModelConstructor | BulletModelConstructor;

  constructor(
    protected app = document.querySelector<HTMLCanvasElement>('#app')!,
    protected el = document.createElement('canvas'),
    public ctx = el.getContext('2d')!,
  ) {
    this.createCanvas();
  }

  /**
   * @description 创建画布
   */
  protected createCanvas() {
    
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.el.setAttribute('name', this.name);
    this.app.appendChild(this.el);
  }

  /**
   * @description 生成模式实例
   * @param num 
   * @param Model 
   */
  protected createModels() {
    position.getCollection(this.num).forEach(({ x, y }) => {
      this.models.push(new this.model(x as any, y));
    });
  }

  /**
   * @description 模型渲染到画布
   */
  renderModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    this.models.forEach(model => {
      model.render();
    })
  }

  removeModel(model: IModel) {
    this.models = this.models.filter(m => m !== model);
  }
}

export default CanvasAbstract;