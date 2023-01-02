import React, { useContext } from "react";
import { INodeAPIDataExtended } from "../../Assets/types";
import ToggleButton from "../ToggleButton";
import AppContext from "../../AppContext";

const TableRow = ({
  masked,
  name,
  pii,
  type,
  sectionKey,
  index,
}: INodeAPIDataExtended) => {
  const { dispatch, selectedTab } = useContext(AppContext);
  const handleToggle = (value: boolean, prop: string) => {
    const newItem = { masked, name, pii, type, [prop]: value };

    dispatch({
      type: "TOGGLE",
      payload: { newItem, selectedTab, sectionKey, name },
    });
  };
  return (
    <tr className="table-row">
      <td>{name}</td>
      <td>
        <ToggleButton
          onClick={() => handleToggle(!pii, "pii")}
          isPressed={pii}
          value="PII"
          className="pii"
        />
      </td>
      <td>
        <ToggleButton
          onClick={() => handleToggle(!masked, "masked")}
          isPressed={masked}
          value="MASKED"
          className="masked"
        />
      </td>
      <td>
          <ToggleButton isDisabled={true}
              isPressed={true}
              value={type}
              className="type"
          />
      </td>
    </tr>
  );
};

export default TableRow;
