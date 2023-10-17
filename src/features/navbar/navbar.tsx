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
import * as styles from "@navbar/navbar.styles";

const navItems = ["Inicio", "Detalles", "Extras", "Contacto", "RSVP"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleClick = (item: string) => {};
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const bridalCouple = { nameOne: "Blanca", nameTwo: "Pam" };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={styles.mainNamesShort}>
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
              <ListItemButton sx={styles.listItemDrawer}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" position="fixed" sx={styles.navbar}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={styles.mainNamesShortDrawer}
          >
            {Helpers.getInitials([bridalCouple.nameOne, bridalCouple.nameTwo])}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.iconBtn}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={styles.mainNames}>
            {bridalCouple.nameOne}&{bridalCouple.nameTwo}
          </Typography>
          <Box sx={styles.navItems}>
            {navItems.map((item) =>
              item === "RSVP" ? (
                <RsvpButton key={item} onClick={() => handleClick(item)}>
                  {item}
                </RsvpButton>
              ) : (
                <Button
                  key={item}
                  sx={styles.navItemBtn}
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
          sx={styles.containerDrawer}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
