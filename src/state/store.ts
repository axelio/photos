import { createContext } from "react";
import { AppState, Action, ActionNames } from "./types";

export const initialState = {
    loadedItemsNumber: 3,
    scrollYPosition: 0
};

export const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case ActionNames.IncrementLoadedItems: {
            return {
                ...state,
                loadedItemsNumber: state.loadedItemsNumber + 3
            }
        }
        case ActionNames.SetScrollYPosition: {
            return {
                ...state,
                scrollYPosition: action.yScroll
            }
        }
        default:
            return state;
    }
}

export const StateContext = createContext<any>([initialState, reducer]);