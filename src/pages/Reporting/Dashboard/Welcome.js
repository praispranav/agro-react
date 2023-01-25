import React from "react";
import { Alert, Card, CardBody, CardHeader, Col, Row, Label } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
import illustarator from "../../../assets/images/user-illustarator-2.png";
import Flatpickr from "react-flatpickr";

const Welcome = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader>
              <h4 className="card-title">Select Date Range</h4>
            </CardHeader>
            <CardBody className="p-3">
              <Row className="">
                <Col sm={8}>
                  <Flatpickr
                    className="form-control"
                    placeholder="Select Date Range"
                    options={{
                      mode: "range",
                      dateFormat: "Y-m-d",
                      value: [
                        new Date("2023-01-21T18:30:00.000Z"),
                        new Date("2023-01-26T18:30:00.000Z"),
                      ],
                      onChange: (dateRangeChange) =>
                        console.log(dateRangeChange),
                    }}
                  />
                </Col>
                <Col sm={4}>
                  <div className="px-3">
                    <img src={illustarator} className="img-fluid" alt="" />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Welcome;
