const API_KEY = "71bfdcc3dad39d7d843bcedf18f25493";
const BASE_URL = "http://api.openweathermap.org/data/2.5";

async function fetchData(url) {
  try {
    let api_call = await fetch(url);
    let data = await api_call.json();
    return { error: false, data };
  } catch (e) {
    return { error: true, data: null, errorMsg: e };
  }
}
async function getGeoLocatedWeather(lat, long) {
  let url = `${BASE_URL}/forecast?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`;
  return await fetchData(url);
}

async function getCityWeather({ city, country }) {
  let url = `${BASE_URL}?weather?q=${city},${country}&appid=${API_KEY}`;
  return await fetchData(url);
}

export { getGeoLocatedWeather, getCityWeather };
