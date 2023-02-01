import React, { useState } from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Form from "./form";
import List from "./list";

export default function MasterCrop(){
    const [isFormVisible, setFromVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Master Crop" pageTitle="Master Crop" />
                    <Form />
                    <List />
                </Container>
            </div>
        </React.Fragment>
    )
}