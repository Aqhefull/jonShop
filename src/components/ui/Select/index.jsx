import React, {Component} from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

//Etc
import arrow from './arrow.svg'
import arrowWhite from "./arrow-white.svg";

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
    this.handleInputChange = this.handleInputChange.bind(this);
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
    }, this.handleInputChange);
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
  handleInputChange() {
    const value = this.selectInput.value;
    this.props.onSelectChange(value);
  }
  render() {
    const { selected, selectedName, options } = this.state;
    const { id, className, label, required } = this.props;
    const selectWrap = classNames("Select", className, `Select-${ this.state.open ? 'open' : 'close' }`);
    return (
      <>
      {label && (
        <div className="labelsWrapper">
          <label className="inputLabel" htmlFor={id}>
            {label}
          </label>
          {required && <span className="inputRequired">Required</span>}
        </div>
      )}
      <div id={id} className={selectWrap} onClick={() => this.setSelect()}>
        <div className="Select-option-selected">
          {(selected === '') ? options[0] : selected}
        </div>
        <div className="Select-indicators">
          <img src={!this.state.open ? arrow : arrowWhite} alt="Select"/>
        </div>
        <div className="Select-input">
          <input ref={(ref) => this.selectInput = ref} name={id} type="hidden" value={(selected === '' && options[0]) ? options[0].props.name.toLowerCase().replace(' ', '_') : selectedName.toLowerCase().replace(' ', '_')}/>
        </div>
        { 
          this.state.open && 
          <div className="Select-options">
            {(options !== '') ? options : null}
          </div>
        }
      </div>
      </>
    );
  } 
}


export const SelectOption = ({name, setSelected}) => {
  return <div onClick={setSelected} className="Select-option" value={name.toLowerCase().replace(' ', '_')}>{name}</div>;
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  onSelectChange: PropTypes.func
};

Select.defaultProps = {
  id: null,
  onSelectChange: () => {}
};