const getProcessedWeatherData = (weatherData: any) => {
  const keysToExclude = ["cod", "message", "cnt"];
  const forecastKeysExclue = ["dt"];
  const filteredObject: any = {};
  const filteredObject2: any = {}

  for (const key in weatherData) {
    if (!keysToExclude.includes(key)) {
      filteredObject[key] = weatherData[key];
    }
  }

  weatherData.list.map((data: any) => {
    console.log('data', data)
  })



  console.log(filteredObject);
};

export default getProcessedWeatherData;
