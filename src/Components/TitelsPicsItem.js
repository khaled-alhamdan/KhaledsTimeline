import React from "react";
// Component
import { MidP, Paragraphs, ImagesAdjustments } from "../styles.js";

const PicsItems = (props) => {
  return (
    <div>
      <div>
        <MidP>
          <b> {props.product.paragraph}</b>
        </MidP>
        <Paragraphs>
          <b>{props.product.name} </b>
        </Paragraphs>
      </div>
      <div>
        <ImagesAdjustments src={props.product.image} alt={props.product.name} />
      </div>
    </div>
  );
};

export default PicsItems;
