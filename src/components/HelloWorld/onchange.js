import React,{useState} from 'react'

const App = () => {
    const [user, setUser] = useState("");
    const handler = e =>{
        setUser(e.target.value)
    }
  return (
    <div>
        <center>
            <input type="text" placeholder="username" value={user} name="user"
            onChange={handler}
            />
            <br/>
            {user}
        </center>
    </div>
  )
}
export default App;