import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import { RadioButtonProps } from "../interfaces/interfaces";

export default function RadioButton({
  data,
}: RadioButtonProps) {
  const [userOption, setUserOption] = useState(null);
  return (
    <Container>
      {data.map((item) => (
        <Button
          onClick={() => setUserOption(item.value)}
          variant="outlined">
          {item.value}
        </Button>
      ))}
    </Container>
  );
}
