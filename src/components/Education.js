import React, { Component } from 'react';
import { Col, Form, Jumbotron, Row, Button } from 'react-bootstrap';
import uniqid from 'uniqid';
import '../styles/Education.css';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      educations: [],
      school: {
        id: uniqid(),
        name: '',
        study: '',
        date: '',
      },
    };
  }

  nameChange = (e) => {
    this.setState(
      {
        school: {
          name: e.target.value,
          study: this.state.school.study,
          date: this.state.school.study,
          id: this.state.school.id,
        },
      },
      () => {
        console.log(this.state.school);
      }
    );
  };

  studyChange = (e) => {
    this.setState(
      {
        school: {
          name: this.state.school.name,
          study: e.target.value,
          date: this.state.school.date,
          id: this.state.school.id,
        },
      },
      () => {
        console.log(this.state.school);
      }
    );
  };

  dateChange = (e) => {
    this.setState(
      {
        school: {
          name: this.state.school.name,
          study: this.state.school.study,
          date: e.target.value,
          id: this.state.school.id,
        },
      },
      () => {
        console.log(this.state.school);
      }
    );
  };

  submitSchool = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.school),
      school: {
        name: '',
        study: '',
        date: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const { educations, school } = this.state;
    return (
      <Row>
        <Col>
          <Jumbotron className="education-info">
            <h2>Education</h2>
            <hr />

            {educations.map((education) => {
              return (
                <div key={education.id}>
                  <h4>{education.name}</h4>
                  <span>{education.date}</span>
                  <p>{education.study}</p>
                  <hr />
                </div>
              );
            })}
          </Jumbotron>
        </Col>
        <Col>
          <Form onSubmit={this.submitSchool}>
            <Form.Group controlId="schoolName">
              <Form.Label>School Name</Form.Label>
              <Form.Control
                type="text"
                value={school.name}
                onChange={this.nameChange}
              />
            </Form.Group>
            <Form.Group controlId="studyTitle">
              <Form.Label>Title of Study</Form.Label>
              <Form.Control
                type="text"
                value={school.study}
                onChange={this.studyChange}
              />
            </Form.Group>
            <Form.Group controlId="studyDate">
              <Form.Label>Date of Study</Form.Label>
              <Form.Control
                type="text"
                value={school.date}
                onChange={this.dateChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Education;
