import React from 'react'

const Table = (props) => {

    const displayTable = () => {
        let display = []
        props.teams.map((team, i) => {
            display.push(<tr key={i}>
                <th scope="row">{++i}</th>
                <td>{team.Team_Name}</td>
                <td>{team.Team_Short_Code}</td>
            </tr>)
        })
        return display
    }
    
        return (
            <div className="container">
            <h1 className="titles">Teams in IPL</h1>
            <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Team Name</th>
                <th scope="col">Team Code</th>
                </tr>
            </thead>
            <tbody>
                {displayTable()}
            </tbody>
            </table>
            </div>
        )
    
}

export default Table