import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1 className="display-3">404</h1>
                    <p className="lead">Сторінку не знайдено</p>
                    <p>На жаль, сторінка, яку ви шукаєте, не існує.</p>
                    <Button as={Link} to="/home" variant="primary" size="lg">
                        Повернутися на головну
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;