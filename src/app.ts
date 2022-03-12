import './style.scss';
import './reset.scss';
import config from './config';
import straw from './canvas/straw';
import wall from './canvas/wall';
import water from './canvas/water';
import steel from './canvas/steel';
import tank from './canvas/tank';
import bullet from './canvas/bullet';
import boss from './canvas/boss';
import play from './canvas/play';
import { promises } from './service/image';
import audio from './service/audio';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';

class App {
  interval = 0;
  state = 9;

  bootstrap() {
    app.addEventListener(
      'click',
      async () => {
        await this.start();
        this.runEvent();
        app.style.backgroundImage = 'none';
      },
      { once: true }
    );
  }

  runEvent() {
    this.interval = setInterval(() => {
      if (tank.models.length === 0) this.state = 1;
      if (play.models.length === 0 || boss.models.length === 0) this.state = 0;
      if (this.state !== 9) this.stop();
    }, 100);
  }

  async start() {
    audio.start();
    await Promise.all(promises);
    [straw, wall, water, steel, tank, bullet, boss, play].forEach(m => m.render());
  }

  async stop() {
    clearInterval(this.interval);
    bullet.stop();
    tank.stop();
    const canvas = document.createElement('canvas');
    canvas.width = config.canvas.width;
    canvas.height = config.canvas.height;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'red';
    ctx.font = '80px CascadiaMono';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(this.state == 1 ? '胜利了' : '输了，可惜了', config.canvas.width / 2, config.canvas.height / 2);
    app.appendChild(canvas)
  }
}

export default new App();