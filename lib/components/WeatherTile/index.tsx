import styles from "./style.module.css"

export type WeatherTileProps = {
    city: string,
    degree: number,
    feelsLike: number,
    windSpeed: number,
    humidity: number,
    pressure: number,
}

export const WeatherTile = (props: WeatherTileProps) => {
    return (
        <div className={styles.weatherTile}>
            <div className={styles.top}>
                <div className={styles.city}>{props.city}</div>
                <img alt="weather symbol" src="https://openweathermap.org/img/wn/10d@2x.png" className={styles.weatherIcon}/>
            </div>
            <div className={styles.bottom}>
                <span className={styles.degrees}>{props.degree}°C</span>
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <span className={styles.prop}>Feels Like</span>
                        <span className={styles.value}>{props.feelsLike}°C</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.prop}>Wind</span>
                        <span className={styles.value}>{props.windSpeed} km/h</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.prop}>Humidity</span>
                        <span className={styles.value}>{props.humidity}%</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.prop}>Pressure</span>
                        <span className={styles.value}>{props.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
