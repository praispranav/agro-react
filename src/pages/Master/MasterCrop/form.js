import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LookUpCropType from "../../../Components/Common/Lookups/cropType";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Label,
  Input,
  Modal,
  ModalBody,
} from "reactstrap";
import * as yup from "yup";
import {
  addMasterCrop,
  closeAddEditMasterCropModal,
  editMasterCrop,
} from "../../../store/master/masterCrop/actionType";

const validationSchema = yup.object().shape({
  MasterCropName: yup.string().required().min(3),
  Description: yup.string().required().min(3),
});

const initialValues = {
  MasterCropName: "",
  Description: "",
};

export default function Form() {
  const { isEditForm, editFormData, isOpen } = useSelector((state) => ({
    isEditForm: state.MasterCrop.isEditForm,
    editFormData: state.MasterCrop.editFormData,
    isOpen: state.MasterCrop.isOpen,
  }));
  const dispatch = useDispatch();
  const {
    handleSubmit,
    handleReset,
    touched,
    setErrors,
    errors,
    setValues,
    values,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, event) => {
      if (isEditForm)
        dispatch(
          editMasterCrop({ ...values, masterCropId: editFormData.masterCropId })
        );
      else dispatch(addMasterCrop(values));
      handleReset();
    },
  });

  useEffect(() => {
    if (isEditForm) {
      console.log(editFormData);
      setValues({
        MasterCropName: editFormData.MasterCropName,
        Description: editFormData.description,
      });
    } else {
      setValues(initialValues);
    }
  }, [isEditForm]);

  const toggle = () => {
    dispatch(closeAddEditMasterCropModal());
  };
  return (
    <Modal id="add-crop-type" isOpen={isOpen} toggle={toggle} centered>
      <div className="modal-header d-flex justify-content-between align-items-center">
        <h5 className="card-title">
          {isEditForm ? "Edit Master Crop" : "Add Master Crop"}
        </h5>
      </div>
      <ModalBody>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-4">
          <LookUpCropType />
          </div>
    
          <Col md={12}>
          
            <Label htmlFor="validationDefault01" className="form-label">
            Master Crop Name
            </Label>
            <Input
              type="text"
              className="form-control"
              id="CropTypeName"
              name="CropTypeName"
              value={values.CropTypeName}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={12}>
            <Label htmlFor="validationDefault01" className="form-label">
              Description
            </Label>
            <textarea
              className="form-control"
              id="Description"
              value={values.Description}
              onChange={handleChange}
              onBlur={handleBlur}
              name={"Description"}
              rows="5"
              required
            ></textarea>
          </Col>
          <Col xs={12} className={"d-flex justify-content-between"}>
            <button className="btn btn-danger" type="button" onClick={toggle}>
              Close
            </button>
            <div>
              <button
                className="btn btn-light"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
              <button className="btn btn-primary ms-3" type="submit">
                Save
              </button>
            </div>
          </Col>
        </form>
      </ModalBody>
    </Modal>
  );
}
