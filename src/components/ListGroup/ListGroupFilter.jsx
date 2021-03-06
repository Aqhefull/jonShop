import React, { Component } from "react";
import PropTypes from "prop-types";

//Redux
import { connect } from 'react-redux'
import {switchFilter} from '../../actions/actionCreator'

//Components
import ListGroupItem from "./ListGroupItem";
import Badge from "../ui/Badge";
import Input from "../ui/Input";
import Chip from "../ui/Chip";



class ListGroupFilter extends Component {
  state = {
    value: ''
  }
  getSlugCounter = (data, itemSlug, sectionItem) => data.items.filter(item => item[itemSlug].includes(sectionItem)).length;
  isActive = (filterProducts, itemSlug, sectionItem) => {
    if(typeof filterProducts[itemSlug] === "object" || filterProducts[itemSlug] instanceof Array) {
      return filterProducts[itemSlug].includes(sectionItem);
    } else {
      return filterProducts[itemSlug] === sectionItem
    }
  }
  render() {
    const { data, section, itemSlug, switchFilter, type, filterProducts } = this.props;
    

    return data[section].map((sectionItem, i) => {
      const info = this.getSlugCounter(data, itemSlug, sectionItem);
      const isActive = this.isActive(filterProducts, itemSlug, sectionItem)
      return (type !== 'tags') ? (
        <ListGroupItem key={i} onClick={() => switchFilter(sectionItem, itemSlug)} active={isActive}>
          {type === "color" && <Badge value="" color={sectionItem} circle />}
          {type !== "checkbox" && <span className="list-group-item-text">{sectionItem}</span>}
          {type === "checkbox" &&  <Input id="checkbox" className='check__input' label={sectionItem} type="checkbox" checkbox defaultChecked={isActive ? true : false}/>}
          <Badge value={info} inline />
        </ListGroupItem>
        ) : (
          <Chip key={i} text={sectionItem} active={isActive} onChipClick={() => switchFilter(sectionItem, itemSlug)}/>
        )
    });
  }
}

ListGroupFilter.propTypes = {
  data: PropTypes.object,
  section: PropTypes.string,
  itemSlug: PropTypes.string,
  type: PropTypes.string
  //itemSlug: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ListGroupFilter.defaultProps = {
  data: {},
  section: '',
  itemSlug: '',
  type: ''
};
export default connect(({ filterProducts }) => ({
  filterProducts
}), {switchFilter})(ListGroupFilter);
