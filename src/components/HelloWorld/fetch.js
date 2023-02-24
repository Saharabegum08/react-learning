import React,{useEffect,useState} from 'react'

const App = () => {
  const[data,setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      response => response.json()
    ).then(json => setData(json))
  },[])
  return (
    <div>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}
export default App;