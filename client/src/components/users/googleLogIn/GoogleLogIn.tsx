import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "./../../../redux/slice/user";
import { url } from "./../../../App";

function GoogleLogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box>
      <Box style={{ marginInline: "auto" }}>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            //send credential
            const credential = credentialResponse.credential;
            let res = await axios.post(`${url}/users/googleLogIn`, {
              id_token: credential,
            });
            if (res.status === 200) {
              dispatch(userActions.getUser(res.data.userData));
              dispatch(userActions.loginHandler(true));
              localStorage.setItem("token", res.data.token);
              navigate("/user");
            } else {
              alert("Log in failed");
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Box>
    </Box>
  );
}

export default GoogleLogIn;
