import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { deleteRecipe } from "../../actions/recipe";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

const Recipeitem = ({ auth: { user, loading }, recipe, deleteRecipe }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item key={recipe._id} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {recipe.name}
            </Typography>
            <Typography>
              {/* {recipe.link}
            {recipe.season}
            {recipe.type} */}
              {recipe.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
            {!loading && user && user._id === recipe.userId && (
              <Button
                size="small"
                color="primary"
                onClick={e => deleteRecipe(recipe._id)}
              >
                Delete
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </Fragment>
  );
};

Recipeitem.propType = {
  recipe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteRecipe: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteRecipe })(Recipeitem);
