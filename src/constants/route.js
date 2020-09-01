import HomePage from "../pages/Home";
import ProductContainer from "../containers/ProductContainer";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import FormContainer from "../containers/FormContainer/index"

const ROUTES = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    exact: true,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/product",
    name: "Product",
    component: ProductContainer,
  },
  {
    path: "/about",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/form",
    name: "Form",
    component: FormContainer,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
  // {
  //   path: "/form",
  //   name: "Form",
  //   component: ,
  // },
];

export default ROUTES;
