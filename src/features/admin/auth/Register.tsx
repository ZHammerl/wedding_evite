import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { RegisterType } from "@root/types/types";
import { useNotification } from "@root/context/notification.context";
import { LoginValidate } from "@helpers/validateForm";

const Login = () => {
  const [registerData, setRegisterData] = useState<RegisterType>({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { getError, getSuccess } = useNotification();

  const loginDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(registerData)
      .then(() => {
        getSuccess(JSON.stringify(registerData));
      })
      .catch((error) => {
        getError(error.message);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper sx={{ padding: "1.2em", borderRadius: "0.5em", width: "350px" }}>
        <Typography variant="h4">Register</Typography>
        <Box component="form" onSubmit={submitHandler}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100%" }}
          >
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                type="name"
                name="name"
                label="Name"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={loginDataHandler}
              />
              <TextField
                margin="normal"
                fullWidth
                type="lastName"
                name="lastName"
                label="Last name"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={loginDataHandler}
              />{" "}
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
              <TextField
                margin="normal"
                fullWidth
                type="password"
                name="confirmPassword"
                label="Confirm password"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={loginDataHandler}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Register
              </Button>
              <Typography>"Do you have already an account?</Typography>
              <Button>Log in</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
