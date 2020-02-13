import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import StoreIcon from '@material-ui/icons/Store';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BallotIcon from '@material-ui/icons/Ballot';
import HomeIcon from '@material-ui/icons/Home';
import { useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import mainStyles from './Style';
import DefaultTitle from '../components/common/Title';

const Sidebar = (props) => {
    const {
        open, handleDrawerClose, userName, path, logout,
    } = props;
    const classes = mainStyles();
    const theme = useTheme();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <DefaultTitle
                    className={clsx(classes.headerUser)}
                    text={userName}
                    variant="subtitle2"
                    component="h2"
                />
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <List>
                <Link to={`${path}/home`} className={clsx(classes.link)}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                </Link>
                <Link to={`${path}/users`} className={clsx(classes.link)}>
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Usuarios" />
                    </ListItem>
                </Link>
                <Link to={`${path}/shops`} className={clsx(classes.link)}>
                    <ListItem button>
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tiendas" />
                    </ListItem>
                </Link>
                <Link to={`${path}/categories`} className={clsx(classes.link)}>
                    <ListItem button>
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categorías" />
                    </ListItem>
                </Link>
                <Link to={`${path}/products`} className={clsx(classes.link)}>
                    <ListItem button>
                        <ListItemIcon>
                            <BallotIcon />
                        </ListItemIcon>
                        <ListItemText primary="Productos" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Salir" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
