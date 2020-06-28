import React from "react";
import { Grid } from "@material-ui/core";
import GridItem from "../Shared/GridItem";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

import {
  updateLayoutData,
  removeLayoutData,
  updateAllConfigurationData,
} from "Store/actions";

function LayoutsScreen({
  layoutIds,
  layoutData,
  updateLayoutData,
  removeLayoutData,
  updateAllConfigurationData,
}) {
  return (
    <div className="layouts_grid_wrapper">
      <Grid className="layouts_screen_container" container spacing={3}>
        {renderLayouts({
          layoutIds,
          layoutData,
          updateLayoutData,
          removeLayoutData,
          updateAllConfigurationData,
        })}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function renderLayouts({
  layoutIds,
  layoutData,
  updateLayoutData,
  removeLayoutData,
  updateAllConfigurationData,
}) {
  const classes = useStyles();

  return layoutIds.map((id, i) => {
    const {
      configurationComponentsIds,
      configurationComponentsData,
      metaData: { dateAdded, title, favorite },
    } = layoutData[id];
    return (
      <GridItem key={i} xs={2} sm={3} md={4}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Link to="/configuration">
              <Grid
                item
                onClick={(e) => {
                  updateAllConfigurationData({
                    configurationComponentsIds,
                    configurationComponentsData,
                    // use this id to update the layout after edit and save
                    layoutId: id,
                  });
                }}
              >
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://picsum.photos/200/300?blur=2"
                  />
                </ButtonBase>
              </Grid>
            </Link>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {`Date added: ${dateAdded}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`ID: ${id}`}
                  </Typography>
                </Grid>
                <Grid
                  onClick={() =>
                    removeLayoutData({ removeCriteria: { layoutId: id } })
                  }
                  item
                >
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                onClick={(e) => {
                  // stop propagation over layout card onClick event
                  e.stopPropagation();

                  updateLayoutData({
                    updateCriteria: {
                      layoutId: id,
                    },
                    metaData: {
                      ...layoutData[id].metaData,
                      favorite: !favorite,
                    },
                  });
                }}
                item
              >
                {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </GridItem>
    );
  });
}

export default connect(
  ({ layouts: { layoutIds, layoutData } }) => ({
    layoutIds,
    layoutData,
  }),
  { updateLayoutData, removeLayoutData, updateAllConfigurationData }
)(LayoutsScreen);
