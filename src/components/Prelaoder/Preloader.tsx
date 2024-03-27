import styles from './Preloader.module.scss';

export const Preloader = () => {
  return (
    <section className={styles.preloader}>
      <span className={styles.loader}></span>
    </section>
  );
};
