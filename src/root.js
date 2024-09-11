import './App.css';
// cls 

// import { FuncBasedComp1 , FuncBasedComp2, FuncBasedComp3 } from './components/FunctionBasedComponent';
// import FuncBasedCompDefault from './components/FunctionBasedComponent';

// task

//  import ChildComponent1 from './components/ChildComponent1';
//  import { ChildComponent2 } from './components/ChildComponent2';
// import { ChildComponent3 } from './components/ChildComponent3';

import Navbar from './Task1/components/Navbar';
import Home from './Task1/components/Home';
import About from './Task1/components/About';
import Footer from './Task1/components/Footer';
function Root() {
  return (
    <div  >

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
    </div>


  );
}

export default Root;
