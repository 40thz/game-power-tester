import { useAppDispatch } from '@/store/hooks';
import { useState, useEffect } from 'react';
import { useGame } from './useGame';
import { finished, setPrize } from '@/store/slices/game';
import { GAMEBAR } from '@/constants/gameBar';

export const useProgressGameBar = () => {
  const {
    score,
    prize,
    triggers: { isStarted, isFinished, isHitting },
  } = useGame();

  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isFinished) return;

    // Обнуляет счетчик при рестарте игры
    if (isStarted && score === 0) {
      setCount(0);
    }

    // Триггер после отображения конечного результата
    // Записывает приз в стор (если он есть)
    if (isHitting && count === score) {
      const prize = getPrize();

      dispatch(finished());
      dispatch(setPrize(prize));
    }

    // Плавно увеличивает счетчик по выбитому числу
    const intervalId = setInterval(() => {
      if (count < score) {
        setCount(count + 1);
      }
    }, 500 / count);

    return () => clearInterval(intervalId);

    // Отключаю т.к зависимости которые рекомендуются
    // Тут не требуются
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, score]);

  // Получает приз из массива ячеек
  // По максимальному числу
  const getPrize = () => {
    const item = GAMEBAR.find((item) => item.percent <= count);

    if (!item) return null;

    return item.prize;
  };

  return { count, prize };
};
