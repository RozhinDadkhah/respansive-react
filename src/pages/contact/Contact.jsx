import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "@react-icons/all-files/io/IoLogoWhatsapp";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        officia, consectetur repellendus omnis placeat numquam aperiam quis quia
        fuga reprehenderit iure maxime blanditiis non corrupti dolorem ullam
        recusandae mollitia exercitationem!
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:rozhindadkah76@gmail.com" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
