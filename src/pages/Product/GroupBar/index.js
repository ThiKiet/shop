import React from "react";
import { Row } from "react-bootstrap";
import Group from "../../../components/Group/index";
import Dropdown from "../../../components/Dropdown/index";
import Search from "../../../components/Search/index";
import "../GroupBar/index.css";

const GroupBar = () => {
  return (
    <Row className="group-bar">
      <Group
        title="Product group"
        element={<Dropdown items={["Milk Tea", "Juice"]} />}
      />
      <Group
        title="Sort by price"
        element={<Dropdown items={["Low to hight", "Hight to low"]} />}
      />
      <Group
        title="Search"
        element={<Search searchTerm="" />}
      />
    </Row>
  );
}

export default GroupBar;
