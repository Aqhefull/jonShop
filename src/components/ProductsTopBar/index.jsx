import React, {Component} from 'react'

import './style.sass'
import Select from '../Select';

export default class ProductsTopBar extends Component {
  state = {
    selectOpen: false
  }
  setSelect() {
    this.setState({
      selectOpen: !this.state.selectOpen
    })
    console.log(this.state)
  }
 render() {
  return (
    <div className="products-top-bar">
      <Select onSelectClick={() => this.setSelect()} open={this.state.selectOpen}/>
    </div>
  );
 }
};
