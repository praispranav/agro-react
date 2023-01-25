import React from "react";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./dataTable";

export default function UserList() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="User List" pageTitle="User" />
          <Row>
            <Col lg={12}>
              <DataTable />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
