import axios from 'axios';

const ROOT_URL='http://reduxblog.herokuapp.com/api';
const API_KEY='?key=12497828';

export default function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log(request);
  return{
    type: "FETCH_REQUEST",
    payload: request
  }
}

export function createPost(values){
  const request = axios.post(`${ROOT_URL}/post${API_KEY}`, values);
  return{
    type: "CREATE_POST",
    payload: request
  }
}
