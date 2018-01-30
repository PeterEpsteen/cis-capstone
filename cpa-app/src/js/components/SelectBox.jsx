import React from "react";

const selectStyle = {
    marginTop: '10px'
}


export default class SelectBox extends React.Component {

    render() {
        return (
            <select className ="selectBox" onChange={this.props.onChange}   style = {selectStyle}  multiple="multiple">
                {this.props.options.map(this.optionItem)}
            </select>
        );
    }

    optionItem(key, index) {
        return (
            <option index={index} value={key.id} key={index}>
               {key.operator} {key.name} 
            </option>
        );
    }

   

}