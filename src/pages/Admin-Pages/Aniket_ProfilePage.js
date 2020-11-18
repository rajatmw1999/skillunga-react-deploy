import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";

class Aniket_ProfilePage extends React.Component {
render(){
    return (
        <Container fluid className="mt-5">
      <Row>
        <Col md="6" className="offset-md-3 p-2">
          <Form >
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="Phone Number"
              />
            </FormGroup>
            
        </Form>
        </Col>
      </Row>
    </Container>

    )
    }}
export default Aniket_ProfilePage;