import { ecotrailPoints } from './points';
import imageByIndex from './imageByIndex.js';


const objectManagerFeatures = {
  type: 'FeatureCollection',
  features: [],
};

ecotrailPoints.map((point, index) => {
  objectManagerFeatures.features.push({
    type: 'Feature',
    id: index,
    geometry: {
      type: 'Point',
      coordinates: point.coordinates,
    },
    properties: {
      hintContent: `<div class="hintContent">${point.shortName}</div>`,
      balloonContent:
      `
        <div class="balloonContent">
          <div class="balloonContent__title">${point.name}</div>
          <div class="balloonContent__img">
            <img src= "${imageByIndex(index)}" alt="${point.name}"></img>
          </div>
          <div class="balloonContent__descr">
            <p>${point.description.slice(0, 30) + '...'}</p>
          </div>
          <a href='https://yandex.ru/maps/?rtext=~${point.coordinates[0]}%2C${point.coordinates[1]}' target="_blank">
            <button class="balloonContent__btn">
              Построить маршрут
            </button>
          </a>
        </div>
      `,
    },
  });
});

export default objectManagerFeatures;


