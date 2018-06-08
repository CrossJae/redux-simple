import './Main.less';
import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import { adaptSize } from '../util/adaptSize.js';

export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      test : 'hello world!'
    }
  }
  componentWillMount(){
    adaptSize();// rem
  }
  render(){
    const {test} = this.state;
    return(
      <div>{test}</div>
    )
  }
}
