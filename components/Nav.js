import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import NoMeetingRoomIcon from "@material-ui/icons/NoMeetingRoom";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { signout } from "next-auth/client";

import ListItemLink from "components/ListItemLink";
import CustomLink from "components/CustomLink";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBarDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  appBarMobile: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(9),
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    color: "black",
    height: "100%",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const Nav = ({ session }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <AppBar position="absolute" className={classes.appBarDesktop}>
        <Toolbar className={classes.toolbar}>
          <div>
            <CustomLink title="Home" href={process.env.BASE_PATH + "/"}>
              <Typography variant="h6" color="inherit" noWrap>
                Recipe Manager
              </Typography>
            </CustomLink>
          </div>
          {session ? (
            <Fragment>
              <Grid container className={classes.icons} justify="flex-end">
                <CustomLink
                  title="Browse"
                  href={process.env.BASE_PATH + "/browse"}
                >
                  <Grid item className={classes.link}>
                    <SearchIcon />
                    <Typography variant="subtitle1" color="inherit" noWrap>
                      Browse
                    </Typography>
                  </Grid>
                </CustomLink>
                <Grid item>
                  <IconButton color="inherit">
                    <FavoriteIcon />
                    <Typography variant="subtitle1" color="inherit" noWrap>
                      Favorites
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="inherit">
                    <PeopleIcon />
                    <Typography variant="subtitle1" color="inherit" noWrap>
                      Users
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="inherit">
                    <SettingsIcon />
                    <Typography variant="subtitle1" color="inherit" noWrap>
                      Settings
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={signout} color="inherit">
                    <NoMeetingRoomIcon />
                    <Typography variant="subtitle1" color="inherit" noWrap>
                      Logout
                    </Typography>
                  </IconButton>
                </Grid>
              </Grid>
            </Fragment>
          ) : (
            <Fragment>
              <Grid container className={classes.icons} justify="flex-end">
                <CustomLink
                  title="Browse"
                  href={process.env.BASE_PATH + "/browse"}
                >
                  <Grid item className={classes.link}>
                    <SearchIcon />
                    <Typography variant="subtitle1" color="inherit" noWrap>
                      Browse
                    </Typography>
                  </Grid>
                </CustomLink>
                <CustomLink title="Login" href={process.env.BASE_PATH + "/"}>
                  <Grid item className={classes.link}>
                    <MeetingRoomIcon />
                    <Typography variant="subtitle1" color="inherit" noWrap>
                      Login
                    </Typography>
                  </Grid>
                </CustomLink>
              </Grid>
            </Fragment>
          )}
          {session && (
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <AppBar
        position="absolute"
        className={clsx(classes.appBarMobile, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <div>
            {!open && (
              <CustomLink title="Home" href={process.env.BASE_PATH + "/"}>
                <Typography variant="h6" color="inherit" noWrap>
                  Recipe Manager
                </Typography>
              </CustomLink>
            )}
            {open && (
              <CustomLink title="Home" href={process.env.BASE_PATH + "/"}>
                <HomeIcon />
              </CustomLink>
            )}
          </div>
          {session && (
            <Grid container className={classes.icons} justify="flex-end">
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {session ? (
          <Fragment>
            <List>
              <ListItemLink href="/" linkname="Home" icon={<HomeIcon />} />
              <ListItemLink
                href="/browse"
                linkname="Browse"
                icon={<SearchIcon />}
              />
              <ListItem button>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button onClick={signout}>
                <ListItemIcon>
                  <NoMeetingRoomIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Fragment>
        ) : (
          <Fragment>
            <List>
              <ListItemLink
                href="/browse"
                linkname="Browse"
                icon={<SearchIcon />}
              />
              <ListItemLink
                href="/"
                linkname="Login"
                icon={<MeetingRoomIcon />}
              />
            </List>
          </Fragment>
        )}
      </Drawer>
    </Fragment>
  );
};

Nav.propTypes = {
  //auth: PropTypes.object.isRequired,
  //logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Nav);
