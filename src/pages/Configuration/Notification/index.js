import React from "react";
import Cards from "./Cards";
import { Row, Container, Col } from "reactstrap"
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const data = [
  {
    title: "Reporting",
    options: [
      { label: "On Job Runs", value: false, key: 1 },
      { label: "On Job Runs", value: false, key: 2 },
      { label: "On Job Runs", value: false, key: 3 },
    ],
  },
  {
    title: "Task",
    options: [
      { label: "On Task Assign", value: false, key: 4 },
      { label: "On Task Modify", value: false, key: 5 },
      { label: "On Task Delete", value: false, key: 6 },
      { label: "On Create of Assigned Sub Task", value: false, key: 7 },
    ],
  },
];

export default function NotificationsConfiguration() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Reporting Table" pageTitle="Tables" />
          <Row>
            {data.map((i, index) => (
              <Col sm={12} lg={6} key={index}>
                <Cards {...i} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
