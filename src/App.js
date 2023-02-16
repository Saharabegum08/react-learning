import React from 'react';

function App() {
  const arr = ["React Js", "Node Js", "Express Js", "Angular Js"]
  return(
    <div>
      {
        arr.map(
          (value,index) => <li key={index}>{value}</li>
        )
      }
    </div>
  )
}

export default App;