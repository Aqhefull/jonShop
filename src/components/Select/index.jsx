import React, {Component} from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";
import arrow from './arrow.svg'
import arrowWhite from "./arrow-white.svg";
import "./style.sass";

/*
  React Select by Alexander Komarevich
  ver 1.0.0
*/

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: '',
      selectedName: '',
      options: []
    };
  }
  setSelect() {
    this.setState({
      open: !this.state.open
    })
  }
  setSelected(child){
    this.setState({
      selected: child,
      selectedName: child.props.name
    });
  }
  componentDidMount(){
    const { children } = this.props
    const childrenWithProps = React.Children.map(children, child => {
        return React.cloneElement(child, { setSelected: () => this.setSelected(child) });
      }
    );
    this.setState({
      options: childrenWithProps
    });
  }
  render() {
    const { selected, selectedName, options } = this.state;
    const { id } = this.props;
    const selectWrap = classNames("Select", `Select-${ this.state.open ? 'open' : 'close' }`);
    return (
      <div id={id} className={selectWrap} onClick={() => this.setSelect()}>
        <div className="Select-option-selected">
          {(selected === '') ? options[0] : selected}
        </div>
        <div className="Select-indicators">
          <img src={!this.state.open ? arrow : arrowWhite} alt="Select"/>
        </div>
        <div className="Select-input">
          <input name={id} type="hidden" value={(selected === '' && options[0]) ? options[0].props.name.toLowerCase().replace(' ', '_') : selectedName.toLowerCase().replace(' ', '_')}/>
        </div>
        { 
          this.state.open && 
          <div className="Select-options">
            {(options !== '') ? options : null}
          </div>
        }
      </div>
    );
  } 
}


export const SelectOption = ({name, setSelected}) => {
  return <div onClick={setSelected} className="Select-option" value={name.toLowerCase().replace(' ', '_')}>{name}</div>;
}

Select.propTypes = {
  id: PropTypes.string.isRequired
};

Select.defaultProps = {
  id: null
};