import React, { Fragment } from "react";

import Recipes from "../recipes/Recipes";
import { Recipesec } from "../../stylings";

const Browse = () => {
  return (
    <Fragment>
      <Recipesec>
        <Recipes />
      </Recipesec>
    </Fragment>
  );
};

export default Browse;
