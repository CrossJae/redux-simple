import './Main.less';
import React from 'react';
import { adaptSize } from '../util/adaptSize.js';
import { connect } from 'react-redux'

const addAndSub = value => {
  return {
    type: value
  }
}

class Main extends React.Component {
  constructor(props){
    super(props)
    this.sub = this.sub.bind(this)
    this.add = this.add.bind(this)
  }
  componentWillMount(){
    // adaptSize();// rem
  }
  add() {
    console.log('++++')
    this.props.dispatch(addAndSub('add'))
  }
  sub() {
    console.log('----')
    this.props.dispatch(addAndSub('sub'))
  }
  render(){
    // const {test} = this.state;
    console.log(this.props)
    return(
      <div>
        <div>{this.props.num}</div>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Main)
