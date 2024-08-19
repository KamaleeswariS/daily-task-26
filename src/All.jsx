import React from "react";
import Card from "./Card";

const All = ({ data }) => {
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
      <div className="badge text-bg-primary text-wrap" style="width: 6rem;">
      <h1 class="page-heading">All</h1>
  This text should wrap.
</div>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default All;