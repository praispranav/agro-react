import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import RoleList from "./roleList";
import UsersList from "./usersList";

export default function AssignAccessGroup() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Assign Access Group" pageTitle="Access Group" />

          <Row>
            <UsersList />
            <RoleList />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
