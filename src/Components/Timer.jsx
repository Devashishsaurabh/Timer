import React ,{useEffect,useState} from 'react'

const Timer = (props) => {
    const [timer,setTimer]=useState(props.start)
   useEffect(() => {
    let id=setInterval(()=>{
        if(timer <props.end){
            setTimer(timer+1)
        }else{
            clearInterval(id)
        }
    },1000)
   
     return () => {
      clearInterval(id)
     }
   },[timer]);
   
  return (
    <div><h1>Timer</h1>
        <h1>Running Timer :{timer}</h1>
        <h2>Start Time:{props.start}</h2>
        <h2>End Time:{props.end}</h2>
        <button onClick={()=>setTimer(1)}>Restart Timer {props.start}</button>
    </div>

  )
}

export default Timer