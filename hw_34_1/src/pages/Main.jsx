import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import {
    TextField,
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Grid,
    Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
    const navigate = useNavigate();
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://localhost:4000/destination');
                setDestinations(response.data);
            } catch (error) {
                console.error("Error fetching destinations:", error);
            }
        };

        fetchDestinations();
    }, []);

    const onSubmit = async (values) => {
        try {
            const payload = {
                destination: values.destination,
                checkIn: values.checkIn,
                checkOut: values.checkOut,
                adults: values.adults,
                children: values.children,
            };

            await axios.post('http://localhost:4000/hotels', payload);
            navigate('/hotels');
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, invalid }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="destination-label">Destination</InputLabel>
                                    <Field name="destination" validate={(value) => (value ? undefined : 'Required')}>
                                        {({ input, meta }) => (
                                            <Select
                                                labelId="destination-label"
                                                {...input}
                                                error={meta.error && meta.touched}
                                            >
                                                {destinations.map(destination => (
                                                    <MenuItem key={destination.id} value={destination.label}>
                                                        {destination.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    </Field>
                                </FormControl>
                            </Grid>

                            <Grid item xs={2}>
                                <Field name="checkIn" validate={(value) => (value ? undefined : 'Required')}>
                                    {({ input, meta }) => (
                                        <TextField
                                            {...input}
                                            label="Check In"
                                            type="date"
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            error={meta.error && meta.touched}
                                            helperText={meta.touched && meta.error}
                                        />
                                    )}
                                </Field>
                            </Grid>

                            <Grid item xs={2}>
                                <Field name="checkOut" validate={(value) => (value ? undefined : 'Required')}>
                                    {({ input, meta }) => (
                                        <TextField
                                            {...input}
                                            label="Check Out"
                                            type="date"
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            error={meta.error && meta.touched}
                                            helperText={meta.touched && meta.error}
                                        />
                                    )}
                                </Field>
                            </Grid>

                            <Grid item xs={2}>
                                <Field name="adults" initialValue={1}>
                                    {({ input }) => (
                                        <FormControl fullWidth>
                                            <InputLabel id="adults-label">Adults</InputLabel>
                                            <Select
                                                {...input}
                                                labelId="adults-label"
                                            >
                                                {[...Array(10).keys()].map(num => (
                                                    <MenuItem key={num + 1} value={num + 1}>
                                                        {num + 1}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Field>
                            </Grid>

                            <Grid item xs={2}>
                                <Field name="children" initialValue={0}>
                                    {({ input }) => (
                                        <FormControl fullWidth>
                                            <InputLabel id="children-label">Children</InputLabel>
                                            <Select
                                                {...input}
                                                labelId="children-label"
                                            >
                                                {[...Array(10).keys()].map(num => (
                                                    <MenuItem key={num} value={num}>
                                                        {num}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Field>
                            </Grid>

                            <Grid item xs={2}>
                                <Button type="submit" variant="contained" color="primary" disabled={submitting || pristine || invalid}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            />
        </Box>
    );
};

export default Main;
