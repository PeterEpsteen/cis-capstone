import React from "react";
import SelectItem from './SelectItem';
import Title from './Title';

class SelectCompanyCard extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className='card-3 card container-fluid'>
                <Title title="Select Company" />
                <div className="row">
                    <div className="col">
                        <SelectItem name="Company" options={this.props.companyList} setObject={this.props.setCompany} />
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <SelectItem name="Ratio" setObject ={this.props.setRatio} options={this.props.ratioList} />
                    </div>
                </div>
                <div className="row">
                </div>
                

            </div>
            </div>
        );
    }

}

export default SelectCompanyCard