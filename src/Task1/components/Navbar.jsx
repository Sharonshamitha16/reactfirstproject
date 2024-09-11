import Myimage from "./Assets/logo2.png"
import "./Navbar.css"
import React from 'react';
// import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="Navbar-style bg-black stickyactive:text-yellow-600 sticky top-0">
      <div className="container ">
        <ul className="bg-grey text-white flex justify-evenly ">

          <img src={Myimage} alt="" height={20} width={200} className="mb-1" />
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Home</li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">About</li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Resume</li>

          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Service</li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Skills</li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Projects</li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">My Blog</li>

          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">Contact</li>

        </ul>
      </div>
    </div>
    //     <div class="header">
    //     <nav style="background: transparent;">
    //         <img src="/Log in page folder/Assets/images/logo.png" alt="logo" class="logo"/>
    //         <div>
    //             <ul>
    //                 <li><a href="/Home folder/Home.html" >Home</a></li>
    //                 <li><a href="/tv shows/tvshows.html" >Tv shows</a></li>
    //                 <li><a href="/Home folder/Home.html" >Movies</a></li>
    //                 <li><a href="#" >New & Popular</a></li>
    //                 <li><a href="/My List/MyList.html" >My List</a></li>
    //                 <li><a href="#" >Browse by Language</a></li>


    //                 <div class="nav-right">
    //                     <div class="search-container">
    //                         <button class="search-icon"><img src="/tv shows/assets/search_icon.svg" alt="search icon"
    //                                 class="icon_search1"/></button>
    //                         <input type="text" id="search-input" placeholder="Title, people, genres"/>
    //                     </div>
    //                     <p>Children</p>
    //                     <img src="/tv shows/assets/bell_icon.svg" alt="bell icon" class="bell-icon"
    //                         title="Your favourite"/>
    //                     <div class="navbar-profile">
    //                         <img src="/tv shows/assets/profile_img.png" alt="profile" class="profile"/>
    //                         <img src="/tv shows/assets/caret_icon.svg" alt="caret icon" class="caret_icon"/>
    //                     </div>
    //                 </div>
    //             </ul>
    //         </div>
    //     </nav>

    // </div>
  );
};

export default Navbar;
