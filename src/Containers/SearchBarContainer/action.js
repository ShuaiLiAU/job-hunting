import axios from 'axios';

const API_KEY= 'b1b15e88fa797225412429c1c50c122a1';
const ROOT_URL=`http://openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}`;
//因为api的关系这个代码暂时不可用


export function SearchBarValueSetting(value){
  return{
    type: "SEARCH_BAR_VALUE",
    payload: value
  }
}


export function FetchWeather(city){
  const url=`${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log(request)

  return{
    type:"FETCH_WEATHER",
    payload: request
  }
}
