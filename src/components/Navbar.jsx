import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.svg'; // Adjust the path as needed

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'red', height: '250'}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home" href="/">
                    <Box
                        component="img"
                        src={logo}
                        alt="Sirius Sports Academy Logo"
                        sx={{ height: 80, marginRight: 2, radius:'120px', boxShadow: 3,backgroundColor: "red" }}
                    />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Sirius Sports Academy 
                </Typography>
                <Button color="inherit" href="/about">
                    About
                </Button>
                <ScrollLink to="programs" smooth={true} duration={500}>
                    <Button color="inherit">Programs</Button>
                </ScrollLink>
                <ScrollLink to="schedule" smooth={true} duration={500}>
                    <Button color="inherit">Schedule</Button>
                </ScrollLink>
                <ScrollLink to="fees" smooth={true} duration={500}>
                    <Button color="inherit">Fees</Button>
                </ScrollLink>
                <ScrollLink to="registration" smooth={true} duration={500}>
                    <Button color="inherit" variant="outlined">
                        Registration
                    </Button>
                </ScrollLink>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
