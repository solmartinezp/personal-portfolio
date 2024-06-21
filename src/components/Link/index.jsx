import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RouterLink } from "../../routing/RouterLink";

const Link = ({ to, children, colorEnd }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bubbles = document.getElementById("bubbles");

    if (bubbles) {
      bubbles.classList.add("show");

      const bubbleSecond = bubbles.querySelector("div:nth-child(2)");

      if (bubbleSecond instanceof HTMLDivElement) {
        bubbleSecond.style.background = colorEnd;
      }

      setTimeout(() => navigate(to), 1000);

      setTimeout(() => {
        bubbles.classList.remove("show");
        bubbles.classList.add("hide");
      }, 1200);

      setTimeout(() => bubbles.classList.remove("hide"), 2400);
    }
  };

  return (
    <RouterLink
      to={to}
      className={
        location.pathname.includes(children.toString().toLowerCase()) ? "active" : ""
      }
      onClick={handleClicked}
    >
      {children}
    </RouterLink>
  );
};

export { Link };
