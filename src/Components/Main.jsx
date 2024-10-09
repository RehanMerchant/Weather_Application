import TodaysSection from "../Sub_Component/TodaysSection";
import ForecastSection from "../Sub_Component/ForecastSection";
import { useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_API_WEATHER;
import axios from "axios";
const Main = (props) => {
  const loading = props.loading;
  const city = props.city;
  const [DataLoading, setDataLoading] = useState(true);
  const [todaydata, setTodayData] = useState(null);
  const [forecastData, setforecastData] = useState(Object);
  useEffect(() => {
    getLocation();
  }, [loading, city]);

  async function getLocation() {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
    );

    if (res.status === 200) {
      setTodayData({
        icon: res.data.current.condition.icon,
        current_temp: res.data.current.temp_c,
        feels_like: res.data.current.feelslike_c,
        condition: res.data.current.condition.text,
        humidity: res.data.current.humidity,
        pressure: res.data.current.pressure_mb,
        precipitation: res.data.current.precip_mm,
        windspeed: res.data.current.wind_kph,
        winddir: res.data.current.wind_dir,
        uv: res.data.current.uv,
        headindex: res.data.current.heatindex_c,
        dewpoint: res.data.current.dewpoint_c,
        cloud: res.data.current.cloud,
        code: res.data.current.condition.code,
        city: res.data.location.name,
        country: res.data.location.country,
        lastupdated: res.data.current.last_updated,
      });
      setforecastData(res.data.forecast.forecastday[0].hour);
      setDataLoading(false);
    }
  }

  return (
    <div className="pt-14">
      {loading || DataLoading ? (
        <div>loading...</div>
      ) : (
        <div className="pb-10">
          <TodaysSection data={todaydata} />
          <ForecastSection data={forecastData} />
        </div>
      )}
    </div>
  );
};

export default Main;
