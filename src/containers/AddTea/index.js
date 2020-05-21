import React, { Component } from "react";
import { connect } from "react-redux";
import InputText from "../../components/Blocks/InputBox";
import TextBox from "../../components/Blocks/TextBox";
import { defaultValidation } from "../../utils/validations";
import ButtonBox from "../../components/Blocks/ButtonBox";
import maxLength from "../../constant/maximum";
import { toast } from "react-toastify";
import errorMessages from "../../constant/error";
import successMessages from "../../constant/success";
import { addTeaItem, listTea } from "../../store/tea/action";
import ImageUpload from "../Image";
import "./style.css";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      url: "",
    };
  }

  handleChange = (property, value) => {
    let _errors = { ...this.state.errors };
    const validation = defaultValidation[property];

    if (validation) {
      let error = validation(value);
      if (error) {
        _errors[property] = error;
      } else {
        delete _errors[property];
        this.setState({
          [property]: value,
        });
      }
      this.setState({ errors: { ..._errors } });
    } else {
      this.setState({
        [property]: value,
      });
    }
  };

  handleClick = () => {
    const { errors, ..._state } = this.state;
    if (errors) {
      if (Object.keys(errors).length > 0) toast.error(errorMessages.resolve);
      else {
        this.props.addTeaItem(_state);
        this.setState({
          name: "",
          description: "",
          price: "",
          url: "",
        });
        this.props.listTea();
      }
    }
  };

  render() {
    const { errors, url, name, price, description } = this.state;
    console.log("name", name, " price", price, " description", description);
    return (
      <div className="add-item-container">
        <p>Add Item</p>
        <InputText
          label="Name"
          property="name"
          value={name}
          onChange={({ value }) => {
            this.handleChange("name", value);
          }}
          maxLength={maxLength.name + 1}
          error={errors && errors["name"]}
        />
        <TextBox
          label="Description"
          property="description"
          value={description}
          onChange={({ value }) => {
            this.handleChange("description", value);
          }}
          maxLength={maxLength.description + 1}
          error={errors && errors["description"]}
        />
        <InputText
          label="Price"
          property="price"
          value={price}
          onChange={({ value }) => {
            this.handleChange("price", value);
          }}
          error={errors && errors["price"]}
        />
        <div className="xav-form__page-property-block">
          <div className="box-padding">
          <div className="xav-form__label-field">Upload Image</div>
            <ImageUpload
              isDisabled="Yes"
              type="image"
              fileUrl={url}
              getFile={(imgUrl) => {
                this.handleChange("url", imgUrl);
              }}
            />
          </div>
        </div>
        <div className="add-tea-btn">
          <ButtonBox type="submit" onClick={this.handleClick} label="Add" />
        </div>
      </div>
    );
  }
}

const mapDisPatchToProps = {
  addTeaItem,
  listTea
};

export default connect(null, mapDisPatchToProps)(AddItem);
