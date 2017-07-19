import React, { Component } from 'react';

const ProgressBar = (props) => {
    const style = {
        width: props.percent + '%',
    };

    return (
        <div className="progressbar-container" >
            <div className={(props.percent > 100) ? "progressbar-progress overlimit" : "progressbar-progress"} style={style} />
            <p className="progressbar-percent">{props.percent}%</p>
        </div>
    );
};

export default ProgressBar;