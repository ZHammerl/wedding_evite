import { Alert, Snackbar, Typography } from "@mui/material";
import React from "react";
import { NotificationProps } from "@root/types/types";

const Notification: React.FC<NotificationProps> = ({
  open,
  message,
  severity,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={4000}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
