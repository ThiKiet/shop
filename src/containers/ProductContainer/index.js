import { connect } from "react-redux";
import { Creators } from "../../actions/productAction";
import ProductList from "../../pages/Product/ProductList";

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
  error: state.product.error,
});

const mapDispatchToProps = {
  ...Creators,
};

const PostNewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

export default PostNewContainer;
