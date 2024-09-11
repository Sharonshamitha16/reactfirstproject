import "./Navbar.css"
import img from  "./Assets/human2.png"
const About =()=>{
    return(
        <div className="row bg-black flex ">
             
            <div className="col mx-48 mb-20  h-1vh">
                <img src={img} alt="img" h-500 w-500 />
            </div>
            <div className="col mx-48 mb-20">
                <h1 className="text-2xl  text-white text-extrabold">About Me</h1>
                {/* <h1 className="text-4xl text-extrabold z-0 text-white">About</h1> */}
                <p className="text-md  text-white text-extrabold p-2">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

                <p className="text-md  text-white text-extrabold m-1">
                <h4 className="m-3 font-mono font-semibold">Name: <span className="text-gray-400">Clark Thompson</span></h4>
               <h4 className="m-3 font-mono font-semibold"> Date of birth: <span className="text-gray-400">January 01, 1987</span></h4>
                <h4 className="m-3 font-mono font-semibold">Address: <span className="text-gray-400">San Francisco CA 97987 USA</span></h4>
                <h4 className="m-3 font-mono font-semibold">Zip code: <span className="text-gray-400">1000</span></h4>
                <h4 className="m-3 font-mono font-semibold">Email:  <span className="text-gray-400">clarkthomp@gmail.com</span></h4>
                <h4 className="m-3 font-mono font-semibold">Phone: <span className="text-gray-400">+1-2234-5678-9-0</span></h4>
                </p>
                <h1 className="text-white"><span className="text-yellow-400">120  </span>Project complete</h1>
                <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full my-10 mr-5">Download CV</button>

            </div> 
        </div>
    )
}
export default About