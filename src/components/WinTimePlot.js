import React, { Component } from 'react'
import Plot from 'react-plotly.js'
import Typography from '@material-ui/core/Typography'
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
                <Typography variant="h8">
                    <b>
                        {'Number of Games Analyzed:  ' +
                            this.props.gamesAnalyzed}
                    </b>
                </Typography>
                <Plot
                    data={[
                        {
                            x: [15, 20, 25, 30, 35, 40, 45],
                            y: this.props.winTimes,
                            type: 'scatter',
                            mode: 'lines+points',
                            marker: { color: 'blue' },
                        },
                    ]}
                    layout={{
                        width: 600,
                        height: 510,
                        title:
                            'Relative Team Win Probabilties vs. Match Length',
                        xaxis: {
                            title: 'Match Length (minutes)',
                        },
                        yaxis: {
                            title: 'Relative Win Probability (%)',
                        },
                    }}
                />
            </div>
        )
        return <div className="times-plot">{timesContent}</div>
    }
}

export default WinTimePlot
