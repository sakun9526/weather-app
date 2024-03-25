type CurrentWeatherData = {
    weather: any
}

const CurrentWeather = (props: CurrentWeatherData) => {
  return <div>{props?.weather?.cnt}</div>;
};

export default CurrentWeather