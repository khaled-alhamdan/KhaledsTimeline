import styled from "styled-components";

export const Header = styled.header`
  // header is the tag
  padding: 2px 2px;
  text-align: center;
  color: white;
  background-color: #0b0a45;
`;

export const BackG = styled.body`
  min-height: 100%;
  /* background-color: #a6a4a4; */
  width: 100vw;
`;

export const ImagesAdjustments = styled.img`
  display: block;
  height: 200px;
  width: 225px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
  margin-bottom: 30px;
  box-shadow: 0px 0px 10px #4f5250;
  border: 4px solid white;
  border-radius: 40%;
`;

// export const LeftDiv = styled.div`
//   display: block;
//   margin-left: 20px;
//   border: 2px solid black;
// `;

export const MidP = styled.p`
  text-align: center;
  padding: 2px 2px;
  font-family: monospace;
  font-size: 25px;
  color: #0b0a45;
  font-weight: 400;
  &.diffCol {
    color: #ff85a2;
  }
`;

export const SpecialHF = styled.h1`
  font-family: cursive;
`;

export const Paragraphs = styled.p`
  padding: 4px 20px;
  text-align: center;
  color: #0b0a45;
  font-family: monospace;
  font-size: 15px;
`;
