import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../styles/style.scss';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {"buttons":[],"bars":[],"limit":100};
        
    }

    

    render(){
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));