import React from 'react'
import splash from '../../img/splash.jpeg'
import chartPic from '../../img/chart-icon.png';
import moneyPic from '../../img/money-icon.png';
import timePic from '../../img/time-icon.png';
import { Component } from "react";
import LandingCol from '../components/LandingCol'

const styles = {
    splash: {
        background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + splash + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
}

const chartThumb = chartPic;
const moneyThumb = moneyPic;
const timeThumb = timePic;


class Home extends Component {

    render() {
        return (
            <div>
                <div className="splashBackground" style = {styles.splash} >
                    <div>
                    <h1>Corporate Performance Analyzer</h1>
                    </div>
                    <div>
                    <span>Get the full picture on your business</span>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="main-container">
                        <LandingCol description = {description1} thumbImage = {chartThumb} />
                        <LandingCol description = {description2} thumbImage = {moneyThumb}/>
                        <LandingCol description = {description3} thumbImage = {timeThumb}/>
                    </div>
                </div>    
            </div>
        );
    }
}

const description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed scelerisque enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce et eros sed neque lacinia mattis. Proin vestibulum risus ante, vitae tincidunt ommodo orci. In ornare pulvinar viverra. ";
const description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed scelerisque enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce et eros sed neque lacinia mattis. Proin vestibulum risus ante, vitae tincidunt nisl molestie vestibulum. Sed nec malesuada arcu,  ";
const description3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed scelerisque enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce et eros sed neque lacinia mattis. Proin vestibulum risus ante, vitae tincidunt nisl molestie vestibulum. Sed nec malesuada arcu, ac element ";

export default Home