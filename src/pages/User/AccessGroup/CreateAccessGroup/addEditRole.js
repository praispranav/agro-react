import React from "react";
import {
  Col,
  Row,
  Label,
  Input,
  CardHeader,
  CardBody,
  Button,
  Card
} from "reactstrap";

export default function AddRole() {
  return (
    <Col sm={12} xl={6} className="h-100">
      <Card>
        <CardHeader>
          <h4 className="card-title">Add Role</h4>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm={12}>
              <div>
                <Label htmlFor="basiInput" className="form-label">
                  Role Name
                </Label>
                <Input type="text" className="form-control" id="basiInput" />
              </div>
            </Col>
            <Col sm={12} className="mt-3">
              <div>
                <Label htmlFor="basiInput" className="form-label">
                  Role Description
                </Label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea5"
                  rows="3"
                ></textarea>
              </div>
            </Col>
            <Col sm={12} className="d-flex justify-content-end mt-3">
              <Button color="light" size="sm">
                Clear
              </Button>
              <Button color="primary" size="sm" className="ms-3">
                Save
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}
