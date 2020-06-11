import React, { Component, useEffect, useState } from "react";
import { makeStyles, Divider } from "@material-ui/core";
import Header from "../layout/header";
import theme from "../../utils/theme";
import thank from "../../assets/thank.png";
import Loader from "../loader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: window.innerHeight,
  },
  body: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
  },
}));
export default function ThankYouPage() {
  let date = new Date();
  date.setDate(date.getDate() + 5);
  const [loading, setLoading] = useState(true);
  const classes=useStyles();
  useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 2000);
  });
  if (loading) {
    return <Loader />;
  }
  return (
    <div className={classes.root}>
      <div>
        <Header pos="relative" />
        <Divider />
      </div>
      <div className={classes.body}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: theme.palette.grey[1] }}>THANK YOU !</h2>
          <img src={thank} />
          <h2 style={{ color: theme.palette.royalBlue[0] }}>
            Your Application is complete.
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <h3>Review Process</h3>
            <p>
              We will review your information and provide the status of your
              Application via{" "}
            </p>
            <p>an email that will be sent to:</p>
            <p style={{ color: theme.palette.royalBlue[0] }}>abcd@gmail.com</p>
            <h3>Estimated Date of Response</h3>
            <p>
              We are usually able to provide you with a response within 5
              business days.
            </p>
            <p>Estimated response date is:</p>
            <h4>
              {date.toLocaleString("default", { month: "long" })}{" "}
              {date.getDate()}th {date.getFullYear()}
            </h4>
          </div>
        </div>
        {/* <p>Estimated response date is</p>    */}
      </div>
    </div>
  );
}