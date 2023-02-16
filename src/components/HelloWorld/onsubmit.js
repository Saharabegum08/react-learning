import React,{useState} from 'react'

function App() {
    const [data,setData] = useState({
      username:'',
      password:'',
    })
    const{username,password} = data;
    const onChange = e =>{
      setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
      e.preventDefault();
      console.log(data);
    }

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" name="username" value={username}
          onChange={onChange} placeholder="Username"/><br/>

          <input type="password" name="password" value={password}
          onChange={onChange} placeholder="Password"/><br/>

          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
}
export default App;