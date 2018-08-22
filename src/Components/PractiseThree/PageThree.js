import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../Containers/BlogContainer/action.js';
import {Link} from 'react-router-dom';

class PageThree extends Component {
  constructor(props){
      super(props);
      this.state={
        id:'',

      }
      const id = this.props.match.params.id;
      this.props.fetchPost(id);
  }

  // componentDidMount(){
  //   // const { id } = this.props.match.params;
  //   // //http://localhost:3000/Page/267036這個267036就是id
  //   // //this match is from route
  //   // this.props.fetchPost(id);
  //   this.setState({id: this.props.post.pageThreeState})
  // }
  onDeleteClick(){
    const id = this.props.match.params.id;
    this.props.deletePost(id, ()=>{
      this.props.history.push('/');
    });
  }

  render(){
    if(this.props.post.pageThreeState){
      console.log(this.props.post.pageThreeState)
      console.log(this.props.post.pageThreeState.id)
      return(
        <div>
          <Link to='/PageOne'><button style={{margin:'30px'}}>Back to index</button></Link>
          <button classname='xxx' onClick={()=>this.onDeleteClick()}>Delete Post</button>
          <p style={{fontSize: 13, color: 'green',}}> this is the third page </p>
          <h1>{this.props.post.pageThreeState.title}</h1>
          <h3>{this.props.post.pageThreeState.id}</h3>
        </div>
      )
    }
    return (
      <div>loading......</div>
    )
  }
}

function mapStateToProps(state){
  return {
    post: state.PostReducer,

  };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PageThree);
