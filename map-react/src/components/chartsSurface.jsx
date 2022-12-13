import React from 'react';
import Plot from 'react-plotly.js'



function ChartsSurface (props) {


    const colorscale = [[0.0, 'rgb(0, 97, 0)'],
                        [0.08333333333333333, 'rgb(8, 97, 0)'],
                        [0.16666666666666666, 'rgb(54, 125, 0)'],
                        [0.25, 'rgb(94, 153, 0)'],
                        [0.3333333333333333, 'rgb(136, 181, 0)'],
                        [0.41666666666666663, 'rgb(184, 212, 0)'],
                        [0.5, 'rgb(232, 240, 0)'],
                        [0.5833333333333333, 'rgb(255, 234, 0)'],
                        [0.6666666666666666, 'rgb(255, 196, 0)'],
                        [0.75, 'rgb(255, 157, 0)'],
                        [0.8333333333333333, 'rgb(255, 123, 0)'],
                        [0.9166666666666666, 'rgb(255, 81, 0)'],
                        [1.0, 'rgb(255, 34, 0)']];

    return (
        <div className='charts'>

            <Plot
                data = {[
                    {type: 'surface',
                    z: props.data.surface,
                    colorscale: colorscale,
                    },
                    {
                    type: 'scatter3d',
                    x : props.data.cols,
                    y: props.data.rows,
                    z: props.data.altitude,
                    mode: 'lines',
                    line: {
                        color: 'black',
                        width: 5}
                    }
                ]}

                scene = {{

                }}

                traces = {{
                    countours_z: {
                        show: true,
                        usecolormap: true,
                        highlightcolor: "limegreen",
                        project_z: true,
                }
                }}

                layout = {{
                    width: "100%", 
                    height: props.style.height,
                    title: 'Wizualizacja terenu',
                    titlefont: {
                        color: 'black'
                    },
                    plot_bgcolor:"rgba(138, 138, 138, 0.2)",
                    paper_bgcolor: "rgba(221, 221, 221, 0.2)",
                    margin: {
                        l: 50,
                        r: 50,
                        b: 50, 
                        t: 50
                    },
                    scene: {
                        xaxis: {
                            visible: false,
                        },
                        yaxis: {
                            visible: false
                        }
                    }
                }}
            />

        </div>
    )
}

        
export default ChartsSurface;