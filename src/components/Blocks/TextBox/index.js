import React, { Component } from "react";
import maxLength from "../../../constant/maximum";
import "./style.css";
import errorIcon from "../../../resources/icons/icon-error.svg";

class TextBox extends Component {
  static defaultProps = {
    _key: "value",
    label: "",
    error: null,
    value: "",
    placeholder: "",
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    if (props.value !== state.value) {
      return {
        value: props.value,
      };
    }
    return null;
  };

  onChange = (event) => {
    const {target} = event;
    const {value} = target;
    this.setState({ value }, () => {
      this.props.onChange({ [this.props._key]: value });
    });
  };

  render() {
    const { type, error, placeholder, disabled, label } = this.props;
    const { value } = this.state;

    return (
      <div className="xav-form__page-property-block">
        {label && <div className="xav-form__label-field">{label}</div>}
        <div className="xav-form__input-field">
          <textarea
            {...this.props}
            placeholder={placeholder}
            type={type}
            className="xav-form__form-control"
            maxLength={maxLength.title}
            value={value}
            disabled={disabled}
            onChange={this.onChange}
          />
          {error && (
            <span className="error-box-wrap">
              <span className="error-box-message">{error}</span>
              <img className="error-box-icon" src={errorIcon} alt="icon" />
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default TextBox;
