import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from "../responsive";

const Container = styled.div``;
  
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return <Container>
       <Title>SHOP BY CATEGORY</Title>
        <Wrapper>
        {categories.map(item =>(
            <CategoryItem item={item} key={item.id}/>
        ))}
        </Wrapper>
    </Container>;
  
}

export default Categories
