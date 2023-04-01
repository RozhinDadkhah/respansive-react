import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./trainers.css";
import Trainer from "../../components/Trainer";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage} />
      <section className="trainers trainers__container">
        {trainers.map(({ id, image, name, job, socials }) => {
          return (
            <Trainer
              key={id}
              image={image}
              name={name}
              job={job}
              socials={[
                { icon: <BsInstagram />, link: socials[0] },
                { icon: <FaTwitter />, link: socials[1] },
                { icon: <BsFacebook />, link: socials[2] },
                { icon: <BsLinkedin />, link: socials[3] },
              ]}
            />
          );
        })}
      </section>
    </>
  );
};

export default Trainers;
