import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
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
                    <BreadCrumb title="Master" pageTitle="Crop Type" />
                    <Row>
                            <Form isEditMode={isEditMode} />
                        <Col sm={12} lg={12}>
                            <List />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}