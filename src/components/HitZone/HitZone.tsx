import styles from './HitZone.module.scss';
import buttonImg from '@/assets/images/button.png';
import buttonActiveImg from '@/assets/images/button_active.png';
import { Hammer } from '../Hammer';
import { useEffect, useState } from 'react';
import { useGame } from '@/hooks/useGame';

export const HitZone = () => {
  const {
    triggers: { isStarted, isStopped },
  } = useGame();

  const [buttonImage, setButtonImage] = useState(buttonImg);

  useEffect(() => {
    const updateButtonImage = () => {
      if (isStarted || isStopped) {
        setButtonImage(buttonImg);
      } else {
        setButtonImage(buttonActiveImg);
      }
    };

    const timeoutId = setTimeout(updateButtonImage, 150);

    return () => clearTimeout(timeoutId);
  }, [isStarted, isStopped]);

  return (
    <section className={styles.hitzone}>
      <img src={buttonImage} alt="Кнопка" />

      <Hammer />
    </section>
  );
};
