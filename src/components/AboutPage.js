import React from 'react';

const AboutPage = () => {
  return (
    <div className="container">
      <div className="jumbotron about">
        <h1>Welcome!</h1>
        <div className="about-intro">Recipe Qoo is a web application designed to help family cooks to store, manage, and share their recipes. </div>
        <div className="about-intro">More importantly, it is designed to help solve the ultimate question of life: <strong>What to eat?</strong> by picks a recipe for you.</div>
        <div className="about-intro">Recipe Qoo is currently at its v1 stage. The system randomly picks a recipe for you. </div>
        <div className="about-intro">Later on, more functions will be added including randomly select a recipe based on some criteria, such as ingredients.</div>
      </div>
    </div>

  )
};


export default AboutPage