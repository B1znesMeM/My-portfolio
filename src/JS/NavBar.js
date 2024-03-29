import { NavLink, Routes } from "react-router-dom";
import '../Style/reset.css';
import '../Style/NavBar-style.css';
import { useState } from "react";



const NavBar = () => {

    const [active , setActive] = useState(false);
    
    
    return(
    <nav className="Nav">

        <div className="div-nav">

        <div className="container">

            <div className="nav_link">

                <NavLink to="/" className="logo">

                    <h3>My portfolio</h3>

                </NavLink>

                <ul className="nav-list">

                    <li className="nav-list__item">
                        
                        <NavLink to="/home" className="link">
                            Home                            
                        </NavLink>
                    </li>
                    
                    <li className="nav-list__item">
                        <NavLink to="/project" className="link">
                            Worked
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/Contact" className="link">
                            Contact
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/After" className="link">
                            After
                        </NavLink>
                    </li>
                </ul>

            </div>

        </div>

         </div>

    </nav>
    )
}

export default NavBar;