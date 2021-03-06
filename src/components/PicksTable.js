import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CircularProgress from '@material-ui/core/CircularProgress'
import './PicksTable.css'

class PicksTable extends Component {
    createData = picks => {
        let id = 0
        let rows = []
        if (picks != null && picks.length > 0) {
            for (var i = 0; i < picks.length; i++) {
                let pickData = picks[i]
                let name = pickData[0]
                let winProb = pickData[1]
                let role = pickData[2]
                rows.push({ id, name, role, winProb })
                id += 1
            }
        }
        return rows
    }

    render() {
        const rows = this.createData(this.props.recommendedPicks)
        const picksContent = this.props.picksLoading ? (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="Table-column">
                                champion
                            </TableCell>
                            <TableCell className="Table-column">role</TableCell>
                            <TableCell className="Table-column">
                                advantage
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <CircularProgress className="picks-loader" size={70} />
            </div>
        ) : (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="Table-column">
                                champion
                            </TableCell>
                            <TableCell className="Table-column">role</TableCell>
                            <TableCell className="Table-column">
                                advantage
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow  className='Table-row' key={row.id}>
                                    <TableCell className="Table-cell">
                                        {row.name}
                                    </TableCell>
                                    <TableCell className="Table-cell">
                                        {row.role}
                                    </TableCell>
                                    <TableCell className="Table-cell">
                                        {row.winProb + " %"}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )

        return <div className="picks-table">{picksContent}</div>
    }
}

export default PicksTable
