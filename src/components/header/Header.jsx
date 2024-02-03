import { useEffect } from 'react';
import './header.css';
import { useState } from 'react';
function Header() {
  const [mood,setMood] = useState(true);
  const darkMode = () =>{
    if (mood) {
      document.body.setAttribute("class","darkmood")
        window.localStorage.setItem("theme",'dark')
        document.querySelector(".hero__search-inp").classList.add("light-icon");
        document.querySelector(".darkmode-btn").classList.add("lightmode-btn")
        setMood(!mood)
      }else {
        window.localStorage.setItem("theme",'light')
        document.body.removeAttribute("class")
        document.querySelector(".hero__search-inp").classList.remove("light-icon");
        document.querySelector(".darkmode-btn").classList.remove("lightmode-btn")
          setMood(!mood)
    }
  }
  useEffect(() =>{
    if (window.localStorage.getItem("theme") == "dark") {
      document.body.setAttribute("class","darkmood")
      window.localStorage.setItem("theme",'dark')
        document.querySelector(".hero__search-inp").classList.add("light-icon");
    }
  },[])
  
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__wrap">
          <a className="logo" href="./index.html">
            Where in the world?
          </a>
          <button className="darkmode-btn" onClick={darkMode}>Dark Mode</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
