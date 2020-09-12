import React, {useState} from 'react';



const App= ()=> {
  const [wolframInput, setWolframInput] = useState("")
  const API = "KH3LRW-HUELER2TUL"
  const queryType="simple"
  const url = `http://api.wolframalpha.com/v2/${queryType}?appid=${API}&input=${wolframInput}&output=json`
  const getClick =()=>{
    fetch("http://localhost:5000/uploads/url")
    .then(res=>res.json())
    .then(res=>setWolframInput(res))
    .catch(e=>console.log(e))
  }

  return (
    <div className="App">
      <button onClick ={getClick} >heyhey</button>
      {/* <img src = {"http://api.wolframalpha.com/v2/simple?appid=KH3LRW-HUELER2TUL&input=5x5&output=json"}/> */}
      <img src = {url}/>
    </div>
  );
}

export default App;
