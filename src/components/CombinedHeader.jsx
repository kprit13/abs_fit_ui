import React from "react";
import AppHeader from "./AppHeader";
import Navigation from "./nav/Navigation";

function CombinedHeader() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        marginBottom: "128px",
      }}
    >
      <AppHeader />
      <Navigation />
    </div>
  );
}

export default CombinedHeader;
