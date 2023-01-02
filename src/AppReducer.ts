import { INodeAPIData } from "./Assets/types";

interface IAction {
  type: string;
  payload: any;
}

export default function AppReducer(state: any, action: IAction) {
  const actionPayload = action.payload;
  switch (action.type) {
    case "SET_APP_DATA":
      return {
        ...state,
        ...actionPayload.appData,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        query: actionPayload.query,
      };
    case "TOGGLE":
      const index = state[actionPayload.selectedTab][
        actionPayload.sectionKey
      ].findIndex((item: INodeAPIData) => item.name === actionPayload.name);
      return {
        ...state,
        [actionPayload.selectedTab]: {
          ...state[actionPayload.selectedTab],
          [actionPayload.sectionKey]: [
            ...state[actionPayload.selectedTab][actionPayload.sectionKey].slice(
              0,
              index
            ),
            actionPayload.newItem,
            ...state[actionPayload.selectedTab][actionPayload.sectionKey].slice(
              index + 1
            ),
          ],
        },
      };

    case "SET_FILTERS":
      return {
        ...state,
        filters: actionPayload.filters,
      };
    case "SET_SELECTED_TAB":
      return {
        ...state,
        selectedTab: actionPayload.selectedTab
      };

    default:
      return state;
  }
}
