import React from 'react';

export default class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderTabs = this.renderTabs.bind(this);
    }

    render() {
        return (
                <ul className = "tabBar">
                    {this.props.tabs.map(this.renderTabs)}
                </ul>
        );
    }

    renderTabs(tab) {
        var className = "card-2";
        if (this.props.activeTab=== tab.value) {
            className = className + " active";
        }
        
        return (
        <li className ={className}><Tab onClick = {this.props.onClick} newTab = {tab} /></li>
        );
    }
}

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    render() {
        return (
            <a value={this.props.newTab.value} 
            href="#" 
            onClick = {this.onClick}> 
                {this.props.newTab.name}
            </a>
        );
    }

    onClick() {
        this.props.onClick(this.props.newTab.value);
    }
}