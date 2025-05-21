import ChickenIcon from '@/assets/ScreenImages/chicken.svg';
import HalalIcon from '@/assets/ScreenImages/halal.svg';
import MapIcon from '@/assets/ScreenImages/map.svg';
import React from 'react';

export type ScreenSliderType = {
  image: React.FC<any>;
  title: string;
  text: string;
};

export const ScreenSlider = [
  {
    image: ChickenIcon,
    title: 'Asal Ayam Terverifikasi',
    text: 'Kami melacak ayam dari peternakan terpercaya yang memenuhi standar kebersihan dan kesejahteraan hewan.',
  },

  {
    image: HalalIcon,
    title: 'Proses Halal Terverifikasi',
    text: 'Setiap penyembelihan dilakukan sesuai syariat Islam dan disertai sertifikat halal resmi.',
  },

  {
    image: MapIcon,
    title: 'Pantau Perjalanan Ayam Anda',
    text: 'Lacak setiap tahap perjalanan ayam broiler dari peternak hingga ke Rumah Potong Ayam',
  },
];
