import {useEffect, useRef, useState} from 'react'
import './App.css'
import {WeatherTile, WeatherTileProps} from "../lib/components/WeatherTile";

function App() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [count, setCount] = useState(0)

    const handleCountUp = () => setCount(prev => prev + 1)

    useEffect(() => {
        if (ref?.current == null) return

        const currentRef = ref.current
        currentRef.addEventListener("click", handleCountUp)
        return () => currentRef.removeEventListener("click", handleCountUp)
    }, []);

    const weatherData: WeatherTileProps = {
        city: "Berlin12",
        degree: 5,
        feelsLike: 6,
        pressure: 1025,
        humidity: 67,
        windSpeed: 5
    }


    return (
        <>
            <div ref={ref} className="unselectable">Navbar with search</div>
            <div className="unselectable" onClick={handleCountUp}>count ${count}</div>
            <WeatherTile data={weatherData}></WeatherTile>
        </>
    )
}

export default App
