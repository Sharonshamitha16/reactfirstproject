
export function FuncBasedComp1(){
    return (
        // <h1>Function  Based Component 1</h1>
        <div>
            <FuncBasedComp2/>
        </div>
    )

}

export function FuncBasedComp2(){
    return (
        <h1>Function  Based Component 2</h1>
    )

}
export function FuncBasedComp3(){
    return (
        <h1>Function  Based Component 3</h1>
    )

}

function FuncBasedCompDefault(){
    const handleClick =()=>{
        console.log('button Clicked');
        
    }
    const data ='test data'
        return (
            // <h1>Function  Based Component defualt </h1>
            <div>
                <FuncBasedComp1/>
                <p>{data}</p>
                <button onClick={handleClick}>Submit</button>
                {/* <h1> func based component</h1> */}
            </div>
        )}
        export default FuncBasedCompDefault;

// modules - import export 
// -- ways to export 
// 1) export 2) export defualt 