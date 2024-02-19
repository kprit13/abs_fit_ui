import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DropdownContent = ({ submenuscontent, setIsDrawerOpen, handleClick }) => {
  return (
    <div className="dropdown_content">
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <Typography variant="h6" sx={{ color: "black" }}>
              {item.heading}
            </Typography>
            <ul>
              {item.submenu.map(({ label, href }, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setIsDrawerOpen && setIsDrawerOpen(false);
                    handleClick();
                  }}
                >
                  <Link to={href}>
                    <Typography variant="body2" sx={{ color: "black" }}>
                      {label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropdownContent;
