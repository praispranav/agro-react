import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  ListGroup,
  Input,
  ListGroupItem,
} from "reactstrap";
import SimpleBar from "simplebar-react";

export default function Cards({ title, options }) {
  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col sm={3}>
            <h4>{title}</h4>
          </Col>
          <Col sm={6}>
            <div>
              <input className="search form-control" placeholder="Search" />
            </div>
          </Col>
          <Col sm={3} className="col-auto">
            <button className="btn btn-light sort" data-sort="name">
              Sort by name
            </button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div id="users">
          <SimpleBar style={{ height: "242px" }} className="mx-n3">
            <ListGroup className="list mb-0" flush>
              {options.map((i, index) => (
                <ListGroupItem data-id={i.label} key={index}>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="fs-13 mb-1">{i.label}</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="form-check form-switch mb-2">
                        <Input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                        />
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </SimpleBar>
        </div>
      </CardBody>
    </Card>
  );
}
