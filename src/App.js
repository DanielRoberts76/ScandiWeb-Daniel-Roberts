import "./App.css";
import React from "react";
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

// const handleCategorySelect = (event) => populateCategory(event.target.value);

const Product = ({ category }) => {
  var selectedCategory = "tech";
  function populateCategory(selectedCategory) {
    category = selectedCategory;
    refetch({
      category: {
        title: selectedCategory,
      },
      selectedCategory: selectedCategory,
    });
  }

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
    variables: { selectedCategory },
  });

  return (
    <Layout grid category={selectedCategory}>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.category?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Product;
