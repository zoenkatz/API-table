import React, { useContext } from "react";
import Tab from "./Tab";
import AppContext from "../../AppContext";

const Tabs = ({ tabs }: { tabs: string[] }) => {
  const { selectedTab, dispatch } = useContext(AppContext);
  return (
    <div className="app-tabs">
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            value={tab}
            isActive={selectedTab === tab}
            onTabClick={() =>
              dispatch({
                type: "SET_SELECTED_TAB",
                payload: { selectedTab: tab },
              })
            }
          />
        );
      })}
    </div>
  );
};

export default Tabs;
