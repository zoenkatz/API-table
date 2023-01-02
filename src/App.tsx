import React, { useContext, useEffect, useReducer, useRef } from "react";
import APIdata from "./Assets/api-data.json";
import "./App.scss";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import Header from "./Components/Header";
import Tabs from "./Components/Tabs/Tabs";
import Filters from "./Components/Filters/Filters";
import Table from "./Components/Table/Table";

function App() {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState, undefined);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      dispatch({ type: "SET_APP_DATA", payload: { appData: APIdata } });
    }

    return () => {
      didMount.current = true;
    };
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <div className="App">
        <Header />
        <Tabs
          tabs={["request", "response"]}
        />
        <div className="app-filters-table">
        <Filters />
        <Table />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
