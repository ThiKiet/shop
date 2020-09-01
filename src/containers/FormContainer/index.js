import { connect } from "react-redux";
import { Creators } from "../../actions/productAction";
import ProductForm from "../../pages/ProductForm/index";

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
)(ProductForm);

export default PostNewContainer;
