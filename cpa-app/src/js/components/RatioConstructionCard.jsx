import React from "react";
import SelectItem from './SelectItem';
import Title from './Title';
import RadioItem from './RadioItem';
import InputItem from './InputItem';
import SelectBox from './SelectBox';
import samples from './data'
import PickList from './PickList';

class RatioConstructionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "ratio constructs": [],
            "numerator": [],
            "denominator": []
        };
        this.changeDenominator = this.changeDenominator.bind(this);
        this.changeNumerator = this.changeNumerator.bind(this);
    }

    loadSampleData() {
        this.setState(samples);
      } 
      
      componentWillMount() {
          this.loadSampleData();
        
    }

    changeNumerator(value) {
        this.setState({
            numerator: value
        });
    }
    changeDenominator(value) {
        this.setState({
            denominator: value
        });
    }
  
    

    

    render() {
        return (
            <div className="container-fluid">
                <div className='card-3 card container-fluid'>
                <Title title="Create a Ratio" />
                <div className="row">
                    <div className="col col-center">
                   <div className="h4">Ratio Type</div>
                   <div className="border">
                   <RadioItem label="Financing Structure Ratios" value="1" />
                   <RadioItem label="Aseet Allocation Ratios" value="2" />
                   <RadioItem label="Asset Utilization Ratios" value="3" />
                   <RadioItem label="Sales Profitability Ratios" value="4" />
                   <RadioItem label="Return on Investments Ratio" value="5" />
                   <RadioItem label="Others" value="6" />
                   </div>
                    </div>
                    
                    <div className="col">
                    <InputItem name="Ratio Name" />
                    </div>
                </div>
                    <PickList pickFrom={this.state["ratio constructs"]}
                        changeNumerator = {this.changeNumerator}
                        changeDenominator = {this.changeDenominator}
                        />
                    {/* <div className="col">
                    <div className="h4">Select a Ratio Construct</div>
                        <SelectBox options = {this.state["ratio constructs"]} />
                    </div>
                    <div className="col">
                    <button onClick={this.addToDenominator}></button>
                    </div>
                    <div className="col">
                        <SelectBox array={this.state.numerator}
                            onAdd={this.addToNumerator}
                            onRemove={this.removeFromNumerator}
                            />
                        <SelectBox array={this.state.numerator}
                            onAdd={this.addToNumerator}
                            onRemove={this.removeFromNumerator}
                        />                    
                    </div> */}                

            </div>
            </div>
        );
    }

}

export default RatioConstructionCard