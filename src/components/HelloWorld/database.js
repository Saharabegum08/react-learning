import React,{useState} from 'react'
import axios from 'axios';

const App = () => {
  const[data,setData] = useState({
    fullname : '',
    email : '',
    password : '',
    confirmPassword : '',
  })
  const{fullname,email,password,confirmPassword} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault();
    axios.post("https://skill-talent-hub-default-rtdb.firebaseio.com/register.json",
    data).then(() => alert("submited sucessfully"))
  }
  return (
    <div>
      <center>
        <form autoComplete='off' onSubmit={submitHandler}>
          <input type="text" name="fullname" value={fullname} onChange={changeHandler}/><br/>
          <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
          <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/>
          <input type="submit" name="submit"/><br/>
        </form>
      </center>
    </div>
  )
}
// export default App;