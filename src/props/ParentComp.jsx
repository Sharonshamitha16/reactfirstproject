import React from 'react'
import Button from './ChildComp'
import { Childcomp2 } from './ChildComp'
const ParentComp = () => {
    // const btnName :
    const updateButton = "update"


    const handleclickUpdate = () => {
        console.log("update button trigeered...");

    }
    const handleclickSubmit = () => {
        console.log("Submit button trigeered...");

    }
    const handleback = () => {
        console.log("Back button is triggered...");

    }
    const handleReset = () => {
        console.log("Reset button is triggered..");

    }
    return (
        <div>
            <h1 className='text-center mb-4'>ParentComp</h1>
            <div className="flex justify-center mx-1">
                <div className="flex gap-5">
                    <Button btnName={updateButton} handleFunc={handleclickUpdate} />
                    <Button btnName="Submit" handleFunc={handleclickSubmit} /></div>
                <div className="flex gap-5"></div>
                {/* <ButtonComp props={{btnName:btnName,handleFunc: handleback}} /> */}
                <Button btnName="Reset" handleFunc={handleReset} />
            </div>
        </div>
       

    )
}

export default ParentComp