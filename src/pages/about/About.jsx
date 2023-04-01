import React from "react";
import Header from "../../components/Header";
import "./about.css";
import headerImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={headerImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi
        recusandae reiciendis unde voluptatem ut temporibus iste. Velit ipsum
        officiis assumenda eum. Deleniti dolores voluptates adipisci, eum
        quisquam aperiam nulla.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="story__image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              doloremque dolore itaque fuga, in dignissimos ex mollitia hic
              laudantium accusamus! Vitae debitis dolor cum iste ipsam minima ut
              inventore. Commodi.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              doloremque dolore itaque fuga, in dignissimos ex mollitia hic
              laudantium accusamus! Vitae debitis dolor cum iste ipsam minima ut
              inventore. Commodi.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision__image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission__image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              doloremque dolore itaque fuga, in dignissimos ex mollitia hic
              laudantium accusamus! Vitae debitis dolor cum iste ipsam minima ut
              inventore. Commodi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
