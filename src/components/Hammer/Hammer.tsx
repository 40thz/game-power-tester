import styles from './Hammer.module.scss';
import hammerImg from '@/assets/images/hammer.png';
import cn from 'classnames';
import { useGame } from '@/hooks/useGame';

export const Hammer = () => {
  const {
    triggers: { isStarted, isHitting, isFinished },
  } = useGame();

  const classes = cn(styles['hammer'], {
    [styles.hammer_start]: isStarted,
    [styles.hammer_hit]: isHitting || isFinished,
  });

  return (
    <div className={classes}>
      <img src={hammerImg} alt="Молоток" />
    </div>
  );
};
