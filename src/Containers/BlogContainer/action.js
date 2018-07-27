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

export function createPost(values, callback){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(()=>callback());
  console.log(request)
  return{
    type: "CREATE_POST",
    payload: request
  }
}

//注意，這裏面添加了一種，異步的函數方法，即，callback代表一個函數，這個函數就是前面pageTwo
//裡面的this.props.history.push()，這裡面的callback只有在前面axios.post完成後，才開始工作
