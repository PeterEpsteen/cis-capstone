import React from 'react';
import Title from './Title';
import SelectItem from './SelectItem'
import TabBar from './TabBar'
import StatementTable from './StatementTable'

export default class StatementsCard extends React.Component {


    render() {
        return(
            <div className="container-fluid">
            <div className='card-3 card container-fluid'>
            <Title title="Statements" />
            <div className="row">
            <SelectItem name="Company" options={this.props.companyList} setObject={this.props.setCompany}  />
            <div className="col"></div>
            <div className="col"></div>
            </div>
            <div className="row">
            <div className="col">
            <TabBar onClick={this.props.setSheet} 
                tabs = {[{"name": "Income Statement", "value": 0},
                        {"name": "Balance Sheet", "value": 1}]} 
                        activeTab = {this.props.activeSheet } />
            </div>
            <div className="col"></div>
            <div className="col"></div>
                
            </div>
            <div className="row">
                <div className="col">
                    <StatementTable 
                    activeSheet = {this.props.activeSheet}
                    statements = {this.props.statements}/>
                </div>
            </div>
            </div>
            </div>
            
        );
    }
}