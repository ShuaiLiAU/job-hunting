import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PageOne extends Component {
  render(){
    return(
      <div style={{
          backgroundColor: 'red',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
      }}>
      <Link to="/PageTwo">
        <p style={{fontSize: 13, color: 'green',}}>this is the first page</p>
      </Link>
      </div>
    )
  }
}
