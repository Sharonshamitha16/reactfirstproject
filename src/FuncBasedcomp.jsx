import { useState } from "react";
 export function FuncBasedComp (){
    console.log(useState());
    
    const [count , SetCount]=useState(0); // destructing the array
    // usetstate has a array of  2 things one can be anything i.e value (num,String) second is function 
   const increment =()=>{
    SetCount(count+1)
    // Setcount((prevcount)=>prevcount-1)
   }
   const decrement =()=>{
    SetCount(count-1) 
    // Setcount((prevcount)=>prevcount+1) //callback function
   }
    return (
        <div className="flex justify-center item-center mx-20">

            <p className="flex gap-4">
                {count}
            </p>
            < div className="flex gap-4">
                <button onClick={increment} className="px-4 py-1.5 rounded bg-blue-200">
                    Increment
                </button>
                <button onClick={decrement} className="px-4 py-1.5 rounded bg-blue-200">
                    Decrement
                </button>
            </div>
        </div>
    )
}
