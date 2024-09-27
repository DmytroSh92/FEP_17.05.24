import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box
                        sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            backgroundColor: 'yellow',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 1,
                        }}
                    >
                        <Typography variant="h6" color="black" component="span">
                            <Button component={Link} to="/" color="inherit">
                                B
                            </Button>
                        </Typography>
                    </Box>
                    <Typography variant="h6" color="white">
                        <Button component={Link} to="/" color="inherit">
                            Booking
                        </Button>
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', gap: 2}}>
                    <Button component={Link} to="/" color="inherit">
                        Main
                    </Button>
                    <Button component={Link} to="/about" color="inherit">
                        About
                    </Button>
                    <Button component={Link} to="/hotels" color="inherit">
                        Hotels
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
