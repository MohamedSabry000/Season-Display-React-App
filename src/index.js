import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

    state = {
        lat: null,
        errorMessage: ''
    };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    render() {

        if( !this.state.errorMessage && this.state.lat )
            return  <SeasonDisplay lat={this.state.lat}/>;
        else if( this.state.errorMessage && !this.state.lat )
            return <div> Error: {this.state.errorMessage} </div>;

        return <Spinner message='Please, Accept Location Request!' />;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));