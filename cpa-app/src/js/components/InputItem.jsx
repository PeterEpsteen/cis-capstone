import React from "react";

class InputItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }


    render() {
        return (
        <div className="col">
            <label className="mb-3 h5">{this.props.name}</label>
            <input type="text" onChange={this.handleChange} />
        </div>
        
        );
    }

    handleChange(event){
    
        this.props.setValue(event.target.value);
    }

}

export default InputItem;