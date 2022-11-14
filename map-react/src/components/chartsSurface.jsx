import React from 'react';
import Plot from 'react-plotly.js'



function ChartsSurface (props) {

    return (
        <div className='charts'>

            <Plot
                data = {[
                    {type: 'surface',
                    z: props.data.surface,
                    },
                    {
                    type: 'scatter3d',
                    x : props.data.cols,
                    y: props.data.rows,
                    z: props.data.altitude,
                    mode: 'lines',
                    line: {
                        color: 'black',
                        width: 2}
                    }
                ]
                }

                traces = {{
                    countours_z: {
                        show: true,
                        usecolormap: true,
                        highlightcolor: "limegreen",
                        project_z: true,
                }
                }}

                layout = {{
                    width: 500, 
                    height: 300, 
                    title: 'Height plot',
                    titlefont: {
                        color: 'white'
                    },
                    plot_bgcolor:"#474747",
                    paper_bgcolor: "#1a1a1a",
                    margin: {
                        l: 50,
                        r: 50,
                        b: 50, 
                        t: 50
                    },
                    }}
            />

        </div>
    )
}

        
export default ChartsSurface;