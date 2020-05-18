import React, { Component } from "react";
import UploadIcon from "../../resources/icons/image-upload-icon.svg";
import { imageUploadService } from "../../services/imageUpload.service";
import errorMessages from "../../constant/error";
import { checkSupportedFormat } from "../../utils";
import { uploadedImageSize, imageTypes } from "../../constant/fileUpload";
import "./style.css";
import { toast } from "react-toastify";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.supportedType = imageTypes;
    this.state = {
      isFileUploaded: false,
    };
  }

  imageUploadDetails = (formData) => {
    imageUploadService(formData)
      .then((response) => {
        if (response) {
          this.props.getFile(response.url);
          this.setState({ isFileUploaded: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  checkFileValidation = (event, requiredSize, fileSize) => {
    const imageFile = event.target.files[0];
    if (imageFile.size > requiredSize) {
      if (this.props.type === "image") {
        switch (fileSize) {
          case "small":
            toast.error(errorMessages.fileSizeError(5));
            break;
          case "medium":
            toast.error(errorMessages.fileSizeError(15));
            break;
          case "large":
            toast.error(errorMessages.fileSizeError(30));
            break;
          default:
            break;
        }
      }
    } else {
      const imgUrl = URL.createObjectURL(imageFile);
      const tempImg = new Image();
      const formData = new FormData();
      formData.append("file", imageFile);
      this.setState({ isFileUploaded: false });
      this.imageUploadDetails(formData);
      tempImg.src = imgUrl;
      event.target.value = null;
    }
  };

  fileClick = (event) => {
    event.target.value = "";
  };

  fileUpload = (event) => {
    try {
      const imageFile = event.target.files[0];
      const isValidFormat = checkSupportedFormat(
        imageFile.name,
        this.supportedType
      );
      const fileSize = "small";
      const size = uploadedImageSize;

      if (isValidFormat) {
        switch (fileSize.toLowerCase()) {
          case "small":
            this.checkFileValidation(
              event,
              size["small"],
              fileSize.toLowerCase()
            );
            break;
          case "medium":
            this.checkFileValidation(
              event,
              size["medium"],
              fileSize.toLowerCase()
            );
            break;
          default:
            this.checkFileValidation(
              event,
              size["large"],
              fileSize.toLowerCase()
            );
            break;
        }
      } else {
        toast.error("File format not supported.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  showUploadIcon = (type, fileUrl) => {
    switch (type) {
      case "image":
        return (
          <div className="image-upload-wrapper">
            <img src={UploadIcon} alt="" />
          </div>
        );

      default:
        return (
          <>
            <div className="choice-icon-wrap">
              <img src={fileUrl} alt="" />
            </div>
            <div className="label">
              {fileUrl ? "Edit Image" : "Upload Image"}
            </div>
          </>
        );
    }
  };

  render() {
    const { isDisabled, type, fileUrl = "" } = this.props;
    const inputType = type === "fileUpload" && !isDisabled ? "button" : "file";

    return (
      <div className="fileupload-btn-wrapper">
        {this.showUploadIcon(type, fileUrl)}
        <input
          className="file-upload-input"
          type={inputType}
          title={fileUrl ? "File Uploaded" : "No file selected"}
          name="myfile"
          accept={this.supportedType}
          onChange={this.fileUpload}
          onClick={this.fileClick}
        />
      </div>
    );
  }
}

export default ImageUpload;
