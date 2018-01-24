import React from 'react';

class Title extends React.Component {
    render() {
        return(
                <div className='card-3 card title-card'><h3>{this.props.title}</h3></div>
        );
    }
}

export default Title;
