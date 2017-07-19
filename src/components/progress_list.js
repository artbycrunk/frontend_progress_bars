import React, { Component } from 'react';
import ProgressBar from './progress_bar';
import ProgressControl from './progress_controls'

class ProgressList extends Component {
    constructor(props){
        super(props);

        this.state = {"buttons":this.props.buttons,"bars":this.props.bars,"limit":this.props.limit};;

    }
    

    render(){
    }
};

export default ProgressList;
