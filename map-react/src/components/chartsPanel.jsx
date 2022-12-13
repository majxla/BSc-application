import React from 'react';
import ChartsScatter from './chartsScatter';
import ChartsSurface from './chartsSurface';
// import Plot from 'react-plotly.js'


function ChartsPanel (props) {

    return (

        <div className='charts-panel' style={props.setStyle}>
            
            <ChartsScatter data={props.plotData} style={{height: "100%"}}></ChartsScatter>

            <ChartsSurface data={props.plotData} style={{height: "100%"}}></ChartsSurface>

        </div>
    )
}

export default ChartsPanel;


