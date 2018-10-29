import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import './TeamList.css'

class TeamList extends Component {
    render() {
        return (
            <div>
                <div className="Position">
                    <TextField
                        id="top"
                        label="Top"
                        value={this.props.top}
                        onChange={this.props.handleChange(
                            this.props.team + 'Top'
                        )}
                        margin="normal"
                    />
                </div>
                <div className="Position">
                    <TextField
                        id="jungle"
                        label="Jungle"
                        value={this.props.jungle}
                        onChange={this.props.handleChange(
                            this.props.team + 'Jungle'
                        )}
                        margin="normal"
                    />
                </div>
                <div className="Position">
                    <TextField
                        id="middle"
                        label="Middle"
                        value={this.props.middle}
                        onChange={this.props.handleChange(
                            this.props.team + 'Middle'
                        )}
                        margin="normal"
                    />
                </div>
                <div className="Position">
                    <TextField
                        id="adc"
                        label="ADC"
                        value={this.props.adc}
                        onChange={this.props.handleChange(
                            this.props.team + 'Adc'
                        )}
                        margin="normal"
                    />
                </div>
                <div className="Position">
                    <TextField
                        id="support"
                        label="Support"
                        value={this.props.support}
                        onChange={this.props.handleChange(
                            this.props.team + 'Support'
                        )}
                        margin="normal"
                    />
                </div>
            </div>
        )
    }
}

export default TeamList
