import config from "../config";

export function firstToUpper(str: string): string {
  return str.toLowerCase().replace(/( |^)\w/g, l => l.toUpperCase());
};

export function isCanvasTouch(
  x: number,
  y: number,
  width: number,
  height: number,
) {
  return (
    x < 0 ||
    x + width > config.canvas.width ||
    y < 0 ||
    y + height > config.canvas.height
  );
};

export function isModelTouch(
  x: number,
  y: number,
  width: number,
  height: number,
  models: IModel[]
): IModel | undefined {
  return models.find(model => {
    const state =
      // 左边
      x + width <= model.x ||
      // 右边
      x >= model.x + model.width ||
      // 下边
      y + height <= model.y ||
      // 上边
      y >= model.y + model.height
      return !state;
  });
}