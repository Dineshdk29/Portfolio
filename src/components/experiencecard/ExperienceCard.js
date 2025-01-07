import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ experience }) => {
  let { link, company, title, dateFrom, dateTo, info, stack, img } = experience;
  return (
   <h5>	FocusR Consultancy and Technologies (P) Ltd, Chennai
   Full Stack Developer
   March 2022– Present
   </h5>
  );
};

export default ExperienceCard;
