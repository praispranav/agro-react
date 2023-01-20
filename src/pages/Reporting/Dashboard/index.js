import React from 'react';
import { Col, Container, Row } from 'reactstrap';

//import Components
import UpgradeAccountNotise from './UpgradeAccountNotise';
import UsersByDevice from './UsersByDevice';
import Widget from './Widget';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AudiencesMetrics from './AudiencesMetrics';
import AudiencesSessions from './AudiencesSessions';
import LiveUsers from './LiveUsers';
import TopReferrals from './TopReferrals';
import TopPages from './TopPages';
import Welcome from './Welcome';
import USAVectorMap from './USAVectorMap';

const DashboardAnalytics = () => {
document.title="Reporting Analytics | WeCall";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Analytics" pageTitle="Dashboards" />
                    <Row>
                        <USAVectorMap />
                    </Row>
                    <Row>
                        <Col xxl={6}>
                            <Welcome />
                            <Widget />
                        </Col>
                        <LiveUsers />
                    </Row>
                    <Row>
                        <AudiencesMetrics />
                        <AudiencesSessions />
                    </Row>
                    <Row>
                        <UsersByDevice />
                        <TopReferrals />
                        {/* <TopPages /> */}
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardAnalytics;