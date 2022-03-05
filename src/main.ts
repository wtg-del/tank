import './style.scss';
import './reset.scss';
import config from './config';
import './canvas/straw';
import './canvas/tank';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';