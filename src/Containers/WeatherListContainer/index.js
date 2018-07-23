import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Sparkline from '../../Components/PractiseTwo/Sparkline/';


class WeatherListContainer extends Component {
  renderWeather(cityData){
    const temps = cityData.list.map((weather)=>weather.main.temp);
    const pressure = cityData.list.map((weather)=>weather.main.pressure);
    const humidity = cityData.list.map((weather)=>weather.main.humidity);
    console.log(pressure)
    return(
      <tr>
        <td>{cityData.city.name}</td>
        <td>
          <Sparkline data={temps} units='K'/>
        </td>
        <td>
          <Sparkline data={pressure} units='hPa'/>
        </td>
        <td>
          <Sparkline data={humidity} units='%'/>
        </td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

      </table>
    );
  }
}

function mapStateToProps(state){
  return {
    weather: state.SearchBarState.weather
  }
}

export default connect (mapStateToProps)(WeatherListContainer);

// <tbody>
//   {this.props.weather.map((cityData)=>this.renderWeather(cityData))}
// </tbody>
