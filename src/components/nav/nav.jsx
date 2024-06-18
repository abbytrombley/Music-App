import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const toggle = () => setIsOpen(!isOpen);

  const navigate =useNavigate()

  return (
    <div>
      <Navbar>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownMenu end>
                <DropdownItem onClick={() => {navigate("/")}}>Home</DropdownItem>
                <DropdownItem onClick={() => {navigate("/posts")}}>Posts</DropdownItem>
                <DropdownItem
                onClick={()=>{navigate("/albums")}}>Albums</DropdownItem>
                <DropdownItem
                onClick={() => {navigate("/calendar")}}>Calendar</DropdownItem>
                 <DropdownItem
                 onClick={() => {navigate("/images")}}>Images</DropdownItem>
                {localStorage.getItem("nutshell_user")? "" : <DropdownItem onClick={() => {navigate("/login")}}>Login</DropdownItem>}
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
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