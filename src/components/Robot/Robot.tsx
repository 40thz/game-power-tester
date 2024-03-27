import styles from './Robot.module.scss';
import robot1Img from '@//assets/images/robot_1.svg';
import robot2Img from '@//assets/images/robot_2.svg';
import robot3Img from '@/assets/images/robot_3.svg';
import { useGame } from '@/hooks/useGame';

export const Robot = () => {
  const {
    score,
    triggers: { isHitting, isFinished, isStarted, isStopped },
  } = useGame();

  const renderRobot = () => {
    if (isStarted || isStopped || (isFinished && score < 100)) {
      return <img src={robot1Img} alt="Робот" />;
    }

    if (isHitting) {
      return <img className={styles.robot_anim} src={robot2Img} alt="Робот" />;
    }

    if (isFinished && score >= 100) {
      return <img className={styles.robot_anim} src={robot3Img} alt="Робот" />;
    }
  };

  return <section className={styles.robot}>{renderRobot()}</section>;
};
