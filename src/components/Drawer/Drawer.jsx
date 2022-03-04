import * as React from "react";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import ERC20Balance from "components/ERC20Balance";
import Landing from "components/Landing";
import NFTBalance from "components/NFTBalance";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShopIcon from "@mui/icons-material/Shop";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SavingsIcon from "@mui/icons-material/Savings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaletteIcon from "@mui/icons-material/Palette";
import WorkIcon from "@mui/icons-material/Work";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SSLogo from "assets/Logo.png";

const topNavRoutes = [
  { name: "Dashboard", path: "/dashboard", icon: "DashboardIcon" },
  { name: "Profile", path: "/profile", icon: "AccountBoxIcon" },
  { name: "My NFTs", path: "/nftBalance", icon: "PaletteIcon" },
  { name: "My Projects", path: "/my-projects", icon: "WorkIcon" },
];

const bottomNavRoutes = [
  {
    name: "Healing Network",
    path: "/healing-network",
    icon: "VolunteerActivismIcon",
  },
  { name: "NFT Market", path: "/nft-market", icon: "ShopIcon" },
  { name: "NFT Staking", path: "/nft-staking", icon: "SavingsIcon" },
  {
    name: "Wallet Balance",
    path: "/erc20balance",
    icon: "AccountBalanceWalletIcon",
  },
];

const drawerWidth = 240;

const drawerStyles = {
  linkStyle: {
    textDecoration: "none",
    color: "#ffffff",
  },
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  background: "#544e6d",
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "#544e6d",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", background: "#3c6580" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ background: "#3c6580" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <NavLink to="/">
              <img height="70px" src={SSLogo} />
            </NavLink>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Sacred Scarabs
            </Typography>
            <Chains
              edge="end"
              sx={{
                marginRight: 5,
              }}
            ></Chains>
            <Account />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader sx={{ background: "#544e6d" }}>
            <IconButton onClick={handleDrawerClose} sx={{ color: "#ffffff" }}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ background: "#544e6d" }}>
            {topNavRoutes.map((props) => (
              <NavLink to={props.path} style={drawerStyles.linkStyle}>
                <ListItemButton
                  key={props.path}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {props.icon === "DashboardIcon" ? (
                      <DashboardIcon sx={{ color: "#ffffff" }} />
                    ) : (
                      ""
                    )}
                    {props.icon === "AccountBoxIcon" ? (
                      <AccountBoxIcon sx={{ color: "#ffffff" }} />
                    ) : (
                      ""
                    )}
                    {props.icon === "PaletteIcon" ? (
                      <PaletteIcon sx={{ color: "#ffffff" }} />
                    ) : (
                      ""
                    )}
                    {props.icon === "WorkIcon" ? (
                      <WorkIcon sx={{ color: "#ffffff" }} />
                    ) : (
                      ""
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={props.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
          <Divider />
          <List sx={{ background: "#544e6d" }}>
            {bottomNavRoutes.map((props) => (
              <NavLink to={props.path} style={drawerStyles.linkStyle}>
                <ListItemButton
                  key={props.path}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {props.icon === "VolunteerActivismIcon" ? (
                      <VolunteerActivismIcon sx={{ color: "#ffffff" }} />
                    ) : (
                      ""
                    )}
                    {props.icon === "ShopIcon" ? (
                      <ShopIcon sx={{ color: "#ffffff" }} />
                    ) : (
                      ""
                    )}
                    {props.icon === "SavingsIcon" ? (
                      <SavingsIcon sx={{ color: "#ffffff" }} />
                    ) : (
                      ""
                    )}
                    {props.icon === "AccountBalanceWalletIcon" ? (
                      <AccountBalanceWalletIcon sx={{ color: "#ffffff" }} />
                    ) : (
                      ""
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={props.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: "100vh" }}>
          <DrawerHeader />
          <Switch>
            <Route path="/home">
              <Landing />
            </Route>
            <Route path="/dashboard"></Route>
            <Route path="/profile"></Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/my-projects"></Route>
            <Route path="/healing-network"></Route>
            <Route path="/nft-market"></Route>
            <Route path="/nft-staking"></Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
