import React, { useState, setItem } from "react";
import "./index.css";
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
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;

export const GET_CURRENCIES = gql`
  query getCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

const Product = ({ category }) => {
  var selectedCategory = "clothes";

  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function parentViewProduct(selectedProduct) {
    setSelectedProduct(selectedProduct);
  }

  function selectCurrency(selectedCurrency) {
    setSelectedCurrencyIndex(selectedCurrency);
  }

  function populateCategory(selectedCategory) {
    category = selectedCategory;
    setSelectedProduct(null);

    refetch({
      category: {
        title: selectedCategory,
      },
      selectedCategory: selectedCategory,
    });
  }

  const {
    loading: productLoading,
    error: productError,
    data: productData,
    refetch,
  } = useQuery(GET_PRODUCTS, {
    variables: { selectedCategory },
  });

  const {
    loading: currencyLoading,
    error: currencyError,
    data: currencyData,
  } = useQuery(GET_CURRENCIES);
  if (currencyLoading) {
    return "loading...";
  }
  if (currencyError) {
    return "$";
  }

  return (
    <Layout
      href="https://fonts.googleapis.com/css2?family=Raleway"
      handleParentFunction={(value) => {
        populateCategory(value);
      }}
      handleSelectCurrency={(value) => {
        selectCurrency(value);
      }}
      grid
      category={selectedCategory}
      currencyData={currencyData}
      selectedProduct={selectedProduct}
      selectedCurrencyIndex={selectedCurrencyIndex}
    >
      <QueryResult
        error={productError}
        loading={productLoading}
        data={productData}
      >
        {productData?.category?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selectedCurrencyIndex={selectedCurrencyIndex}
            viewProduct={parentViewProduct}
          />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Product;
