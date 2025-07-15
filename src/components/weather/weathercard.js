import React,{useEffect} from 'react'

const Weathercard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] =  React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
     } = tempInfo;
useEffect(() => {
  if (weathermood) {
    const mood = weathermood.toLowerCase(); // Ensure lowercase for matching

    // Set weather icon based on mood
    switch (mood) {
      case "clouds":
        setWeatherState("wi-day-cloudy");
        break;
      case "haze":
        setWeatherState("wi-fog");
        break;
      case "clear":
        setWeatherState("wi-day-sunny");
        break;
      case "rain":
        setWeatherState("wi-day-rain");
        break;
      case "snow":
        setWeatherState("wi-day-snow");
        break;
      case "mist":
        setWeatherState("wi-dust");
        break;
      case "thunderstorm":
        setWeatherState("wi-thunderstorm");
        break;
      default:
        setWeatherState("wi-day-sunny");
        break;
    }

    // 🌈 Update background class on body
    document.body.className = "";
    document.body.classList.add(mood);

    // 🧼 Cleanup on unmount or mood change
    return () => {
      document.body.className = "";
    };
  }
}, [weathermood]);



     let sec = sunset;
     let date = new Date(sec * 1000);
     let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="two-sided-section">
                        <i className="wi wi-sunset"></i>
                        <p className="extra-info-leftside">
                            {timeStr}PM<br />
                            Sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <i className="wi wi-humidity"></i>
                        <p className="extra-info-leftside">
                            {humidity}<br />
                            Humidity
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <i className="wi wi-barometer"></i>
                        <p className="extra-info-leftside">
                            {pressure}<br />
                            Pressure
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <i className="wi wi-strong-wind"></i>
                        <p className="extra-info-leftside">
                            {speed}<br />
                            Speed
                        </p>
                    </div>
                </div>
            </article>

        </>
    )
}

export default Weathercard
