import React, {Component} from 'react'
import {BarChart} from 'react-easy-chart'

class Display5 extends Component {
    constructor(props) {
        super()
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        let teams = this.props.teams
        let value = this.props.data
        console.log(teams, value)
        let data = []
        teams.forEach(team => {
            let obj = {
                name: '',
                count: 0
            }
            for(let i=0; i<9; ++i) {
                obj.name = team.Team_Short_Code
                if(team.Team_Name === value[i].winner) {
                    ++obj.count
                }
            }
            data.push(obj)
        })
        this.setState({data})
    }

    render() {
        let data = this.state.data.map(val => {
            return(
                {x: val.name, y: val.count}
            )
        })
        return (
            <div>
            <h1 className="titles">Total wins by each team</h1>
            <BarChart
                axisLabels={{x: 'Teams', y: 'Total Wins'}}
                axes
                colorBars
                height={300}
                width={450}
                data={[...data]}
            />
            </div>
        )
    }
}

export default Display5