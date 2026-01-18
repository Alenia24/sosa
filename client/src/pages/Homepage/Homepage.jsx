import React from "react";
import "../Homepage/Homepage.css"
import "../../components/NavBarr/NavBarr.jsx"

function Homepage() {
  return (
    <>
      <div className="announcementBar">New Arrivals Just Dropped || <span><strong>Shop Now!!</strong></span></div>
      <NavBarr/>
    </>
  );
}

export default Homepage;
