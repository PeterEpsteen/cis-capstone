import React from 'react'
import RatioConstructionCard from "../components/RatioConstructionCard";
import ExtendedNavbar from '../components/ExtendedNavbar'
import { Component } from "react"

class RatioConstruction extends Component {
    render() {
        return (
            <div>
            <ExtendedNavbar />
            <div>
            <div className="container-fluid pt-5">
                <div className='main-container'>
                    <div className='col'>
                        <RatioConstructionCard
                        
                        />
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default RatioConstruction