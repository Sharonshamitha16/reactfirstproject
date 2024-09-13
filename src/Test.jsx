import { useState } from "react"
import './App.css'
function Apptest(){
    function handlesubmit(){
      let button1=document.getElementById("demo").innerHTML="Sa"
      button1.value="Ash"
      console.log(button1);
      
    }

    console.log("turuty")
      
      return (
        <div>
        <h1 id="demo">
            Ashwin
        </h1>
        <button onClick={handlesubmit}>Trigger</button>
        </div>
      )
}
export default Apptest