import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productActions";
import Back from "../components/Back"

function AddCompany({ match, history }) {
 

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const productCreate = useSelector((state) => state.productCreate);
  const { success } = productCreate;

  

  const addOwner = (e) => {
    e.preventDefault();
    dispatch(
      createProduct(
       
        name,
        address,
      )
    ); 
    if (success) {
      history.push("/");
    }
  };

  return (
    <Container className>
      <h1>Add Company</h1>

      <Form onSubmit={addOwner}>
        <Row>
          <Col xs={4}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email" type="email">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
          

          <Button type="submit" variant="success">
            Submit
          </Button>
          </Col>
        </Row>
      </Form>
      <Back />
    </Container>
  );
}

export default AddCompany;
