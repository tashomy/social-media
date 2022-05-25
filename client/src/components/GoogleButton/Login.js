import React from "react";
import { GoogleLogin } from "react-google-login";

const CLIENT_ID =
  "241884548371-gi0bq7djcmb3ibd68ra19qo8kqetabln.apps.googleusercontent.com";

const onSuccess = (res) => {
  console.log(res, "res");
  console.log("Login success! ", res.profileObj);
};
const onFailure = (res) => {
  console.log(res, "Login failed");
};

const Login = () => {
  return (
    <GoogleLogin
      client_id={CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default Login;
