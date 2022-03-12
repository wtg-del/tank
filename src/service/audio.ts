function audio(id: string) {
  const audio = document.querySelector<HTMLAudioElement>(id)!;
  return {
    play: () => audio.play(),
  }
}

export function start() {
  audio('#start').play();
}

export function fire() {
  audio('#fire').play();
}

export function blast() {
  audio('#blast').play();
}

export function add() {
  audio('#add').play();
}

export default {
  start,
  fire,
  blast,
  add,
}