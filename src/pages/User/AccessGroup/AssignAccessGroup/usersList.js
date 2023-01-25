import React, { useState } from "react";
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
import OnlineOfflineStatus from "../../../../Components/Common/OnlineOfflineStatus";
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";

export default function UsersList() {
  const [listActive, setListActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleUserClick = () =>{

  }

  return (
    <Col xl={6}>
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <div>
                <input
                  className="search form-control"
                  placeholder="Search User"
                />
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
          {!listActive ? (
            <div id="contact-existing-list">
              <SimpleBar style={{ height: "70vh" }} className="mx-n3">
                <ListGroup className="list mb-0" flush>
                  {/* <ListGroupItem data-id="01">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div>
                        <img
                          className="avatar-xs rounded-circle"
                          alt=""
                          src={avatar1}
                        />
                      </div>
                    </div>
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
                      <div className="fs-11">
                        <OnlineOfflineStatus status={true} />,
                      </div>
                    </div>
                  </div>
                </ListGroupItem> */}
                  {/* <ListGroupItem data-id="02">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div>
                        <img
                          className="avatar-xs rounded-circle"
                          alt=""
                          src={avatar1}
                        />
                      </div>
                    </div>
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
                      <div className="fs-11">
                        <OnlineOfflineStatus status={true} />,
                      </div>
                    </div>
                  </div>
                </ListGroupItem> */}
                  <ListGroupItem data-id="03">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <div>
                            <img
                              className="avatar-xs rounded-circle"
                              alt=""
                              src={avatar1}
                            />
                          </div>
                        </div>
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
                      </div>
                      <div>
                        <div className="ms-2">
                          <a href="#" onClick={handleUserClick}>
                            <h4>
                              <i className="ri-links-line" />
                            </h4>
                          </a>
                          {/* <div className="fs-11">
                          <OnlineOfflineStatus status={true} />,
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  {/* <ListGroupItem data-id="04">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-3">
                      <div>
                        <img
                          className="avatar-xs rounded-circle"
                          alt=""
                          src={avatar1}
                        />
                      </div>
                    </div>
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
                      <div className="fs-11">
                        <OnlineOfflineStatus status={false} />,
                      </div>
                    </div>
                  </div>
                </ListGroupItem> */}
                </ListGroup>
              </SimpleBar>
            </div>
          ) : undefined}
        </CardBody>
      </Card>
    </Col>
  );
}
