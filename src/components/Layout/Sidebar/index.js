import React, { useState, useContext } from 'react';
import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Box } from '@material-ui/core';
import clsx from 'clsx';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import logo from 'assets/eventum-logo.png';
import LayoutContext from 'components/Layout/layout-context';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: (props) => props.sidebarWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: (props) => props.sidebarWidth,
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center'
    }
  },
  appName: {
    marginLeft: theme.spacing(1),
  },
  closeIcon: {
    padding: 0
  },
  listItemText: {
    // color: theme.palette.typography.secondary,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.spacing(2.125),
    letterSpacing: '0.3',
    textTransform: 'uppercase'
  },
  listSubItem: {
    paddingLeft: theme.spacing(2.5),
    // color: theme.palette.typography.secondary,
    fontSize: theme.typography.pxToRem(14),
  },
  listItemWrapper: {
    borderLeft: `2px solid transparent`,
    transition: theme.transitions.create('borderColor', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  activeListItem: {
    borderColor: theme.palette.primary.main
  },
  toggleSubMenuIcon: {
    // color: theme.palette.typography.secondary
  },
  logo: {
    maxWidth: '50%',
  }
}));

const Sidebar = ( ) => {

  const { sidebarInfo } = useContext(LayoutContext);

  const classes = useStyles({
    sidebarWidth: sidebarInfo.width
  });

  const [sidebarItems, setSidebarItems] = useState([{
    id: 0,
    text: 'DASHBOARD',
    icon: <AvTimerOutlinedIcon color='secondary'/>,
    path: '#',
    active: true,
  },{
    id: 1,
    text: 'ASSETS',
    icon: <TableChartOutlinedIcon  color='secondary'/>,
    path: '#',
    active: false,
    subItems: [{
      id: 2,
      text: 'Assets Subitem 1'
    },{
      id: 3,
      text: 'Assets Subitem 2'
    },{
      id: 4,
      text: 'Assets Subitem 3'
    }],
    toggleSubMenu: false,
  },{
    id: 7,
    text: 'REPORT',
    icon: <DescriptionOutlinedIcon  color='secondary'/>,
    path: '#',
    active: false,
  },{
    id: 8,
    text: 'PEOPLE',
    icon: <PersonOutlineOutlinedIcon  color='secondary'/>,
    path: '#',
    active: false,
  },{
    id: 9,
    text: 'SETTINGS',
    icon: <SettingsOutlinedIcon color='secondary'/>,
    path: '#',
    active: false,
  }])

  const onToggleSubMenu = (id) => {
    const clickedItem = sidebarItems.find(item => item.id === id);
    clickedItem.toggleSubMenu = clickedItem.toggleSubMenu ? false : true
    setSidebarItems([...sidebarItems])
  }

  const toggleActiveClass = (id) => {
    sidebarItems.map((item, index) => item.id === id ? (item.active = true) : (item.active = false))
    setSidebarItems([...sidebarItems])
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={sidebarInfo.toggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.sidebarHeader}>
          <Box mt={2} mb={1} display='flex' justifyContent='center'>
            <img src={logo} alt='Activities Dashboard' className={classes.logo}/> 
          </Box>
        </div>
        <List>
          {sidebarItems.map((item, index) => (
            <div  key={`${item.id}${item.text}`} 
                  className={clsx(classes.listItemWrapper, {
                    [classes.activeListItem] : item.active
                  })}>
              <ListItem button 
                        key={`${item.id}${item.text}`} 
                        onClick={() => {
                          toggleActiveClass(item.id)
                          item.subItems && onToggleSubMenu(item.id)
                        }}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary={item.text} />
                {item.subItems && (
                  item.toggleSubMenu 
                    ? <KeyboardArrowUpIcon className={classes.toggleSubMenuIcon}/>
                    : <KeyboardArrowDownIcon className={classes.toggleSubMenuIcon}/>
                )}
              </ListItem>
              { item.subItems &&
                  <Collapse in={item.toggleSubMenu} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      { item.subItems.map((subItem, index) => (
                        <ListItem key={`${subItem.id}${subItem.text}`} button className={classes.listSubItem}>
                          <ListItemText primary={subItem.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
              } 
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;