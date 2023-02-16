import React,{useState, useEffect} from 'react'
// import './App.css';


function App () {
    const [count,setCount] = useState(0);
    useEffect(() => console.log(count),[])

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click Here
            </button>
        </div>
    )
}

export default App;
