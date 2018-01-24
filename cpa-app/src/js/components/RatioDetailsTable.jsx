import React from 'react';

export default class RatioDetailsTable extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Numerator</td>
                        <td>
                            {this.renderList(this.props.ratio.numerator)}
                        </td>
                    </tr>
                    <tr>
                        <td>Denominator</td>
                        <td>
                            {this.renderList(this.props.ratio.denominator)}
                        </td>
                    </tr>
                </tbody>
            </table>
            );
    }

    renderList(arr) {
        return (
            <ul>
                {arr.map((e) => { return (<li>{e}</li>); })}
            </ul>
        );

    }
}