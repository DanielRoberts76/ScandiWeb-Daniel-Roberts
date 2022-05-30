import React, { useState } from "react";
import Layout from "./components/layout";
import QueryResult from "./components/query-result";
import { useQuery, gql } from "@apollo/client";
import ProductCard from "./components/product-card";

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

const Product = ({ category }) => {
  var selectedCategory = "clothes";
  // const [selectedCategory2, setSelectedCategory2] = useState("clothes");
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
    <Layout
      handleParentFunction={(value) => {
        populateCategory(value);
      }}
      grid
      category={selectedCategory}
    >
      <QueryResult error={error} loading={loading} data={data}>
        {data?.category?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Product;
