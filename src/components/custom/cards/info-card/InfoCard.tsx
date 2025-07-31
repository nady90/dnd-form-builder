import React from "react";

export interface IInfoCard {
  title: string;
  category: string;
  name: string;
}

const InfoCard: React.FC<IInfoCard> = ({ title: title }) => {
  return (
    <div className="w-[191px] max-w-full">
      <div className="h-[119px] rounded-t-lg rounded-b-xs bg-linear-to-br from-blue-50 to-blue-500"></div>
      <div>
        <span>{title}</span>
        <span></span>
      </div>

      {title}
    </div>
  );
};

export default InfoCard;
