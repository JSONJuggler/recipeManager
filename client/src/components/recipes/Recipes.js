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
import InfoIcon from "@material-ui/icons/Info";

import Recipeitem from "./Recipeitem";
import { getRecipes } from "../../actions/recipe";

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

const Recipes = ({ recipes: { loading, recipes }, getRecipes }) => {
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

  const allRecipes = recipes[0];

  return (
    !loading && (
      <Fragment>
        <div className={classes.listRoot}>
          <GridList
            cellHeight={180}
            className={classes.gridList}
            cols={getCol()}
          >
            {/* <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">December</ListSubheader>
            </GridListTile> */}
            {allRecipes.map(recipe => (
              <GridListTile key={recipe._id} cols={recipe.cols || 1}>
                <img
                  src="https://source.unsplash.com/random"
                  alt="tile.title"
                />
              </GridListTile>
              // <Recipeitem browse={true} recipe={recipe} />
            ))}
          </GridList>
        </div>
      </Fragment>
    )
  );
};

Recipes.propTypes = {
  recipes: PropTypes.object.isRequired,
  getRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  recipes: state.recipe
});

export default connect(mapStateToProps, { getRecipes })(Recipes);
