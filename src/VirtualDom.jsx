import React, { useState } from 'react'

const VirtualDom = () => {
    const [text, setText] = useState("")
    const [data, setData] = useState([])
    const handleadd = () => {
        setData((prevData) => [...prevData, text])
    };
    return (
        <div>
            <input type="text"
                placeholder='text'
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button onClick={handleadd}>Add</button>
            <div>
                {data.map((val, id) => (
                    <h1   
                    key={id} 
                    onClick={() => 
                        setData((prevState) => 
                            prevState.filter((val, index) => 
                                index !== id))
                }>{val}</h1>
           ))}
        </div>
    </div >
)





}
export default VirtualDom 