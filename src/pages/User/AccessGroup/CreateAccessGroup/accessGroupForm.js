import React from "react";
import { CardBody, CardHeader, Col, Label, Row, Card, Input } from "reactstrap";

export default function AccessGroupForm({ access, setAccess }) {
  return (
    <Card>
      <CardHeader>
        <h4 className="card-title">Select Access</h4>
      </CardHeader>
      <CardBody>
        {access.map((module) => (
          <Row key={module.label} className="border-bottom mt-3">
            <Col xl={12}>
              <h5>{module.label}</h5>
              <p>{module.description}</p>
            </Col>
            <Col xl={12} className="px-5">
              {module.access.map((submodule) => (
                <div key={submodule.accessType}>
                  <h6>{submodule.accessType}</h6>
                  <Row className="px-5">
                    {submodule.children.map((feature, index) => (
                      <Col xl={4} key={index}>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            id={feature.label}
                            readOnly={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.label}
                          >
                            {feature.label}
                          </label>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </Col>
          </Row>
        ))}
      </CardBody>
    </Card>
  );
}
