import React from 'react'
import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import {USER_REGISTER_RESET} from '../constance/userConstance'

const SignIn = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : '/' ;

  useEffect(() => {
    if (userInfo) {
      dispatch({type:USER_REGISTER_RESET})
      history.push(redirect);
      
    }
  }, [history, userInfo, redirect,dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };


    return (
        
            
            <Container className="col-sm-4">
     <h1>Sign In</h1>
     {message && (
      <h6 style={{ backgroundColor: "red", display: "inline" }}>{message}</h6>
    )}
    {error && (
      <h6 style={{ backgroundColor: "red", display: "inline" }}>{error}</h6>
    )}
      <Form onSubmit={submitHandler}>
       
        <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control  type="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}></Form.Control>
      </Form.Group>

      <Form.Group controlId="email" type="email">
      <Form.Label>Email Address</Form.Label>
      <Form.Control  type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}></Form.Control>
    </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control  type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
    </Container>
        
    )
}

export default SignIn
