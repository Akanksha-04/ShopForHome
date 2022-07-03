import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// const API_URL = "http://localhost:5000/products";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const fetchData = async () => {
  //   const { data } = await axios.get(API_URL);
  //   setPproducts(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to="/product">
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;
