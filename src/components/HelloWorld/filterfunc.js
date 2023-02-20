import React from 'react';

function App() {
  // const names = ['Jany', 'James', 'Paul', 'Rinje', 'George']
  // const filtered = names.filter(name => name.includes('J'))

  const arr = [10,20,30,40,50,60,70,80,90]
  const filtered = arr.filter(item => item>40)

  return(
    <div>
      {
        filtered.map(item => <li>{item}</li>)
      }
    </div>
  )
}

export default App;