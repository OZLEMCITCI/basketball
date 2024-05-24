import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box,Grid } from '@mui/material';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({

        firstName: '',
        lastName: '',
        parentFullName: '',
        email: '',
        age: '',
        phoneNumber: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post('http://my-spring-boot-env.eba-cgiv6ivh.us-east-2.elasticbeanstalk.com/api/students/register', formData);
            console.log('Form submitted:', response.data);
            setSuccess(true);
        } catch (err) {
            console.error('Error submitting form:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Box mt={5} p={3} boxShadow={3} borderRadius={2} bgcolor="white">
                        <Typography variant="h4" component="h2" gutterBottom>
                            Basketball Club Registration
                        </Typography>
                        {error && <Typography color="error">{error}</Typography>}
                        {success && <Typography color="primary">Registration successful!</Typography>}
                        <form onSubmit={handleSubmit}>
                            
                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Parent Full Name"
                                name="parentFullName"
                                value={formData.parentFullName}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Age"
                                name="age"
                                type="number"
                                value={formData.age}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                                disabled={loading}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegisterForm;
