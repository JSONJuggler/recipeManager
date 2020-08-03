import { useState, useRef, Fragment, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import {
  openAddRecipe,
  closeAddRecipe,
  updateAddRecipeInfo,
  clearAddRecipeInfo,
} from "../src/actions/recipe";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  textField: {
    background: "white",
  },
  underline: {
    textDecoration: "underline",
    color: "white",
  },
  hidden: {
    visibility: "visible",
    position: "absolute",
    top: theme.spacing(-100),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const AddRecipeBackdrop = ({
  recipe: {
    addRecipeData: { name, attributes, description, directions },
    backdropOpen,
  },
  openAddRecipe,
  closeAddRecipe,
  updateAddRecipeInfo,
  clearAddRecipeInfo,
}) => {
  const classes = useStyles();

  const handleSubmit = () => {
    clearAddRecipeInfo();
    handleClose();
  };

  const handleChange = (e) => {
    updateAddRecipeInfo({
      ...{ name, attributes, description, directions },
      [e.target.id]: e.target.value,
    });
  };

  const handleClose = () => {
    closeAddRecipe();
  };

  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      if (backdropOpen) {
        handleClose();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <Backdrop className={classes.backdrop} open={backdropOpen}>
      <Container maxWidth="sm">
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={classes.paper}>
            <form onSubmit={(e) => add(e)}>
              <Typography align="center" variant="body2">
                Tag your recipe!
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder="Name..."
                    name="name"
                    value={name}
                    variant="outlined"
                    color="secondary"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    helperText="Give your recipe a unique name!"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder="Description..."
                    name="description"
                    value={description}
                    variant="outlined"
                    color="secondary"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    helperText="Briefly describe your recipe!"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder="Step 1..."
                    name="directions"
                    value={directions}
                    variant="outlined"
                    color="secondary"
                    required
                    fullWidth
                    id="directions"
                    label="Directions "
                    helperText="Provide the steps or directions to create your recipe!"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem} xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
                  disabled={
                    !name ||
                    attributes.length === 0 ||
                    !directions ||
                    !description
                  }
                >
                  Add
                </Button>
              </Grid>
              <Grid item className={classes.gridItem} xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Backdrop>
  );
};

AddRecipeBackdrop.propTypes = {
  recipe: PropTypes.object.isRequired,
  openAddRecipe: PropTypes.func.isRequired,
  closeAddRecipe: PropTypes.func.isRequired,
  updateAddRecipeInfo: PropTypes.func.isRequired,
  clearAddRecipeInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, {
  openAddRecipe,
  closeAddRecipe,
  updateAddRecipeInfo,
  clearAddRecipeInfo,
})(AddRecipeBackdrop);
