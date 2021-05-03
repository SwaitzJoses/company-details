import React from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { detailsProduct, updateProduct } from "../actions/productActions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PRODUCT_UPDATE_RESET } from '../constance/productConstance'
import Back from "../components/Back"


const EditPage = ({ match, history }) => {
  match = match.params.id;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { product  } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {  success:successUpdate } = productUpdate;

  useEffect(() => {

    dispatch(detailsProduct(match));
    
        if(successUpdate){
            dispatch({type:PRODUCT_UPDATE_RESET})
            history.push('/')
        }

    
      
  }, [dispatch, match,successUpdate,  history]);

  const updateHandler = (e) => {
    e.preventDefault()

    dispatch(updateProduct({
        _id: match,
        name:name,
        address:address

     } ));

     if(successUpdate){
        dispatch({type:PRODUCT_UPDATE_RESET})
        history.push('/')
    }
        
   
  };

 

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h3> Edit Page </h3>
          <br />
          <Form onSubmit={updateHandler}>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>COMPANY NAME</Form.Label>
              <Form.Control
                placeholder={product.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>COMPANY ADDRESS</Form.Label>
              <Form.Control
                placeholder={product.address}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

       

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Back />
    </Container>
  );
}

export default EditPage;
