import React, { Component } from 'react';
import './Button.css'

class button extends Component {
    render() {
        return (
           <button className={this.props.type} onClick={this.props.onClick}>
               {this.props.title}
           </button>
        );
    }
}

export default button;