import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import loginImage from '../images/about4.webp';
import { TextField, Button, Typography, Grid, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import Layout from '../components/Layout/Layout';

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value.trim();
    setUsername(value);
    setUsernameError('');

    if (value.length < 1) {
      setUsernameError('*This field is required');
    } else if (value.length < 3) {
      setUsernameError('*Enter a valid username (at least 3 characters)');
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      setUsernameError('*Invalid username');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError('');

    if (value.length < 1) {
      setPasswordError('*This field is required');
    } else if (!/^.{4,}$/.test(value)) {
      setPasswordError('*Enter a valid password (at least 4 characters)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsernameError('');
    setPasswordError('');

    if (username.length < 1) {
      setUsernameError('*This field is required');
    } else if (username.length < 3) {
      setUsernameError('*Enter a valid username (at least 3 characters)');
    } else if (!/^[A-Za-z\s]+$/.test(username)) {
      setUsernameError('*Invalid username');
    }

    if (password.length < 1) {
      setPasswordError('*This field is required');
    } else if (!/^.{4,}$/.test(password)) {
      setPasswordError('*Enter a valid password (at least 4 characters)');
    }

    if (username === 'surya' && password === 'scott') {
      // Perform login logic here (e.g., set auth state, store token, etc.)
      console.log('Login successful');
      sessionStorage.setItem('authenticated', 'true');

      // Redirect to AddTask component
      navigate('/manage');
    }
    
  };

  return (
    <Layout>
      <div className="container" style={{marginTop:"160px"}}>
        <div className="row">
          <div className="col-md-6">
            <div className="login-image-container" style={{marginBottom:"50px"}}>
            <img
              src="https://img.freepik.com/free-vector/personal-settings-concept-illustration_114360-2659.jpg?size=626&ext=jpg&ga=GA1.2.138972574.1688628446&semt=sph"
              className="img-fluid"
              style={{ width: '350px', height: '350px', borderRadius: '50px', objectFit: 'cover' ,marginTop:"30px"  }}
              alt="Login"
            />            </div>
          </div>
          
          <div className="col-md-6" style={{ marginTop: "50px" }}>
         
            <div className="login-form"  style={{width:"300px"}}>
            <h1 style={{marginLeft:"40px" ,marginBottom:"30px" ,color:""}}>Admin login</h1>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                 
                  <Grid item xs={11}>
                    <TextField
                      id="username"
                      label="Username"
                      value={username}
                      onChange={handleUsernameChange}
                      onBlur={handleUsernameChange}
                      error={Boolean(usernameError)}
                      helperText={usernameError}
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                     
                    />
                  </Grid>
                  
                  <Grid item xs={11}>
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      onBlur={handlePasswordChange}
                      error={Boolean(passwordError)}
                      helperText={passwordError}
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary"   style={{width:"91%",marginLeft:"0.8rem",marginTop:"20px"}} >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
