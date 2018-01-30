import React from 'react';
import SelectBox from './SelectBox';

const styles = {
    'marginBottom': '20px'
}

export default class PickList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "selected": [],
            "topSelected": [],
            "bottomSelected": [],
            "numerator": [],
            "denominator": []
        }
        this.changeSelected = this.changeSelected.bind(this)
        this.changeBottomPlus = this.changeBottomPlus.bind(this);
        this.changeTopPlus = this.changeTopPlus.bind(this);
        this.changeBottomMinus = this.changeBottomMinus.bind(this);
        this.changeTopMinus = this.changeTopMinus.bind(this);
        this.changeTopSelected = this.changeTopSelected.bind(this);
        this.changeBottomSelected = this.changeBottomSelected.bind(this);
        this.remove = this.remove.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.saveRatio = this.saveRatio.bind(this);
    }

    changeSelected(e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
            value.push(options[i].value);
            }
        }
        var ratioArr = [];
        var arr = this.props.pickFrom.slice();
        value.forEach(function(id) {
            for (var i=0; i < arr.length; i++)
             if (arr[i]["id"] == id) {
                ratioArr.push(arr[i]);
             }
        });
        this.setState({selected: ratioArr});
    }
    changeTopSelected(e) {
        let ratioArr = [];
        let options = e.target.options;
        Array.from(options).forEach((item, index) => {
            if(item.selected)
                ratioArr.push(index);
        })
        this.setState({topSelected: ratioArr});
    }
    changeBottomSelected(e) {
        let ratioArr = [];
        let options = e.target.options;
        Array.from(options).forEach((item, index) => {
            if(item.selected)
                ratioArr.push(index);
        })
        this.setState({bottomSelected: ratioArr});
    }
    changeTopPlus(event) {
        var json = JSON.stringify(this.state.selected.slice());
        var value = JSON.parse(json);
        var numeratorVal = this.state.numerator.slice();

        value.forEach(function(obj){
            obj.operator = "+";
            numeratorVal.push(obj)
        });
        this.setState({numerator: numeratorVal});
    }
    changeBottomPlus(event) {
        var json = JSON.stringify(this.state.selected.slice());
        var value = JSON.parse(json);
        var denominatorVal = this.state.denominator.slice();

        value.forEach(function(obj){
            obj.operator = "+";
            denominatorVal.push(obj)
        });
        this.setState({denominator: denominatorVal});
    }
    changeTopMinus(event) {
        var json = JSON.stringify(this.state.selected.slice());
        var value = JSON.parse(json);
        var numeratorVal = this.state.numerator.slice();

        value.forEach(function(obj){
            obj.operator = "-";
            numeratorVal.push(obj)
        });
        this.setState({numerator: numeratorVal});
    }
    changeBottomMinus(event) {
        var json = JSON.stringify(this.state.selected.slice());
        var value = JSON.parse(json);
        var denominatorVal = this.state.denominator.slice();

        value.forEach(function(obj){
            obj.operator = "-";
            denominatorVal.push(obj)
        });
        this.setState({denominator: denominatorVal});
    }

    remove(event) {
        let topSelected = this.state.topSelected.slice();
        let numeratorVal = this.state.numerator.slice();
        let newNum = numeratorVal.filter((obj, index) => {
            return topSelected.indexOf(index) < 0;
        });
        this.setState({numerator: newNum});
        let bottomSelected = this.state.bottomSelected.slice();
        let denominatorVal = this.state.denominator.slice();
        let newDom = denominatorVal.filter((obj, index) => {
            return bottomSelected.indexOf(index) < 0;
        });
        this.setState({denominator: newDom});
    }
    removeAll(event){
        this.setState({
            numerator: [],
            denominator: []
        });
    }
    saveRatio(event) {
        let denominator = this.state.denominator.slice();
        let numerator = this.state.numerator.slice();
        this.props.changeNumerator(numerator);
        this.props.changeDenominator(denominator);
    }

    render() {
        return (
            <div className="col">
            <div className="row">
                <div className="col">
                <div className="h4">Select a Ratio Construct</div>
                    <SelectBox onChange={this.changeSelected} options = {this.props.pickFrom} />
                </div>
                <div className="col col-buttons col-center">
                <button onClick={this.changeTopPlus}>To Numerator +</button>
                <button onClick={this.changeTopMinus}>To Numerator -</button>
                <button onClick={this.changeBottomPlus}>To Denominator +</button>
                <button onClick={this.changeBottomMinus}>To Denominator -</button>
                <button onClick={this.remove}>Remove</button>
                <button onClick={this.removeAll}>Remove all</button>
                </div>
                <div className="col">
                <div className="h5">Numerator</div>
                    <SelectBox onChange={this.changeTopSelected} options = {this.state.numerator}/>
                    <div className="h5">Denominator</div>

                    <SelectBox onChange={this.changeBottomSelected} options = {this.state.denominator} />
                </div>
                    
            </div>
            <div className="row">
                <button onClick={this.saveRatio}>Save Ratio</button>
            </div>
            </div>
        
        );}

}