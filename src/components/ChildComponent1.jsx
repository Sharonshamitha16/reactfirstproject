//  function ChildComponent1(){
//     return <div><h1>Child1</h1><GrandChild1/></div>
    
// }
// function GrandChild1(){
//     return <h1>Grand Child 1 </h1>
// }






const ChildComponent1 =()=>{
    return (<div><h1>Child1</h1><GrandChild1/></div>)

}

const GrandChild1 =()=>{
    return <h1>Grand Child 1 </h1>
}
 



export  default ChildComponent1