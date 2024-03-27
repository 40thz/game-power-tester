import prizeImage from '@/assets/images/prize.png';
import { Prize } from '@/store/slices/game/types';

type Bar = {
  size: number;
  percent: number;
  prize: Prize | null;
};

export const GAMEBAR_COLORS_DEFAULT = ['#D1DEFB', '#B7C8ED', '#94AADC', '#7593D6', '#5878BE', '#3A5CA5', '#254B9D'];

export const GAMEBAR_COLORS_ACTIVE = ['#F65A5A', '#FF784E', '#FFAE4E', '#FFDF35', '#91E508', '#00D355', '#00B047'];

export const GAMEBAR = [
  {
    size: 18,
    percent: 100,
    prize: {
      image: prizeImage,
      name: 'Рубин',
    },
  },
  {
    size: 23,
    percent: 84,
    prize: null,
  },
  {
    size: 28,
    percent: 70,
    prize: null,
  },
  {
    size: 33,
    percent: 56,
    prize: null,
  },
  {
    size: 38,
    percent: 42,
    prize: null,
  },
  {
    size: 43,
    percent: 28,
    prize: null,
  },
  {
    size: 50,
    percent: 14,
    prize: null,
  },
] as Bar[];
