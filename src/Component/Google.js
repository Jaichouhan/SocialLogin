import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { Button, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const Google = () => {
  const provider = new GoogleAuthProvider();

  const openGooglePopUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button variant="outlined" color="error" onClick={openGooglePopUp}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>G</Avatar> Google Login
      </Button>
    </div>
  );
};

export default Google;
