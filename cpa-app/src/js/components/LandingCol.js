import React from "react";
import {Component} from 'react';

const styles = {
    textStyle: {
        color: 'black',
        textAlign: 'center'
    }
}

class LandingCol extends Component {
    
    render() {
        return (
            <div className="col-center">
                <img className='img-icon' src={this.props.thumbImage} />
                
                <p className="col-text">{this.props.description}</p>
            </div>
        );
    }
}

export default LandingCol