import image01 from '@/public/image/main-image-01.jpg';
import image02 from '@/public/image/main-image-02.jpg';
import image03 from '@/public/image/main-image-03.jpg';
import { ImageCardProps } from '@/components/Common/Card/ImageCard';

export const ItemsView: ImageCardProps[] = [
  {
    id: 0,
    title: 'Click',
    description: 'Click the library you want to use',
    image: image01,
  },
  {
    id: 1,
    title: 'Choose',
    description: 'Choose the badge what you want to generate',
    image: image02,
  },
  {
    id: 2,
    title: 'Copy',
    description: 'Copy the badge and paste it where you want to use it',
    image: image03,
  },
];
