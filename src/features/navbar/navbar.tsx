import { useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import { RsvpButton } from "@components/rsvpButton";
import { Helpers } from "@helpers/helpers";

const navItems = ["Inicio", "Detalles", "Extras", "Contacto", "RSVP"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleClick = (item: string) => {
    console.log(item);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const bridalCouple = { nameOne: "Blanca", nameTwo: "Pam" };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 4 }}>
        {Helpers.getInitials([bridalCouple.nameOne, bridalCouple.nameTwo])}
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

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="fixed"
        sx={{ backgroundColor: "#F0A04B" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
          >
            {Helpers.getInitials([bridalCouple.nameOne, bridalCouple.nameTwo])}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {bridalCouple.nameOne}&{bridalCouple.nameTwo}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) =>
              item === "RSVP" ? (
                <RsvpButton key={item} onClick={() => handleClick(item)}>
                  {item}
                </RsvpButton>
              ) : (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
