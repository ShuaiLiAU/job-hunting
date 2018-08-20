import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../Containers/BlogContainer/action.js';

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

  render(){
    if(this.props.post.pageThreeState){
      console.log(this.props.post.pageThreeState)
      console.log(this.props.post.pageThreeState.id)
      return(
        <div>
          <p style={{fontSize: 13, color: 'green',}}> this is the third page </p>
          <h3></h3>
        </div>
      )
    }
    return (
      <div>nothing has been gotten</div>
    )


    // const {id} = this.props.post.pageThreeState


  }
}

function mapStateToProps(state){
  return {
    post: state.PostReducer,

  };
}

export default connect(mapStateToProps, {fetchPost})(PageThree);
