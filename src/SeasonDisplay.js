import './styles/SeasonDisplay.css';
import React from 'react';

class SeasonDisplay extends React.Component {
    state = {
        seasonConfig: {
            summer: {
                text: 'Let\'s hit the Beach!',
                icon: 'sun'
            },
            winter: {
                text: 'Burr, It is Chilly!',
                icon: 'snowflake'
            }
        }
    }

    getSeason (lat, month) {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter';
        } else {
            return lat === 0 ? 'winter' : 'summer';
        }
    }

    render(){

        const season = this.getSeason(this.props.lat, new Date().getMonth());
        const {text, icon} = this.state.seasonConfig[season];

        return (
            <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${icon} icon`}></i>
                <h1 className='text-center'>  {text} </h1>
                <i className={`icon-right massive ${icon} icon`}></i>
            </div>
        );
    }
}

export default SeasonDisplay;