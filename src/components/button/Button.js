import React, { Component } from 'react';
import './Button.css'

class button extends Component {
    render() {
        return (
           <button className={this.props.type}>
               {this.props.title}
           </button>
        );
    }
}

export default button;