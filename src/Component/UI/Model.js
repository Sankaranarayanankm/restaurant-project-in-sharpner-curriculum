import React from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Model = (props) => {
  const portalElement=document.getElementById("overlays");
  return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop />,portalElement)}
    {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement )}
  </React.Fragment>;
};

export default Model;
