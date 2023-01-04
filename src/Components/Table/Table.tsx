import React, { useContext } from "react";
import AppContext from "../../AppContext";
import TableSection from "./TableSection";

const Table = () => {
  const { request, response, selectedTab } = useContext(AppContext);
  const tableData = selectedTab === "response" ? response : request;

  const sectionMapping = {
    "URL Parameters": "urlParams",
    "Query Parameters": "queryParams",
    Headers: "headers",
    Body: "body",
  } as any;

  return (
    <table className="app-table">
      <thead className="table-header">
        <tr>
          {["name", "pii", "masking", "type"].map((value, index) => {
            return (
              <th key={index} className="table-header-name">
                {value.toUpperCase()}
              </th>
            );
          })}
        </tr>
      </thead>
      {tableData &&
        Object.keys(sectionMapping).map((sectionKey, index) => {
          const sectionData = tableData[sectionMapping[sectionKey]];
          return sectionData?.length ? (
            <TableSection
              key={index}
              sectionData={sectionData}
              sectionKey={sectionKey}
            />
          ) : null;
        })}
    </table>
  );
};

export default Table;
