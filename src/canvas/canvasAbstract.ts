import config from "../config";

abstract class CanvasAbstract {
  constructor(
    protected app = document.querySelector<HTMLCanvasElement>('#app')!,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d'),
  ) {
    el.width = config.canvas.width;
    el.height = config.canvas.height;
    app.insertAdjacentElement('afterbegin', el);
  }
}

export default CanvasAbstract;