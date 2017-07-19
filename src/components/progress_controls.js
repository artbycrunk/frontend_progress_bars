import React, { Component } from 'react';
import ProgressBar from './progress_bar';

class ProgressControl extends Component {
    constructor(props){
        super(props);

        this.state = {selected_bar:0};
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({selected_bar: event.target.value});
    };

    render(){
        
        const progressBars = this.props.bars.map((bar, index) => {
            return <option key={index} value={index}>#progress{index+1}</option>
        });

        const progressButtons = this.props.buttons.map((button, index) => {
            return (
                <button key={index} type="button" 
                        value={button} 
                        onClick={() => this.props.onButtonSelect(this.state.selected_bar,button)}>
                    {((Math.sign(button) == 1) ? "+"+button : button)}
                </button>
            );
        });

        return (
            <div className="progressbar-controls">
                <select onChange={this.handleChange} value={this.state.selected_bar}>
                    {progressBars}
                </select>
                    {progressButtons}
            </div>
        );
    }
}

export default ProgressControl;