import React from "react";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const Facebook = () => {
  const provider = new FacebookAuthProvider();

  const facebookLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(user);
        console.log(accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div onClick={facebookLogin}>Facebook</div>;
};

export default Facebook;
