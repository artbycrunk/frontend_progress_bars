import React, { Component } from 'react';
import ProgressBar from './progress_bar';
import ProgressControl from './progress_controls'

class ProgressList extends Component {
    constructor(props){
        super(props);

        this.state = {"buttons":this.props.buttons,"bars":this.props.bars,"limit":this.props.limit};;

    }
    updateProgress(index, value){
        const bars = this.props.bars
        if((Math.sign(value) == 1)) bars[index] += Math.floor((value/this.state.limit)*100)
        else bars[index] -= -Math.floor((value/this.state.limit)*100)

        if (bars[index] < 0) bars[index] = 0

        this.setState({bars})
        console.log(this.props.limit)
    }

    render(){
        const progressItems = this.props.bars.map((bar, index) => {
            return <ProgressBar key={index} limit={this.state.limit} percent={bar} />
        });

        return (
            <div>
                <ul className="progressbar-list">
                     {progressItems} 
                </ul>
                <ProgressControl 
                    onButtonSelect={(index, value) => this.updateProgress(index, value)}
                    bars={this.props.bars} buttons={this.props.buttons} />
            </div>
        )
    }
};

export default ProgressList;
