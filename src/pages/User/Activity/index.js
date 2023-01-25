import React, { useState } from "react";
import { Col, Row, Label, Container } from "reactstrap";
import Select from "react-select";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./dataTable";



export default function Activity() {
 
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Activity" pageTitle="Access Group" />

          <Row>
            <Col sm={12}>
              <DataTable />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
