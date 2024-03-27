import styles from './ProgressPower.module.scss';
import scale_2_img from '@/assets/images/scale-1.png';
import { useProgressPower } from '@/hooks/useProgressPower';

export const ProgressPower = () => {
  const { score } = useProgressPower();

  return (
    <section className={styles.progressbar}>
      <img src={scale_2_img} alt="Шкала отображения силы" />

      <div style={{ height: `${score}%` }} className={styles.progressbar_scale} />
    </section>
  );
};
