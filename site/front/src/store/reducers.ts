import {combineReducers} from "redux";
import {DialogModalReducer} from "./DialogModal/reducers";

export const RootReducer = combineReducers({
  modal: DialogModalReducer
});

export type AppStore = ReturnType<typeof RootReducer>