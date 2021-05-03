import React, { useEffect } from "react";
import Company from "../components/Company";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { productsl } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { success } = productDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listProducts(keyword));

    // if(success){
    //     dispatch(listProducts());
    //   }
  }, [dispatch, keyword]);

  return (
    <div>
      <h1>COMPANIES DETAILS</h1>
      {userInfo ? (
        // <h1>hi</h1>

        <Row>
          {productsl.map((company) => (
            <Col key={company._id} sm={12} md={6} lg={4} xl={3}>
              <Company company={company} />
            </Col>
          ))}
        </Row>
      ) : (
        <>
          {" "}
          <h2>
            <br /> PLEASE SIGN IN{" "}
          </h2>{" "}
          <h4>LOG IN IF ALREADY HAVE AN ACCOUNT</h4>{" "}
        </>
      )}
    </div>
  );
};

export default HomeScreen;
