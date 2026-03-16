import React from "react";

const Apps = () => {
  return(
    <div className="container text-center p-5" style={{marginLeft:"150px"}}>
        <h2>Explore more of my work</h2>
        <h3>Visit my personal portfolio site today!</h3>
        <br/>
        <a
            href="https://parinikakath.onrender.com/"
            className="btn mt-3 mb-2"
            style={{
              borderRadius: "50px",
              padding: "10px 20px",
              fontSize: "18px",
            }}
          >
            ✨ Visit Profile ✨
          </a>
    </div>
  )
};

export default Apps;
