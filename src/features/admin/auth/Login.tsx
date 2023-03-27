import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { borderRadius } from "@mui/system";
import { LoginType } from "@root/types/types";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    email: "",
    password: "",
  });

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
                autoComplete="false"
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
              <Button>Register</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
