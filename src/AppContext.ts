import { createContext } from "react";
import { INodeResReqExtended } from "./Assets/types";

interface IState {
  api: string;
  method: string;
  path: string;
  request: INodeResReqExtended;
  response: INodeResReqExtended;
  selectedTab: "request" | "response";
  filters: { query: string; isPIIOnly: boolean };
  dispatch: any;
}

const appState: IState = {
  api: "",
  method: "",
  path: "",
  request: { body: [], headers: [], queryParams: [], urlParams: [] },
  response: { body: [], headers: [], queryParams: [], urlParams: [] },
  selectedTab: "request",
  filters: { query: "", isPIIOnly: false },
  dispatch: () => {},
};

const AppContext = createContext<IState>({
  ...appState,
});

export default AppContext;
