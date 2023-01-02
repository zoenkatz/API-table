import React, { useContext, useState } from "react";
import { INodeAPIData } from "../../Assets/types";
import TableRow from "./TableRow";
import AppContext from "../../AppContext";
import Button from "../../Components/Button";

const TableSection = ({
  sectionData,
  sectionKey,
}: {
  sectionData: INodeAPIData[];
  sectionKey: string;
}) => {
  const { filters } = useContext(AppContext);
  const { query, isPIIOnly } = filters;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapsedIcon = (
    <i
      className={`fa-sharp fa-solid fa-caret-${isCollapsed ? "right" : "down"}`}
    />
  );
  return (
    <tbody className="table-section">
      <tr className="table-section-name">
        <th>
          <Button
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={collapsedIcon}
          />
          <span className="section-title">{sectionKey}</span>
        </th>
      </tr>
      {!isCollapsed
        ? sectionData &&
          sectionData
            .filter((data) => {
              const stringFilters =
                data.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                data.type.toLowerCase().indexOf(query.toLowerCase()) > -1;
              return isPIIOnly ? stringFilters && data.pii : stringFilters;
            })
            .map((dataItem, index) => {
              return (
                <TableRow
                  key={index}
                  {...dataItem}
                  sectionKey={sectionKey}
                  index={index}
                />
              );
            })
        : null}
    </tbody>
  );
};

export default TableSection;
