import { initialState } from "./store";

export enum ActionNames {
    IncrementLoadedItems = 'IncrementLoadedItems',
    SetScrollYPosition = "SetScrollYPosition",
}

export type AppState = typeof initialState;

export type Action =
    | { type: ActionNames.IncrementLoadedItems }
    | { type: ActionNames.SetScrollYPosition, yScroll: number }