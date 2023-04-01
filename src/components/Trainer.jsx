import React from "react";
import Card from "../UI/Card";

const Trainer = ({ image, name, job, socials }) => {
  return (
    <Card className="trainer">
      <div className="tainer__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer__social">
        {socials.map(({ icon, link }, index) => {
          return (
            <a href={link} key={index} target="_blank" rel="noreferrer">
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
};

export default Trainer;
