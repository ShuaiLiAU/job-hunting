
let stateDefault={
  value: 'hello world',
  weather:[],
}

const SearchBarReducer = (state=stateDefault, action) => {
  if(action.type === "SEARCH_BAR_VALUE"){
    return {
      ...state, value: action.payload
    }
  }
  else if(action.type === "FETCH_WEATHER"){
    console.log(action)
    console.log(state.value)
    console.log(state.weather)
    return{
      ...state, weather: state.weather.concat(action.payload.data)
    }
  }
  return state;
}

export default SearchBarReducer;

//给一个变量 weather 赋予一个值，这个值是 state.weather.concat(action.payload.data.cnt)
//然后把 weather: state.weather.concat(action.payload.data.cnt)
//override 进state这个对象中，此时原来的 weather: []被替换成 weather: state.weather.concat(action.payload.data.cnt)
//此部操作，给予相同关键字 weather, 没有此关键值，其他部分保持不变
//concat是一个针对于数组的操作，目的是增加新的元素
