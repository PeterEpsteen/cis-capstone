import React from 'react';

import { Component } from "react";
import ExtendedNavbar from '../components/ExtendedNavbar';
import SelectCompanyCard from '../components/SelectCompanyCard';
import RatioDetailsCard from '../components/RatioDetailsCard';

class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "currentCompany": {id: 1, name: "Apple"},
            "currentRatio": {
                id: 1, 
                name: "Debt/Assets", 
                "numerator":["Long Term Debt", "Short Term Debt"],
                "denominator": ["Inventory", "Cash", "Land"]
             },
            "companyList": [{"id":1, "name":"Apple" }, {"id":2, "name":"MSFT" }, {"id":3, "name":"IBM" }],
            "ratioList": [{
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

        // this.handleChange = this.handleChange.bind(this);
        this.setCompany = this.setCompany.bind(this);
        this.setRatio = this.setRatio.bind(this);
    }

    // handleChange(event) {
    //     this.setState({value: event.target.value})
    // }

    setCompany(value) {
        this.setState({currentCompany: value})
    }

    setRatio(value) {
        this.setState({currentRatio: value})
    }

    render() {
        return (
            
        <div>
            <ExtendedNavbar />
            <div>
                <div className="container-fluid pt-5">
                    <div className='main-container'>
                    <div className='col'>
                        <SelectCompanyCard companyList={this.state.companyList} ratioList = {this.state.ratioList} setRatio={this.setRatio} setCompany={this.setCompany} />
                        <div className="pt-5"></div>
                        <RatioDetailsCard currentCompany={this.state.currentCompany} currentRatio={this.state.currentRatio} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Analysis