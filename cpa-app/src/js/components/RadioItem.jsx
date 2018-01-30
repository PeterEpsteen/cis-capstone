import React from 'react';
export default class RadioItem extends React.Component {
    render() {
        return(
            <div className="form-group">
            <input type="radio" value={this.props.value}/>
            <label>
            {this.props.label}
            </label>
            </div>
        );
    }
}

// TODO handle onchange and set state of selected option in parent