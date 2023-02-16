// state n props class

import { jsx } from '@emotion/react'
import React, { Component } from 'react'

export default class App extends Component {
  state={
    name : "Talent Hub"
  }
  render() {
    return (
      <div>
        <center>
          <h1>{this.state.name}</h1>
        </center>
      </div>
    )
  }
}



// styling boarder

// import React from 'react'
// import './App.css';


// const App = () => {
//     const styling ={
//         color:"black",
//         backgroundColor:"skyblue",
//         textAlign:"center",
//         padding:"30px"
//     }

//   return (
//     <div>
//       <h1 style={styling}>"Welcome to Talent Hub" !!!</h1>
//       <h2>Here you are to learn some thing</h2>
//     </div>
//   )
// }

// export default App;

// App js


// h1{
//   color: black;
//   background-color: rgb(252, 252, 102);
//   padding: 20px;
//   text-align: center;
// }
// .container{
//   margin: 10px;
// }
// h2{
//   color: green;
//   text-align: center;
//   padding: auto;
// }