import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Info from "../../Info";
import Header from "../../layout/header";
import TextFieldMolecule from "../../textField/textField";
import Footer from "../../layout/footer";
import SideNavBar from "../../layout/sideNavBar";
import theme from "../../../utils/theme";
import { useNextHook } from "../../../App";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";
import { ELEMENT_STYLES } from "../../../utils/constants";

const useStyles = makeStyles((theme) => ({
  address: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    ...theme.typography.h6,
  },
  addresses: {
    marginTop: theme.spacing(5),
    ...theme.typography.h6,
  },
  text: {
    marginTop: theme.spacing(35),
    textAlign: "center",
    ...theme.typography.h1,
  },
  page: {
    width: "75%",

    position: "relative",
  },
  content: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
  },
  components: {
    display: "flex",
  },
  info: {
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing(20),
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: theme.spacing(10),
  },
}));
export default function AddressComponent(props) {
  const classes = useStyles();
  const { next, setNext } = useNextHook();
  const { elements, isValid } = useMultipleSkyflowElements(
    [
      { elementType: "address", options: { ...ELEMENT_STYLES } },
      { elementType: "street", options: { ...ELEMENT_STYLES } },
      { elementType: "zipCode", options: { ...ELEMENT_STYLES } },
      { elementType: "city", options: { ...ELEMENT_STYLES } },
      { elementType: "state", options: { ...ELEMENT_STYLES } },
    ],
    setNext
  );

  const list = {
    pInfo: { status: "done" },
    cInfo: { status: "current" },
    aInfo: { status: "pending" },
    fInfo: { status: "pending" },
  };
  const msg = (
    <p>
      PO Box,PMB,business,temporary,and non-US based addresses are not accepted
    </p>
  );
  const goBack = () => {
    props.history.push("/contactInformation");
  };
  const goToAcademicPage = () => {
    props.history.push("/academicInformation");
  };
  return (
    <div>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list} />
        <div className={classes.page}>
          <div className={classes.content}>
            <div>
              <h1 className={classes.text}>
                <b>My permanent address is</b>
              </h1>
            </div>
            <div className={classes.addresses}>
              <div className={classes.address}>
                <TextFieldMolecule
                  type="text"
                  width="550px"
                  name="PERMANENT ADDRESS"
                  placeholder="Permanent address"
                  ref={elements[0].elementRef}
                ></TextFieldMolecule>
                <TextFieldMolecule
                  type="text"
                  name="APT/STREET"
                  width="300px"
                  placeholder="Apartment / Street"
                  ref={elements[1].elementRef}
                ></TextFieldMolecule>
              </div>
              <div className={classes.address}>
                <TextFieldMolecule
                  type="number"
                  width="220px"
                  name="ZIP CODE"
                  width="230px"
                  placeholder="ZIP code"
                  ref={elements[2].elementRef}
                ></TextFieldMolecule>
                <TextFieldMolecule
                  type="text"
                  width="350px"
                  name="CITY"
                  placeholder="City"
                  ref={elements[3].elementRef}
                ></TextFieldMolecule>
                <TextFieldMolecule
                  type="text"
                  width="220px"
                  name="STATE"
                  placeholder="State"
                  ref={elements[4].elementRef}
                ></TextFieldMolecule>
              </div>
            </div>
            <div className={classes.info}>
              <Info information={msg} />
            </div>
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToAcademicPage} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
