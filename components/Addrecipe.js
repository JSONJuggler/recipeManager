import { useState, useRef, Fragment, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

import {
  openAddRecipe,
  closeAddRecipe,
  updateAddRecipeInfo,
  clearAddRecipeInfo,
  getAttributes,
  addRecipe,
} from "../src/actions/recipe";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(8),
    },
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
  formControl: {
    minWidth: 120,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

function getStyles(name, attribute, theme) {
  return {
    fontWeight:
      attribute.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddRecipeBackdrop = ({
  recipe: {
    addRecipeData: { name, attribute, description, directions },
    tags,
    backdropOpen,
  },
  openAddRecipe,
  closeAddRecipe,
  updateAddRecipeInfo,
  clearAddRecipeInfo,
  getAttributes,
  addRecipe,
}) => {
  const classes = useStyles();

  const theme = useTheme();

  useEffect(() => {
    getAttributes();
  }, [getAttributes]);

  const handleSubmit = () => {
    addRecipe({
      name,
      attribute: attribute.map((entry) => ({
        _id: entry._id,
      })),
      description,
      directions,
    });
    clearAddRecipeInfo();
    handleClose();
  };

  const handleChange = (e) => {
    updateAddRecipeInfo({
      ...{ name, attribute, description, directions },
      [e.target.id]: e.target.value,
    });
  };

  const handleTagChange = (e) => {
    updateAddRecipeInfo({
      ...{ name, attribute, description, directions },
      attribute: e.target.value,
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
        <Paper className={classes.paper}>
          <form onSubmit={(e) => add(e)}>
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
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel color="secondary" id="attributes-label">
                    Attributes
                  </InputLabel>
                  <Select
                    labelId="attributes-label"
                    id="attributes"
                    multiple
                    required
                    value={attribute}
                    onChange={handleTagChange}
                    input={<Input id="select-multiple-attributes" />}
                    aria-describedby="attributes-helper-text"
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value) => (
                          <Chip
                            key={value.name}
                            label={value.name}
                            className={classes.chip}
                          />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {tags.map((entry) => (
                      <MenuItem
                        key={entry.id}
                        name={entry.name}
                        value={entry}
                        style={getStyles(name, attribute, theme)}
                      >
                        {entry.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText id="attributes-helper-text">
                    Add tags for your recipe!
                  </FormHelperText>
                </FormControl>
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
                  multiline
                  rows={2}
                  rowsMax={3}
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
                  multiline
                  rows={2}
                  rowsMax={5}
                  id="directions"
                  label="Directions "
                  helperText="Provide directions here! Use semicolons (;) to separate each step"
                  onChange={handleChange}
                />
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
                    attribute.length === 0 ||
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
            </Grid>
          </form>
        </Paper>
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
  getAttributes: PropTypes.func.isRequired,
  addRecipe: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, {
  openAddRecipe,
  closeAddRecipe,
  updateAddRecipeInfo,
  clearAddRecipeInfo,
  getAttributes,
  addRecipe,
})(AddRecipeBackdrop);
