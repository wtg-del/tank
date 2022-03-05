import config from "../config";

type PositionType = { x: number, y: number };

class Position {
  collection: PositionType[] = [];

  public getCollection(num: number) {
    const ret = [] as PositionType[];
    while (num--) {
      while(true) {
        const position = this.position();
        if (!this.collection.some(c => c.x === position.x && c.y === position.y)) {
          ret.push(position);
          this.collection.push(position);
          break;
        }
      }
    }
    return ret;
  }

  protected position() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height + config.model.height * 2,
    }
  }
}

export default new Position();