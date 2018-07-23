import {combineReducers} from 'redux';
import SearchBarReducer from '../Containers/SearchBarContainer/reducer.js';
import PostReducer from '../Containers/BlogContainer/reducer.js';



const Reducer = combineReducers (
  {
    SearchBarState: SearchBarReducer,
    PostReducer,
  }
)

export default Reducer;
