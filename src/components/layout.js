import React, { Component } from "react";
import Header from "./header";
import styled from "@emotion/styled";
import { widths, unit } from "./styles";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: "" };
    this.submitForm = this.submitForm.bind(this);
  }

  handleCategoryChange = (newCategory) => {
    console.log(newCategory, "newCategory");
    this.setState({ selectedCategory: newCategory });
    this.props.propogateSelectedCategoryToAppJs(newCategory);
  };

  submitForm(values) {
    this.setState({ values });
  }
  render() {
    return (
      <>
        <Header changeSelectedCategory={this.handleCategoryChange}></Header>
        <CategoryName>{this.state.selectedCategory}</CategoryName>
        <PageContainer>{this.props.children}</PageContainer>
      </>
    );
  }
}

export default Layout;

const PageContainer = styled.div((props) => ({
  display: "flex",
  justifyContent: props.grid ? "center" : "top",
  flexDirection: props.grid ? "row" : "column",
  flexWrap: "wrap",
  alignSelf: "center",
  flexGrow: 1,
  maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
  width: "100%",
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));

const CategoryName = styled.div((props) => ({
  flex: 1,
  flexDirection: "column",
  width: "100%",
  alignSelf: "left",
  marginLeft: "15%;",
  marginTop: "5%",
  marginBottom: "5%",
  fontSize: 40,
  textTransform: "capitalize",
}));
