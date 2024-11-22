import React, { useState } from 'react'
import './Navbar.css'
import { assets} from '../../assets/frontend_assets/assets'

const Navbar = () => {

    const [menu,setMenu] = useState("home");


  return (
    <div className='navbar'>
      <img src={assets.logo} alt='logo' className='logo'/>
        <ul className='navbar-menu'>
          <li onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu==="Menu"? "active":""}>Menu</li>
          <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"? "active":""}>Mobile-app</li>
          <li onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"? "active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt='searcg-icon'/>
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt='b-icon'/>
            <div className='dot'></div>
          </div>
          <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar