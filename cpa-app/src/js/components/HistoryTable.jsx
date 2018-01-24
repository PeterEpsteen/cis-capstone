import React from 'react';

export default class HistoryTable extends React.Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>{this.props.company.name}</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }

}