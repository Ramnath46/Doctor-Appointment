import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          As dedicated medical professionals, we are committed to delivering
           compassionate, patient-centered care with integrity and excellence. 
           Our team of experienced doctors brings together knowledge, empathy, and innovation to 
           ensure every patient receives the highest standard of treatment. We believe in building trust,
            promoting wellness, and being a reliable partner in your health journey.

!
          </p>
          <p>We are all in 2025!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          We chose the MERN stack (MongoDB, Express.js, React.js, Node.js) because it allows 
          us to build a full-stack application using a single language—JavaScript—across both 
          frontend and backend, which improves efficiency and consistency. React provides a powerful 
          and responsive UI, while Node.js and Express.js offer scalable and high-performance server-side logic. 
          MongoDB's flexibility as a NoSQL database makes it easy to manage dynamic data structures. Overall,
           MERN is perfect for building modern, fast, and scalable web applications like ours.
          </p>
          <p>MERN</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
