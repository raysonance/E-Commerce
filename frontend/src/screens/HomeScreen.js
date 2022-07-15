import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { ListProducts } from "../actions/ProductActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.ProductList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(ListProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
          <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={3} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
