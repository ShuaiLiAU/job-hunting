import React, {Component} from 'react';
import SearchBar from '../../Components/PractiseTwo/SearchBar/';
import {connect} from 'react-redux';
import {SearchBarValueSetting, FetchWeather} from './action';
import {bindActionCreators} from 'redux';

class SearchBarContainer extends Component {
  render(){
    return(
      <div>
        <SearchBar
          value={this.props.SearchBarState.value}
          valueSetting={this.props.SearchBarValueSetting}
          FetchWeather={this.props.FetchWeather}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    SearchBarState: state.SearchBarState,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    SearchBarValueSetting: SearchBarValueSetting,
    FetchWeather: FetchWeather,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBarContainer);
