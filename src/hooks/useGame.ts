import { useAppSelector } from '@/store/hooks';
import { gameModule } from '@/store/slices/game/selectors';
import { GAME_STATUS } from '@/store/slices/game/types';

export const useGame = () => {
  const { status, ...state } = useAppSelector(gameModule);

  return {
    status,
    ...state,
    triggers: {
      isStopped: status === GAME_STATUS.STOP,
      isStarted: status === GAME_STATUS.START,
      isFinished: status === GAME_STATUS.FINISH,
      isHitting: status === GAME_STATUS.HIT,
    },
  };
};
