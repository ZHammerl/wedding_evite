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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);
  return (
    <Box component="form" sx={{ mt: 10 }}>
      <Card sx={{ p: 2 }}>
        <FormControl>
          <TextField label="Email" type="email"></TextField>
          <TextField label="Password"></TextField>

          <CardActions>
            <Button>Login</Button>
            <Button>Register</Button>
          </CardActions>
        </FormControl>
      </Card>
    </Box>
  );
};

export default Login;
