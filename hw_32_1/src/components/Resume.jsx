import React from 'react';
import {Container, Grid, Typography, Card, CardContent, Box, Avatar, List, ListItem, ListItemText} from '@mui/material';
import cvPhoto from './img/cv-photo.jpg';

const Resume = () => {
    return (
        <Container maxWidth="md">

            <Box mb={4} textAlign="center">
                <Avatar
                    alt="Dmytro Shumov"
                    src={cvPhoto}
                    sx={{width: 220, height: 220, margin: 'auto'}}
                />
                <Typography variant="h4" component="h1" gutterBottom>
                    Dmytro Shumov
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    FullStack Software Developer | React, Redux, Java
                </Typography>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" gutterBottom>
                    Contact Information
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Phone" secondary="+1 234 567 890"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary="zoduak47@gmail.com"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="LinkedIn" secondary="https://www.linkedin.com/in/dmytro-shumov/"/>
                    </ListItem>
                </List>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" gutterBottom>
                    Professional Experience
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Java Software Engineer</Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    CHI Software | 10/2020 - current time
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    • Documenting new functionality. <br/>
                                    • Code review. <br/>
                                    • Implemented features considering.<br/>
                                    • Creating new features.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Java Developer</Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                SmartFox Pro | 12/2018 - 10/2020
                            </Typography>
                            <Typography variant="body1" paragraph>
                                • Take part in discussion with customer his ideas<br/>
                                • Creating from scratch Rest API which based on Spring Boot<br/>
                                • Writing integration tests<br/>
                                • Work with DB (filling testing data to DB)<br/>
                                • Presentation working API
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" gutterBottom>
                    Education
                </Typography>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Faculty of radio engineering, specialty radioelectronic devices,
                            systems and
                            complexes
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Kharkiv National University of Radioelectronics | 2009 - 2014
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box mb={4}>
                <Typography variant="h5" gutterBottom>
                    Skills
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="JavaScript, TypeScript, React, Redux"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="HTML5, CSS3, Material-UI, Bootstrap"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Node.js, Express, MongoDB"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Node.js, Express, MongoDB"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Java, Spring (Spring Boot, Spring Data, Spring MVC, Spring Security)"/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="PostgreSQL, Hibernate, AWS, Docker, Flyway "/>
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default Resume;