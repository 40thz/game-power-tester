import { useEffect, useState } from 'react';
import { useGame } from './useGame';
import { POWER_PROGRESSBAR_FPS } from '@/constants/config';
import { useAppDispatch } from '@/store/hooks';
import { updateScore } from '@/store/slices/game';
import { randomIntFromInterval } from '@/utils/randomIntFromInterval';

export const useProgressPower = () => {
  const {
    triggers: { isStopped, isHitting, isFinished },
  } = useGame();

  const [score, setScore] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isStopped) {
      setScore(0);
    }

    // Триггер при нажатии на кнопку - "Удар!"
    // Записывает в стор выбитое число
    if (isStopped || isFinished || isHitting) {
      dispatch(updateScore(score));
      return;
    }

    const random = () => randomIntFromInterval(0, 140);

    let current = random();
    let count = 0;

    // Обновляет текущее максимальное число шкалы
    // Каждую секунду
    const updateCurrentIntervalId = setInterval(() => {
      current = random();
    }, 1000);

    // Плавно увеличивает счетчик
    // К максимальному числу - "current", или уменьшает
    const updateCounterInervalId = setInterval(() => {
      if (count === current) {
        current = random();
      }

      if (count < current) {
        count++;
      }

      if (count > current) {
        count--;
      }

      setScore(count);
    }, 500 / POWER_PROGRESSBAR_FPS);

    return () => {
      clearInterval(updateCurrentIntervalId);
      clearInterval(updateCounterInervalId);
    };

    // Отключаю т.к "score" тут не требуется
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isFinished, isHitting, isStopped]);

  return { score };
};
