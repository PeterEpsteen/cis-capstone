import React from 'react';

import { Component } from "react";
import ExtendedNavbar from '../components/ExtendedNavbar';
import SelectCompanyCard from '../components/SelectCompanyCard';
import RatioDetailsCard from '../components/RatioDetailsCard';

class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "company": {id: 1, name: "Apple"},
            "ratio": {
                id: 1, 
                name: "Debt/Assets", 
                "numerator":["Long Term Debt", "Short Term Debt"],
                "denominator": ["Inventory", "Cash", "Land"]
             }
        };

        this.handleChange = this.handleChange.bind(this);
        this.setCompany = this.setCompany.bind(this);
        this.setRatio = this.setRatio.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    setCompany(value) {
        this.setState({company: value})
    }

    setRatio(value) {
        this.setState({ratio: value})
    }

    render() {
        return (
            
        <div>
            <ExtendedNavbar />
            <div>
                <div className="container-fluid pt-5">
                    <div className='main-container'>
                    <div className='col'>
                        <SelectCompanyCard company={this.state.company} setRatio={this.setRatio} setCompany={this.setCompany} />
                        <div className="pt-5"></div>
                        <RatioDetailsCard company={this.state.company} ratio={this.state.ratio} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Analysis