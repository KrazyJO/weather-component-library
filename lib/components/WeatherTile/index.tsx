import styles from "./style.module.css"

export type WeatherTileProps = {
    city: string,
    degree: number,
    feelsLike: number,
    windSpeed: number,
    humidity: number,
    pressure: number,
}

export const WeatherTile = (props: {data: WeatherTileProps}) => {
    return (
        <div className={styles.weatherTile}>
            <div className={styles.top}>
                <div className={styles.city}>{props.data.city}</div>
                <img alt="weather symbol" src="https://openweathermap.org/img/wn/10d@2x.png" className={styles.weatherIcon}/>
            </div>
            <div className={styles.bottom}>
                <span className={styles.degrees}>25°C</span>
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <span className={styles.prop}>Feels Like</span>
                        <span className={styles.value}>23°C</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.prop}>Wind</span>
                        <span className={styles.value}>5 km/h</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.prop}>Humidity</span>
                        <span className={styles.value}>65%</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.prop}>Pressure</span>
                        <span className={styles.value}>1024 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
