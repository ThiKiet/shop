import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { Container } from "react-bootstrap";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import RootRouter from "./pages/router/RootRouter";

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid className="p-0">
        <Header />
        <RootRouter />
        <Footer />
      </Container>
    </Provider>
  );
};
export default App;
