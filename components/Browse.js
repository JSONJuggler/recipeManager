import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";

//import Recipes from "../recipes/Recipes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  content: {
    flexGrow: 1,
    overflow: "auto",
  },
  spacer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  listRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: { width: "100%", maxHeight: "75vh" },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Browse = ({ recipes }) => {
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

  return (
    <div className={classes.root}>
      <Fragment>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.spacer}>
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
                  <ListSubheader component="div">Recipes</ListSubheader>
                </GridListTile>
                {recipes &&
                  recipes.map((recipeData) => (
                    <GridListTile
                      key={recipeData._id}
                      cols={recipeData.cols || 1}
                    >
                      <img
                        src="https://source.unsplash.com/random"
                        alt="tile.title"
                      />
                      <GridListTileBar
                        title={recipeData.name}
                        subtitle={recipeData.description}
                        actionIcon={
                          <IconButton
                            aria-label={"Favorite"}
                            className={classes.icon}
                          >
                            <FavoriteIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                {!recipes && <Typography>No Recipes Found!</Typography>}
              </GridList>
            </div>
          </Container>
        </main>
      </Fragment>
    </div>
  );
};

export default Browse;
