const initialState = {
    weather : [],
    row : ['Year', 'mm', 'tmax', 'tmin', 'af','rain', 'sun'],
    pagination: []

}


export  function shoWeather (state = initialState, action){
    switch (action.type){
        case 'SHOW_WEATHER':
            return {...state, weather: action.payload, pagination:action.payload.splice(0,25) };
        case 'CLOSE_WEATHER':
            return {...state, weather: initialState.weather, row : initialState.row};
        case 'NEXT_WEATHER':
            return {...state, pagination : state.weather.splice(0,25)};
        default:
            return state; 
    }
}