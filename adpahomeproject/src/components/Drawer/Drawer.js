import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MenuRouter from "../MenuRouter/MenuRouter";
import "./drawer.css";
import SelectOption from "./Select/Select";
import { useTranslation } from "react-i18next";
import Timer from "../Timer/Timer";

const drawerWidth = 240;
export default function DrawerMenu() {
  const [date, setDate] = React.useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  React.useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ background: "#363740" }}>
          <Typography
            variant="div"
            sx={{
              marginLeft: "250px",
              width: "100%",
            }}>
            <span sx={{ marginLeft: "100px" }}>
              {date.toLocaleTimeString()}
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#363740",
          },
        }}
        variant="permanent"
        anchor="left">
        <Typography
          variant="h6"
          sx={{
            paddingLeft: "20px",
            paddingTop: "20px",
            paddingBottom: "0",
            color: "#E5E5E5",
          }}>
          <ApartmentOutlinedIcon sx={{ width: "35px" }} /> Buy Home
        </Typography>
        <Toolbar />
        <Typography className="positionTetx">
          <SelectOption />
        </Typography>
        <Divider />
        <List>
          {MenuRouter.map((text) => (
            <ListItem
              disablePadding
              key={text.path}
              component={RouterLink}
              to={text.path}>
              <ListItemButton sx={{ color: "#E5E5E5" }}>
                <ListItemIcon>{text?.icon}</ListItemIcon>
                {text?.title === "Statistics" ? (
                  <ListItemText>{t("admin.menu.home_menu")}</ListItemText>
                ) : null || text?.title === "Product create" ? (
                  <ListItemText>{t("admin.menu.product_menu")}</ListItemText>
                ) : null || text?.title === "Product list" ? (
                  <ListItemText>
                    {t("admin.menu.product_list_menu")}
                  </ListItemText>
                ) : null || text?.title === "User info" ? (
                  <ListItemText>{t("admin.menu.user_menu")}</ListItemText>
                ) : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}></Box>
    </Box>
  );
}
