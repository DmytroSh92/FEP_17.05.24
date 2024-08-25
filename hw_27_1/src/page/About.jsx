import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Row>
                                <Col md={4} className="text-center">
                                    <Card.Img
                                        variant="top"
                                        src="https://via.placeholder.com/150"
                                        alt="Profile Picture"
                                        className="rounded-circle"
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card.Title>John Doe</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Web Developer</Card.Subtitle>
                                    <Card.Text>
                                        Hello! I'm John Doe, a passionate web developer with a love for creating engaging user experiences.
                                        With a background in both front-end and back-end development, I specialize in building modern, responsive websites
                                        and web applications. I'm constantly exploring new technologies and working on exciting projects to enhance my skills.
                                    </Card.Text>
                                    <Button variant="primary" href="mailto:john.doe@example.com">Contact Me</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Background</Card.Title>
                            <Card.Text>
                                I graduated with a degree in Computer Science from XYZ University, where I developed a strong foundation in software engineering.
                                Over the years, I've gained experience working with various technologies such as React, Node.js, and Python. My goal is to build
                                innovative and user-friendly applications that solve real-world problems.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Skills</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>Front-End Development (HTML, CSS, JavaScript, React)</ListGroup.Item>
                                <ListGroup.Item>Back-End Development (Node.js, Express, MongoDB)</ListGroup.Item>
                                <ListGroup.Item>UI/UX Design</ListGroup.Item>
                                <ListGroup.Item>Version Control (Git)</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Contact Information</Card.Title>
                            <Card.Text>
                                <strong>Email:</strong> john.doe@example.com
                            </Card.Text>
                            <Card.Text>
                                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
