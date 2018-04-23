import React, {Component} from 'react'
import {PieChart} from 'react-easy-chart'

class Display6 extends Component {
    constructor(props) {
        super()  
    }

    render() {
        let data = this.props.data; //console.log(data)
        let obj = []
        let name = ''
        for(let i=0; i<9; ++i) {
            this.props.teams.forEach(team => {
                if(team.Team_Name === data[i].winner) {
                    name = 'S0' + (i+1).toString() + ': ' + team.Team_Short_Code
                    obj.push({key: name, value: 11.11})
                }
            })
            
        }
        return (
            <div>
            <h1 className="titles">Winners each Season</h1>
            <PieChart
                labels
                data={[...obj]}
                innerHoleSize={200}
                size={500}
                padding={40}
                styles={this.styles}
            />
            </div>
        )
    }
}

export default Display6