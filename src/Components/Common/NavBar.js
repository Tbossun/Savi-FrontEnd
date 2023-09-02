import React from 'react'
import Logo from  "../../Assests/svg/Savi..svg"
import { ButtonComp } from './Button';

const Header = () => {
    const handleSendInstructions = () => {
        // navigate("/sign-up");
      };
  return (
    <div>
    <nav className="navbar fixed-top  bg-white navbar-dark">
      <div className="container-fluid">
        <a href='/'>
        <img src={Logo} style={{ height: "20px" }} className="m-1" />
       </a>
     <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
     </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
        </div>
        <ButtonComp label="Get Started" width="151px" onClick={handleSendInstructions}/>
      </div>
    </nav>
  </div>  
  )
}

export default Header