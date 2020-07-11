import React, { Fragment } from "react";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";

//import Recipes from "../recipes/Recipes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: { width: "100%", maxHeight: "75vh" },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  cardRoot: {
    minWidth: 345,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Browse = ({ recipes }) => {
  const classes = useStyles();

  console.log(recipes);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
              <Grid container>
                {recipes &&
                  recipes.map((recipeData) => (
                    <Grid
                      className={classes.gridItem}
                      item
                      key={recipeData._id}
                      xs={12}
                      sm={6}
                      md={4}
                    >
                      <Card className={classes.cardRoot}>
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              className={classes.avatar}
                            >
                              {recipeData.user.avatar.url}
                            </Avatar>
                          }
                          title={recipeData.name}
                          subheader={recipeData.created}
                        />
                        {recipeData.cover && (
                          <CardMedia
                            className={classes.media}
                            image={recipeData.cover.url}
                            title={recipeData.name}
                          />
                        )}
                        {!recipeData.cover && (
                          <CardMedia
                            className={classes.media}
                            image="https://source.unsplash.com/random"
                            title={recipeData.name}
                          />
                        )}
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {recipeData.description}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                            <Typography paragraph>Directions:</Typography>
                            <Typography paragraph>
                              {recipeData.directions}
                            </Typography>
                          </CardContent>
                        </Collapse>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </Container>
        </main>
      </Fragment>
    </div>
  );
};

export default Browse;
