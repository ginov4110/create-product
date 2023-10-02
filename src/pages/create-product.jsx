import React, { useState, useEffect } from "react";

import { Input, Select, TextArea, Label } from "../components/Input";
import { article } from "../utils/constants/article";
import FormContent from "../components/Form-Content";
import { Button } from "../components/Button";
import { Table } from "../components/Table";
import Image from "../components/Image";

import "../styles/form-content-style.css";
import bootstrapLogo from "../assets/images/bootstrap-logo.svg.png";

function CreateProduct() {
  const [language, setLanguage] = useState("en");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState();
  const [productPrice, setProductPrice] = useState(0);
  const [errorText, setErrorText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // alert("Welcome")
    if (productName.length >= 10) {
      setErrorText("Last Name must not exceed 25 characters.");
    } else if (productName.length < 10) {
      setErrorText("");
    }
  }, [productName]);

  const handleRadio = (e) => {
    setProductFreshness(e.target.value);
  };

  function handleOnSubmit(event) {
    event.preventDefault();
    if (productName == "") {
      return alert("Please enter a valid product name");
    } else if (productCategory == "") {
      return alert("Please enter a valid product name");
    } else if (productImage == "") {
      return alert("Please enter a valid product name");
    } else if (productFreshness == "") {
      return alert("Please enter a valid product name");
    } else if (productPrice == 0) {
      return alert("Please enter a valid product name");
    } else {
      const product = {
        id: products.length + 1,
        productName: productName,
        productCategory: productCategory,
        productImage: productImage,
        productFreshness: productFreshness,
        productPrice: productPrice,
      };
      const dupProducts = [...products, product];
      setProducts(dupProducts);

      localStorage.setItem("products", JSON.stringify(dupProducts));
    }
  }

  return (
    <FormContent>
      <Image
        src={bootstrapLogo}
        className="rounded mx-auto d-block mt-4"
        alt="Bootstrap Logo"
      />
      <h2 className="fs-2 mt-3 text-center">{article.title[language]}</h2>
      <p className="fs-6 text-center">{article.description[language]}</p>
      <Button
        label="EN/ID"
        onClick={() => setLanguage(language == "id" ? "en" : "id")}
      />
      <Button
        onClick={() => console.log(Math.random())}
        label="Generate Random Number"
      />
      <h3 className="fs-4 mt-5">Detail Product</h3>

      <form className="mb-3">
        <Input
          type="text"
          className="form-control productName"
          name="productName"
          value={productName}
          id="productName"
          label="Product Name"
          onChange={(event) => setProductName(event.target.value)}
        />
        <p style={{ color: "red" }}>{errorText}</p>
        <div id="error-message" role="alert"></div>
        <Select
          label="Product Category"
          value={productCategory}
          placeholder="Choose..."
          options={["Electronic", "Beauty", "Healthy"]}
          onChange={(event) => setProductCategory(event.target.value)}
        />
        <Input
          label="Image of Product"
          type="file"
          className="form-control btn btn-primary imgProduct"
          accept="image/jpg, image/jpeg, image/png"
          value={productImage}
          onChange={(e) => setProductImage(e.target.files[0])}
        />
        <Label label="Product Freshness" />
        <br />
        <input
          type="radio"
          name="freshness"
          value="Brand New"
          onChange={handleRadio}
        />
        Brand New
        <br />
        <input
          type="radio"
          name="freshness"
          value="Second Hand"
          onChange={handleRadio}
        />
        Second Hand
        <br />
        <input
          type="radio"
          name="freshness"
          value="Refubished"
          onChange={handleRadio}
        />
        Refubished
        <br />
        <Label label="Additional Description" />
        <TextArea />
        <Input
          label="Product Price"
          type="number"
          placeholder="$1"
          onChange={(event) => setProductPrice(event.target.valueAsNumber)}
        />
        <Button label="Submit" type="submit" onClick={handleOnSubmit} />
        <Table
          headers={[
            "No",
            "Product Name",
            "Product Category",
            "Product Image",
            "Product Freshness",
            "Product Price",
          ]}
          datas={products}
        />
        <Input label="Search" type="text" />
        <Button label="Delete" />
        <Button label="Search" />
      </form>
    </FormContent>
  );
}

export { CreateProduct };
