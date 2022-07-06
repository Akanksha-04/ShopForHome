import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;




function Cartitem({ item }) {
  return (
    <Info>
      <Hr />
      <Product>
        <ProductDetail>
          <Image src="https://ii2.pepperfry.com/media/catalog/product/v/i/494x544/victoria-king-size-bed-with-hydraulic-storage-in-gloss-finish-by-a-globia-creations-victoria-king-si-7uafer.jpg" />
          <Details>
            <ProductName>
              <b>Product:</b> {item.name}
            </ProductName>
            <ProductId>
              <b>ID:</b> {item.productId}
            </ProductId>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Remove />
            <ProductAmount>{item.quantity}</ProductAmount>
            <Add />
          </ProductAmountContainer>
          <ProductPrice>Rs.{item.price}</ProductPrice>
        </PriceDetail>
      </Product>
    </Info>
  )
}

export default Cartitem