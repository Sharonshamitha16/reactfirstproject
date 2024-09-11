import './App.css';
// import { ChildComponent1 } from './components/ChildComponent1';
// import { FuncBasedComp1 , FuncBasedComp2, FuncBasedComp3 } from './components/FunctionBasedComponent';
// import FuncBasedCompDefault from './components/FunctionBasedComponent';
 import ChildComponent1 from './components/ChildComponent1';
 import { ChildComponent2 } from './components/ChildComponent2';
import { ChildComponent3 } from './components/ChildComponent3';



function Root() {
  return (
    <div className=" bg-[#b33b3b] w-full h-screen flex justify-center items-center ">
     {/* <h1 className=' App text-4xl underline font-bold '>Helo world</h1> */}
     {/* <Sample/> */}
     {/* <FuncBasedCompDefault/>
       <FuncBasedComp1/>
       <FuncBasedComp2/>
       <FuncBasedComp3/> */}
      <ChildComponent1/>
      <ChildComponent2/>
    <ChildComponent3/>
      
      {/* <ChildComponent2/>
      <Childcomponent3/> */}
    </div>
   

  );
}
// const Sample = ()=>{
//   return <button>sample</button>
// }

export default Root;
