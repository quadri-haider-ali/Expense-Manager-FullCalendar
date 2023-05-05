import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const max_value = Math.max(...dataPointsValues);
    return <div>
        <h2>Expense Graph</h2>
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} maxValue={max_value} value={dataPoint.value} label={dataPoint.label}/>)}
        </div>
    </div>
}

export default Chart;