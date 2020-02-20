// import React, { Fragment, useState, useEffect } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// import { register } from "../../actions/auth";
// import { setAlert } from "../../actions/alert";
// import validate from "../auth/registerValidate";
// import { Styledlink, Styledinput, Styledsub } from "../../stylings";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import { addRecipe } from "../../actions/recipe";
import { setAlert } from "../../actions/alert";
import { Darkbox } from "../../stylings";

const textArea = {
  width: "70%",
  height: "70px",
  boxSizing: "border-box",
  border: "2px solid #ccc"
};

const Addrecipe = ({
  setAlert,
  addRecipe,
  auth: { user, loading },
  newRecipe
}) => {
  const [dirtyType, setType] = useState([]);
  const [dirtySeason, setSeason] = useState([]);

  const [recipe, setRecipe] = useState({
    name: "",
    link: "",
    description: ""
  });

  const { name, link, description } = recipe;
  const [adding, setAdding] = useState(false);

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
    addRecipe({ name, season, type, link, description });
  };

  if (newRecipe) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Darkbox>
        {/* <button onClick={() => onClick()}>Click here to add a Recipe</button> */}
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
                <input
                  type="text"
                  name="6"
                  onChange={e => handleOtherType(e)}
                />
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
              <small>
                Enter a description or list of steps for your recipe!
              </small>
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
      </Darkbox>
    </Fragment>
  );
};

Addrecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  newRecipe: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  newRecipe: state.recipe.recipe
});

export default connect(mapStateToProps, { setAlert, addRecipe })(Addrecipe);

// const Addrecipe = ({
//   register,
//   setAlert,
//   isAuthenticated,
//   auth: { user, loading }
// }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     password2: ""
//   });

//   const [errors, setErrors] = useState({});

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { username, email, password, password2 } = formData;

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitting) {
//       setIsSubmitting(false);
//       if (password !== password2) {
//         setAlert("Passwords do not match", "fail");
//       } else {
//         register({ username, email, password });
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [errors]);

//   useEffect(() => {
//     if (isSubmitting) {
//       setIsSubmitting(false);
//       window.scrollTo(0, 0);
//     }
//   }, [isSubmitting]);

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     isSubmitting && setErrors(validate(formData));
//   };

//   const onSubmit = e => {
//     e.preventDefault();

//     if (e) {
//       e.preventDefault();
//       setErrors(validate(formData));
//       setIsSubmitting(true);
//     }
//   };

//   return (
//     user &&
//     !loading && (
//       <Fragment>
//         <h1>Register to save your own recipes or browse available recipes!</h1>
//         <form onSubmit={e => onSubmit(e)}>
//           <div>
//             <Styledinput
//               validated={errors.username}
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={username}
//               onChange={e => onChange(e)}
//             />
//             {errors.username && (
//               <p
//                 style={{
//                   fontSize: ".7rem",
//                   float: "left",
//                   margin: "0px",
//                   padding: "0px"
//                 }}
//               >
//                 {errors.username}
//               </p>
//             )}
//           </div>
//           <div>
//             <Styledinput
//               validated={errors.email}
//               name="email"
//               placeholder="Email"
//               value={email}
//               onChange={e => onChange(e)}
//             />

//             {(errors.email && (
//               <p
//                 style={{
//                   fontSize: ".7rem",
//                   float: "left",
//                   margin: "0px",
//                   padding: "0px"
//                 }}
//               >
//                 {errors.email}
//               </p>
//             )) || (
//               <small>
//                 This site uses Gravatar. Use your gravatar email to use your
//                 gravatar avatar!
//               </small>
//             )}
//           </div>
//           <div>
//             <Styledinput
//               validated={errors.password}
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={e => onChange(e)}
//             />
//             {errors.password && (
//               <p
//                 style={{
//                   fontSize: ".7rem",
//                   float: "left",
//                   margin: "0px",
//                   padding: "0px"
//                 }}
//               >
//                 {errors.password}
//               </p>
//             )}
//           </div>
//           <div>
//             <Styledinput
//               validated={errors.password2}
//               type="password"
//               name="password2"
//               placeholder="Confirm Password"
//               value={password2}
//               onChange={e => onChange(e)}
//             />
//             {errors.password2 && (
//               <p
//                 style={{
//                   fontSize: ".7rem",
//                   float: "left",
//                   margin: "0px",
//                   padding: "0px"
//                 }}
//               >
//                 {errors.password2}
//               </p>
//             )}
//           </div>
//           <Styledsub type="submit" value="Register" />
//         </form>
//         <Styledlink to="/Login">
//           Already have an account? Login here!
//         </Styledlink>
//       </Fragment>
//     )
//   );
// };

// Addrecipe.propTypes = {
//   auth: PropTypes.object.isRequired,
//   isAuthenticated: PropTypes.bool,
//   register: PropTypes.func.isRequired,
//   setAlert: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { register, setAlert })(Addrecipe);
