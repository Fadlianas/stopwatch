
import './App.css';
import {useEffect , useState} from "react";


function App() {
  const [time , setTime]=useState(0)
  const [runing , setRuning]=useState(false)
  const [pause , setPause]=useState(false)

  useEffect(()=>{    
  let interval ;
  if (runing) {
      interval = setInterval(() => {
        setTime((i) => i+10);}, 10);

  } 
  else if (!runing) {
    clearInterval(interval);
  }
  return () => clearInterval(interval)
  },[runing]);


function switchbutton(){

      if (runing||pause) {
        return(
        <div>
        <button className="pause" onClick={()=>{setRuning(false);setPause(true)}}>
          pause
        </button>
        <button className="restart" onClick={()=>{setTime(0);setRuning(false);setPause(false)}}>
          restart
        </button> 
        </div>
        )
    }
    else if(!runing&&!pause) {
      return(
      <button className="start" onClick={()=>setRuning(true)}>
        start
      </button>
      )
      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>STOPWATCH</h1>
      </header>

    <div>
      <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/10)%100)).slice(-2)}</span>
    </div>

    <div>
    {switchbutton()}
    </div>
    </div>
  );
}

export default App;
