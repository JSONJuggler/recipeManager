import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";

import { getRecipes, deleteRecipe } from "../../actions/recipe";

const useStyles = makeStyles(theme => ({
  listRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: { width: "100%", maxHeight: "75vh" },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const Recipes = ({
  recipes: { loading, recipes },
  getRecipes,
  deleteRecipe,
  auth: { user }
}) => {
  const classes = useStyles();

  const xs = useMediaQuery("(min-width:0px)");
  const sm = useMediaQuery("(min-width:600px)");
  const md = useMediaQuery("(min-width:960px)");
  const lg = useMediaQuery("(min-width:1280px)");
  const xl = useMediaQuery("(min-width:1920px)");

  const getCol = () => {
    if (xl) {
      return 5;
    } else if (lg) {
      return 4;
    } else if (md) {
      return 3;
    } else if (sm) {
      return 2;
    } else if (xs) {
      return 1;
    }
  };

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    !loading && (
      <Fragment>
        <div className={classes.listRoot}>
          <GridList
            cellHeight={240}
            className={classes.gridList}
            cols={getCol()}
          >
            <GridListTile
              key="Subheader"
              cols={getCol()}
              style={{ height: "auto" }}
            >
              <ListSubheader component="div">All Recipes</ListSubheader>
            </GridListTile>
            {recipes.map(recipe => (
              <GridListTile key={recipe._id} cols={recipe.cols || 1}>
                <img
                  src="https://source.unsplash.com/random"
                  alt="tile.title"
                />
                <GridListTileBar
                  title={recipe.name}
                  subtitle={recipe.description}
                  actionIcon={
                    !loading && user && user._id === recipe.userId ? (
                      <IconButton aria-label={"Edit"} className={classes.icon}>
                        <CreateIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        aria-label={"Favorite"}
                        className={classes.icon}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    )
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Fragment>
    )
  );
};

Recipes.propTypes = {
  recipes: PropTypes.object.isRequired,
  getRecipes: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  recipes: state.recipe,
  auth: state.auth
});

export default connect(mapStateToProps, { getRecipes, deleteRecipe })(Recipes);
