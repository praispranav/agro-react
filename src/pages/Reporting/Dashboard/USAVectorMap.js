import React from "react";
import { Row, Col, Label, Input, Card, CardHeader, CardBody } from "reactstrap";

import { VectorMap } from "react-jvectormap";
import "./vectormap2.scss";

const Vector = (props) => {
  const map = React.createRef(null);
  return (
    <>
      <div style={{ width: props.width, height: 500 }}>
        <VectorMap
          map={props.value}
          backgroundColor="transparent"
          ref={map}
          containerStyle={{
            width: "100%",
            height: "80%",
          }}
          regionStyle={{
            initial: {
              fill: props.color,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //what colour clicked country will be
            },
            selectedHover: {},
          }}
          containerClassName="map"
        />
      </div>
    </>
  );
};

export default function USAVectorMap() {
  return (
    <Col lg={12}>
      <Card>
        <CardHeader className="d-flex justify-content-between">
          <div>
            <h4 className="card-title mb-0">USA Heat Map</h4>
          </div>
          <div className="d-flex">
            <div className="form-check form-switch form-switch-right form-switch-md">
              <Label className="form-label text-muted">Leads</Label>
              <Input
                className="form-check-input code-switcher"
                type="checkbox"
              />
            </div>
            <div className="ms-2">
              <Label className="form-label text-muted">Calls</Label>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div id="usa-vectormap" style={{ height: "400px" }}>
            <Vector value="us_aea" width="724" color="#405189" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
