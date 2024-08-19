import React from "react";
import Card from "./Card";

const Fullstack = ({ data }) => {
  const fullstack = data.filter((item) => item.head === "Full Stack");
  return (
    <div> <h1 class="page-heading">Full Stack Development</h1>
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
      {<h1>Fullstack</h1>}
        {fullstack.map((item, index) => {
          return (
            <>
              <Card item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Fullstack;