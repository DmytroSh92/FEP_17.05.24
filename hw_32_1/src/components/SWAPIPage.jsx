import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress, Alert } from '@mui/material';

const SWAPIPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/people/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">Error: {error}</Alert>;

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Star Wars Characters
            </Typography>
            <List>
                {data.map(character => (
                    <ListItem key={character.name}>
                        <ListItemText
                            primary={character.name}
                            secondary={`Height: ${character.height} cm, Mass: ${character.mass} kg`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default SWAPIPage;
