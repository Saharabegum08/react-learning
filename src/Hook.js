import React from 'react'
import ComponentC from './ComponentC';

export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <center>
        <UserContext.Provider value={"Talent Hub"}>
        <ComponentC/>
        </UserContext.Provider>
        
      </center>
    </div>
  )
}

export default App;