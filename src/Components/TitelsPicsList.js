import React from "react";
// component
import TitelsPicsItem from "./TitelsPicsItem";
import picsNTitles from "../picsNTitles";

const PicsList = () => {
  return picsNTitles.map((x) => <TitelsPicsItem product={x} key={x.id} />);
};

export default PicsList;
