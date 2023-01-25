import React from "react";
import {
  Col,
  CardHeader,
  Card,
  CardBody,
  Row,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";

export default function RoleList() {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <div>
                <input className="search form-control" placeholder="Search Role" />
              </div>
            </Col>
            <Col className="col-auto">
              <button className="btn btn-light sort" data-sort="contact-name">
                Sort by name
              </button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <div id="contact-existing-list">
            <SimpleBar style={{ height: "70vh" }} className="mx-n3">
              <ListGroup className="list mb-0" flush>
                <ListGroupItem data-id="01">
                  <div className="d-flex align-items-start">

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1">
                        <Link to="#" className="link text-dark">
                          Jonny Stromberg
                        </Link>
                      </h5>
                      <p className="contact-born text-muted mb-0">
                        New updates for ABC Theme
                      </p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="fs-11 text-muted">06 min</div>
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem data-id="02">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1">
                        <Link to="#" className="link text-dark">
                          Jonas Arnklint
                        </Link>
                      </h5>
                      <p className="contact-born text-muted mb-0">
                        Bug Report - abc theme
                      </p>
                    </div>
                    <div className="flex-shrink-0 ms-2">
                      <div className="fs-11 text-muted">12 min</div>
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem data-id="03">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="contact-name fs-13 mb-1">
                        <Link to="#" className="link text-dark">
                          Martina Elm
                        </Link>
                      </h5>
                      <p className="contact-born text-muted mb-0">
                        Nice to meet you
                      </p>
                    </div>
                    <div className="flex-shrink-0 ms-2">
                      <div className="fs-11 text-muted">28 min</div>
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem data-id="04">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="contact-name fs-13 mb-1">
                        <Link to="#" className="link text-dark">
                          Gustaf Lindqvist
                        </Link>
                      </h5>
                      <p className="contact-born text-muted mb-0">
                        I've finished it! See you so
                      </p>
                    </div>
                    <div className="flex-shrink-0 ms-2">
                      <div className="fs-11 text-muted">01 hrs</div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </SimpleBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
