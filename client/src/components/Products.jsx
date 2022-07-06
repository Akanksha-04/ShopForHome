import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [items, setitems] = useState();

  useEffect(() => {
  axios
    .get("/product/all")
    .then((res) => {
      setitems(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Container>
      {items &&  items.map((item) => (
        <Link to={`/product/${item._id}`}>
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;
