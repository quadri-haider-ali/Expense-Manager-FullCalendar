import React from 'react';
import './ChartBar.css';

const ChartBar = props => {
    let fill_height = '0%';
    if (props.maxValue > 0)
        fill_height = props.value / props.maxValue * 100 + '%';
    // console.log('props.maxValue=', props.maxValue);
    // console.log('fill_height=', fill_height);

    return <div className='chart-bar'>
        <div className='main-bar'>
            <div></div>
            <div className='bar-fill' style={{height: fill_height}}></div>
        </div>
        <div className='label'>{props.label}</div>
    </div>
};

export default ChartBar;