import React from "react";

class SelectItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }


    render() {
        return (
        <div className="col">
            <label className="mb-3 h5" htmlFor={this.props.name}>{this.props.name}</label>
        <select name={this.props.name} onChange={this.handleChange}>
            {this.props.options.map(this.optionItem)}
        </select>
        </div>
        
        );
    }

    handleChange(event){
        var index = event.target.value;
        // var obj = this.props.options.find(i => i.id === id);
        var obj = this.props.options[index];
        this.props.setObject(obj);
    }

    optionItem(key, index) {
        return (
        <option value={index} key = {index}>
            {key.name}
        </option>
    
        );}

}

export default SelectItem;