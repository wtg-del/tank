import config from "../config";

type PositionType = { x: number, y: number };

class Position {
  collections: string[] = [];

  public getCollection(num: number) {
    const ret = [] as PositionType[];
    while (num--) {
      while(true) {
        const position = this.position();
        const key = `x:${position.x}|y:${position.y}`;
        if (!this.collections.includes(key)) {
          ret.push(position);
          this.collections.push(key);
          break;
        }
      }
    }
    return ret;
  }

  public position() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height + config.model.height * 2,
    }
  }
}

export default new Position();