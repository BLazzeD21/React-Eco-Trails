import React from 'react';
import { YMaps, Map, ObjectManager, ZoomControl } from '@pbe/react-yandex-maps';
import objectManagerFeatures from '../../store/mapPoints.js';

const YandexMap = () => {
  return (
    <YMaps
      query={{
        lang: 'en_RU',
        apikey: process.env.YANDEX_API,
        suggest_apikey: process.env.YANDEX_API,
      }}>

      <Map
        defaultState={{
          center: [59.94036903864435, 30.31806656252212],
          zoom: 8,
          controls: [],
        }}
        width={ '100%' }
        height={ '100vh'}
        instanceRef={(ref) => {
          ref && ref.behaviors.disable('scrollZoom');
        }}
      >
        <ObjectManager
          options={{
            clusterize: false,
            clusterHasBalloon: true,
            gridSize: 16,
            viewportMargin: 170,
          }}
          objects={{
            openBalloonOnClick: true,
            preset: 'islands#darkGreenDotIcon',
          }}
          clusters={{
            preset: 'islands#greenClusterIcons',
          }}
          defaultFeatures={objectManagerFeatures}
          modules={[
            'objectManager.addon.objectsBalloon',
            'objectManager.addon.objectsHint',
          ]}
        />
        <ZoomControl options={
          {
            position: {
              top: '250px',
              left: '15px',
            },
            size: 'large',
          }
        } />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
