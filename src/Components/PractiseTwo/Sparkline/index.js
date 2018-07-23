import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

export default class Sparkline extends Component{

  average=(data)=>{
    return(
      _.round(_.sum(data)/data.length)
    );
  }

  render(){
    return(
      <div>
        <Sparklines height={60} width={100} data={this.props.data}>
          <SparklinesLine color='green'/>
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
        <div>{this.average(this.props.data)} {this.props.units}</div>
      </div>
    );
  }
}
