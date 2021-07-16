import React from "react";
export default function PreLoaded(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}