import React, {Component} from 'react';
import './SearchBar.css' ;

class SearchBar extends Component {
  

  submitFunc(e){
    e.preventDefault();
    this.props.FetchWeather(this.props.value)
    this.props.valueSetting('')
  }

  render(){
    return(
      <form onSubmit={(e)=>this.submitFunc(e)} className="input-group">
        <input
          className="search-bar"
          value={this.props.value}
          onChange={(e)=> this.props.valueSetting(e.target.value)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
