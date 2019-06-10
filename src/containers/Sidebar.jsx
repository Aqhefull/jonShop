import React, { Component } from "react";

//Redux
import { connect } from "react-redux";

//Components
import SidebarWidget from "../components/SidebarWidget";
import ListGroup from "../components/ListGroup/ListGroup";
import ListGroupFilter from "../components/ListGroup/ListGroupFilter";

class Sidebar extends Component {
  state = {};

  render() {
    const { products } = this.props;
    return (
      <div className="col-md-3">
        <div className="sidebar">
          <SidebarWidget title="Product Categories">
              <ListGroup>
                <ListGroupFilter data={products} section="categories" itemSlug="category"/>
              </ListGroup>
          </SidebarWidget>
          <SidebarWidget title="Filter by color">
              <ListGroup>
                <ListGroupFilter data={products} section="colors" itemSlug="color" type="color"/>
              </ListGroup>
          </SidebarWidget>
          <SidebarWidget title="Filter by size">
              <ListGroup>
                <ListGroupFilter data={products} section="sizes" itemSlug="size" type="checkbox"/>
              </ListGroup>
          </SidebarWidget>
          <SidebarWidget title="Vendor">
              <ListGroup>
                <ListGroupFilter data={products} section="vendors" itemSlug="vendor" type="checkbox"/>
              </ListGroup>
          </SidebarWidget>
          <SidebarWidget title="Tags">
                <ListGroupFilter data={products} section="tags" itemSlug="tags" type="tags"/>
          </SidebarWidget>
        </div>
      </div>
    );
  }
}

export default connect(({ products }) => ({
  products
}))(Sidebar);
