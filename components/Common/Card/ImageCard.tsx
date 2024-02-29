'use client';

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export type ImageCardProps = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};

const ImageCard = ({ image, title, description }: ImageCardProps) => {
  return (
    <Card className="mt-6 w-1/3 min-w-[240px]">
      <CardHeader color="blue-gray" className="relative h-fit">
        <Image src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
};

export default ImageCard;
