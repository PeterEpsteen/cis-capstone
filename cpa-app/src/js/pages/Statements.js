import React from 'react'

import { Component } from "react"
import {Title} from '../components/Title';
import ExtendedNavbar from '../components/ExtendedNavbar';
import StatementsCard from '../components/StatementsCard';

class Statements extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "companyList": [{"id":1, "name":"Apple" }, {"id":2, "name":"MSFT" }, {"id":3, "name":"IBM" }],
            "currentCompany" : [],
            "activeSheet": 1,
            "currentCompany" : {"id":1, "name":"Apple"},
            "statements": [] //get statements for current company
        };
        this.setState({currentCompany: this.state.companyList[0]});
        this.setCompany = this.setCompany.bind(this);
        this.setSheet = this.setSheet.bind(this);
        //set statement to currrent company
    }

    setCompany(value) {
        this.setState({currentCompany: value})
        //get statement for company and set to active
    }
    setSheet(value) {
        this.setState({activeSheet: value})
    }

    render() {
        return (
            <div>
            <ExtendedNavbar />
            <div>
            <div className="container-fluid pt-5">
                <div className='main-container'>
                    <div className='col'>
                        <StatementsCard setCompany={this.setCompany}
                        setSheet = {this.setSheet} 
                        companyList = {this.state.companyList}
                        activeSheet = {this.state.activeSheet}
                        />
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}


export default Statements