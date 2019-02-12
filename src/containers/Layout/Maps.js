import React, { Component } from 'react'
import Point from '../../components/point/point';
import './Maps.css';
import Line from '../../components/line/line';

export default class Maps extends Component {
  state = {
    lines: {
      1: [0,0,0,2,2,2,0,0,0],
      2: [0,0,0,3,5,3,5,3,5,0,0,0],
      3: [0,0,2,2,2,2,0,0],
      4: [0,0,1,1,1,1,0,0],
      6: [0,0,3,5,3,5,3,5,3,5,0,0],
      7: [0,2,2,2,2,2,0],
      8: [0,0,1,1,1,1,1,1,1,1,0,0],
      10: [0,3,5,3,5,3,5,3,5,3,5,0],
      11: [2,2,2,2,2,2],
      12: [0,1,1,1,1,1,1,1,1,1,1,0],
      14: [0,5,3,5,3,5,3,5,3,5,3,0],
      18: [0,0,5,3,5,3,5,3,5,3,0,0],
      22: [0,0,0,5,3,5,3,5,3,0,0,0],
    }
  }

  cellTypes = (id) => {
    let cell = null;
    switch(id) {
      case 1:
        cell = (<div className="col-sm-2"><Line /></div>);
        break;
      case 2:
        cell = (<div className="col-sm-2" id='point'><Point /></div>);
        break;
      case 3:
        cell = (<div className="col-sm-1"><Line id={'left'}/></div>);
        break;
      case 5:
        cell = (<div className="col-sm-1"><Line id={'right'}/></div>);
        break;
      default:
        cell = (<div className="col-sm-1"></div>);
    }
    return cell;
  }

  lineCombineHandler = () => {
    let lines = [];
    for(let i = 1; i<=23; i++) {
      let line = [];
      switch(i) {
        case 1:
        case 23:
          this.state.lines[1].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 2:
          this.state.lines[2].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 3:
        case 5:
        case 19:
        case 21:
          this.state.lines[3].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 4:
        case 20:
          this.state.lines[3].map((num) => {
            if(num !== 0) {
              num--;
            }
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 6:
          this.state.lines[6].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 7:
        case 9:
        case 15: 
        case 17:
          this.state.lines[7].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 8:
        case 16:
          this.state.lines[7].map((num) => {
            if(num !== 0) {
              num--;
            }
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 10:
          this.state.lines[10].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 11:
        case 13:
          this.state.lines[11].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 12:
          this.state.lines[11].map((num) => {
            if(num !== 0) {
              num--;
            }
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 14:
          this.state.lines[14].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 18:
          this.state.lines[18].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        case 22:
          this.state.lines[22].map((num) => {
            let cell=this.cellTypes(num);
            return line.push(cell);
          })
          break;
        default:
          line = [];
      }
      lines.push(
        <div className="row">
          {line}
        </div>
      );
    }
    console.log(lines);
    return lines;
  }

  render() {
    return (
      <div className="container">
        {this.lineCombineHandler()}
      </div>
    )
  }
}
