import "./App.css";
import React, { Component } from "react";
import Layout from "./components/layout";
import QueryResult from "./components/query-result";
import { useQuery, gql } from "@apollo/client";
import ProductCard from "./components/product-card";
import styled from "@emotion/styled";

export const GET_PRODUCTS = gql`
  query getProducts($category: CategoryInput) {
    category(input: $category) {
      products {
        id
        name
        gallery
        category
      }
    }
  }
`;

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
    this.category = "test";
    const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
      variables: { selectedCategory },
    });
  }

  populateCategory(selectedCategory) {
    category = selectedCategory;
    refetch({
      category: {
        title: selectedCategory,
      },
      selectedCategory: selectedCategory,
    });
  }

  render() {
    return (
      <Layout grid category={"selectedCategory"}>
        {/* <CategoryContainer>
        <CategoryButton
          onClick={() => {
            populateCategory("clothes");
          }}
        >
          CLOTHES
        </CategoryButton>
        <CategoryButton
          onClick={() => {
            populateCategory("tech");
          }}
        >
          TECH
        </CategoryButton>
      </CategoryContainer> */}
        <QueryResult error={error} loading={loading} data={data}>
          {data?.category?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </QueryResult>
      </Layout>
    );
  }
}

export default Product;

const CategoryButton = styled.div({
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  backgroundColor: "lightblue",
  maxWidth: 100,
  maxHeight: 50,
});

const CategoryContainer = styled.div({
  display: "flex",
  flex: 1,
});
