import React, { useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "../Header/Navbar/Navbar";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const auth = useSelector((state) => state.auth);

  const authClickHandler = (event) => {
    setClicked(!clicked);
    if (clicked) {
      event.preventDefault();
    }
  };

  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <span>sign in</span>;
      default:
        return <span>sign out</span>;
    }
  };

  return (
    <Navbar
      content={renderContent}
      linkPath={!!auth}
      clicked={authClickHandler.bind(null)}
      credits={auth && auth.credits ? auth.credits : null}
    />
  );
};

export default Header;
