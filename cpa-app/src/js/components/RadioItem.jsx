import React from 'react';
export default class RadioItem extends React.Component {
    render() {
        return(
            <label>
            <input type="radio" value={this.props.value} checked={true}/>
            {this.props.label}
            </label>
        );
    }
}

// TODO handle onchange and set state of selected option in parent