import { GAMEBAR_COLORS_ACTIVE, GAMEBAR_COLORS_DEFAULT } from '@/constants/gameBar';
import styles from './Box.module.scss';
import { memo } from 'react';

type BoxProps = {
  height: number;
  index: number;
  active: boolean;
};

export const Box = memo(({ height, index, active }: BoxProps) => (
  <div
    style={{
      height,
      background: active ? GAMEBAR_COLORS_ACTIVE[index] : GAMEBAR_COLORS_DEFAULT[index],
    }}
    className={styles.box}
  />
));
