import React from 'react'

const ChildCom = ({ btnName, handleFunc }) => {
   
    console.log(btnName,handleFunc);
 
    return (
        // <form onSubmit={handleOnsubmit}>
        <div>
                <button className='bg-blue-500 px-5 py-5 mx-2 rounded text-white' onClick={handleFunc} >{btnName}</button>   
        </div>
            // </form>
    )
}
  
 export const ChildComp2 = (props) => {
   const { btnName, handleFunc } = props
    console.log(btnName,handleFunc);
 
    return (
        // <form onSubmit={handleOnsubmit}>
        <div>
                <button className='bg-blue-500 px-5 py-5 rounded text-white' onClick={handleFunc} >{btnName}</button>   
        </div>
            // </form>
    )
}
export default ChildCom