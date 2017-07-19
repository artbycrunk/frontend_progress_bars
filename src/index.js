import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from '../styles/style.scss';

import ProgressList from './components/progress_list'
import 'whatwg-fetch'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {"buttons":[],"bars":[],"limit":100};
        this.getData();
    }

    getData() {
        var _parent = this;
        fetch('http://pb-api.herokuapp.com/bars.json')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                _parent.setState(json)
                console.log('parsed json', json)
            });
    }

    render(){

        if (!this.state.bars[0]){
            return <div>Loading...</div>
        }

        return (
            
            <div>
                <h1>Front End Assignment - Progress Bars</h1>
                <ProgressList bars={this.state.bars} buttons={this.state.buttons} limit={this.state.limit}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));