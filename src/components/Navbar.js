import React from 'react'
import {Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  iconColor: {
    color: 'white'
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NavBar () {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="home page" color="inherit">
            <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="standards exploration" color="inherit">
            <ExploreIcon />
        </IconButton>
        <p>Explore</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="About page"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <InfoIcon />
        </IconButton>
        <p>About</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant="h6" noWrap>
           Water Standardization Catalogue
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to={"/"}>
              <IconButton aria-label="Home Page" className={classes.iconColor}>
                <HomeIcon />
              </IconButton>
            </Link>

            <Link to={"/standards"}>
              <IconButton aria-label="Standards Exploration" className={classes.iconColor}>
                  <ExploreIcon />
              </IconButton>
            </Link>

            <Link to={"/about"}>
              <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  className={classes.iconColor}
              >
                <InfoIcon />
              </IconButton>
            </Link>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
