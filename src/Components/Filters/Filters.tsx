import React, { useContext, useCallback, useState } from "react";
import SearchBox from "./SearchBox";
import Checkbox from "../Checkbox";
import Button from "../Button";
import AppContext from "../../AppContext";

const Filters = () => {
  const { dispatch, filters } = useContext(AppContext);
  const [query, setQuery] = useState("");
  const [isPIIOnly, setIsPIIOnly] = useState(false);
  const applyFilters = useCallback(() => {
    dispatch({
      type: "SET_FILTERS",
      payload: { filters: { query, isPIIOnly } },
    });
  }, [isPIIOnly, query, dispatch]);

  const clearFilters = () => {
    setQuery("");
    setIsPIIOnly(false);
    dispatch({
      type: "SET_FILTERS",
      payload: { filters: { query: "", isPIIOnly: false } },
    });
  };

  return (
    <div className="filters">
      <div className="filters-apply">
        <SearchBox
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
        />
        <Checkbox
          isChecked={isPIIOnly}
          label="Show PII Only"
          onChange={() => setIsPIIOnly(!isPIIOnly)}
        />
        <Button
          isDisabled={false}
          value="Apply"
          onClick={applyFilters}
          className="apply"
        />
      </div>
      <div className="filters-clear">
        <Button
          isDisabled={filters.query === "" && !filters.isPIIOnly}
          value="Reset Filters"
          onClick={clearFilters}
          className="reset"
        />
      </div>
    </div>
  );
};

export default Filters;
