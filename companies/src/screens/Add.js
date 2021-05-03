import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, createOwner } from "../actions/productActions";
import Back from "../components/Back"

function Add({ match, history }) {
  const id = match.params.id;

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const productCreate = useSelector((state) => state.productCreate);
  const { success: successUpdate } = productCreate;

  // useEffect(() => {
  //   if (successUpdate) {
  //     history.push("/");
  //   }
  // }, [dispatch, match, successUpdate, history]);

  const addOwner = () => {
    dispatch(
      createOwner({
        _id: id,
        name,
        title,
      })
    );
  };

  return (
    <Container className>

   

      <h1>Add a Owner</h1>

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
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
         

          <Button type="submit" variant="success">
            ADD MORE Owner
          </Button> </Col>
        </Row>
      </Form>
      <Back />
    </Container>
  );
}

export default Add;
