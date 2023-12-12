import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useNotification } from "@root/context/notification.context";
import { LoginValidate } from "@helpers/validateForm";
import { useNavigate } from "react-router-dom";
import { loginService } from "@root/services/api/login.service";
import { LoginProps } from "@interfaces/interfaces";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { getError, getSuccess } = useNotification();

  const loginDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData)
      .then(() => {
        getSuccess(JSON.stringify(loginData));
        loginService.login(loginData);
        //guardar la respuesta y pasarla a admin page
        navigate("/admin");
      })
      .catch((error) => {
        getError(error.message);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4">Login</Typography>
            <Box component="form" onSubmit={submitHandler}>
              <TextField
                margin="normal"
                fullWidth
                type="email"
                name="email"
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={loginDataHandler}
              />
              <TextField
                margin="normal"
                fullWidth
                type="password"
                name="password"
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={loginDataHandler}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Login
              </Button>
              <Button onClick={() => navigate("/register")}>Register</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
