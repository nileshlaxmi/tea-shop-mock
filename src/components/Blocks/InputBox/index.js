import React, { Component } from "react";
import "./style.css";
import errorIcon from "../../../resources/icons/icon-error.svg";

class InputText extends Component {
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

  onChange = (event) => {
    const {target} = event;
    const {value} = target;
    this.setState({ value }, () => {
      this.props.onChange({ [this.props._key]: value });
    });
  };

  render() {
    const { type, error, placeholder, disabled, label, maxLength } = this.props;
    const { value } = this.state;

    return (
      <div className="xav-form__page-property-block">
        {label && <div className="xav-form__label-field">{label}</div>}
        <div className="xav-form__input-field">
          <input
            {...this.props}
            placeholder={placeholder}
            type={type}
            className="xav-form__form-control"
            maxLength={maxLength}
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

export default InputText;
