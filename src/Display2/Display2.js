import React, {Component} from 'react'
import {PieChart} from 'react-easy-chart'

class Display2 extends Component {
    constructor(props) {
        super()
                
    }

    render() {
        let data = this.props.data; //console.log(data)
        let name = ''
        let obj = []
        for(let i=0; i<9; ++i) {
            name = 'S0' + (i+1).toString() + ': ' + data[i].orange 
            obj.push({key: name, value: 11.11})
        }
        return (
            <div>
            <h1 className="titles">Highest scorers per season</h1>
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

export default Display2