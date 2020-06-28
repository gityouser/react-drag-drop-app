import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";

import { availableComponentsIds, availableComponentsData } from "Data";
import {
  appDrawerComponentSpecificProps,
  layoutComponentSpecificProps,
} from "Utils/constants";
import {
  addComponentData,
  updateAllConfigurationData,
  addLayoutData,
  updateLayoutData,
} from "Store/actions";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ConfigurationScreen from "../ConfigurationScreen";
import LayoutsScreen from "../LayoutsScreen";
import ConfigurationActionButtons from "../ConfigurationScreen/ConfigurationActionButtons";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#050517",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#847996",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    textDecoration: "none",
    coursor: "pointer",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function AppDrawer({
  addComponentData,
  updateAllConfigurationData,
  configurationComponentsIds,
  configurationComponentsData,
  layoutId,
  addLayoutData,
  updateLayoutData,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => null,
      main: () => (
        <div className="home_main_content">
          <h1>Welcome!</h1>
          <br />
          Navigate to the configuration screen, drag the items from the left
          side and create your own layout!
        </div>
      ),
      title: "Home",
      toolbar: () => null,
      icon: <HomeIcon />,
    },
    {
      path: "/layouts",
      exact: true,
      sidebar: () => null,
      main: () => <LayoutsScreen />,
      title: "Layouts",
      toolbar: () => null,
      icon: <FeaturedPlayListIcon />,
    },
    {
      path: "/configuration",
      exact: true,
      sidebar: () => renderAvailableComponents({ addComponentData }),
      main: () => <ConfigurationScreen />,
      title: "Configuration",
      toolbar: (props) => <ConfigurationActionButtons {...props} />,
      icon: <LibraryAddIcon />,
    },
  ];

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  children={() => (
                    <div className="drawer_toolbar_wrapper">
                      <strong className="drawer_toolbar_title">
                        {route.title}
                      </strong>
                      {
                        <route.toolbar
                          handleSave={() => {
                            // if session has a layout id, the user is editing an existing layout, so update the layout data
                            // else, add new layout data
                            // finally  - clean the state after save
                            layoutId
                              ? updateLayoutData({
                                  updateCriteria: {
                                    layoutId,
                                  },
                                  configurationComponentsIds,
                                  configurationComponentsData,
                                })
                              : addLayoutData({
                                  configurationComponentsIds,
                                  configurationComponentsData,
                                });

                            updateAllConfigurationData();
                          }}
                          handleDelete={updateAllConfigurationData}
                          userAddedItems={!!configurationComponentsIds.length}
                        />
                      }
                    </div>
                  )}
                  exact={route.exact}
                />
              ))}
            </Switch>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <div className={classes.drawerHeader}>
              <List>
                {routes.map((route, index) => (
                  <div key={index}>
                    <Link
                      style={{ textDecoration: "none" }}
                      key={index}
                      to={route.path}
                    >
                      <ListItem button>
                        <ListItemIcon>{route.icon}</ListItemIcon>
                        <ListItemText
                          classes={{ root: "nav_listitem_text" }}
                          primary={route.title}
                        />
                      </ListItem>
                    </Link>
                    <Divider />
                  </div>
                ))}
              </List>
            </div>
          </div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                children={route.sidebar}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
          style={{ position: "relative" }}
        >
          <div className="drawer_main_content">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  children={route.main}
                  exact={route.exact}
                />
              ))}
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

/**
 * Render the components available to be dragged into the configuration screen area
 */
function renderAvailableComponents({ addComponentData }) {
  return (
    <List>
      {availableComponentsIds.map((id) => {
        const { innerText, componentType, allowSwap } = availableComponentsData[
          id
        ];

        const propsEnrichment = layoutComponentSpecificProps[componentType];

        return (
          <div
            draggable
            key={id}
            onDragStart={() =>
              addComponentData({
                innerText,
                componentType,
                allowSwap,
                ...propsEnrichment,
              })
            }
            className={appDrawerComponentSpecificProps[
              componentType
            ].classNames.join(" ")}
          >
            <span>{innerText}</span>
          </div>
        );
      })}
    </List>
  );
}

export default connect(
  ({
    configuration: {
      configurationComponentsIds,
      configurationComponentsData,
      layoutId,
    },
  }) => ({ configurationComponentsIds, configurationComponentsData, layoutId }),
  {
    addComponentData,
    updateAllConfigurationData,
    addLayoutData,
    updateLayoutData,
  }
)(AppDrawer);
