import { useEffect, useState } from "react";
import {
  AppBar,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Helpers } from "@helpers/helpers";
import { RsvpButton } from "@components/rsvpButton";
const DrawerContent: React.FC = ({
  data,
  handleDrawerToggle,
  handleClick,
  navItems,
}) => {
  console.log(data);
  const { nameOne, nameTwo } = data;
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 4 }}>
        {Helpers.getInitials(nameOne, nameTwo)}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>
          item === "RSVP" ? (
            <RsvpButton key={item} onClick={() => handleClick(item)}>
              {item}
            </RsvpButton>
          ) : (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};
export default DrawerContent;
