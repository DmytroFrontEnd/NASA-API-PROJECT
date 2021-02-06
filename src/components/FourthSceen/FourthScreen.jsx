import styles from "./FourthScreen.module.css";
const FourthScreen = () => {
  return (
    <div className="slide three">
      <div className={styles.container}>
        <h1 className={styles.about}>ABOUT</h1>
        <div className={styles.text}>
          <h4>
            On this web site was used public NASA API which you can found on the
            <span>
              <a href="https://api.nasa.gov/"> NASA API PORTAL. </a>
            </span>
            For the the Astronomy Picture of The day was used APOD API and for
            the Mars Weather was used Insight: Mars Weather Service API
          </h4>
          <h4>
            Please contact me if there any errors and also I will be glad if you
            share your impression of this web site or give me some advice, you
            can find me on this social media:
          </h4>
          <h4>
            <a
              className={styles.links}
              href="https://www.linkedin.com/in/dimitri001/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className={styles.links}
              href="https://www.instagram.com/_dimitrii/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default FourthScreen;
