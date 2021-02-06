import styles from "./ThirdScreen.module.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const Sol = ({ data }) => {
  return (
    <div className={styles.solContainer}>
      {Object.entries(data).map((sol) => {
        return sol[1].First_UTC ? (
          <div key={sol[0]} className={styles.sol}>
            <Tippy content="Martian Day of the year">
              <h4>
                Sol: <span className={styles.elName}>{sol[0]}</span>
              </h4>
            </Tippy>
            <h6>
              <span className={styles.elName}>Season: </span>
              {sol[1].Season}
            </h6>
            <Tippy content="Time of first datum, of any sensor, for the Sol (UTC; YYYY-MM-DDTHH:MM:SSZ)">
              <h6>
                <span className={styles.elName}>First UTC: </span>
                {sol[1].First_UTC.substring(0, 10)}
              </h6>
            </Tippy>
            <Tippy content="Time of last datum, of any sensor, for the Sol (UTC; YYYY-MM-DDTHH:MM:SSZ)">
              <h6>
                <span className={styles.elName}>Last UTC: </span>
                {sol[1].Last_UTC.substring(0, 10)}
              </h6>
            </Tippy>
            <h6>Atmospheric pressure sensor summary data: </h6>
            <div className={styles.tippyDiv}>
              <Tippy content="Average of samples over the Sol">
                <h6>
                  <span className={styles.elName}>AT: </span>
                  {sol[1].PRE.av} Pa
                </h6>
              </Tippy>
              <Tippy content="Total number of recorded samples over the Sol">
                <h6>
                  <span className={styles.elName}>CT: </span>
                  {sol[1].PRE.ct}
                </h6>
              </Tippy>
              <Tippy content="Minimum data sample over the sol">
                <h6>
                  <span className={styles.elName}>MN: </span>
                  {sol[1].PRE.mn} Pa
                </h6>
              </Tippy>
              <Tippy content="Maximum data sample over the sol ">
                <h6>
                  <span className={styles.elName}>MX: </span>
                  {sol[1].PRE.mx} Pa
                </h6>
              </Tippy>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};
export default Sol;
