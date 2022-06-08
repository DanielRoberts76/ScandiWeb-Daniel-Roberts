import React from "react";
import styled from "@emotion/styled";
import { colors, mq } from "./styles";

const ProductCard = ({ product, selectedPricingIndex }) => {
  const { name, gallery, prices } = product;

  return (
    <CardContainer>
      <CardContent>
        <CardImageContainer>
          <CardImage src={gallery[0]} alt={name} />
        </CardImageContainer>
        <CardBody>
          <ProductTitle>{name || ""}</ProductTitle>
          <ProductPrice>
            {prices[selectedPricingIndex].currency.symbol}{" "}
            {prices[selectedPricingIndex].amount}
          </ProductPrice>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div({
  backgroundSize: "cover",
  backgroundColor: "white",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [mq[0]]: {
    width: "90%",
  },
  [mq[1]]: {
    width: "47%",
  },
  [mq[2]]: {
    width: "24%",
  },
  height: 380,
  margin: 25,
  overflow: "hidden",
  position: "relative",
  cursor: "pointer",
});

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
});

const ProductPrice = styled.h3({
  textAlign: "center",
  fontSize: "1.4em",
  fontWeight: 400,
  color: colors.text,
  flex: 1,
});

const ProductTitle = styled.h3({
  textAlign: "center",
  fontSize: "1.4em",
  lineHeight: "1em",
  fontWeight: 400,
  color: colors.text,
  flex: 1,
});

const CardImageContainer = styled.div({
  elevation: 5,
  height: 220,
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const CardImage = styled.img({
  objectFit: "fill",
  width: "100%",
  height: "100%",
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: "flex",
  color: colors.textSecondary,
  flexDirection: "column",
  justifyContent: "space-around",
});
