import React, { Component } from 'react'
import Plot from 'react-plotly.js'
import CircularProgress from '@material-ui/core/CircularProgress'
import './WinTimePlot.css'

class WinTimePlot extends Component {
    render() {
        const timesContent = this.props.timesLoading ? (
            <div>
                <CircularProgress className="times-loader" size={70} />
            </div>
        ) : (
            <div>
                <Plot
                    data={[
                        {
                            x: [15, 20, 25, 30, 35, 40, 45],
                            y: this.props.winTimes,
                            type: 'scatter',
                            mode: 'lines+points',
                            marker: { color: '#54d7c7' },
                        },
                    ]}
                    layout={{
                        width: 600,
                        height: 480,
                        color: '#FFFFFF',
                        title:
                            '<b>Relative Win Probabilties vs. Match Length</b>',
                        titlefont: {
                            color: "#54d7c7",
                            size: 22,
                        },
                        xaxis: {
                            title: 'Match Length (minutes)',
                            color: '#FFFFFF',
                        },
                        yaxis: {
                            title: 'Relative Win Probability',
                            color: '#FFFFFF',
                        },
                        paper_bgcolor: '#232222',
                        plot_bgcolor: '#232222',
                    }}
                />
                <div className="Plot-description">
                    {'Number of games analyzed:  ' + this.props.gamesAnalyzed}
                </div>
            </div>
        )
        return <div className="times-plot">{timesContent}</div>
    }
}

export default WinTimePlot
