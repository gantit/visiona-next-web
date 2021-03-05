const setData = (item) => {
  if (item.error) {
    return { error: 'no Results' }
  }
  return ({
    city: item.name,
    description: item.weather[0].main,
    humidity: `${parseInt(item.main.humidity, 10)}%`,
    iconID: item.weather[0].id,
    id: item.id,
    isActive: false,
    maxTemp: `${parseInt(item.main.temp_max, 10)}ºC`,
    minTemp: `${parseInt(item.main.temp_min, 10)}ºC`,
    pressure: `${item.main.pressure}hPa`,
    temperature: `${parseInt(item.main.temp, 10)}ºC`,
    wind: `${item.wind.speed} m/s`
  })
}

export default setData
