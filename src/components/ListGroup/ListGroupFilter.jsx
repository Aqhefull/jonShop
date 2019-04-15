import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import ListGroupItem from "./ListGroupItem";
import {switchFilter} from '../../actions/actionCreator'

import Badge from "../Badge";
import Input from "../Input";
import Chip from "../Chip";



class ListGroupFilter extends Component {
  getSlugCounter = (data, itemSlug, sectionItem) => data.items.filter(item => item[itemSlug].includes(sectionItem)).length;
  render() {
    const { data, section, itemSlug, switchFilter, type } = this.props;
    return data[section].map((sectionItem, i) => {
      const info = this.getSlugCounter(data, itemSlug, sectionItem);
      return (type !== 'tags') ? (
        <ListGroupItem key={i} onClick={() => switchFilter(sectionItem, itemSlug)}>
          {type === "color" && <Badge value="" color={sectionItem} circle />}
          {type !== "checkbox" && <span className="list-group-item-text">{sectionItem}</span>}
          {type === "checkbox" &&  <Input id="checkbox" label={sectionItem} onChange={() => {}} type="checkbox"/>}
          <Badge value={info} inline />
        </ListGroupItem>
        ) : (
          <Chip key={i} text={sectionItem} onChipClick={() => switchFilter(sectionItem, itemSlug)}/>
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
export default connect(null, {switchFilter})(ListGroupFilter);
