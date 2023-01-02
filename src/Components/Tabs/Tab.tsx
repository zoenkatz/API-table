import React from "react";

const Tab = ({
  value,
  isActive,
  onTabClick,
}: {
  value: string;
  isActive: boolean;
  onTabClick: (e: any) => void;
}) => {
  return (
    <div className={`app-tab ${isActive ? "active" : ""}`}>
      <button onClick={onTabClick}>{value}</button>
    </div>
  );
};

export default Tab;
