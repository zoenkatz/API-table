import React, { useContext } from "react";
import AppContext from "../AppContext";

const Header = () => {
  const { path, api, method } = useContext(AppContext);
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-method">{method.toUpperCase()}</div>
        <div className="header-path">{path}</div>
      </div>
      <div className="header-secondary">
        <div>{`All APIs > ${api} >`}</div>
        <div className="header-secondary-path">{path.substring(1)}</div>
      </div>
    </div>
  );
};

export default Header;
