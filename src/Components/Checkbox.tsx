import React from "react";

const Checkbox = ({
  isChecked,
  label,
  onChange,
}: {
  isChecked: boolean;
  label: string;
  onChange: () => void;
}) => {
  return (
    <div className="checkbox">
      <input type="checkbox" checked={isChecked} onChange={onChange}/>
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
