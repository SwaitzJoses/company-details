import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useState } from 'react'

const SearchBox = ({ history }) => {

   
        const [keyword, setKeyword] = useState('')
      
        const submitHandler = (e) => {
          e.preventDefault()
          if (keyword.trim()) {
            history.push(`/search/${keyword}`)
          } else {
            history.push('/')
          }
        }
  return (
    <>
      <Form className="mr-auto" onSubmit={submitHandler} inline>
        <FormControl
          type="text"
          name='q'
          placeholder="Search Company..."
          className="mr-sm-2" 
        
        onChange={(e) => setKeyword(e.target.value)}
        />
        <Button type='submit' className="mr-sm-2" variant="outline-info">
          Search
        </Button>
      </Form>
    </>
  );
}

export default SearchBox;
