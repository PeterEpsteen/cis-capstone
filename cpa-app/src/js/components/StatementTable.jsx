import React from 'react';

export default class StatementTable extends React.Component {

    constructor(props) {
        super(props);
         this.sheet = 
        (this.props.activeSheet === 0 ? "Income Statement"
            : "Balance Sheet");
        this.renderRow = this.renderRow.bind(this);
        this.renderDate = this.renderData.bind(this);
    }

    renderData(statementLine) {
        <td>
        </td>
    }


    renderRow(sheet1) {
        return (
            <tr>
                <td>
                {/* {this.props.statements[this.sheet].name} */}
                </td>
                
                {/* {Object.keys(this.props.statements[this.sheet]).map(
                    (e) => {return (<td>e.value</td>);}
                    );} */}
             </tr>
        );
    }

    render() {
       
        return(
            <table>
                <thead>{this.sheet}
                </thead>
                <tbody>
                    {/* {this.props.statements[this.sheet].map(this.renderRow)} */}
                </tbody>
            </table>
        );
    }
}


class StatementLine extends React.Component {
    render() {
        return(
            <tr>
                <td></td>
            </tr>
            
        );
    }
}

