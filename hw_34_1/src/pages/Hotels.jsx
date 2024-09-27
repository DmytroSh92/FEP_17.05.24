import React, { useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../redux/actions/hotelActions';

const Hotels = () => {
    const dispatch = useDispatch();
    const hotels = useSelector((state) => state.hotels.list);

    useEffect(() => {
        dispatch(fetchHotels());
    }, [dispatch]);

    return (
        <Grid container spacing={2}>
            {hotels.map((hotel) => (
                <Grid item xs={4} key={hotel.id}>
                    <Card sx={{ maxWidth: 'none' }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={'https://via.placeholder.com/140'}
                            alt={hotel.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {hotel.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                address: {hotel.address}
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                city: {hotel.city}, state: {hotel.state}, country code: {hotel.country_code}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Hotels;
