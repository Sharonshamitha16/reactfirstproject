import './App.css';
import ParentComp from './props/ParentComp';
// import ClassBasedComp from './Classcomp';
// import { FuncBasedComp } from './FuncBasedcomp';
// cls 

// import { FuncBasedComp1 , FuncBasedComp2, FuncBasedComp3 } from './components/FunctionBasedComponent';
// import FuncBasedCompDefault from './components/FunctionBasedComponent';

// task1

//  import ChildComponent1 from './components/ChildComponent1';
//  import { ChildComponent2 } from './components/ChildComponent2';
// import { ChildComponent3 } from './components/ChildComponent3';

//task2

import Navbar from './Task1/components/Navbar';
import Home from './Task1/components/Home';
import About from './Task1/components/About';
import Footer from './Task1/components/Footer';

// test 12-09-24
// import Apptest from './Test';

// 16-09-24
// import VirtualDom from './VirtualDom';

// 13-09-24
// import ClassBasedComp from './Classcomp';


function Root() {
  return (
    <div >

      {/* <FuncBasedCompDefault/>
       <FuncBasedComp1/>
       <FuncBasedComp2/> 
       <FuncBasedComp3/> */}

      {/* <ChildComponent1/>
      <ChildComponent2/>
      <ChildComponent3/> */}

      <Navbar />
      <Home />
      <About />
      <Footer/>

      {/* <Apptest/>  */}

      {/* <ClassBasedComp/> */}
      {/* <FuncBasedComp/> */}



      {/* <VirtualDom/> */}



      {/* <ParentComp/> */} 
    </div>


  );
}

export default Root;
