import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date(),
      isClockOn: this.onSwitch
    };
  }
  componentDidMount () {
    console.log(this.props);
    this.timer = setInterval(()=> {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentDidUpdate() {
    if(this.props.onSwitch) {
      this.timer = clearInterval(this.timer);
      this.timer = setInterval(()=> {
        this.setState({ time: new Date() });
      }, 1000);
    }
    if(!this.props.onSwitch) {
      this.timer = clearInterval(this.timer);
    }
  }
  render () {
    return <div style={{backgroundColor:this.props.color,
                        height:"150px", fontSize:"130px"}}>{this.state.time.toLocaleTimeString()}</div>;
  }
}

Clock.propTypes={
  color:PropTypes.string,
  onSwitch: PropTypes.bool,
}
Clock.defaultProps={
  color: 'rgb(23,213,213)'
}
export default Clock;
