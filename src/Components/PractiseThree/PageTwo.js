import React, {Component} from 'react';

export default class PageTwo extends Component {
  render(){
    return(
      <div style={{
          backgroundColor: 'green',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
      }}>
        <p style={{fontSize: 13, color: 'red',}}>this is the second page</p>
        <button style={{backgroundColor: 'blue'}} onClick={()=> this.props.history.push('/PageOne')}>go back</button>
      </div>
    )
  }
}

//心得：history 应该是上面一层默认传递回来的变量
//虽然没有明确写出history在上一个层级中（Router），但是history作为route中的默认3个属性的中的一个（分别是：match，location，history）,
