import styles from "./FirstScreen.module.css";
const FirstScreen = () => {
  return (
    <div className="slide one">
      <div className={styles.container}>
        <h1 className={styles.header}>NASA</h1>
        <div className={styles.greeting}>
          <h1 className={styles.about}> Astronomy Picture of the Day</h1>
          <h1 className={styles.about}>&</h1>
          <h1 className={styles.about}>Weather on the Mars</h1>
          <h1 className={styles.arrow}>
            <i className="fas fa-arrow-right"></i>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default FirstScreen;
