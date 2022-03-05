import config from "../config";

type MapKey = keyof typeof config.images;

export const image = new Map<MapKey, HTMLImageElement>();

export const promises = Object.entries(config.images).map(([key, val]) => {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = val;
    img.onload = () => {
      image.set(key as MapKey, img);
      resolve(img);
    }
  });
});

export default image;