import styles from "./ThirdScreen.module.css";
import { useEffect, useState } from "react";
import Sol from "./Sol";

const ThirdScreen = () => {
  const API_KEY = "E2yibYfhl3owla9uHSeARmak9Hk6hChjrYnZjIPe";
  const API_REQUEST = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
  const [data, setData] = useState(null);
  const getData = async () => {
    const response = await fetch(API_REQUEST);
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="slide four">
      <div className={styles.container}>
        <div className={styles.explaining}>
          <div>
            * InSight has temporarily suspended daily weather measurements. As
            more data becomes available, it will appear below.
          </div>
          <div>* scroll down to see more data</div>
          <div>* hover the element to see what it means</div>
        </div>
        <h1 className={styles.marsWeather}>Mars Weather</h1>
        <div>{data ? <Sol data={data} /> : null}</div>
      </div>
    </div>
  );
};

export default ThirdScreen;
