import styles from './App.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { Background, ProgressPower, GameBar, HitZone, Control, Robot, Preloader } from './components';
import { ResourceLoaderEvents, resourceLoader } from './utils/resourceLoader';

export const App = () => {
  const [resourceLoaded, setResourceLoaded] = useState(false);

  const onLoad = useCallback(() => setResourceLoaded(true), []);

  // Загружает все используемые изображения
  // После загрузки маунтит приложение
  useEffect(() => {
    void resourceLoader.on(ResourceLoaderEvents.Success, onLoad).load(30000);

    return () => void resourceLoader.off(ResourceLoaderEvents.Success, onLoad);
  }, [onLoad]);

  if (!resourceLoaded) return <Preloader />;

  return (
    <main className={styles.app}>
      <Background />
      <ProgressPower />
      <section className={styles.center}>
        <GameBar />
        <HitZone />
        <Control />
      </section>
      <Robot />
    </main>
  );
};
