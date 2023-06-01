// import {Link} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {

    const [active,setActive]= useState(false);
    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true): setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive)
        }
    },[])
  return (
    <div className={active ? "navbar active" :"navbar"}>
        <div className="container">
            <div className="logo">
                {/* <Link to="/"> */}
                <span>book</span>
                <span className="m">M</span>
                <span>e.com</span>
                {/* </Link> */}
            </div>
            <div className="middleLinks">
                <span>HOME</span>
                <span>PAGES</span>
                <span>HOTELS</span>
                <span>BLOGS</span>
                <span>SERVICES</span>
            </div>
            <div className="rightLinks">
                <span>Sign In</span>
                <button>JOIN</button>
            </div>
        </div>
       { active && (
       <><hr />
        <div className="sologen">
            <span>The Best acccomodations for everyone !</span>
            
        </div></>)}
    </div>
  )
}

export default Navbar