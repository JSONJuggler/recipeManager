import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import { addRecipe } from "../../actions/recipe";

const textArea = {
  width: "70%",
  height: "70px",
  boxSizing: "border-box",
  border: "2px solid #ccc"
};

const Addrecipe = ({ addRecipe, auth: { user, loading }, newRecipe }) => {
  const [dirtyType, setType] = useState([]);
  const [dirtySeason, setSeason] = useState([]);

  const [recipe, setRecipe] = useState({
    name: "",
    link: "",
    description: ""
  });

  const { name, link, description } = recipe;
  const { _id } = user;
  const userId = _id;

  const [typeCheckBox, setTypeCheckBox] = useState([false, false]);
  const [seasonCheckBox, setSeasonCheckBox] = useState([false, false]);

  const handleTypeCheck = e => {
    setTypeCheckBox(
      ((typeCheckBox[e.target.name] = !typeCheckBox[e.target.name]),
      typeCheckBox)
    );
    setType(
      ((dirtyType[e.target.name] =
        typeCheckBox[e.target.name] === true ? e.target.value : ""),
      dirtyType)
    );
  };

  const handleOtherType = e => {
    setType(
      ((dirtyType[e.target.name] = "Other: " + e.target.value), dirtyType)
    );
  };

  const handleSeasonCheck = e => {
    setSeasonCheckBox(
      ((seasonCheckBox[e.target.name] = !seasonCheckBox[e.target.name]),
      seasonCheckBox)
    );
    setSeason(
      ((dirtySeason[e.target.name] =
        seasonCheckBox[e.target.name] === true ? e.target.value : ""),
      dirtySeason)
    );
  };

  const handleOtherSeason = e => {
    setSeason(
      ((dirtySeason[e.target.name] = "Other: " + e.target.value), dirtySeason)
    );
  };

  const onChange = e => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const add = e => {
    e.preventDefault();
    const type = dirtyType.filter(dirtyType => dirtyType !== "");
    const season = dirtySeason.filter(dirtySeason => dirtySeason !== "");
    addRecipe({ name, season, type, link, description, userId });
  };

  if (newRecipe) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      {user && !loading && (
        <Fragment>
          <form onSubmit={e => add(e)}>
            <small>Please select a Type!</small>
            <div>
              <small>Paleo:</small>
              <input
                type="checkbox"
                name="0"
                value="Paleo"
                onChange={e => handleTypeCheck(e)}
              />
              <small>Vegetarian:</small>
              <input
                type="checkbox"
                name="1"
                value="Vegetarian"
                onChange={e => handleTypeCheck(e)}
              />
              <small>Vegan:</small>
              <input
                type="checkbox"
                name="2"
                value="Vegan"
                onChange={e => handleTypeCheck(e)}
              />
              <small>Gluten-Free:</small>
              <input
                type="checkbox"
                name="3"
                value="Gluten-Free"
                onChange={e => handleTypeCheck(e)}
              />
              <small>Soup</small>
              <input
                type="checkbox"
                name="4"
                value="Soup"
                onChange={e => handleTypeCheck(e)}
              />
              <small>Pasta</small>
              <input
                type="checkbox"
                name="5"
                value="Pasta"
                onChange={e => handleTypeCheck(e)}
              />
              <small>Other:</small>
              <input type="text" name="6" onChange={e => handleOtherType(e)} />
            </div>
            <small>Please select a Season!</small>
            <div>
              <small>Winter:</small>
              <input
                type="checkbox"
                name="0"
                value="Winter"
                onChange={e => handleSeasonCheck(e)}
              />
              <small>Summer:</small>
              <input
                type="checkbox"
                name="1"
                value="Summer"
                onChange={e => handleSeasonCheck(e)}
              />
              <small>Spring:</small>
              <input
                type="checkbox"
                name="2"
                value="Spring"
                onChange={e => handleSeasonCheck(e)}
              />
              <small>Fall:</small>
              <input
                type="checkbox"
                name="3"
                value="Fall"
                onChange={e => handleSeasonCheck(e)}
              />
              <small>Other:</small>
              <input
                type="text"
                name="4"
                onChange={e => handleOtherSeason(e)}
              />
            </div>
            <small>Enter a name for your recipe!</small>
            <div>
              <input
                type="text"
                placeholder="Name..."
                name="name"
                value={name}
                onChange={e => onChange(e)}
              />
            </div>
            <small>Enter a link for your recipe!</small>
            <div>
              <input
                type="text"
                placeholder="Link..."
                name="link"
                value={link}
                onChange={e => onChange(e)}
              />
            </div>
            <small>Enter a description or list of steps for your recipe!</small>
            <div>
              <textarea
                style={textArea}
                placeholder="Description..."
                name="description"
                value={description}
                onChange={e => onChange(e)}
              />
            </div>
            <input type="submit" value="Add!" />
            <Link to="/Dashboard">Back!</Link>
          </form>
        </Fragment>
      )}
    </Fragment>
  );
};

Addrecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  newRecipe: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  newRecipe: state.recipe.recipe
});

export default connect(mapStateToProps, { addRecipe })(Addrecipe);
