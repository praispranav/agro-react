import React, { useState } from "react";
import {
  Container,
  Row
} from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import AddRole from "./addEditRole";
import RoleList from "./roleList";
import AccessGroupForm from "./accessGroupForm";

const data = [
  {
    label: "Reporting",
    description: "",
    access: [
      {
        accessType: "Module",
        children: [
          { label: "Can View Dashboard", value: false, description: "" },
          { label: "Can View List", value: false, description: "" },
          { label: "Can Save Filtered Result", value: false, description: "" },
          {
            label: "Can Export Data From Table",
            value: false,
            description: "",
          },
        ],
      },
      {
        accessType: "Api",
        children: [
          { label: "/api/**", value: false, description: "" },
          { label: "/api/**", value: false, description: "" },
          { label: "/api/**", value: false, description: "" },
          { label: "/api/**", value: false, description: "" },
          { label: "/api/**", value: false, description: "" },
          { label: "/api/**", value: false, description: "" },
        ],
      },
    ],
  },
  {
    label: "User",
    description: "",
    access: [
      {
        accessType: "Module",
        children: [
          { label: "Can Create Access Group", value: false, description: "" },
          {
            label: "Can Assign Access Group To User",
            value: false,
            description: "",
          },
          { label: "Can View User List", value: false, description: "" },
          {
            label: "Can Modify User Profile Status",
            value: false,
            description: "",
          },
        ],
      },
      {
        accessType: "Api",
        children: [
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
        ],
      },
    ],
  },
  {
    label: "Task Board",
    description: "",
    access: [
      {
        accessType: "Module",
        children: [
          { label: "Lorem ipsum", value: false, description: "" },
          { label: "Lorem ipsum", value: false, description: "" },
          { label: "Lorem ipsum", value: false, description: "" },
          { label: "Lorem ipsum", value: false, description: "" },
        ],
      },
      {
        accessType: "Api",
        children: [
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
          { label: "/api/**", value: false },
        ],
      },
    ],
  },
];

export default function CreateAccessGroup() {
  const [access, setAccess]  = useState(data);
  document.title = "Add Role | WeCall"
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Create Access Group" pageTitle="Access Group" />

          <Row>
            <AddRole />
            <RoleList />
          </Row>
          <AccessGroupForm access={access} />
        </Container>
      </div>
    </React.Fragment>
  );
}
