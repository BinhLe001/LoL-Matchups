import React, { Component } from 'react'
import axios from 'axios'
import TeamList from '/Users/Binh/Desktop/Senior Fall/2.98/MIT-Red-Bull/matchups/src/components/TeamList.js'
import PicksTable from '/Users/Binh/Desktop/Senior Fall/2.98/MIT-Red-Bull/matchups/src/components/PicksTable.js'
import WinTimePlot from '/Users/Binh/Desktop/Senior Fall/2.98/MIT-Red-Bull/matchups/src/components/WinTimePlot.js'
import Select from 'react-select'
// import TeamList from '/home/jennyxue97/LoL-Matchups/src/components/TeamList.js'
// import PicksTable from '/home/jennyxue97/LoL-Matchups/src/components/PicksTable.js'
// import WinTimePlot from '/home/jennyxue97/LoL-Matchups/src/components/WinTimePlot.js'
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
            bans: [],
            currentBan: 'Add Ban',
        }
    }

    handleBanClick = index => {
        let newBans = this.state.bans.slice()
        newBans.splice(index, 1)
        this.setState({
            bans: newBans,
        })
    }

    checkTeamsSelected = position => {
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
        selected.splice(selected.indexOf(position), 1)
        let allSelected = selected.length > 0 ? false : true
        this.setState({
            teamsSelected: allSelected,
        })
    }

    isNotSelected = champ => {
        if (this.state.friendlyTop === champ) {
            return false
        }
        if (this.state.friendlyJungle === champ) {
            return false
        }
        if (this.state.friendlyMiddle === champ) {
            return false
        }
        if (this.state.friendlyAdc === champ) {
            return false
        }
        if (this.state.friendlySupport === champ) {
            return false
        }
        if (this.state.enemyTop === champ) {
            return false
        }
        if (this.state.enemyJungle === champ) {
            return false
        }
        if (this.state.enemyMiddle === champ) {
            return false
        }
        if (this.state.enemyAdc === champ) {
            return false
        }
        if (this.state.enemySupport === champ) {
            return false
        }
        return true
    }

    handleBanChange = event => {
        if (this.state.bans.includes(event.label)) {
            alert('This champion is already banned.')
        } else {
            if (!this.isNotSelected(event.label)) {
                alert('This champion has already been selected.')
            } else {
                let newBans = this.state.bans.slice()
                newBans.push(event.label)
                if (newBans.length <= 10) {
                    this.setState({
                        bans: newBans,
                    })
                }
            }
        }
        this.setState({
            currentBan: 'Add Ban',
        })
    }

    handleChange = position => event => {
        if (event !== null) {
            if (this.state.bans.includes(event.label)) {
                alert('Selected champion is currently banned.')
            } else {
                this.checkTeamsSelected(position)
                this.setState({
                    [position]: event.label,
                })
            }
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
                bans: this.state.bans,
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
                            <div className="Ban-title">
                                <Select
                                    id="ban"
                                    placeholder="Add Ban"
                                    className="Ban-select"
                                    onChange={this.handleBanChange}
                                    value={{
                                        value: this.state.currentBan,
                                        label: this.state.currentBan,
                                    }}
                                    options={champions}
                                    isClearable={false}
                                    isSearchable={false}
                                />
                            </div>
                            <div className="Ban-list">
                                {this.state.bans.map((ban, index) => {
                                    return (
                                        <img
                                            className="Ban-champ"
                                            onClick={() => this.handleBanClick(index)}
                                            src={
                                                process.env.PUBLIC_URL +
                                                '/ChampionIcons/' +
                                                ban +
                                                '.png'
                                            }
                                            alt="champion icon"
                                        />
                                    )
                                })}
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

const champions = [
    { label: 'Aatrox', value: 'Aatrox' },
    { label: 'Ahri', value: 'Ahri' },
    { label: 'Akali', value: 'Akali' },
    { label: 'Alistar', value: 'Alistar' },
    { label: 'Amumu', value: 'Amumu' },
    { label: 'Anivia', value: 'Anivia' },
    { label: 'Annie', value: 'Annie' },
    { label: 'Ashe', value: 'Ashe' },
    { label: 'Aurelion Sol', value: 'AurelionSol' },
    { label: 'Azir', value: 'Azir' },
    { label: 'Bard', value: 'Bard' },
    { label: 'Blitzcrank', value: 'Blitzcrank' },
    { label: 'Brand', value: 'Brand' },
    { label: 'Braum', value: 'Braum' },
    { label: 'Caitlyn', value: 'Caitlyn' },
    { label: 'Camille', value: 'Camille' },
    { label: 'Cassiopeia', value: 'Cassiopeia' },
    { label: "Cho'Gath", value: "Cho'Gath" },
    { label: 'Corki', value: 'Corki' },
    { label: 'Darius', value: 'Darius' },
    { label: 'Diana', value: 'Diana' },
    { label: 'Dr. Mundo', value: 'Dr. Mundo' },
    { label: 'Draven', value: 'Draven' },
    { label: 'Ekko', value: 'Ekko' },
    { label: 'Elise', value: 'Elise' },
    { label: 'Evelynn', value: 'Evelynn' },
    { label: 'Ezreal', value: 'Ezreal' },
    { label: 'Fiddlesticks', value: 'Fiddlesticks' },
    { label: 'Fiora', value: 'Fiora' },
    { label: 'Fizz', value: 'Fizz' },
    { label: 'Galio', value: 'Galio' },
    { label: 'Gangplank', value: 'Gangplank' },
    { label: 'Garen', value: 'Garen' },
    { label: 'Gnar', value: 'Gnar' },
    { label: 'Gragas', value: 'Gragas' },
    { label: 'Graves', value: 'Graves' },
    { label: 'Hecarim', value: 'Hecarim' },
    { label: 'Heimerdinger', value: 'Heimerdinger' },
    { label: 'Illaoi', value: 'Illaoi' },
    { label: 'Irelia', value: 'Irelia' },
    { label: 'Ivern', value: 'Ivern' },
    { label: 'Janna', value: 'Janna' },
    { label: 'Jarvan IV', value: 'Jarvan IV' },
    { label: 'Jax', value: 'Jax' },
    { label: 'Jayce', value: 'Jayce' },
    { label: 'Jhin', value: 'Jhin' },
    { label: 'Jinx', value: 'Jinx' },
    { label: "Kai'Sa", value: "Kai'Sa" },
    { label: 'Kalista', value: 'Kalista' },
    { label: 'Karma', value: 'Karma' },
    { label: 'Karthus', value: 'Karthus' },
    { label: 'Kassadin', value: 'Kassadin' },
    { label: 'Katarina', value: 'Katarina' },
    { label: 'Kayle', value: 'Kayle' },
    { label: 'Kayn', value: 'Kayn' },
    { label: 'Kennen', value: 'Kennen' },
    { label: "Kha'Zix", value: "Kha'Zix" },
    { label: 'Kindred', value: 'Kindred' },
    { label: 'Kled', value: 'Kled' },
    { label: "Kog'Maw", value: "Kog'Maw" },
    { label: 'LeBlanc', value: 'LeBlanc' },
    { label: 'LeeSin', value: 'Lee Sin' },
    { label: 'Leona', value: 'Leona' },
    { label: 'Lissandra', value: 'Lissandra' },
    { label: 'Lucian', value: 'Lucian' },
    { label: 'Lulu', value: 'Lulu' },
    { label: 'Lux', value: 'Lux' },
    { label: 'Malphite', value: 'Malphite' },
    { label: 'Malzahar', value: 'Malzahar' },
    { label: 'Maokai', value: 'Maokai' },
    { label: 'Master Yi', value: 'Master Yi' },
    { label: 'Miss Fortune', value: 'Miss Fortune' },
    { label: 'Mordekaiser', value: 'Mordekaiser' },
    { label: 'Morgana', value: 'Morgana' },
    { label: 'Nami', value: 'Nami' },
    { label: 'Nasus', value: 'Nasus' },
    { label: 'Nautilus', value: 'Nautilus' },
    { label: 'Nidalee', value: 'Nidalee' },
    { label: 'Nocturne', value: 'Nocturne' },
    { label: 'Nunu', value: 'Nunu' },
    { label: 'Olaf', value: 'Olaf' },
    { label: 'Orianna', value: 'Orianna' },
    { label: 'Ornn', value: 'Ornn' },
    { label: 'Pantheon', value: 'Pantheon' },
    { label: 'Poppy', value: 'Poppy' },
    { label: 'Pyke', value: 'Pyke' },
    { label: 'Quinn', value: 'Quinn' },
    { label: 'Rakan', value: 'Rakan' },
    { label: 'Rammus', value: 'Rammus' },
    { label: "Rek'Sai", value: "Rek'Sai" },
    { label: 'Renekton', value: 'Renekton' },
    { label: 'Rengar', value: 'Rengar' },
    { label: 'Riven', value: 'Riven' },
    { label: 'Rumble', value: 'Rumble' },
    { label: 'Ryze', value: 'Ryze' },
    { label: 'Sejuani', value: 'Sejuani' },
    { label: 'Shaco', value: 'Shaco' },
    { label: 'Shen', value: 'Shen' },
    { label: 'Shyvana', value: 'Shyvana' },
    { label: 'Singed', value: 'Singed' },
    { label: 'Sion', value: 'Sion' },
    { label: 'Sivir', value: 'Sivir' },
    { label: 'Skarner', value: 'Skarner' },
    { label: 'Sona', value: 'Sona' },
    { label: 'Soraka', value: 'Soraka' },
    { label: 'Swain', value: 'Swain' },
    { label: 'Syndra', value: 'Syndra' },
    { label: 'Tahm Kench', value: 'Tahm Kench' },
    { label: 'Taliyah', value: 'Taliyah' },
    { label: 'Talon', value: 'Talon' },
    { label: 'Taric', value: 'Taric' },
    { label: 'Teemo', value: 'Teemo' },
    { label: 'Thresh', value: 'Thresh' },
    { label: 'Tristana', value: 'Tristana' },
    { label: 'Trundle', value: 'Trundle' },
    { label: 'Tryndamere', value: 'Tryndamere' },
    { label: 'Twisted Fate', value: 'Twisted Fate' },
    { label: 'Twitch', value: 'Twitch' },
    { label: 'Udyr', value: 'Udyr' },
    { label: 'Urgot', value: 'Urgot' },
    { label: 'Varus', value: 'Varus' },
    { label: 'Vayne', value: 'Vayne' },
    { label: 'Veigar', value: 'Veigar' },
    { label: "Vel'Koz", value: "Vel'Koz" },
    { label: 'Viktor', value: 'Viktor' },
    { label: 'Vi', value: 'Vi' },
    { label: 'Vladimir', value: 'Vladimir' },
    { label: 'Volibear', value: 'Volibear' },
    { label: 'Warwick', value: 'Warwick' },
    { label: 'Wukong', value: 'Wukong' },
    { label: 'Xayah', value: 'Xayah' },
    { label: 'Xerath', value: 'Xerath' },
    { label: 'Xin Zhao', value: 'Xin Zhao' },
    { label: 'Yasuo', value: 'Yasuo' },
    { label: 'Yorick', value: 'Yorick' },
    { label: 'Zac', value: 'Zac' },
    { label: 'Zed', value: 'Zed' },
    { label: 'Ziggs', value: 'Ziggs' },
    { label: 'Zilean', value: 'Zilean' },
    { label: 'Zoe', value: 'Zoe' },
    { label: 'Zyra', value: 'Zyra' },
]
