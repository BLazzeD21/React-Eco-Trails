import image1 from '../../public/images/places/1.jpg';
import image2 from '../../public/images/places/2.jpg';
import image3 from '../../public/images/places/3.jpg';
import image4 from '../../public/images/places/4.jpg';
import image5 from '../../public/images/places/5.jpg';
import image6 from '../../public/images/places/6.jpg';
import image7 from '../../public/images/places/7.jpg';
import image8 from '../../public/images/places/8.jpg';
import image9 from '../../public/images/places/9.jpg';
import image10 from '../../public/images/places/10.jpg';
import image11 from '../../public/images/places/11.jpg';

export const images = [image1, image2, image3,
  image4, image5, image6,
  image7, image8, image9,
  image10, image11,
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
