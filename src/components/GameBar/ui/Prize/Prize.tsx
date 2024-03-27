import cn from 'classnames';
import styles from './Prize.module.scss';
import prizeImg from '@/assets/images/prize.png';
import prizeGlowImg from '@/assets/images/layer_glow.png';
import { Prize as PrizeType } from '@/store/slices/game';
import { memo } from 'react';

type PrizeProps = {
  prize: PrizeType | null;
};

export const Prize = memo(({ prize }: PrizeProps) => {
  const classesPrize = cn([styles.prize], { [styles['active']]: prize });
  const classesPrizeGlow = cn([styles.prize_glow], { [styles['active']]: prize });

  return (
    <div className={classesPrize}>
      <div className={styles.prize_inner}>
        <div className={classesPrizeGlow}>
          <img src={prizeGlowImg} alt="Приз" />
          <div className={styles.prize_glow_image}>
            <img src={prize?.image} alt={prize?.name} />
          </div>
        </div>

        {!prize && <img src={prizeImg} alt="Приз" />}
      </div>
    </div>
  );
});
