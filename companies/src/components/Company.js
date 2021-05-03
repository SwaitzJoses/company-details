import React from 'react'
import { Card, Button} from 'react-bootstrap'
import {  useSelector } from "react-redux";
import { deleteProduct } from '../actions/productActions';
import { useDispatch} from "react-redux";
import {  useEffect } from "react";
import { listProducts } from "../actions/productActions";
import { LinkContainer } from "react-router-bootstrap";

function Company({company}) {
  const dispatch = useDispatch();
 
 
  const productDelete = useSelector((state) => state.productDelete);
  const { success } = productDelete;



const submitHandler = (id) => {

  
  dispatch(deleteProduct(id));
 
 
};

console.log(company._id)




    return (
        <Card >
        <Card.Header>{`Company Name: ${company.name}`}</Card.Header>
        <Card.Body>
          <Card.Title>{company.name}</Card.Title>
          <Card.Text>
          {company.address}
          </Card.Text>
          <hr /> 
          {company.owner.map((p)=>(<Card.Text>
            {`Owner Name: ${p.name}`} <br />
            {`Owner Title: ${p.title}`}
             </Card.Text>))}

            <hr /> 

           {company.employee.map((p)=>(<Card.Text>
            {`Employee name: ${p.name}`}<br />
            {`Employee Title: ${p.title}`}
             </Card.Text>))}

             <Card.Text>
             {`No. of Employees: ${company.employee.length}`}
             </Card.Text>

             <LinkContainer to={`/editpage/${company._id}`}>
          <Button className="mr-sm-2 " variant="primary" >EDIT</Button>
          </LinkContainer>
          <Button variant="primary" onClick={()=>submitHandler(company._id)}>DELETE</Button>

          <LinkContainer to={`/add/${company._id}`}>
          <Button className="m-sm-2 " variant="primary" >Add Owner</Button>
          </LinkContainer>

          <LinkContainer to={`/addemployee/${company._id}`}>
          <Button className="m-sm-2 " variant="primary" >Add Employee</Button>
          </LinkContainer>



        </Card.Body>
      </Card>
    )
}

export default Company
