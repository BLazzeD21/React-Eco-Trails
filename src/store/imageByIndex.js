import hawkLake from '../../public/images/places/hawkLake.jpg';
import swanBeach from '../../public/images/places/swanBeach.jpg';
import redLake from '../../public/images/places/redLake.jpg';
import sablinskieCaves from '../../public/images/places/sablinskieCaves.jpg';
import estateRoerich from '../../public/images/places/estateRoerich.jpg';
import ecohotelForest from '../../public/images/places/ecohotelForest.jpg';
import nizhneSvirskyNatureReserve from
  '../../public/images/places/nizhneSvirskyNatureReserve.jpg';
import ecoEstateBelovo from '../../public/images/places/ecoEstateBelovo.jpg';
import duderhofHeights from '../../public/images/places/duderhofHeights.jpg';
import lugaBay from '../../public/images/places/lugaBay.jpg';
import narvaBay from '../../public/images/places/narvaBay.jpg';

export const images = [
  hawkLake,
  swanBeach,
  redLake,
  sablinskieCaves,
  estateRoerich,
  ecohotelForest,
  nizhneSvirskyNatureReserve,
  ecoEstateBelovo,
  duderhofHeights,
  lugaBay,
  narvaBay,
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
