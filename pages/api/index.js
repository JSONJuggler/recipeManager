import Rollbar from "rollbar";

const rollbar = new Rollbar({
  // accessToken: process.env.ROLLBAR_SERVER_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});

export default rollbar;
