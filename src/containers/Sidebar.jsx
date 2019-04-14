import React, { Component } from "react";
import { connect } from "react-redux";
import SidebarWidget from "../components/SidebarWidget";
import ListGroup from "../components/ListGroup/ListGroup";
import ListGroupItem from "../components/ListGroup/ListGroupItem";

import Input from "../components/Input";
import Badge from "../components/Badge";
import Chip from "../components/Chip";

class Sidebar extends Component {
  state = {};

  render() {
    const { products } = this.props;
    return (
      <div className="col-md-3">
        <div className="sidebar">
          <SidebarWidget title="Product Categories">
            <ListGroup>
              <ListGroup>
                {products.categories.map((categ, i) => {
                  let catCount = 0;
                  products.items.map(item =>
                    item.category.forEach(cat => {
                      if (cat === categ) catCount++;
                    })
                  );

                  return (
                    <ListGroupItem key={i}>
                      <span className="list-group-item-text">{categ}</span>
                      <Badge value={catCount} inline />
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            </ListGroup>
          </SidebarWidget>
          <SidebarWidget title="Filter by color">
            <ListGroup>
              {products.colors.map((color, i) => {
                let colorCount = 0;
                products.items.map(item =>
                  item.color.forEach(colr => {
                    if (colr === color) colorCount++;
                  })
                );

                return (
                  <ListGroupItem key={i}>
                    <Badge value="" color={color} circle />
                    <span className="list-group-item-text">{color}</span>
                    <Badge value={colorCount} inline />
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </SidebarWidget>
          <SidebarWidget title="Filter by size">
            <ListGroup>
              {products.sizes.map((size, i) => {
                let sizeCount = 0;
                products.items.map(item =>
                  item.size.forEach(siz => {
                    if (siz === size) sizeCount++;
                  })
                );

                return (
                  <ListGroupItem key={i}>
                    <Input
                      id="checkbox"
                      label={size}
                      onChange={() => {}}
                      type="checkbox"
                    />
                    <Badge value={sizeCount} inline />
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </SidebarWidget>
          <SidebarWidget title="Vendor">
            <ListGroup>
              {products.vendors.map((vendor, i) => {
                let vendorCount = 0;

                products.items.map(item => {
                  if (item.vendor === vendor) vendorCount++;
                  return null
                });

                return (
                  <ListGroupItem key={i}>
                    <Input
                      id="checkbox"
                      label={vendor}
                      onChange={() => {}}
                      type="checkbox"
                    />
                    <Badge value={vendorCount} inline />
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </SidebarWidget>
          <SidebarWidget title="Tags">
            {products.tags.map((tag, i) => {
              return <Chip key={i} text={tag} />;
            })}
          </SidebarWidget>
        </div>
      </div>
    );
  }
}

export default connect(({ products }) => ({
  products
}))(Sidebar);
