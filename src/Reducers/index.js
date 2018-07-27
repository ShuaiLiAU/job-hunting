import {combineReducers} from 'redux';
import SearchBarReducer from '../Containers/SearchBarContainer/reducer.js';
import PostReducer from '../Containers/BlogContainer/reducer.js';
import {reducer as formReducer} from 'redux-form';


const Reducer = combineReducers (
  {
    SearchBarState: SearchBarReducer,
    PostReducer,
    form: formReducer,
  }
)

export default Reducer;
