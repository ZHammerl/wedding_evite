import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { LoginType } from "@root/types/types";
import { useNotification } from "@root/context/notification.context";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    email: "",
    password: "",
  });

  const { getError } = useNotification();
  const handleClick = () => {
    getError("Hello");
    console.log("register");
  };
  const loginDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(loginData);
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
                required
                sx={{ mt: 2, mb: 1.5 }}
                onChange={loginDataHandler}
              />
              <TextField
                margin="normal"
                fullWidth
                type="password"
                name="password"
                label="Password"
                required
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={loginDataHandler}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Login in
              </Button>
              <Button onClick={handleClick}>Register</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
