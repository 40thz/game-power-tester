import styles from './HitZone.module.scss';
import { Hammer } from '../Hammer';
import { useGame } from '@/hooks/useGame';
import cn from 'classnames';

export const HitZone = () => {
  const {
    triggers: { isHitting, isFinished },
  } = useGame();

  const classes = cn(styles['hitzone'], { [styles.active]: isHitting || isFinished });

  return (
    <section className={classes}>
      <Hammer />
    </section>
  );
};
