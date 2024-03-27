import cn from 'classnames';
import styles from './Control.module.scss';
import { Button } from '../Button';
import { useAppDispatch } from '@/store/hooks';
import { hitToButton, start, reset, GAME_STATUS } from '@/store/slices/game';
import { useGame } from '@/hooks/useGame';
import { WelcomeTitle, HitTtile, FinishTitle, PrizeTitle } from './ui';

const title = {
  [GAME_STATUS.STOP]: <WelcomeTitle />,
  [GAME_STATUS.START]: <HitTtile />,
  [GAME_STATUS.HIT]: <HitTtile />,
  [GAME_STATUS.FINISH]: <FinishTitle />,
};

const buttonText = {
  [GAME_STATUS.STOP]: 'Новая игра!',
  [GAME_STATUS.START]: 'Удар!',
  [GAME_STATUS.HIT]: 'Удар!',
  [GAME_STATUS.FINISH]: 'Новая игра!',
};

export const Control = () => {
  const {
    prize,
    status,
    triggers: { isStarted, isHitting, isStopped, isFinished },
  } = useGame();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isStopped) {
      dispatch(start());
    }

    if (isStarted) {
      dispatch(hitToButton());
    }

    if (isFinished) {
      dispatch(reset());
    }
  };

  const classes = cn(styles['control'], { [styles.active]: isHitting });

  return (
    <section className={classes}>
      <div className={styles.control_inner}>
        <h1 className={styles.control_title}>
          {/* Если выигрыша нет */}
          {!prize && title[status]}

          {/* Если выигрыш есть */}
          {isFinished && prize && <PrizeTitle name={prize.name} />}
        </h1>
      </div>

      <Button onClick={handleClick} active={isStarted} disabled={isHitting}>
        {buttonText[status]}
      </Button>
    </section>
  );
};
