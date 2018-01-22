import React from 'react'

import { Component } from "react"
import ExtendedNavbar from '../components/ExtendedNavbar';
import SelectCompanyCard from '../components/SelectCompanyCard'

class Analysis extends Component {
    render() {
        return (
            
        <div>
            <ExtendedNavbar />
            <div>
                <div className="container-fluid pt-5">
                    <div className='main-container'>
                        <SelectCompanyCard />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Analysis