
import './App.css';
import {useEffect , useState} from "react";


function App() {
  const [time , setTime]=useState(0)
  const [runing , setRuning]=useState(false)

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>STOPWATCH</h1>
      </header>
    <div>
      <span>{("0" + Math.floor((time/60000)%60))}:</span>
      <span>{("0" + Math.floor((time/1000)%60))}:</span>
      <span>{("0" + Math.floor((time/10)%100))}</span>
    </div>
    <div> 
      <button className="start" onClick={()=>setRuning(true)}>
        start
      </button>

      <button className="pause" onClick={()=>setRuning(false)}>
        pause
      </button>

      <button className="restart" onClick={()=>setTime(0)}>
        restart
      </button>
    </div>
    </div>
  );
}

export default App;
