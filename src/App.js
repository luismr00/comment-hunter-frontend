// import logo from './logo.svg';
// import './App.css';
// import Button from '@material-ui/core/Button';
// import Graph from './images/line.png';
// import Grid from './Grid.js';
// import Section1 from './Section1.js';
// import Section2 from './Section2.js';
// import icon from './images/wsbet.jpg';
// import Slider from './Slider.js';
  
// import React, { Component } from 'react';
// import Sunburst from 'react-sunburst-d3-v4';
// import data from './data';



// function App() {

//   return (
//     <div className="App">
//       <h1 className="header-center">Hello from React Again...</h1>

//       <Sunburst
//           data={data}
//           onSelect={this.onSelect}
//           scale="linear" // or exponential
//           tooltipContent={<div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />} // eslint-disable-line
//           tooltip
//           tooltipPosition="right"
//           keyId="anagraph"
//           width="480"
//           height="400"
//         />
      
//       {/* <img className="graphic" src={Graph}></img>
//       <hr></hr>
//       <h2 className="header-center">Analyzing data in a much more convenient way</h2>
//       <Grid />
//       <Section1 />
//       <Section2 />
//       <hr></hr>
//       <h2 className="header-center">Team Members</h2>
//       <p>Comment hunter is a collaborative project created by CSUN Computer Science students. The project involved several parts which required seperate work to be split among a group. The following slider shows each team member that worked within this project along with different roles that every member contributed seperately. </p>
      
//       <Slider /> */}
//     </div>
//   );
// }

// export default App;


//Work with the code below ONLY for graphs and ignore the commented code above
//Comment or uncomment the component graph you want to work

import React, { Component } from 'react';
import Sunburst from 'react-sunburst-d3-v4';
import BubbleChart from "./components/BubbleChart";
import SunburstData from './components/data1';
import {bubbleData} from  './components/data2';
import Navbar from './components/Navbar';
import './styles/App.css'; //styles/App.css ok

class App extends Component {
  onSelect(event){
    //console.log(event);
  }

  reDraw = bubbleData.map(v => ({
    v: v.values,
    k: v.keys
  }));


  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <h1>Hello from React</h1>
        
        <div className="graph-container">
          {/* <BubbleChart data={this.reDraw} useLabels /> */}
          <Sunburst
          data={SunburstData}
          onSelect={this.onSelect}
          scale="linear" // or exponential
          tooltipContent={<div class="sunburstTooltip"  />} // eslint-disable-line
          tooltip
          tooltipPosition="right"
          keyId="anagraph"
          width="580"
          height="500"
        />
        </div>
        
      </div>
    );
  }
}

export default App;