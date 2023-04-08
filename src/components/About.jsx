import React from "react";
import "./styles/about.css";
import image1 from "../assets/imgs/Mario and Adrian A.jpg";
import image2 from "../assets/imgs/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="left">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          voluptates dicta. Eum officiis reiciendis sequi deleniti laudantium
          sed aut aspernatur quas omnis fugiat dolore ea minus nihil repellendus
          soluta reprehenderit at totam beatae, consequuntur impedit non. Autem
          sed quibusdam neque assumenda odio pariatur quod quae! Iusto delectus
          nostrum expedita aliquam!
        </p>
      </div>
      <div className="right">
        <img src={image1} alt="Chefs" />
        <img src={image2} alt="Chefs" />
      </div>
    </section>
  );
};

export default About;
