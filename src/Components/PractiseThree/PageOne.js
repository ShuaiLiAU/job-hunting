import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import fetchPosts from '../../Containers/BlogContainer/action.js';
import _ from 'lodash';

class PageOne extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }

  test(){
    const a = _.map(this.props.mainState)
    return a.map(state=>{
      console.log(state.id)
      return(
        <div>
          <li key={state.id}>
            {state.id}
          </li>
      </div>
      )
    })
  }

  renderPost(){
    return _.map(this.props.mainState, (state)=>{
      return(
        <li key={state.id}>
          {state.content}
        </li>
      )
    })
  }

  render(){
    console.log(this.props.mainState)
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
      {this.test()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    mainState: state.PostReducer,
  }
}

export default connect(mapStateToProps,{fetchPosts})(PageOne);
