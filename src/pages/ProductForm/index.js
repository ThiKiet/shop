import React, { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import { CATEGORIES } from "../../constants/categories";
import Loading from "../../components/Loading/index"
import "../ProductForm/index.css";

const ProductForm = ({
  products,
  createProductRequest,
  loading }) => {

  const [values, setValues] = useState({
    image: "",
    name: "",
    price: 0,
    description: "",
    categoty: "",
  });

  useEffect(() => {
    if (Object.keys(products).length) {
      setValues(products);
    }
  }, [products]);

  const handleInputChange = (event) => {
    // Create new product to update
    const newPropdudct = {
      ...values,
      [event.target.name]: event.target.value,
    };
    // Update new product for value
    setValues(newPropdudct);
  };

  const handleFileChange = (event) => {
    const imageFile = {
      ...values,
      [event.target.name]:
        event.target.name === "image"
          // Here is the way to access to the file
          ? event.target.files[0]
          : event.target.value
    };
    setValues(imageFile);
  };

  const handleOptionChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    onSave(values);
  };

  const onSave = () => {
    createProductRequest(values);
  };

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container className="product-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Group>
            <Form.File
              id="image"
              label="Image choose"
              value={values.image}
              onChange={handleFileChange}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={values.name}
            name="name"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="categories">
          <Form.Label>Categories</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={values.category}
            onChange={handleOptionChange}
          >
            {CATEGORIES.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            value={values.price}
            name="price"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button btnText="Submit" size="btn-md" handleClick={onSave} />
      </Form>
    </Container>
  );
};

ProductForm.propTypes = {
  products: PropTypes.object,
  createProductRequest: PropTypes.func,
  loading: PropTypes.bool,
};

ProductForm.defaultProps = {
  products: {},
  createProductRequest: () => { },
  loading: false,
};

export default ProductForm;
