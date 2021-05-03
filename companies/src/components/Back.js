import React from 'react'
import {Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";


function Back() {
    return (
        <LinkContainer to="/">
        
        <Button className="m-sm-2"   variant="success">BACK</Button>
        </LinkContainer>
    )
}

export default Back
