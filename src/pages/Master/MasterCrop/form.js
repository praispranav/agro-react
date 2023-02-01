import React from "react"
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap"
import * as yup from "yup";

const validationSchema = yup.object().shape({
    
})

export default function Form({ isEditMode }){
    return(
        <Card>
            <CardHeader className="card-title">{isEditMode ? "Edit Master Crop" : "Add Master Crop"}</CardHeader>
            <CardBody>

            </CardBody>
            <CardFooter className="d-flex justify-content-end">
                <Button color="light">Reset</Button>
                <Button color="primary" className="ms-3">Save</Button>
            </CardFooter>
        </Card>
    )
}