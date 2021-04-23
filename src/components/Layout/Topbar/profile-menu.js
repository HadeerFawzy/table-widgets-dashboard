import React from 'react';
import { MenuItem, Menu, makeStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const useStyles = makeStyles((theme) => ({
  menuPaperOverride: {
    minWidth: theme.spacing(26.25),
  },
  menuItemText: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.spacing(2.125),
    // color: theme.palette.typography.primary,
    marginLeft: theme.spacing(0.75), 
  }
}));

const ProfileMenu = ({ anchorEl, isMenuOpen, handleProfileMenuClose, menuId }) => {
  const classes = useStyles();

  const menuItems = [{
    id: '1',
    text: 'Profile',
    icon: <PersonOutlineIcon color='secondary'/>
  },{
    id: '2',
    text: 'Logout',
    icon: <ExitToAppIcon color='secondary'/>
  }]

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      getContentAnchorEl={null}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
      classes={{
        paper: classes.menuPaperOverride
      }}
    >
      { menuItems.map((item, index) => (
        <MenuItem onClick={handleProfileMenuClose} key={item.id}>
          {item.icon} 
          <span className={classes.menuItemText}>{item.text}</span>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default ProfileMenu;
