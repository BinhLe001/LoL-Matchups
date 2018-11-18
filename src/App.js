import React, { Component } from 'react'
import axios from 'axios'
import TeamList from '/Users/Binh/Desktop/Senior Fall/2.98/MIT-Red-Bull/matchups/src/components/TeamList.js'
import PicksTable from '/Users/Binh/Desktop/Senior Fall/2.98/MIT-Red-Bull/matchups/src/components/PicksTable.js'
import WinTimePlot from '/Users/Binh/Desktop/Senior Fall/2.98/MIT-Red-Bull/matchups/src/components/WinTimePlot.js'
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

    checkTeamsSelected = (position) => {
        let selected = []
        if (this.state.friendlyTop === '') {
            selected.push('friendlyTop')
        }
        if (this.state.friendlyJungle === '') {
            selected.push('friendlyJungle')
        }
        if (this.state.friendlyMiddle === '') {
            selected.push('friendlyMiddle')
        }
        if (this.state.friendlyAdc === '') {
            selected.push('friendlyAdc')
        }
        if (this.state.friendlySupport === '') {
            selected.push('friendlySupport')
        }
        if (this.state.enemyTop === '') {
            selected.push('enemyTop')
        }
        if (this.state.enemyJungle === '') {
            selected.push('enemyJungle')
        }
        if (this.state.enemyMiddle === '') {
            selected.push('enemyMiddle')
        }
        if (this.state.enemyAdc === '') {
            selected.push('enemyAdc')
        }
        if (this.state.enemySupport === '') {
            selected.push('enemySupport')
        }
        selected.splice(selected.indexOf(position), 1);
        let allSelected = selected.length > 0 ? false : true
        this.setState({
            teamsSelected: allSelected,
        })
    }

    handleChange = position => event => {
        if (event !== null) {
            this.checkTeamsSelected(position)
            this.setState({
                [position]: event.label,
            })
        } else {
            this.setState({
                [position]: '',
                teamsSelected: false,
            })
        }
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
                <div className="App-header">
                    <div className="Header-title">matchups.gg</div>
                    <div className="Header-stroke" />
                </div>
                <div className="App-body">
                    <div className="Select">
                        <div className="Select-bans">
                            bans: under construction
                            <div className="Ban-list">
                                <div className="Ban-champ" />
                                <div className="Ban-champ" />
                                <div className="Ban-champ" />
                                <div className="Ban-champ" />
                                <div className="Ban-champ" />
                                {/* <div className="Ban-champ" />
                                <div className="Ban-champ" />
                                <div className="Ban-champ" />
                                <div className="Ban-champ" />
                                <div className="Ban-champ" /> */}
                            </div>
                        </div>
                        <div className="Teams">
                            <div className="Blue-team">
                                <div className="Blue-title">blue team</div>
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
                            <div className="Red-team">
                                <div className="Red-title">red team</div>
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
                            <button
                                size="medium"
                                variant="contained"
                                color="primary"
                                onClick={this.handleGenerateSelectionClick}
                                disabled={
                                    this.state.picksLoading ||
                                    this.state.teamsSelected
                                }
                                className="Submit-button"
                            >
                                Get Suggestions
                            </button>
                            <button
                                size="medium"
                                variant="contained"
                                color="primary"
                                onClick={this.handleCalculateWinTimeClick}
                                disabled={!this.state.teamsSelected}
                                className="Submit-button"
                            >
                                Plot Win Times
                            </button>
                        </div>
                    </div>
                    <div className="Results">{resultsContent}</div>
                </div>
            </div>
        )
    }
}

export default App
