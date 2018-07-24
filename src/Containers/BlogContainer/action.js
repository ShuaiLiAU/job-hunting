import Axios from 'axios';

const ROOT_URL='http://reduxblog.herokuapp.com/api';
const API_KEY='?key=12497828';

export default function fetchPosts(){
  const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log(request);
  return{
    type:"FETCH_REQUEST",
    payload: request
  }
}
