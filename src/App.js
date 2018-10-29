import React, { Component } from 'react'
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TeamList from '/Users/Binh/Desktop/Senior Fall/2.98/matchups/src/components/TeamList.js'
import PicksTable from '/Users/Binh/Desktop/Senior Fall/2.98/matchups/src/components/PicksTable.js'
import WinTimePlot from '/Users/Binh/Desktop/Senior Fall/2.98/matchups/src/components/WinTimePlot.js'
import './App.css'

const url = 'https://jennyxue.ngrok.io/'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picksLoading: false,
            timesLoading: false,
            friendlyTop: 'Aatrox',
            friendlyJungle: 'Warwick',
            friendlyMiddle: '',
            friendlyAdc: 'Ashe',
            friendlySupport: 'Leona',
            enemyTop: 'Jax',
            enemyJungle: 'Udyr',
            enemyMiddle: 'Galio',
            enemyAdc: 'Ezreal',
            enemySupport: 'Nami',
            recommendedPicks: [],
            winTimes: [],
            teamsSelected: false,
            gamesAnalyzed: 0,
            showPicks: true,
        }
    }

    checkTeamsSelected = () => {
        let allSelected = false
        if (
            this.state.friendlyTop !== '' &&
            this.state.friendlyJungle !== '' &&
            this.state.friendlyMiddle !== '' &&
            this.state.friendlyAdc !== '' &&
            this.state.friendlySupport !== '' &&
            this.state.enemyTop !== '' &&
            this.state.enemyJungle !== '' &&
            this.state.enemyMiddle !== '' &&
            this.state.enemyAdc !== '' &&
            this.state.enemySupport !== ''
        ) {
            allSelected = true
        }
        this.setState({
            teamsSelected: allSelected,
        })
    }

    handleChange = position => event => {
        if (event.target.value === '') {
            this.setState({
                teamsSelected: false,
            })
        } else {
            this.checkTeamsSelected()
        }
        this.setState({
            [position]: event.target.value,
        })
    }

    getWinTimes = () => {
        try {
            return axios.post(url + 'time', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                team: {
                    TOP: this.state.friendlyTop,
                    JUNGLE: this.state.friendlyJungle,
                    MIDDLE: this.state.friendlyMiddle,
                    DUO_CARRY: this.state.friendlyAdc,
                    DUO_SUPPORT: this.state.friendlySupport,
                },
                opponent: {
                    TOP: this.state.enemyTop,
                    JUNGLE: this.state.enemyJungle,
                    MIDDLE: this.state.enemyMiddle,
                    DUO_CARRY: this.state.enemyAdc,
                    DUO_SUPPORT: this.state.enemySupport,
                },
            })
        } catch (error) {
            alert(error)
            console.error(error)
        }
    }

    handleCalculateWinTimeClick = () => {
        this.setState({
            showPicks: false,
            timesLoading: true,
        })
        this.getWinTimes()
            .then(response => {
                console.log(response)
                this.setState({
                    winTimes: response.data.win_rates,
                    timesLoading: false,
                    gamesAnalyzed: response.data.count,
                })
            })
            .catch(error => {
                this.setState({
                    timesLoading: false,
                    winTimes: [],
                    gamesAnalyzed: 0,
                })
                alert(error)
                console.log(error)
            })
    }

    getSuggestedChampions = () => {
        try {
            return axios.post(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                team: {
                    TOP: this.state.friendlyTop,
                    JUNGLE: this.state.friendlyJungle,
                    MIDDLE: this.state.friendlyMiddle,
                    DUO_CARRY: this.state.friendlyAdc,
                    DUO_SUPPORT: this.state.friendlySupport,
                },
                enemy: {
                    TOP: this.state.enemyTop,
                    JUNGLE: this.state.enemyJungle,
                    MIDDLE: this.state.enemyMiddle,
                    DUO_CARRY: this.state.enemyAdc,
                    DUO_SUPPORT: this.state.enemySupport,
                },
                num: 10,
            })
        } catch (error) {
            alert(error)
            console.error(error)
        }
    }

    handleGenerateSelectionClick = () => {
        this.setState({
            showPicks: true,
            recommendedPicks: [],
            picksLoading: true,
        })
        this.getSuggestedChampions()
            .then(response => {
                console.log('Recommended Picks:  ' + response)
                this.setState({
                    recommendedPicks: response.data,
                    picksLoading: false,
                })
            })
            .catch(error => {
                this.setState({
                    picksLoading: false,
                    recommendedPicks: [],
                })
                alert(error)
                console.log(error)
            })
    }

    render() {
        const resultsContent = this.state.showPicks ? (
            <PicksTable
                recommendedPicks={this.state.recommendedPicks}
                picksLoading={this.state.picksLoading}
            />
        ) : (
            <WinTimePlot
                winTimes={this.state.winTimes}
                timesLoading={this.state.timesLoading}
                gamesAnalyzed={this.state.gamesAnalyzed}
            />
        )

        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            2.98 Red Bull - Progress Report Demo
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="App-body">
                    <div className="Select">
                        <Paper className="select-paper">
                            <div className="Teams">
                                <div className="Team" id="Friendly">
                                    <Typography variant="h5">
                                        Friendly Team
                                    </Typography>
                                    <TeamList
                                        handleChange={this.handleChange}
                                        team={'friendly'}
                                        top={this.state.friendlyTop}
                                        jungle={this.state.friendlyJungle}
                                        middle={this.state.friendlyMiddle}
                                        adc={this.state.friendlyAdc}
                                        support={this.state.friendlySupport}
                                    />
                                </div>
                                <div className="Team" id="Enemy">
                                    <Typography variant="h5">
                                        Enemy Team
                                    </Typography>
                                    <TeamList
                                        handleChange={this.handleChange}
                                        team={'enemy'}
                                        top={this.state.enemyTop}
                                        jungle={this.state.enemyJungle}
                                        middle={this.state.enemyMiddle}
                                        adc={this.state.enemyAdc}
                                        support={this.state.enemySupport}
                                    />
                                </div>
                            </div>
                            <div className="Submit">
                                <Button
                                    size="medium"
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleGenerateSelectionClick}
                                    disabled={
                                        this.state.picksLoading ||
                                        this.state.teamsSelected
                                    }
                                >
                                    Get Suggestions
                                </Button>
                                <Button
                                    size="medium"
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleCalculateWinTimeClick}
                                    disabled={!this.state.teamsSelected}
                                >
                                    Plot Win Times
                                </Button>
                            </div>
                        </Paper>
                    </div>
                    <div className="Results">
                        <Paper className="results-paper">
                            {resultsContent}
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
