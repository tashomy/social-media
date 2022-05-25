import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import axios from "axios";
// const axios = require("axios");

const auth = async (req, res, next) => {
  try {
    const readable = req._readableState.reading;
    console.log(readable);
    console.log(req.headers);
    console.log(req.headers["sec-ch-ua"]);
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = req.headers["sec-ch-ua"] === "";
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      console.log(decodedData, "custom decoded");
      req.userId = decodedData?.id;
      //ovo za custom radi
    } else {
      const result = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data);
      console.log(result);
      req.userId = result?.sub;
    }
    console.log("DOBRO");
    next();
  } catch (error) {
    // console.log(req.headers);
    console.log("GRESKA");
    console.log(error);
  }
};

export default auth;
