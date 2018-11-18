import React, { Component } from 'react'
import Select from 'react-select'
import './TeamList.css'

class TeamList extends Component {
    render() {
        let topIcon =
            this.props.top === '' ? (
                <div className="Champ-empty">top</div>
            ) : (
                <img
                    className="Champ-icon"
                    src={process.env.PUBLIC_URL + '/ChampionIcons/' + this.props.top + '.png'}
                    alt="champion icon"
                />
            )
        let jungleIcon =
            this.props.jungle === '' ? (
                <div className="Champ-empty">jgl</div>
            ) : (
                <img
                    className="Champ-icon"
                    src={process.env.PUBLIC_URL + '/ChampionIcons/' + this.props.jungle + '.png'}
                    alt="champion icon"
                />
            )
        let middleIcon =
            this.props.middle === '' ? (
                <div className="Champ-empty">mid</div>
            ) : (
                <img
                    className="Champ-icon"
                    src={process.env.PUBLIC_URL + '/ChampionIcons/' + this.props.middle + '.png'}
                    alt="champion icon"
                />
            )
        let adcIcon =
            this.props.adc === '' ? (
                <div className="Champ-empty">adc</div>
            ) : (
                <img
                    className="Champ-icon"
                    src={process.env.PUBLIC_URL + '/ChampionIcons/' + this.props.adc + '.png'}
                    alt="champion icon"
                />
            )
        let supportIcon =
            this.props.support === '' ? (
                <div className="Champ-empty">sup</div>
            ) : (
                <img
                    className="Champ-icon"
                    src={process.env.PUBLIC_URL + '/ChampionIcons/' + this.props.support + '.png'}
                    alt="champion icon"
                />
            )

        return (
            <div className="List">
                <div className="Position">
                    <div className="Champ">{topIcon}</div>
                    <Select
                        id="top"
                        placeholder="top"
                        onChange={this.props.handleChange(
                            this.props.team + 'Top'
                        )}
                        value={{ value: this.props.top, label: this.props.top }}
                        options={champions}
                        isClearable={true}
                        isSearchable={true}
                    />
                </div>
                <div className="Position">
                    <div className="Champ">{jungleIcon}</div>
                    <Select
                        name="jungle"
                        placeholder="jungle"
                        onChange={this.props.handleChange(
                            this.props.team + 'Jungle'
                        )}
                        value={{
                            value: this.props.jungle,
                            label: this.props.jungle,
                        }}
                        options={champions}
                        isClearable={true}
                        isSearchable={true}
                    />
                </div>
                <div className="Position">
                    <div className="Champ">{middleIcon}</div>
                    <Select
                        name="middle"
                        placeholder="middle"
                        onChange={this.props.handleChange(
                            this.props.team + 'Middle'
                        )}
                        value={{
                            value: this.props.middle,
                            label: this.props.middle,
                        }}
                        options={champions}
                        isClearable={true}
                        isSearchable={true}
                    />
                </div>
                <div className="Position">
                    <div className="Champ">{adcIcon}</div>
                    <Select
                        name="adc"
                        placeholder="adc"
                        onChange={this.props.handleChange(
                            this.props.team + 'Adc'
                        )}
                        value={{ value: this.props.adc, label: this.props.adc }}
                        options={champions}
                        isClearable={true}
                        isSearchable={true}
                    />
                </div>
                <div className="Position">
                    <div className="Champ">{supportIcon}</div>
                    <Select
                        name="support"
                        placeholder="support"
                        onChange={this.props.handleChange(
                            this.props.team + 'Support'
                        )}
                        value={{
                            value: this.props.support,
                            label: this.props.support,
                        }}
                        options={champions}
                        isClearable={true}
                        isSearchable={true}
                    />
                </div>
            </div>
        )
    }
}
export default TeamList

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
