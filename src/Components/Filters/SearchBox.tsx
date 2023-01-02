import React from "react";

const SearchBox = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: any) => void;
}) => {
  return (
    <div className="search-box">
      <i className="fa fa-search" aria-hidden="true" />
      <input value={value} onChange={onChange} placeholder="Search"/>
    </div>
  );
};

export default SearchBox;
