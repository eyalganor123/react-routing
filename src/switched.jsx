import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Switched extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            backgroundColor: 'red',
            height: '100px',
            width: '100px',
            text: 'on'
        };
    }
    handleClick = () => {
        const isOn = !this.state.isOn;
        this.setState({ isOn });
        this.props.onChange(isOn);
    };
    render() {

        return (
            <div style={{
                position: 'fixed',
                top:'200px',
                backgroundColor:'gray',
                width: '200px',
                height:'100px',
                right:'600px',
                borderRadius:'80px',
                border: '1px solid black'
            }}>
            <div
                onClick={this.handleClick}
                style={{
                    position: 'fixed',
                    top:'200px',
                    right: this.state.isOn ? '700px' : '600px',
                    height: this.state.height,
                    width: this.state.width,
                    backgroundColor: this.state.isOn ? 'orange' : 'lightBlue',
                    borderRadius: '50%',
                    textAlign:'center'

                }}  className="switch"
            /><span
            style={{
                position: 'absolute',
                right: this.state.isOn ? '47px' : '145px',
                top:"40px", 
            }}  ></span></div>
        );
    }
}
Switched.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Switched;
