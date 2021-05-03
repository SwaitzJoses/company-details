import React from "react";
import { Navbar, Form, Button, Nav, FormControl,Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, getUserDetails } from "../actions/userActions";
import { useState, useEffect } from "react";
import SearchBox from '../components/SearchBox'
import { Route } from 'react-router-dom'


const Header = () => {

  const dispatch = useDispatch();

      const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // useEffect(() => {
  //   if (userInfo) {
 
     
      
  //   }
  // }, [ userInfo]);



  const logOutHandler = () => {
    dispatch(logout());
  };


  return (
    <>
      <Navbar bg="primary" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand className="mr-auto">
          COMPANIES
        </Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/addcompany">
        <Button className="mr-sm-2" variant="outline-info" variant="warning">
          Add Company
        </Button>
        </LinkContainer>

        <Route render={({ history }) => <SearchBox history={history} />} />


        {userInfo ? (
          <Dropdown>
            <Dropdown.Toggle bg="" variant="primary" id="dropdown-basic">
              
              {userInfo.name }

            </Dropdown.Toggle>

            <Dropdown.Menu>
            
              <Dropdown.Item
                onClick={() => {
                  logOutHandler();
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (




            <>
        <LinkContainer to="/signin">
        <Button className="mr-sm-2" variant="outline-info">
          Sign In
        </Button>
        </LinkContainer>

        <LinkContainer to="/login">
        <Button className="mr-sm-2" variant="outline-info">
          Log In
        </Button>
        </LinkContainer>
            </>
        )}
      </Navbar>
    </>
  );
}

export default Header;
