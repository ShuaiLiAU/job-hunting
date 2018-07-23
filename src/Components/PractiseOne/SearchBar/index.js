import React, {Component} from 'react';

//当这个component里面需要写入其他的function，例如 onClick(functon), 此时这个function，写入render()之前，此时用class命名component是很必要的
//其他的情况下，可以只写const SearchBar = () => {return (<div>xxxxxx</div>)}， 因为没有其他的function需要被引入到这个function中

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:'Search',
    }
  }
//e可以是任意值，这个e是被自动触发，当这个function被原生tag的内置动作捕捉方法所引用.
//onChange, onBlur皆为 defined event property
//this.onInputChange被称作 event handler
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){
    return(
      <div className="search-bar">
        <input
          className="input-position"
          value={this.state.term}
          onChange={e=>this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;

// this.onInputChange=this.onInputChange.bind(this);
// onInputChange=(e)=>{
//   this.setState({value: e.target.value});
//   console.log(this.state.value);
// }
// <input value={this.state.value} onChange={this.onInputChange}/>
// <br/>
