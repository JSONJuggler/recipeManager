require("dotenv").config();

module.exports = {
  basePath: process.env.BASE_PATH,
  env: {
    PROD_BASE_URL: process.env.PROD_BASE_URL,
    BASE_PATH: process.env.BASE_PATH,
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    SECRET: process.env.SECRET,
    SITE: process.env.SITE,
  },
};
