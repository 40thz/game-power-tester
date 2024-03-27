import styles from './GameBar.module.scss';
import measureImage from '@/assets/images/measure_main.png';
import { Box, Prize } from './ui';
import { useProgressGameBar } from '@/hooks/useProgressGameBar';
import { GAMEBAR } from '@/constants/gameBar';

export const GameBar = () => {
  const { count, prize } = useProgressGameBar();

  return (
    <section className={styles.gamebar}>
      <img src={measureImage} alt="Шкала отображения силы" />

      <div className={styles.gamebar_inner}>
        <Prize prize={prize} />

        {GAMEBAR.map(({ size, percent }, i) => (
          <Box key={size} height={size} index={i} active={percent <= count} />
        ))}
      </div>
    </section>
  );
};
