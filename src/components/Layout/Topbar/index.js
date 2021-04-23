import React, { useContext } from "react";
import {
  fade,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Box,
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import UserImage from "assets/profile-picture.jpg";
import ProfileMenu from "components/Layout/Topbar/profile-menu";
import LayoutContext from "components/Layout/layout-context";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: (props) => `calc(100% - ${props.sidebarWidth}px)`,
    marginLeft: (props) => props.sidebarWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    fontSize: theme.typography.pxToRem(20),
    lineHeight: theme.spacing(3),
    fontWeight: "300",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  userImg: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    border: `${theme.spacing(0.5)} solid ${fade(
      theme.palette.common.white,
      0.5
    )}`,
  },
  menuPaperOverride: {
    minWidth: theme.spacing(26.25),
  },
  menuItemText: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.spacing(2.125),
    marginLeft: theme.spacing(0.75),
  },
  badge: {
    border: `1px solid ${theme.palette.common.white}`,
  },
  notificationsIcon: {
    color: theme.palette.common.white,
  },
  lightTheme: {},
  darkTheme: {},
  themeIcon: {},
  toggleBtnRoot: {
    borderRadius: theme.spacing(3),
    padding: theme.spacing(0.5, 1),
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
    border: `${theme.spacing(0.5)} solid`,
    "&$lightTheme": {
      backgroundColor: `${theme.palette.common.white} !important`,
      borderColor: fade(
        theme.palette.primary.main,
        0.3
      ),
      color: theme.palette.warning.main,
    },
    "&$darkTheme": {
      backgroundColor: `${theme.palette.common.black} !important`,
      borderColor: fade(
        theme.palette.common.white,
        0.5
      ),
      color: theme.palette.common.white,
    },
    '& $themeIcon': {
      transform: 'rotate(25deg)',
    }
  },
}));

const Topbar = () => {
  const { sidebarInfo, themeToggle, setThemeToggle } = useContext(
    LayoutContext
  );

  const classes = useStyles({ sidebarWidth: sidebarInfo.width });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: sidebarInfo.toggle,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
            onClick={sidebarInfo.onToggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Activities Dashboard
          </Typography>
          <div className={classes.grow} />
          <Box display="flex" alignItems="center">
            <ToggleButtonGroup
              value={themeToggle}
              exclusive
              onChange={(event, theme) => {
                setThemeToggle(theme);
              }}
            >
              <ToggleButton
                value={themeToggle}
                classes={{ root: classes.toggleBtnRoot }}
                className={
                  themeToggle === "dark"
                    ? classes.lightTheme
                    : classes.darkTheme
                }
              >
                {themeToggle === "light" ? (
                  <Brightness2Icon className={classes.themeIcon} />
                ) : (
                  <WbSunnyIcon className={classes.themeIcon} />
                )}
              </ToggleButton>
            </ToggleButtonGroup>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
            >
              <Avatar
                alt="User Name"
                src={UserImage}
                className={classes.userImg}
              >
                E
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <ProfileMenu
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleProfileMenuClose={handleProfileMenuClose}
        menuId={menuId}
      />
    </div>
  );
};

export default Topbar;
