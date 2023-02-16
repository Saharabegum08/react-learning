import React,{useState} from 'react'
// import './App.css';


const App = () => {
    const [count,setCount] = useState(0);
    // const [name,setName] = useState("Automation Talent Hub");
    return (
        <div>
            <center>
                <h1>{count}</h1>
                {/* <button onClick={() => setName("TalentHub")}>Change</button> */}
                <button onClick={() => setCount(count+1)}>Change</button>
            </center>
        </div>
    )
}

export default App;
