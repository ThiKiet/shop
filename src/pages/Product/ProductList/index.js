import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../../../components/ProductItem/index";
import Loading from "../../../components/Loading";
import PropTypes from "prop-types";
import "../../../common/index.css";
import "../ProductList/index.css";

const ProductList = ({ products, loading, fetchProductRequest }) => {
  useEffect(() => {
    fetchProductRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Container>
        <Row>
          <Col>
            <Loading />
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        {!!products && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <ProductItem
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            );
          })
        ) : (
          <h4 className="center-title">Product list is empty!</h4>
        )}
      </Row>
    </Container>
  );
};

ProductList.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.array,
  fetchProductRequest: PropTypes.func,
};

ProductList.defaultProps = {
  loading: false,
  products: [],
  fetchProductRequest: () => {},
};

export default ProductList;
