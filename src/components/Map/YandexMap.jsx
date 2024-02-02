import React, { useEffect, useState } from 'react';
import { YMaps, Map, ObjectManager, ZoomControl } from '@pbe/react-yandex-maps';
import objectManagerFeatures from '../../store/mapPoints.js';

const YandexMap = () => {
  const height = document.documentElement.clientHeight;
  const [mapHeight, setMapHeight] = useState(height * 0.01);

  useEffect(() => {
    const handleResize = () => {
      setMapHeight(height * 0.01);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--mapHeight', `${mapHeight}px`);
  }, [mapHeight]);


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
        height={'calc(var(--mapHeight) * 100 - 115px)'}
        width={'100%'}
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
              top: 200,
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
