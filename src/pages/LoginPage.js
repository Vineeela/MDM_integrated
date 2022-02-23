import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/material';
import { Link, Grid, TextField, Button, InputAdornment, Stack, Paper } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import axios, * as others from 'axios';
import { useNavigate } from 'react-router';






//comments in login page
//commented by devi
//commented by GSDR







// DO YOUR WORK FOR BETTER CODING.............................






const LoginPage = () => {
    const navigate = useNavigate();


    const [data, setData] = useState([]);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

/*
    useEffect(() => {
        axios.get("http://localhost:4000/getInfos").then((response) => {
            data(response.data)
        })
    }, []);

    const CreateInfo = () => {
        axios.post("http://localhost:4000/createInfos", {
            userName,
            password
        }).then((response) => {
            alert("User Created");
        });
    };*/
    const handleClick = async (e) => {
        e.preventDefault()
        const res = await axios.get('http://localhost:4000/getInfos');
        console.log(res.data);
        res.data.map((u) => {
        if (u.userName === userName && u.password === password) {
        navigate('/home');
        } else {
        alert('incorrect credentials');
        navigate('/');
        }
        });
        }
        
    return (
        <Grid container style={{ minHeight: '97vh' }}>
            <Grid item xs={12} sm={6}>
                <img
                    src="https://d9lqarq0gr0pp.cloudfront.net/files/images/large/p/o/power-lines-against-blue-skies.jpg"
                    alt="ts"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Grid>
            <Grid
                container
                item
                xs={12}
                sm={6}
                alignItems="center"
                direction="column"
                justify="space-between"
                style={{ padding: 10 }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 200 }}>
                    <div style={{ height: 100 }} />
                    <Grid container justify="center">
                        <img
                            src="https://www.pngitem.com/pimgs/m/583-5832601_101-power-station-power-plant-logo-png-transparent.png"
                            alt="logo"
                            width={200}
                        />
                    </Grid>
                    <div className="register-form">
                        <form action='/'>
                            <div className="form-group">
                                <TextField
                                    variant="standard"
                                    label="Username"
                                    margin="normal"
                                    name="username"
                                    type="text"
                                    onChange={(event) => {
                                        setUserName(event.target.value);
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />{' '}
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </div>
                            <div className="form-group">
                                <TextField
                                    variant="standard"
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    name="password"
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <div className="invalid-feedback"></div>
                            </div>
                            <div style={{ height: 20 }} />
                            {/* <Button type="submit" color="primary" size="small" variant="contained" style={{ width: '30%' }}>
<Link href="home" color="inherit" underline="none">
Login
</Link>
</Button> */}
                            <div className="form-group">
                                <Stack direction="row" spacing={12}>
                                    <Link href="home" color="inherit" underline="none">
                                        <Button type="submit" color="primary" size="small" variant="contained" style={{ width: '30%' }} className="btn btn-primary" onClick={handleClick} >
                                            Login
                                        </Button></Link>
                                    <Button
                                        type="button"
                                        color="primary" size="small" variant="contained" style={{ width: '30%' }}
                                    >
                                        Reset
                                    </Button>
                                </Stack>
                            </div>





                        </form>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}







export default LoginPage;