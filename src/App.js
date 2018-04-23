import React, { Component } from 'react';
import './App.css';
import Display from './Display/Display'
import Display2 from './Display2/Display2'
import Display3 from './Display3/Display3'
import Display4 from './Display4/Display4'
import Display5 from './Display5/Display5'
import Display6 from './Display6/Display6'
import Table from './Table/Table'
import {matches} from './JSON Data/match'
import {teams} from './JSON Data/team'
import {players} from './JSON Data/player'
import {seasons} from './JSON Data/season'
import ipl from './ipl.jpg'


class App extends Component {
  constructor() {
    super() 
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    let x = -1;
    
    let data = this.state.data
    for(let i=1; i<=9; ++i) {
      let obj = {
        season: i,
        matches: 0,
        winner: '',
        orange: '',
        purple: '',
        man_series: '',
        
      }
      for(let j=0; j<matches.length; ++j) {
        if(matches[j].Season_Id === i) {
          ++obj.matches
        } 
      }
      x = x + obj.matches; 
      let winner = matches[x].Match_Winner_Id
      teams.forEach(team => {
        if(team.Team_Id === winner)
          obj.winner = team.Team_Name
      })
    
        for(let k=0; k<players.length; ++k) {
          if(seasons[i-1].Orange_Cap_Id === players[k].Player_Id)
            obj.orange = players[k].Player_Name
          if(seasons[i-1].Purple_Cap_Id === players[k].Player_Id)
            obj.purple = players[k].Player_Name
          if(seasons[i-1].Man_of_the_Series_Id === players[k].Player_Id)
            obj.man_series = players[k].Player_Name
        }
      data.push(obj)
    }
    this.setState({data})
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Indian Premiere League</h1>
          <img src={ipl} alt="ipl logo " />
        </header>
        <Table teams={teams}/>
        <p className="container">Have a look below for the stats</p>
        <Display5 data={this.state.data} teams={teams} />
        <hr />
        <Display6 data={this.state.data} teams={teams} />
        <hr />
        <Display data={this.state.data} />
        <hr/>
        <Display2 data={this.state.data} />
        <hr/>
        <Display3 data={this.state.data} />
        <hr/>
        <Display4 data={this.state.data} />
      </div>
    );
  }
}

export default App;
