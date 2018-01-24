import React from 'react'

import { Component } from "react"
import {Title} from '../components/Title';
import ExtendedNavbar from '../components/ExtendedNavbar';
import StatementsCard from '../components/StatementsCard';

class Statements extends Component {
    render() {
        return (
            <div>
            <ExtendedNavbar />
            <div>
            <div className="container-fluid pt-5">
                <div className='main-container'>
                    <div className='col'>
                        <StatementsCard />
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}


export default Statements