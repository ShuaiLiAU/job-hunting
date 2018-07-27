
import _ from 'lodash';

let DefaultState={
  pageOneState:{},
  pageTwoState:[],

}

const PostReducer = (state={DefaultState}, action)=>{

  if(action.type==="FETCH_REQUEST"){

    return {
      ...state, pageOneState: _.mapKeys(action.payload.data, 'id')
    }
  }

  if(action.type === "CREATE_POST"){
    return{
      ...state, pageTwoState: action.payload.data
    }
  }

  return state;
}

export default PostReducer;

//action.payload.data， 就等于正常意义下的respones.data
//注意， 在第一个if里面，如果加入的是{}则程序报错，如果改成()或者没有任何括号，程序正常运行

//黑科技：

//如果转换数組对象成一個對象對象，並且內部結構為 -> key 对象
//使用 '_.mapKey(数组对象，想要用对象的哪一个元素进行作为Key)'
//举例： const post=[{id: 4， title:'hi'}, {id:25, title:'bye'}, {id:36, title:'sup'}]
//      const result = _.mapKeys(post, 'id');

//代码内部的样子为：注意此处为一个对象对象
// {
//  '4':{id: 4， title:'hi'}, '25':{id:25, title:'bye'}, '36':{id:36, title:'sup'}
//}
//结果为：result['4'] -> {id:4, title:'hi'}

//如果单独存放id和对象，两个人并不能构成关系：即，如何选择id就选择了它所代表的对象
//因此，_mapKeys() 更好的完成了这个任务
