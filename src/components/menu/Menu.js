import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    // const toggleSubmenu = () => {
    //   setMenuSubMenu(isMenuSubMenu === false ? true : false);
    // };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">
                <div className="header__middle__menus">
                  <nav className="main-nav " >
                    <ul className={boxClass.join(' ')}>
                      <li  className="menu-item" >
                          <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Login </NavLink> 
                      </li>
                      <li className="menu-item " >
                        <NavLink onClick={toggleClass} activeClassName='is-active' to={`/profile`}> Profile </NavLink> 
                      </li>
                      <li className="menu-item " >
                        <NavLink onClick={toggleClass} activeClassName='is-active' to={`/ex`}> Example </NavLink> 
                      </li>
                      {/* <li className="menu-item " >
                        <NavLink onClick={toggleClass} activeClassName='is-active' to={`/lv`}> Custom Register </NavLink>
                      </li> */}

                    </ul>
                  </nav>     
                </div>  
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu