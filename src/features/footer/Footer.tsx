import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <Link href="/login" underline="hover" target="_black" rel="noopener">
        Log in
      </Link>
    </Container>
  );
}

export default Footer;
