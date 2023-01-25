import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Comments from './Comments';
import Summary from './Summary';
import TimeTracking from "./TimeTracking";


const TaskDetails = () => {
    const params = useParams();

    document.title="Tasks Details | WeCall";
    console.log("Params", params.id)
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Tasks Details" pageTitle="Tasks" />
                    <Row>
                        <Col xxl={3}>
                            <TimeTracking />
                        </Col>
                        <Col xxl={9}>
                            <Summary />
                            <Comments />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TaskDetails;