import React from "react";
import { Card, Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Lookups from "./Lookups";

export default function Farm(){
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb pageTitle={'Farm'} title="Farm List"/>

                    <Lookups />
                </Container>
            </div>
        </React.Fragment>
    )
}