import React, { Component } from 'react';
import { Col, Form, Jumbotron, Row, Button } from 'react-bootstrap';
import uniqid from 'uniqid';
import '../styles/Experience.css';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      experiences: [],
      work: {
        id: uniqid(),
        name: '',
        position: '',
        tasks: '',
        date: '',
      },
    };
  }

  nameChange = (e) => {
    this.setState(
      {
        work: {
          id: this.state.work.id,
          name: e.target.value,
          position: this.state.work.position,
          tasks: this.state.work.tasks,
          date: this.state.work.date,
        },
      },
      () => {
        console.log(this.state.work);
      }
    );
  };

  positionChange = (e) => {
    this.setState(
      {
        work: {
          id: this.state.work.id,
          name: this.state.work.name,
          position: e.target.value,
          tasks: this.state.work.tasks,
          date: this.state.work.date,
        },
      },
      () => {
        console.log(this.state.work);
      }
    );
  };

  tasksChange = (e) => {
    this.setState(
      {
        work: {
          id: this.state.work.id,
          name: this.state.work.name,
          position: this.state.work.position,
          tasks: e.target.value,
          date: this.state.work.date,
        },
      },
      () => {
        console.log(this.state.work);
      }
    );
  };

  dateChange = (e) => {
    this.setState(
      {
        work: {
          id: this.state.work.id,
          name: this.state.work.name,
          position: this.state.work.position,
          tasks: this.state.work.tasks,
          date: e.target.value,
        },
      },
      () => {
        console.log(this.state.work);
      }
    );
  };

  addExperience = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat(this.state.work),
      work: {
        id: uniqid(),
        name: '',
        position: '',
        tasks: '',
        date: '',
      },
    });
  };

  render() {
    const { experiences, work } = this.state;
    return (
      <Row>
        <Col>
          <Jumbotron className="experience-info">
            <h2>Experience</h2>
            <hr />
            {experiences.map((experience) => {
              return (
                <div key={experience.id}>
                  <h4>{experience.name}</h4>
                  <p>{experience.position}</p>
                  <p>{experience.tasks}</p>
                  <p>{experience.date}</p>
                  <hr />
                </div>
              );
            })}
          </Jumbotron>
        </Col>
        <Col>
          <Form onSubmit={this.addExperience}>
            <Form.Group controlId="workName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                value={work.name}
                onChange={this.nameChange}
                placeholder="Google"
              />
            </Form.Group>
            <Form.Group controlId="workPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                value={work.position}
                onChange={this.positionChange}
                placeholder="Janitor"
              />
            </Form.Group>
            <Form.Group controlId="workTasks">
              <Form.Label>Tasks</Form.Label>
              <Form.Control
                type="text"
                value={work.tasks}
                onChange={this.tasksChange}
                placeholder="Keep the place tidy"
              />
            </Form.Group>
            <Form.Group controlId="workDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={work.date}
                onChange={this.dateChange}
                placeholder="02/1999 - 03/1943"
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

export default Experience;
