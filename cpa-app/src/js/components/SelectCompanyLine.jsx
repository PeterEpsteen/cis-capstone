import React from "react";
import SelectItem from './SelectItem';
import Title from './Title';

class SelectCompanyLine extends React.Component {

    

    render() {
        return (
           
       <SelectItem name="Company" options={this.state.companies} setObject={this.props.setCompany} />
                   
        );
    }

    renderSelectItem(props) {
       
    }
}

export default SelectCompanyLine