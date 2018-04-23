import React, {Component} from 'react'
import {BarChart} from 'react-easy-chart'

class Display extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        let data = this.props.data.map(val => {
            return(
                {x: 'S0' + val.season, y: val.matches}
            )
        })
        return (
            <div>
            <h1 className="titles">Total matches per season</h1>
            <BarChart
                axisLabels={{x: 'Seasons', y: 'Total Matches'}}
                axes
                colorBars
                height={350}
                width={450}
                data={[...data]}
            />
            </div>
        )
    }
}

export default Display