import React, { useEffect } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";
import Layout from "components/Layout";
import LayoutContext from "components/Layout/layout-context";
import Content from "components/Content";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
    minHeight: "100vh",
    boxShadow: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    marginLeft: (props) => -props.sidebarWidth,
    maxWidth: '100%',
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "0 !important",
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

const Dashboard = ({ themeToggle, setThemeToggle }) => {
  const sidebarWidth = 240;
  const mediumScreen = useMediaQuery('(max-width:768px)');
  const [toggleSidebar, setToggleSidebar] = React.useState(!mediumScreen);

  useEffect(() => {
    setToggleSidebar(!mediumScreen);
  }, [mediumScreen]);

  const onToggleSidebar = () => {
    setToggleSidebar(toggleSidebar ? false : true);
  };
  const sidebarInfo = {
    width: sidebarWidth,
    toggle: toggleSidebar,
    onToggleSidebar: onToggleSidebar,
  };

  const classes = useStyles({
    sidebarWidth: sidebarInfo.width,
  });

  return (
    <Paper className={classes.appRoot}>
      <LayoutContext.Provider
        value={{
          sidebarInfo: sidebarInfo,
          themeToggle: themeToggle,
          setThemeToggle: setThemeToggle,
        }}
      >
        <>
          <Layout />
          <div
            className={clsx(classes.content, {
              [classes.contentShift]: sidebarInfo.toggle,
            })}
          >
            <div className={classes.sidebarHeader} />
            <Content />
          </div>
        </>
      </LayoutContext.Provider>
    </Paper>
  );
};

export default Dashboard;
