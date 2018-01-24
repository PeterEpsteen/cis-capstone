import React from 'react';
import Title from './Title';
import RatioDetailsTable from './RatioDetailsTable';
import HistoryTable from './HistoryTable';
import {BarChart} from 'react-easy-chart';

export default class RatioDetailsCard extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div className="container-fluid">
                <div className='card-3 card container-fluid'>
                <Title title="Ratio Details" />
                <div className="row">
                    <div className="col">
                    <h5>Construction</h5>
                        <RatioDetailsTable ratio = {this.props.ratio} />
                    </div>
                    <div className="col">
                    <h5>History for {this.props.company.name}'s {this.props.ratio.name} ratio</h5>
                        <HistoryTable company = {this.props.company} />
                    </div>
                    <div className="col card-3 graphCard">
                    <p>{this.props.company.name}</p>
                    <BarChart
                        colorBars
                        axisLabels={{x: 'Year', y: 'Ratio'}}
                        axes
                        data={[
                        {x: 'A', y: 20},
                        {x: 'B', y: 30},
                        {x: 'C', y: 40},
                        {x: 'D', y: 20},
                        {x: 'E', y: 40},
                        {x: 'F', y: 25},
                        {x: 'G', y: 5}
                        ]}
                    />
                  </div>
                </div>
            </div>
            </div>
        );
    }

}