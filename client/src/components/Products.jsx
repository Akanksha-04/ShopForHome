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

const API_URL = "/product/all";

const Products = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setAllProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(allproducts);

  return (
    <Container>
      {allproducts.map((item) => (
        <Link to={`/product/${item._id}`}>
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;
