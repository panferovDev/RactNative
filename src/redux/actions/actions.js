//запрос данных txt с сервера через thunk
export const getWeather = value => {
    return {
      type: "SHOW_WEATHER",
      payload: value
    }
  };
//сбросить все стейты на дефолтные значения
  export const closeWeather = value => {
    return {
      type: "CLOSE_WEATHER",
      payload: value
    }
  };
//Получение следующих 25 данных из стейта weather
  export const nextWeather = () => {
    return {
      type: "NEXT_WEATHER",
    }
  };
//запрос данных txt с сервера через thunk
  export function fetchWeather(url){
      return dispatch =>{
          fetch(url)
            .then(result => result.text())
            .then(result => result.split('\n'))
            .then(result => (result.splice(0,7),  result))
            .then(result => result.map(item => item.trim().split(/\s+/)))
            .then(result => dispatch(getWeather(result)))
      }
  }