import React from "react";
import { Card, CardBody } from "reactstrap";
import CropType from "./cropType";
import FarmType from "./farmType";
import IrrigationType from "./irrigationType";
import MasterCrop from "./masterCrop";
import SoilType from "./soilType";
import VarietyType from "./varietyType";
import YieldType from "./yieldType";

const HorizontalSpacing = () => <div className="mx-2"></div>;

export default function Lookups() {
  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <FarmType />
          <HorizontalSpacing />
          <SoilType />
          <HorizontalSpacing />
          <CropType />
          <HorizontalSpacing />
          <VarietyType />
          <HorizontalSpacing />
          <YieldType />
          <HorizontalSpacing />
          {/* <IrrigationType />
            <HorizontalSpacing /> */}
        </div>
      </CardBody>
    </Card>
  );
}
