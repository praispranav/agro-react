import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function NavbarInfo() {
    document.title = "Navbar Info | Smart Agro Farm"
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Info" pageTitle="Navbar" />
        </Container>
      </div>
    </React.Fragment>
  );
}
