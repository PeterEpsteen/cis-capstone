import React from 'react';

class CardWithTitle extends React.Component {
    render() {
        return(
            <div className='card-3 card container-fluid'>
                <div className='card-3 card title-card'><h3>{this.props.title}</h3></div>

            </div>
        );
    }
}

export default CardWithTitle
