/// <reference types="vite/client" />

interface ModelConstructor {
  new(x: number, y: number): IModel;
}

interface BulletModelConstructor {
  new(tank: IModel): IModel;
}

interface IModel {
  name: string;
  render(): void;
  get image(): HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  tank?: IModel;
  direction: "top" | "bottom" | "left" | "right";
  destroy: () => void;
}

interface ICanvas {
  ctx: CanvasRenderingContext2D;
  get model(): ModelConstructor | BulletModelConstructor;
  get num(): number;
  removeModel: (model: IModel) => void;
  renderModels: () => void;
  stop?: () => void;
}