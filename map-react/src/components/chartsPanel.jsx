import React from 'react';
import ChartsScatter from './chartsScatter';
import ChartsSurface from './chartsSurface';
// import Plot from 'react-plotly.js'


function ChartsPanel (props) {

    return (

        <div className='charts-panel'>

            <ChartsScatter data={props.plotData}></ChartsScatter>
            <ChartsSurface data={props.plotData}></ChartsSurface>

        </div>
    )
}

export default ChartsPanel;


