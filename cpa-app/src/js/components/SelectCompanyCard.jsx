import React from "react";
import SelectItem from './SelectItem';
import Title from './Title';

class SelectCompanyCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "companies": [{"id":1, "name":"Apple" }, {"id":2, "name":"MSFT" }, {"id":3, "name":"IBM" }],
            "ratios": [{
                id: 1, 
                name: "Debt/Assets", 
                "numerator":["Long Term Debt", "Short Term Debt"],
                "denominator": ["Inventory", "Cash", "Land"]
             },
             {
                id: 2, 
                name: "Long/Short", 
                "numerator":["Long term liabilites"],
                "denominator": ["Short term liabilites", "notes payable"]
             },
             {
                id: 3, 
                name: "Cash/Assets", 
                "numerator":["Cash", "lorem"],
                "denominator": ["Land", "Buildings"]
             }]
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <div className='card-3 card container-fluid'>
                <Title title="Select Company" />
                <div className="row">
                    <div className="col">
                        <SelectItem name="Company" options={this.state.companies} setObject={this.props.setCompany} />
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <SelectItem name="Ratio" setObject ={this.props.setRatio} options={this.state.ratios} />
                    </div>
                </div>
                <div className="row">
                </div>
                

            </div>
            </div>
        );
    }

    renderSelectItem(props) {
       
    }
}

export default SelectCompanyCard