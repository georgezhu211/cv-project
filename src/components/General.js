import React, { Component } from 'react';
import { Form, Button, Jumbotron, Row, Col } from 'react-bootstrap';
import '../styles/General.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class General extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Jane Franklin',
      address: 'Philadelphia, PA 19104, USA',
      phone: '123-123-1234',
      email: 'jane_franklin@gmail.com',
      showForm: true,
    };
  }

  nameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  phoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    const { name, address, phone, email } = this.state;
    let display = this.state.showForm ? '' : 'hide';
    return (
      <Row className="general-info">
        <Col>
          <Jumbotron>
            <h1>{name}</h1>
            <p>Douglas-Kelly Professor of English</p>
            <h4>Address</h4>
            <p>{address}</p>
            <h4>Phone</h4>
            <p>{phone}</p>
            <h4>E-mail</h4>
            <p>{email}</p>
            <Button variant="primary" onClick={this.toggleForm}>
              Edit
            </Button>
          </Jumbotron>
        </Col>
        <Col>
          <Jumbotron className={display}>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={this.nameChange}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  onChange={this.addressChange}
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  value={phone}
                  onChange={this.phoneChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  onChange={this.emailChange}
                />
              </Form.Group>
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default General;
