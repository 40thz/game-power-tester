import styles from './Background.module.scss';
import bgImg from '@/assets/images/bg_top.png';

export const Background = () => (
  <div className={styles.bg}>
    <img src={bgImg} />
  </div>
);
