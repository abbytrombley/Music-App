import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


export const MyNavBar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const navigate =useNavigate()

  return (
  <header>
  <ul className="navbar">
    <li className="navbar-item">
      <Link to="/" className="navbar-item">
        Home
      </Link>
    </li>
    
    <li className="navbar-item">
      <Link to="posts" className="navbar-item">
        Posts
      </Link>
    </li>
    
    <li className="navbar-item">
      <Link to="albums" className="navbar-item">
        Albums
      </Link>
    </li>
    
    <li className="navbar-item">
      <Link to="calendar" className="navbar-item">
        Calendar
      </Link>
    </li>

    <li className="navbar-item">
      <Link to="images" className="navbar-item">
        Images
      </Link>
    </li>
    
    <li className="navbar-item">
      <Link className="navbar-item" to=""
      onClick={() => {
        localStorage.removeItem("music_user")
        navigate("/login", {replace: true})
      }}
      >
        Logout
      </Link>
    </li>
  </ul>
  </header>
);
}
  
  
  
  
  



// export const MyNavBar = (args) => {

//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//          <Navbar {...args}
//             color='success'
//             expand
//             container='fluid'
//             fixed='top'
//          >
//              <NavbarBrand href="/">Digital Library</NavbarBrand>
//              <NavbarToggler onClick={toggle} />
//              <Collapse isOpen={isOpen} navbar>
//                 <Nav className="me-auto" navbar>
//                     <NavItem>
//                         <NavLink href="/posts">
//                         Posts
//                         </NavLink>
//                     </NavItem>    
//                     <NavItem>
//                         <NavLink href="/albums">
//                         Albums
//                         </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/calendar">
//                         Calendar
//                         </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/"
//                             onClick={() => {
//                                 localStorage.removeItem("activeUser")
//                                 }}
//                         >
//                             <strong>Logout</strong>
//                         </NavLink>
//                     </NavItem>
//                 </Nav>
//             </Collapse>
//         </Navbar>
//     </div>
//   );
// }

//SETH EXAMPLE
// return (
//   <header>
//   <ul className="navbar">
//     <li className="navbar-item">
//       <Link to="/" className="navbar-item">
//         Home
//       </Link>
//     </li>
//     |
//     <li className="navbar-item">
//       <Link to="posts" className="navbar-item">
//         Posts
//       </Link>
//     </li>
//     |
//     <li className="navbar-item">
//       <Link to="albums" className="navbar-item">
//         Albums
//       </Link>
//     </li>
//     |
//     <li className="navbar-item">
//       <Link to="calendar" className="navbar-item">
//         Calendar
//       </Link>
//     </li>|
//     <li className="navbar-item">
//       <Link to="images" className="navbar-item">
//         Images
//       </Link>
//     </li>
//     |
//     <li className="navbar-item">
//       <Link className="navbar-item" to=""
//       onClick={() => {
//         localStorage.removeItem("music_user")
//         navigate("/login", {replace: true})
//       }}
//       >
//         Logout
//       </Link>
//     </li>
//   </ul>
//   </header>
// );
// }