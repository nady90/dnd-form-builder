import React from "react";

export interface IInfoCard {
  sampleTextProp: string;
}

const InfoCard: React.FC<IInfoCard> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default InfoCard;
